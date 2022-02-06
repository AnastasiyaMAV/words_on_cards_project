import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Card, Modal } from 'antd';
import { DataContextAddDell } from "../context/ContextAddDel";

const EditableContext = React.createContext(null);

const originData = require('./JSON/originData.json');

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class AddDelCellTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'english',
        dataIndex: 'english',
        width: '25%',
        editable: false,
        className: 'EditableTable',
      },
      {
        title: 'transcription',
        dataIndex: 'transcription',
        width: '25%',
        editable: false,
        className: 'EditableTable',
      },
      {
        title: 'russian',
        dataIndex: 'russian',
        width: '25%',
        editable: false,
        className: 'EditableTable',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        className: 'EditableTable',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: originData,
      count: originData.length,
      addEnglish: this.props.addEnglish,
      addTranscription: this.props.addTranscription,
      addRussian: this.props.addRussian,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: (count).toString(),
      english: this.state.addEnglish,
      transcription: this.state.addTranscription,
      russian: this.state.addRussian ,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
      addEnglish: '',
      addTranscription: '',
      addRussian: '',
    });

    Modal.info({
      title: `Word ${this.state.addEnglish} added!`,
      content: (
        <div>
          <p>Go to the end of the table!</p>
        </div>
      ),
      onOk() {},
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  };



  render() {
    const { addEnglish, addTranscription, addRussian } = this.state;
    const enabled =
            addEnglish &&
            addTranscription &&
            addRussian;
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    return (
      <div>
        <DataContextAddDell.Consumer>
        <Card hoverable className='cardAdd'>
          <Button
            disabled={!enabled}
            onClick={this.handleAdd}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Add a row
          </Button>
          <Input placeholder="english" name="addEnglish" 
            onChange={this.handleInputChange} value={this.state.addEnglish}/>
          <Input placeholder="transcription" name="addTranscription" 
            onChange={this.handleInputChange} value={this.state.addTranscription}/>
          <Input placeholder="russian" name="addRussian" 
            onChange={this.handleInputChange} value={this.state.addRussian}/>
        </Card>
        
        
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        </DataContextAddDell.Consumer>

      </div>
    );
  }
}

export default AddDelCellTable;