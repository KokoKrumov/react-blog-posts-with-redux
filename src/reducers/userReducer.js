export default (state = [], action) => {
    //в reducer най-често се ползва switch
    switch (action.type) {
        case 'FETCH_USERS':
            return [...state, action.payload];
        default:
            return state;
    }


    //проверяваме да ли action e от тип 'FETCH_POSTS'
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload
    // }
    //
    // //ако нямаме този тип, ще върнем предишният state
    // //защото нямаме право да връщаме undefined
    // return state;
}
