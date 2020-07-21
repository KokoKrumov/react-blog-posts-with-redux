import JSONPlaceholder from "../api/JSONPlaceholder";

export const fetchPosts = () => async dispatch => {
    const response = await JSONPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}
export const fetchUsers = (id) => async dispatch => {
    const response = await JSONPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
}
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
