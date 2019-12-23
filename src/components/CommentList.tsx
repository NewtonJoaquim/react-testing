import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component<any, any>{
   
    renderComments(){
        return this.props.comments.map((comment:any) => {
            return <li key={comment}>{comment}</li>
        })
    }
    
    render(){
        return(
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
  return {comments:state.comments}
};

export default connect(mapStateToProps)(CommentList);