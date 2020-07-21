import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UserList extends Component {
    
    componentDidMount() {
        this.props.fetchUsers(this.props.userId)
    }

    // renderList() {
    //     return this.props.posts.map((post) => {
    //         return (
    //             <div className='item' key={post.id}>
    //                 <i className='large middle aligned icon user'/>
    //                 <div className="content">
    //                     <div className="description">
    //                         <h2>
    //                             {post.title}
    //                         </h2>
    //                         <p>
    //                             {post.body}
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     })
    // }

    render() {
        return (
            <div className=''>
                {this.props.userId}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

//когато все още нямаме state, можем да сложим null
// export default connect(null,{fetchPosts})(UserList);
export default connect(mapStateToProps, {fetchUsers})(UserList);

