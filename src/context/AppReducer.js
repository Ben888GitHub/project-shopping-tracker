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
				)
			};
		case 'DELETE_PRODUCT':
			return {
				...state,
				products: state.products.filter(
					(product) => product.id !== action.payload
				)
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
			let whichSort;

			if (state.sortedValue === 'Ascending') {
				whichSort = ascending;
			} else if (state.sortedValue === 'Descending') {
				whichSort = descending;
			} else {
				whichSort = searchResults;
			}

			return {
				...state,
				searchResult: whichSort
			};

		default:
			return state;
	}
};
