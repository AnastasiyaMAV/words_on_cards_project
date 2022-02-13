import { Card, Input, Button, Modal } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from "../context/Context";

export default function AddDelWord() {
  const { dataWords } = useContext(DataContext);
  const { addData } = useContext(DataContext);
  const { removeData } = useContext(DataContext);

  const [english, setEnglish] = useState(null);
  const [transcription, setTranscription] = useState(null);
  const [russian, setRussian] = useState(null);
  const [data, setData] = useState({
    english: '',
    transcription: '',
    russian: '',
  });

  const [invisibleAdd, setInvisibleAdd] = useState(true);
  const [invisibleDel, setInvisibleDel] = useState(true);
  
  const [dataTable] = useState(dataWords);
  const [delWord, setDelWord] = useState(null);
  
  const [okAdd, setOkAdd] = useState(false);
  const [okDel, setOkDel] = useState(false);

  useEffect(() => {
    if(english && transcription && russian) {
      setInvisibleAdd(false);
    } else {
      setInvisibleAdd(true);
    }
    if(!delWord) {
      setInvisibleDel(true);
    }
  }, [english, transcription, russian, delWord]);

  const handleChangeEnglish = (e) => {
    setEnglish(e.target.value);
    setData({...data, [e.target.name]: e.target.value});
    setOkAdd(false);
  };

  const handleChangeTranscription = (e) => {
    setTranscription(e.target.value);
    setData({...data, [e.target.name]: e.target.value});
    setOkAdd(false);
  };

  const handleChangeRussian = (e) => {
    setRussian(e.target.value);
    setData({...data, [e.target.name]: e.target.value});
    setOkAdd(false);
  };

  const addWord = () => {
    if(!data) return;
    addData(data);
    setEnglish('');
    setTranscription('');
    setRussian('');
    setOkAdd(true);      
  }

  const handleChangeDel = (e) => {
    setDelWord(e.target.value);
    setInvisibleDel(false);
    setOkDel(false);
  };

  const removeWord = () => {
    let word = '';
    dataTable.filter(
      (remWord) => {
        if(remWord.english === delWord) {
          word = remWord;
          return word;
        } else {
          return null;
        }        
      }
    );
    if(word){
      setOkDel(true); 
      removeData(word);
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
  }

    return(
        <>
        <div className='containerAddDel'>
          <Card hoverable className='cardAdd'>            
            <div>Please, enter the word you want to add to the table:</div>

            <Input placeholder="english" name="english"
              onChange={handleChangeEnglish} value={english}/>
            <Input placeholder="transcription" name="transcription"
              onChange={handleChangeTranscription} value={transcription}/>
            <Input placeholder="russian" name="russian"
              onChange={handleChangeRussian} value={russian}/>

            <div className={
              okAdd ? 'addOkVisible' : 'addOkInvisible'
            }
            >Word in the table! Congratulations!</div>

            <Button  disabled={invisibleAdd} onClick={addWord}>Add</Button>
          </Card>

          <Card hoverable className='cardDel'>            
            <div>If you want to delete a word, then enter it below (in English format):</div>

            <Input placeholder="english" name="delWord"
              onChange={handleChangeDel} value={delWord}/>

            <div className={
              okDel ? 'delOkVisible' : 'delOkInvisible'
            }
            >The word has been removed from the table! Congratulations!</div>

            <Button disabled={invisibleDel} onClick={removeWord}>Del</Button>
          </Card>
        </div>
        </>
    );
}