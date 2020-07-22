import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UserHeader extends Component {

    componentDidMount() {
        // this.props.userId идва от props, които postList подава на userHeader
        //и извиква ф-ята fetchUsers, която да вземе users с тези id-ta
        this.props.fetchUsers(this.props.userId)
    }

    render() {
        //сега минаваме и търсим user, който трябва да покажем
        //това го махаме от тук, защото подава целият списък с users
        //и трябва да го въртим тук.
        //по-добрият вариант е да го изнесем в mapStateToProps
        // const user = this.props.users.find((user) =>
        //     user.id ===  this.props.userId
        // )
        // const user = this.props.user;
        const {user} = this.props;

        if (!user) {
            return null;

        }
        return (

            <div className=''>
                {user.name}
            </div>
        )
    }
}

//ownProps са референции на props от компонента, до които привидно нямаме достъп заради скоупа
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((user) =>
            user.id === ownProps.userId
        )
    }
}

//когато все още нямаме state, можем да сложим null
// export default connect(null,{fetchPosts})(UserList);
// fetchUsers action ни дава this.props.userId
// mapStateToProps reducers ни дават users списък
export default connect(mapStateToProps, {fetchUsers})(UserHeader);

