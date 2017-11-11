import React from 'react';

import './errormessage.scss';

export default class ErrorMessage extends React.Component{
    render(){
        return(
            <div className="error-message">
                <h1>Something Went Worng</h1>
                <h2>{this.props.error.toString()}</h2>
                <p>{this.props.errorInfo.componentStack}</p>
            </div>
        )
    }
}