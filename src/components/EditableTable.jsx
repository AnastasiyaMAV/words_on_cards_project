import React, { useState, useEffect } from 'react';
import { Table, Input, Popconfirm, Form, Typography, Spin } from 'antd';
import { observer, inject } from "mobx-react";
import ErrorServer from "./ErrorServer"

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

function EditableTable({ wordsStore }) {
  
  const [form] = Form.useForm();
  const [data, setData] = useState(wordsStore.massWords);
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    if(wordsStore.massWords.length){
      setData(wordsStore.massWords);  
    }
  }, [wordsStore.massWords]);

  useEffect(() => {
    let word = '';
    data.filter(
      (editWord) => {
        if(editWord.id === editingKey) {
          word = editWord;
        }
        return word;
      }
    );

    if(editingKey){
      wordsStore.update(editingKey, word);
    };
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
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
    wordsStore.loadData();// ?????????????????????? ?????????????? ?????????? ????????????????????
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
              onClick={() => save(record.id)}
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
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  if(wordsStore.error) return <ErrorServer />;
  if(wordsStore.isLoading) return <Spin tip="Loading..." className="spinLoading"/>

  return (
    <div className='containerTable'>
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
    </div>
  );
};

export default inject(["wordsStore"])(observer(EditableTable));