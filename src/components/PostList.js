import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        console.log(this.props.posts)
        return (
            <div>List</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

//когато все още нямаме state, можем да сложим null
// export default connect(null,{fetchPosts})(PostList);
export default connect(mapStateToProps, {fetchPosts})(PostList);

