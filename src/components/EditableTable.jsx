import React, { useState, useContext, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import { DataContext } from "../context/Context";

// const originData = require('./JSON/originData.json');

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
        <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const {dataWords} = useContext(DataContext);
  const [form] = Form.useForm();
  const [data, setData] = useState(dataWords);
  const [editingKey, setEditingKey] = useState('');
  const [point, setPoint] = useState(false);

  useEffect(() => {
    setPoint(true);
  }, [data]);

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      english: '',
      transcription: '',
      russian: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
        return index;
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    };
  };

  const updateWord = async(id) => {
    if(point){
      fetch(`/api/words/${id}/update`, {
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
        });
    }
  };

  const columns = [
    {
      title: 'english',
      dataIndex: 'english',
      width: '25%',
      editable: true,
      className: 'EditableTable',
    },
    {
      title: 'transcription',
      dataIndex: 'transcription',
      width: '25%',
      editable: true,
      className: 'EditableTable',
    },
    {
      title: 'russian',
      dataIndex: 'russian',
      width: '20%',
      editable: true,
      className: 'EditableTable',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      className: 'EditableTable',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => {
                save(record.id);

                updateWord(record.id);
              }}

              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Typography.Link>Cancel</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'transcription' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  
  
  return (
    <Form form={form} component={false}>
        <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row "
        pagination={{
          onChange: cancel,
        }}
      />    
    </Form>
  );
};

export default EditableTable;