import React from "react";
import { connect } from "react-redux";

import * as actions from 'actions';
interface ICommentBoxState{
    comment: string
}

class CommentBox extends React.Component<any, ICommentBoxState> {
    /**
     * NOTE It is also possible to use state without a constructor method. But doing so we no longe have access to props from parent components
     * Like this:
     * 
     * state = {
     *      comment:''
     * }
     */
    
    constructor(props: any){
        super(props);

        this.state = {
            comment:''
        }
    }

    handleCommentChange = (event:any) =>{
        this.setState({comment:event.target.value});
    }

    handleCommentSubmit = (event:any) =>{
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({comment:''});
    }

    render(){
        return(
        <form onSubmit={this.handleCommentSubmit}>
            <h4>Add a Comment</h4>
            <textarea onChange={this.handleCommentChange} value={this.state.comment}/>
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
        );
    }
};


export default connect(null, actions)(CommentBox);