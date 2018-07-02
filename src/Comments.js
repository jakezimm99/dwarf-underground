import React from 'react'

class Comments extends React.Component {
    render() {
        return(
        <a className="article-link" href="#" onClick = {this.handleClick}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
            <input className = "text-box" type = "text"></input>

        </a>
        )
    }

    handleClick = () => {
        <input className = "text-box" type = "text"></input>
        
    }
}

export default Comments