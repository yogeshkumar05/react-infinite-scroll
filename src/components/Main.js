import React, { Component } from 'react';
import Header from './Header';
import ArticlesContainer from './ArticlesContainer';
import Footer from './Footer';

export default function Main() 
{
    return (
    <div>
        <div className="header">
            <Header />
        </div>
        <hr />
        <div className="container">
            <ArticlesContainer />
        </div>
        <hr />
        <Footer />
    </div>)
}