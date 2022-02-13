import { Card, Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { observer, inject } from "mobx-react";

function AddDelWord({ wordsStore }) {
  const [english, setEnglish] = useState('');
  const [transcription, setTranscription] = useState('');
  const [russian, setRussian] = useState('');
  const [delWord, setDelWord] = useState('');

  const [data, setData] = useState({
    english: '',
    transcription: '',
    russian: '',
  });

  const [invisibleAdd, setInvisibleAdd] = useState(true);
  const [invisibleDel, setInvisibleDel] = useState(true);
  const [okAdd, setOkAdd] = useState(false);

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

  const onClAdd = () => {
    if (!data) return;
    wordsStore.addWord(data);
    setEnglish('');
    setTranscription('');
    setRussian('');  
    setOkAdd(true);
  }

  const handleChangeDel = (e) => {
    setDelWord(e.target.value);
    setInvisibleDel(false);
  };

  const onClRemove = () => {
    if (!delWord) return;
    wordsStore.removeWord(delWord);    
    setDelWord('');
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

            <Button disabled={invisibleAdd} onClick={onClAdd}>Add</Button>
          </Card>

          <Card hoverable className='cardDel'>            
            <div>If you want to delete a word, then enter it below (in English format):</div>

            <Input placeholder="english" name="delWord"
              onChange={handleChangeDel} value={delWord}/>

            <Button disabled={invisibleDel} onClick={onClRemove}>Del</Button>
          </Card>
        </div>
        </>
    );
}
export default inject(["wordsStore"])(observer(AddDelWord));