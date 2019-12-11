import React from "react";

interface ICommentBoxState{
    comment: string
}

export default class CommentBox extends React.Component<any, ICommentBoxState> {
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

        //TODO: Call an action creator and save the comment
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