import React, { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { FaRegCreditCard } from 'react-icons/fa';

function ShoppingCartFooter() {
	const { cart } = useContext(GlobalContext);

	// console.log(cart.length);
	return (
		<Navbar className="border" bg="light" variant="light">
			<Container>
				<Navbar.Brand style={{ fontWeight: '600' }}>
					Total Prices:{' '}
					{cart
						.map((cartItem) => cartItem.price * cartItem.quantity)
						.reduce((a, b) => a + b, 0)}
				</Navbar.Brand>
				{/* <Navbar.Brand style={{ fontWeight: '600' }}>
					To be purchased: 3
				</Navbar.Brand> */}
				{cart.length > 0 && (
					<Link
						style={{
							textDecoration: 'none',
							color: 'white'
						}}
						to="/payment"
						// component={PurchaseList}
					>
						<Button style={{ fontWeight: 'bold' }} variant="success">
							Proceed to Payment{' '}
							<FaRegCreditCard
								style={{ fontSize: 20, marginBottom: 3, marginLeft: 5 }}
							/>
						</Button>
					</Link>
				)}
			</Container>
		</Navbar>
	);
}

export default ShoppingCartFooter;
