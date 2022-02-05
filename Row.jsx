import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { DataContext } from "../../context/context";
import ErrorServer from "../error/errorServer";

export const Row = props => {
  // register — это функция, которую нужно подключить к каждому из полей ввода в качестве ссылки.
  // Функция register будет принимать значение, которое пользователь ввел в каждое поле, и проверять его. register также передаст каждое значение в функцию, которая будет вызвана при отправке формы
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // состояние, отражающее изменения внутри инпутов
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
  });
  const notValidWords =
    data.english === "" || data.transcription === "" || data.russian === "";

  const handleEditChange = isEdit => {
    if (!notValidWords) {
      console.log(data);
    }
    setEditMode(isEdit);
  };

  const handleChange = event =>
    setData({ ...data, [event.target.name]: event.target.value });

  // // обновление строк в таблице
  const { updateData } = useContext(DataContext);
  const [error, setError] = useState(false);

  // методы  изменения и удаления слов

  const updateWord = () => {
    fetch(`/api/words/${props.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };

  const deleteWord = () => {
    fetch(`/api/words/${props.id}/delete `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
      mode: "cors",
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        console.log(data);
        updateData();
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };

  if (error) return <ErrorServer />;

  return (
    <tr key={props.id}>
      <td>
        <input
          className={`input_editMode ${
            !data.english.length ? "inputError" : ""
          }`}
          type="text"
          name="english"
          value={data.english}
          disabled={!editMode}
          {...register("english", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            onChange: handleChange,
          })}
        />

        {
          <div className="error">
            {errors.english?.type === "required" &&
              "Заполните, пожалуйста, поле"}
            {errors.english?.type === "pattern" &&
              "Только буквы латинского алфавита"}
          </div>
        }
      </td>
      <td>
        <input
          className={`input_editMode ${
            !data.transcription.length ? "inputError" : ""
          }`}
          type="text"
          name="transcription"
          value={data.transcription}
          disabled={!editMode}
          {...register("transcription", {
            required: true,
            onChange: handleChange,
          })}
        />
        <div className="error">
          {errors.transcription?.type === "required" &&
            "Заполните, пожалуйста, поле"}
        </div>
      </td>
      <td>
        <input
          className={`input_editMode ${
            !data.russian.length ? "inputError" : ""
          }`}
          type="text"
          name="russian"
          value={data.russian}
          disabled={!editMode}
          {...register("russian", {
            required: true,
            pattern: /^[\u0400-\u04FF]+$/i,
            onChange: handleChange,
          })}
        />
        <div className="error">
          {errors.russian?.type === "required" && "Заполните, пожалуйста, поле"}
          {errors.russian?.type === "pattern" &&
            "Только буквы русского алфавита"}
        </div>
      </td>
      <td>
        {!editMode ? (
          <ButtonEdit
            className="btn_editMode"
            onClick={() => {
              handleEditChange(true);
              updateWord();
            }}
          />
        ) : (
          <ButtonSave
            className="btn_editMode"
            onClick={() => {
              handleEditChange(false);
              updateWord();
            }}
            disabled={Object.keys(errors).length}
          />
        )}
        <ButtonDelete onClick={deleteWord} />
      </td>
    </tr>
  );
};
