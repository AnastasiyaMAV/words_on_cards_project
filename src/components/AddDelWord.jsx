import { Card, Input, Button, Modal } from 'antd';
import React, { useState, useEffect, useContext } from 'react';

export default function AddDelWord() {
  const [english, setEnglish] = useState('');
  const [transcription, setTranscription] = useState('');
  const [russian, setRussian] = useState('');
  const [delWord, setDelWord] = useState('');
  useEffect(() => {
 
  }, []);

  const handleChangeEnglish = (e) => {

  };

  const handleChangeTranscription = (e) => {

  };

  const handleChangeRussian = (e) => {

  };

  const addWord = () => {

  }

  const handleChangeDel = (e) => {

  };

  const removeWord = () => {

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

            {/* <div className={
              okAdd ? 'addOkVisible' : 'addOkInvisible'
            }
            >Word in the table! Congratulations!</div> */}

            <Button  onClick={addWord}>Add</Button>
          </Card>

          <Card hoverable className='cardDel'>            
            <div>If you want to delete a word, then enter it below (in English format):</div>

            <Input placeholder="english" name="delWord"
              onChange={handleChangeDel} value={delWord}/>
{/* 
            <div className={
              okDel ? 'delOkVisible' : 'delOkInvisible'
            }
            >The word has been removed from the table! Congratulations!</div> */}

            <Button onClick={removeWord}>Del</Button>
          </Card>
        </div>
        </>
    );
}