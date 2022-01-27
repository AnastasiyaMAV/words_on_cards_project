import { Card, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useState, useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';

export default function CardWord(props) {

    const [pressed, setPressed] = useState(false);
    const [printCount, setPrintCount] = useState(0);
    const ref = useRef(null);

    const handleClickButton = (event) => {
        if (event.type === "mousedown") {
            setPressed(!pressed);            
        } else {
            setTimeout(throttle(() => setPressed(!pressed), 1000), 1000);
            setPrintCount(props.count(props.idword));
        }
    };

    useEffect(() => {
        ref.current.focus();
    });

    useEffect(() => {
        if(printCount){
            localStorage.setItem('printCount', printCount);
        }
    },[printCount]);


    return(
        <Content className='contentCard'>
            <div className="circles" title="Urheberschaft: https://github.com/scriptype">
                <div></div>
                <div></div>
                <div></div>
                <span></span>
            </div>

            <Card hoverable className='card'>
                <p>Выучено слов: 
                {
                    JSON.parse(localStorage.getItem('printCount'))
                }
                </p>
                <h1 className='cardEnglishWord'>{props.english}</h1>
                <h2 className='cardTranscription'>{props.transcription}</h2>
                                
                <hr/>
                <Button {...props} className='cardButton' ref={ref} 
                    onMouseDown={handleClickButton} onMouseUp={handleClickButton}>
                    {
                        pressed ? "Translation" : "Check"
                    }
                </Button>
                <h1 
                    className={
                        pressed ? 'cardRussianhWordReverse' : 'cardRussianhWordInitial'
                    }>{props.russian}</h1>
            </Card>
        </Content>
    );
}