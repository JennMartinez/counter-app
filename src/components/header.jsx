import React, { Component } from 'react';
import Header from "./header.css";

const Header = props => (
    <h1 className="header">
        <div className="title">Title{props.title}</div>
    </h1>
);
    

export default Header;