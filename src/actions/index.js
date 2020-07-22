import JSONPlaceholder from "../api/JSONPlaceholder";
import _ from 'lodash'

export const fetchPosts = () => async dispatch => {
    const response = await JSONPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}
// ----> тва е правилно, но за да правим request 1 pyt za 1 user, ще ползваме lodash
//(сега правим 10 рекуеста за всеки user (Или нещо таквоа))
// export const fetchUsers = (id) => async dispatch => {
//     const response = await JSONPlaceholder.get(`/users/${id}`);
//     dispatch({
//         type: 'FETCH_USERS',
//         payload: response.data
//     })
// }

export const fetchUsers = id => dispatch => {
    _fetchUser(id, dispatch)
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await JSONPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
})



//
// export const fetchPosts = () => {
//     return async function (dispatch) {
//         const response = await JSONPlaceholder.get('/posts');
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         })
//     }
// }
