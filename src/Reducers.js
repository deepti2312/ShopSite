import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        product_data: [
            {
                id: 1,
                name: 'Morning road',
                price: 19.99,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/16901862/pexels-photo-16901862/free-photo-of-people-walking-on-street-in-city-downtown.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 2,
                name: 'Lights  ',
                price: 29.99,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/6116145/pexels-photo-6116145.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 3,
                name: 'Camera',
                price: 15.49,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/18760204/pexels-photo-18760204/free-photo-of-photo-of-a-vintage-camera.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 4,
                name: 'Dark Night',
                price: 34.99,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/16013193/pexels-photo-16013193/free-photo-of-al-aqsa-mosque-in-jerusalem-at-night.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 5,
                name: 'Your Shaddow',
                price: 49.99,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/3876401/pexels-photo-3876401.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 6,
                name: 'A Moon',
                price: 22.99,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/5707718/pexels-photo-5707718.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 7,
                name: 'A Girl',
                price: 18.75,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/12204296/pexels-photo-12204296.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 8,
                name: 'You Alive',
                price: 27.99,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/3871773/pexels-photo-3871773.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 9,
                name: 'Tea Time',
                price: 39.99,
                description: 'DWhich method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/5591671/pexels-photo-5591671.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
            {
                id: 10,
                name: 'A Book',
                price: 45.00,
                description: 'Which method you choose is entirely up to you, and the specifics of your design.',
                image: 'https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg?auto=compress&cs=tinysrgb&w=210',
            },
        ],
        cart: [],
        favorites: [],
        users : [
            {
              username: "@deepti",
              password: "1111",
              name: "deepti Vishwakarma",
              email:"deepti@gmail.com",
              address:"krishnganj ward, sagar"
            },
            {
              username: "@avani",
              password: "1111",
              name: "avani jain",
              email:"avani@gmail.com",
              address:"Gopalganj, sagar"
            },
            {
              username: "@apurva",
              password: "1111",
              name: "apurva agrawal",
              email:"apurva@gmail.com",
              address:"shreeram colony, sagar"
            },
            {
              username: "@shruti",
              password: "1111",
              name: "shruti chouhan",
              email:"shruti@gmail.com",
              address:"mahakal lok, Ujjain"
            }
          ]
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
