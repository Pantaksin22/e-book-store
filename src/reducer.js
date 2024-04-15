const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket:[...state.basket,action.item],
        };
        case"Remove_FROM_BASKET":
         const index = state.basket,action.item],
         basket: [...state.basket,action.item].
    };

    }
}