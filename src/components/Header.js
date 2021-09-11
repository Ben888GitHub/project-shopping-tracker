import React from 'react';
import AddShopping from './AddShopping';
import FilterShopping from './FilterShopping';

function Header() {
	return (
		<>
			<FilterShopping />
			<AddShopping />
		</>
	);
}

export default Header;
