import { Card, Button } from 'antd';
import React, { useState } from 'react';

export default function CardWord(props) {

    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    };
    
    return(

        <Card hoverable className='cardStyle'>
            <h1 className='cardEnglishWord'>{props.english}</h1>
            <h2 className='cardTranscription'>{props.transcription}</h2>
            <hr/>

            <Button {...props} className='cardButton' onClick={handleChange}>{pressed ? "Translation" : "Check"}</Button>
            <h1 className={pressed ? 'cardRussianhWordReverse' : 'cardRussianhWordInitial'}>{props.russian}</h1>
        </Card>

    );
}