import { makeAutoObservable, runInAction } from "mobx";
import { Modal } from "antd";

export default class WordsStore {
  massWords = [];
  isLoading = false;
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadData = async () => {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    const data = await fetch("/api/words").then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong ...");
      }
    });

    runInAction(() => {
      this.massWords = data;
      this.isLoading = false;
    });
  };

  update = async (editingKey, word) => {
    await fetch(`/api/words/${editingKey}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(word),
    }).then((response) => {
      if (response.ok) {
        this.loadData();
      } else {
        throw new Error("Something went wrong ...");
      }
    });
  };

  addWord = (dataAdd) => {
    fetch(`/api/words/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataAdd),
    })
      .then((data) => {
        console.log(data);
        this.loadData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  removeWord = (delWord) => {
    let word = "";
    this.massWords.filter((remWord) => {
      if (remWord.english === delWord) {
        word = remWord;
        return word;
      } else {
        return null;
      }
    });
    if (word) {
      fetch(`/api/words/${word.id}/delete `, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(word),
        mode: "cors",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then((data) => {
          console.log(data);
          this.loadData();
          Modal.info({
            title: delWord,
            content: (
              <div>
                <p>
                  The word has been removed from the table! Congratulations!
                </p>
              </div>
            ),
            onOk() {},
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Modal.info({
        title: delWord,
        content: (
          <div>
            <p>There is no such word in the database!</p>
          </div>
        ),
        onOk() {},
      });
    }
  };
}
