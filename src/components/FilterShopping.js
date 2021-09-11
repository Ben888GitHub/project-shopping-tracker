import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Dropdown } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { FaShoppingBag } from 'react-icons/fa';

function FilterShopping() {
	const [initialValue, setInitialValue] = useState('All');

	const { filterBySearchOrAscOrDesc } = useContext(GlobalContext);

	useEffect(() => {
		filterBySearchOrAscOrDesc(initialValue);
	}, [initialValue]);

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand style={{ fontWeight: 'bold' }}>
					Shopping List{' '}
					<FaShoppingBag style={{ marginLeft: 3, marginBottom: 4 }} />
				</Navbar.Brand>
				<Dropdown>
					<Dropdown.Toggle variant="secondary" id="dropdown-basic">
						{initialValue}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={() => {
								setInitialValue('All');
								// filterShopping('All');
							}}
						>
							All
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setInitialValue('Ascending');
								// filterShopping('Ascending');
							}}
						>
							Ascending
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setInitialValue('Descending');
								// filterShopping('Descending');
							}}
						>
							Descending
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setInitialValue('HighToLow');
								// filterShopping('Descending');
							}}
						>
							Price: High to Low
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setInitialValue('LowToHigh');
								// filterShopping('Descending');
							}}
						>
							Price: Low to High
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Container>
		</Navbar>
	);
}

export default FilterShopping;
