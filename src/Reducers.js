import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        product_data: [
            {
                id: 1,
                name: 'Product A',
                price: 19.99,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/16901862/pexels-photo-16901862/free-photo-of-people-walking-on-street-in-city-downtown.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 2,
                name: 'Product B',
                price: 29.99,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/6116145/pexels-photo-6116145.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 3,
                name: 'Product C',
                price: 15.49,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/18760204/pexels-photo-18760204/free-photo-of-photo-of-a-vintage-camera.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 4,
                name: 'Product D',
                price: 34.99,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/16013193/pexels-photo-16013193/free-photo-of-al-aqsa-mosque-in-jerusalem-at-night.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 5,
                name: 'Product E',
                price: 49.99,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/3876401/pexels-photo-3876401.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 6,
                name: 'Product F',
                price: 22.99,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/5707718/pexels-photo-5707718.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 7,
                name: 'Product G',
                price: 18.75,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/12204296/pexels-photo-12204296.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 8,
                name: 'Product H',
                price: 27.99,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/3871773/pexels-photo-3871773.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 9,
                name: 'Product I',
                price: 39.99,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/5591671/pexels-photo-5591671.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
            {
                id: 10,
                name: 'Product J',
                price: 45.00,
                description: 'Description of the Product',
                image: 'https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg?auto=compress&cs=tinysrgb&w=230',
            },
        ],
        cart: [],
        favorites: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        markFavourite: (state, action) => {
            state.favorites.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)

        },
        unmarkFavourite: (state, action) => {
            state.favorites = state.favorites.filter((item) => item.id !== action.payload.id)
        }
    }
})


export const { addToCart, markFavourite, removeFromCart, unmarkFavourite } = shopSlice.actions;
export default shopSlice.reducer;