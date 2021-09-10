import React, { useContext, useState, useEffect } from 'react';
import {
	Container,
	Card,
	Form,
	Button,
	Navbar,
	ListGroup,
	Table
} from 'react-bootstrap';
import {
	FaRegArrowAltCircleLeft,
	FaMinusSquare,
	FaPlusSquare,
	FaRegCreditCard,
	FaTrashAlt
} from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';
import ShoppingCartFooter from './ShoppingCartFooter';

function ShoppingCart() {
	const { cart, addOrSubtractQty, removeFromCart, deleteSelectedCartItems } =
		useContext(GlobalContext);
	const [selectedItems, setSelectedItems] = useState([]);
	const [defaultChecked, setDefaultChecked] = useState(false);

	let history = useHistory();

	const subtract = 'subtract';
	const add = 'add';

	console.log(cart);

	console.log(selectedItems);

	return (
		<Container>
			<br />
			<div className="border">
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand style={{ fontWeight: 'bold' }}>
							<FaRegArrowAltCircleLeft
								onClick={() => history.goBack()}
								style={{
									marginRight: 10,
									fontSize: 24,
									marginBottom: 3,
									cursor: 'pointer'
								}}
							/>
							Cart Items
						</Navbar.Brand>
						{selectedItems.length > 0 && (
							<Button
								onClick={() => {
									deleteSelectedCartItems(selectedItems);
									setSelectedItems([]);
								}}
								variant="danger"
								style={{ fontWeight: 'bold' }}
							>
								Delete Selected
							</Button>
						)}
					</Container>
				</Navbar>
				<Card>
					<Table borderless={true}>
						<thead style={{ background: '#E5E7EB', borderStyle: 'none' }}>
							<tr>
								<th></th>
								<th style={{ fontSize: 22 }}>Product</th>
								<th style={{ fontSize: 22 }}>Price</th>
								<th style={{ fontSize: 22 }}>Quantity</th>
								<th style={{ fontSize: 22 }}>Total</th>
								<th></th>
							</tr>
						</thead>
						{/* <br /> */}
						<tbody>
							{cart.length === 0 ? (
								<>
									<br />
									<h5
										style={{ alignItems: 'center', justifyContent: 'center' }}
									>
										No Added Items.
									</h5>
								</>
							) : (
								cart.map((item, idx) => (
									<tr key={idx}>
										<td style={{ fontSize: 20 }}>
											<Form.Check
												onClick={(e) => {
													e.target.checked === true
														? setSelectedItems([...selectedItems, item])
														: setSelectedItems(
																selectedItems.filter(
																	(selectedItem) => selectedItem.id !== item.id
																)
														  );
												}}
											/>
										</td>
										<td style={{ fontSize: 20 }}>{item.name}</td>
										<td style={{ fontSize: 20 }}>${item.price}</td>
										<td style={{ fontSize: 20 }}>
											<FaMinusSquare
												style={{
													marginRight: 3,
													color: '#BB2D3B',
													cursor: 'pointer'
												}}
												onClick={() => {
													console.log(subtract, item.name);
													addOrSubtractQty(item, subtract);
												}}
											/>

											<input
												style={{
													textAlign: 'center',
													width: 80,
													alignItems: 'center',
													justifyContent: 'center'
												}}
												type="number"
												min="1"
												value={parseInt(item.quantity)}
												onChange={(e) => {
													if (e.target.value < 1) {
														e.preventDefault();
													} else {
														addOrSubtractQty(item, e.target.value);
													}
												}}
											/>
											<FaPlusSquare
												style={{
													marginLeft: 3,
													color: '#167347',
													cursor: 'pointer'
												}}
												onClick={() => {
													console.log(add, item.name);
													addOrSubtractQty(item, add);
												}}
											/>
										</td>
										<td style={{ fontSize: 20 }}>
											${item.price * item.quantity}
										</td>
										<td style={{ fontSize: 20, cursor: 'pointer' }}>
											<FaTrashAlt
												onClick={() => removeFromCart(item)}
												style={{ color: '#BB2D3B' }}
											/>
										</td>
									</tr>
								))
							)}
						</tbody>
					</Table>
				</Card>
				<ShoppingCartFooter />
			</div>
		</Container>
	);
}

export default ShoppingCart;
