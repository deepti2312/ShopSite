export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        data: product
    };
};

export const markFavourite = (id) => {
    return {
        type: "MARK_FAVOURITE",
        id: id
    };
};