import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';

const originData = [
  {
    key: 1,
    english: 'butterfly',
    transcription: '[ ˈbʌtəflaɪ ]',
    russian: 'бабочка',
  },{
    key: 2,
    english: 'hedgehog',
    transcription: '[ˈhedʒhɔːɡ]',
    russian: 'ёжик',
  },{
    key: 3,
    english: 'apple',
    transcription: '[ˈæpl]',
    russian: 'яблоко',
  },{
    key: 4,
    english: 'pear',
    transcription: '[peə]',
    russian: 'груша',
  },{
    key: 5,
    english: 'carrot',
    transcription: '[ˈkærət]',
    russian: 'морковка',
  },{
    key: 6,
    english: 'plum',
    transcription: '[plʌm]',
    russian: 'слива',
  },{
    key: 7,
    english: 'unicorn',
    transcription: '[ˈjuːnɪkɔːrn]',
    russian: 'единорог',
  },{
    key: 8,
    english: 'cat',
    transcription: '[kæt]',
    russian: 'кот',
  },{
    key: 9,
    english: 'butterfly',
    transcription: '[ ˈbʌtəflaɪ ]',
    russian: 'бабочка',
  },{
    key: 10,
    english: 'hedgehog',
    transcription: '[ˈhedʒhɔːɡ]',
    russian: 'ёжик',
  },{
    key: 11,
    english: 'apple',
    transcription: '[ˈæpl]',
    russian: 'яблоко',
  },{
    key: 12,
    english: 'pear',
    transcription: '[peə]',
    russian: 'груша',
  },{
    key: 13,
    english: 'carrot',
    transcription: '[ˈkærət]',
    russian: 'морковка',
  },{
    key: 14,
    english: 'plum',
    transcription: '[plʌm]',
    russian: 'слива',
  },{
    key: 15,
    english: 'unicorn',
    transcription: '[ˈjuːnɪkɔːrn]',
    russian: 'единорог',
  },{
    key: 16,
    english: 'cat',
    transcription: '[kæt]',
    russian: 'кот',
  },
];

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
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
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
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function EditableTable() {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      english: '',
      transcription: '',
      russian: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

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
  };

  const columns = [
    {
      title: 'english',
      dataIndex: 'english',
      width: '25%',
      editable: true,
    },
    {
      title: 'transcription',
      dataIndex: 'transcription',
      width: '25%',
      editable: true,
    },
    {
      title: 'russian',
      dataIndex: 'russian',
      width: '20%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
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
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default EditableTable;