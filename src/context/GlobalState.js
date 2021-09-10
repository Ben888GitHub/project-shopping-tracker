import React, { createContext, useReducer } from 'react';

import { appReducer } from './AppReducer';

import uuid from 'react-uuid';

// Create initialState
const initialState = {
	products: [
		{
			id: uuid(),
			name: 'Leather Jacket',
			image:
				'https://www.kindpng.com/picc/m/134-1348553_biker-jacket-png-image-download-mens-brown-leather.png',
			price: 10,
			quantity: 1
		},
		{
			id: uuid(),
			name: 'Honda CRV',
			image:
				'https://www.motorbiscuit.com/wp-content/uploads/2020/02/2020-CR-V-1024x650.jpg',
			price: 20,
			quantity: 1
		},
		{
			id: uuid(),
			name: 'Soviet Vodka',
			image: 'https://pbs.twimg.com/media/EMiOsTlXUAIioT_.jpg',
			price: 30,
			quantity: 1
		}
	],
	searchResult: [],
	sortedValue: '',
	searchedValue: '',
	cart: []
};

// Create a new context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	// Create functions to dispatch actions to reducers
	const [state, dispatch] = useReducer(appReducer, initialState);

	// Function to delete product
	const deleteProduct = (value) => {
		dispatch({ type: 'DELETE_PRODUCT', payload: value.id });
	};

	// Function to add product
	const addProduct = (value) => {
		dispatch({ type: 'ADD_PRODUCT', payload: value });
	};

	// Function to edit product
	const editProduct = (value) => {
		console.log(value);
		dispatch({ type: 'UPDATE_PRODUCT', payload: value });
	};

	// Function to Search Product
	const searchProduct = (value) => {
		console.log(value);
		state.searchedValue = value;
		dispatch({ type: 'SEARCH_PRODUCT', payload: state.searchedValue });
	};

	// Function to Sort Ascending, Descending, High to Low, Low to High
	const filterBySearchOrAscOrDesc = (value) => {
		console.log(value);
		state.sortedValue = value;
		console.log(state.sortedValue);
		dispatch({ type: 'SEARCH_PRODUCT', payload: state.searchedValue });
	};

	const addToCart = (value) => {
		console.log(value);
		dispatch({ type: 'ADD_TO_CART', payload: value });
	};

	const addOrSubtractQty = (value, e) => {
		console.log(value);
		dispatch({ type: 'ADD_SUBTRACT_QTY', payload: value, secondPayload: e });
	};

	const removeFromCart = (value) => {
		console.log(value);
		dispatch({ type: 'REMOVE_FROM_CART', payload: value });
	};

	const deleteSelectedCartItems = (value) => {
		console.log(value);
		dispatch({ type: 'DELETE_SELECTED', payload: value });
	};

	return (
		// Allow sub components to consume the data
		<GlobalContext.Provider
			value={{
				products: state.products,
				deleteProduct,
				addProduct,
				editProduct,
				searchProduct,
				searchResult: state.searchResult,
				filterBySearchOrAscOrDesc,
				addToCart,
				cart: state.cart,
				addOrSubtractQty,
				removeFromCart,
				deleteSelectedCartItems
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
