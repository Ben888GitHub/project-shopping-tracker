import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

function SearchShopping() {
	const { searchProduct, products, filterBySearchOrAscOrDesc } =
		useContext(GlobalContext);
	const [searchedValue, setSearchedValue] = useState('');

	const handleChange = (e) => {
		setSearchedValue(e.target.value);
	};
	useEffect(() => {
		searchProduct(searchedValue);
	}, [products, searchedValue]);
	// todo, products may be removed if there's an error

	return (
		<Form.Control
			size="sm"
			style={{ width: '30%' }}
			// type="text"
			placeholder="Search"
			value={searchedValue}
			onChange={(e) => handleChange(e)}
		/>
	);
}

export default SearchShopping;
