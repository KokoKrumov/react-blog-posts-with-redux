import JSONPlaceholder from "../api/JSONPlaceholder";

export const fetchPosts = () => async dispatch => {
    const response = await JSONPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response
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
