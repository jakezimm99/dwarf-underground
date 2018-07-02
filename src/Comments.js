import React from 'react'

class Comments extends React.Component {
    constructor() {
        super()
        this.state = {
            clicked : null
        }
    }
    
    handleClick = () => {
        
        this.setState({clicked : <input className = "text-box" type = "text"></input>});
        

    }
    render() {
        return(
        <a className="article-link">
            <i className="fa fa-comments-o"></i>
            <button className="article-link-text" onClick = {this.handleClick}>Comments</button>
            {this.state.clicked}
        </a>
        )
    }
}

export default Comments