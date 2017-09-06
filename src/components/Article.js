import React, { Component } from 'react';

export default function Article(props) 
{
    
    return (
        <div className="article">
            <li >
                <h3>{props.data.id + 1}. {props.data.title}</h3>
                <p> {props.data.previewtext}</p>
                <p><em>{props.data.timeStamp}</em></p>
            </li>
        </div>)  
}