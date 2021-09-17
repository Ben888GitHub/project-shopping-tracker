export const appReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {
				...state,
				products: [...state.products, action.payload]
			};
		case 'UPDATE_PRODUCT':
			const updatedProduct = action.payload;
			console.log(state.products);
			console.log(updatedProduct);
			return {
				...state,
				products: state.products.map((product) =>
					product.id === updatedProduct.id ? updatedProduct : product
				),
				cart: state.cart.map((cartItem) =>
					cartItem.id === updatedProduct.id
						? { ...updatedProduct, quantity: cartItem.quantity }
						: cartItem
				)
			};
		case 'DELETE_PRODUCT':
			return {
				...state,
				products: state.products.filter(
					(product) => product.id !== action.payload
				),
				cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
			};
		case 'SEARCH_PRODUCT':
			console.log(action.payload);
			console.log(state.sortedValue);
			const searchResults = state.products.filter((product) =>
				product.name.toLowerCase().includes(action.payload)
			);
			const ascending = [...searchResults].sort((a, b) => {
				if (a.name.toUpperCase() < b.name.toUpperCase()) {
					return -1;
				} else if (a.name.toUpperCase() > b.name.toUpperCase()) {
					return 1;
				}
				return 0;
			});

			const descending = [...searchResults].sort((a, b) => {
				if (a.name.toUpperCase() < b.name.toUpperCase()) {
					return 1;
				} else if (a.name.toUpperCase() > b.name.toUpperCase()) {
					return -1;
				}
				return 0;
			});

			const highToLow = [...searchResults].sort((a, b) => b.price - a.price);

			const lowToHigh = [...searchResults].sort((a, b) => a.price - b.price);

			let whichSort;

			if (state.sortedValue === 'Ascending') {
				whichSort = ascending;
			} else if (state.sortedValue === 'Descending') {
				whichSort = descending;
			} else if (state.sortedValue === 'HighToLow') {
				whichSort = highToLow;
			} else if (state.sortedValue === 'LowToHigh') {
				whichSort = lowToHigh;
			} else {
				whichSort = searchResults;
			}

			return {
				...state,
				searchResult: whichSort
			};

		case 'ADD_TO_CART':
			// console.log(action.payload.name);
			let updateCart;
			if (
				state.cart.filter((cartItem) => cartItem.id === action.payload.id)
					.length > 0
			) {
				console.log(action.payload.name);
				updateCart = state.cart.map((cartItem) =>
					cartItem.id === action.payload.id
						? {
								...cartItem,
								quantity: parseInt(cartItem.quantity) + 1
						  }
						: cartItem
				);
			} else {
				updateCart = [...state.cart, action.payload];
			}
			return {
				...state,
				cart: updateCart
			};
		case 'ADD_SUBTRACT_QTY':
			let updatedCart;
			if (action.secondPayload === 'add') {
				updatedCart = state.cart.map((cartItem) =>
					cartItem.id === action.payload.id
						? {
								...cartItem,
								quantity: parseInt(cartItem.quantity) + 1
						  }
						: cartItem
				);
			} else if (action.secondPayload === 'subtract') {
				updatedCart = state.cart.map((cartItem) =>
					cartItem.id === action.payload.id
						? {
								...cartItem,
								quantity:
									parseInt(cartItem.quantity) <= 1
										? parseInt(cartItem.quantity)
										: parseInt(cartItem.quantity) - 1
						  }
						: cartItem
				);
			} else {
				updatedCart = state.cart.map((cartItem) =>
					cartItem.id === action.payload.id
						? {
								...cartItem,
								quantity: action.secondPayload
						  }
						: cartItem
				);
			}
			return {
				...state,
				cart: updatedCart
			};
		case 'REMOVE_FROM_CART': {
			const selectedItems = state.cart.filter(
				(cartItem) => cartItem.id === action.payload.id
			);
			const removeSelected = state.cart.filter(
				(cartItem) => !selectedItems.includes(cartItem)
			);

			return {
				...state,
				cart: removeSelected
			};
		}
		case 'DELETE_SELECTED': {
			const selectedCartItems = action.payload;

			const deleteSelected = state.cart.filter(
				(cartItem) => !selectedCartItems.includes(cartItem)
			);
			return {
				...state,
				cart: deleteSelected
			};
		}
		default:
			return state;
	}
};
