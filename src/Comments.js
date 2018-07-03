import React from 'react'

class Comments extends React.Component {
    constructor() {
        super()
        this.state = {
            clicked : null,
            comments : null
        }
    }
    
    handleClick = () => {
        
        this.setState({clicked : <form><input className = "text-box" 
                                        type = "text" 
                                        placeholder = "Leave a comment..," 
                                        autoFocus>
                                        </input>
                                        <input type = "Submit" value = "Post Comment" 
                                        onClick =  {false}
                                        onSubmit = {this.handleSubmit()} >
                                        </input>
                                    </form>});

    }

    handleSubmit = () => {


    }
    render() {
        return(
        <a className="article-link" onClick = {this.handleClick} >
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text" >Comments</span>
            {this.state.clicked}
            
        </a>
        )
    }
}

export default Comments