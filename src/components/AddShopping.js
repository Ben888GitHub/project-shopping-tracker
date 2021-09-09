import React, { useState, useEffect, useContext } from 'react';
import {
	Navbar,
	Container,
	InputGroup,
	Form,
	Modal,
	Button,
	FormControl
} from 'react-bootstrap';
import SearchShopping from './SearchShopping';
import { FaRegPlusSquare } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';
import uuid from 'react-uuid';

function AddShopping() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar bg="dark" variant="dark">
			<Container style={{ marginBottom: 12 }}>
				<InputGroup style={{ width: '35%' }}>
					<Navbar.Brand style={{ marginLeft: 5 }}>Add New Product</Navbar.Brand>
					<FaRegPlusSquare
						style={{
							color: 'white',

							fontSize: 27,
							cursor: 'pointer',
							marginTop: 6
						}}
						onClick={() => {
							handleShow();
						}}
					/>
				</InputGroup>
				<SearchShopping />
			</Container>
			<AddModal show={show} handleClose={handleClose} />
		</Navbar>
	);
}

const AddModal = ({ show, handleClose }) => {
	const { addProduct } = useContext(GlobalContext);

	const [productName, setProductName] = useState('');
	const [productImg, setProductImg] = useState('');
	const [productPrice, setProductPrice] = useState('');

	const [disableAdd, setDisableAdd] = useState(true);

	useEffect(() => {
		if (productName === '' || productImg === '' || productPrice === '') {
			setDisableAdd(true);
		} else {
			setDisableAdd(false);
		}
	}, [productName, productImg, productPrice]);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add New Product</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="New Product"
							value={productName}
							onChange={(e) => setProductName(e.target.value)}
						/>
					</Form.Group>

					<br />
					<Form.Group>
						<Form.Label>Image</Form.Label>
						<Form.Control
							type="text"
							placeholder="Place URL"
							value={productImg}
							onChange={(e) => setProductImg(e.target.value)}
						/>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<InputGroup className="mb-3">
							<InputGroup.Text>$</InputGroup.Text>
							<FormControl
								type="number"
								placeholder="Price"
								value={productPrice}
								onChange={(e) => setProductPrice(e.target.value)}
							/>
							{/* <InputGroup.Text>.00</InputGroup.Text> */}
						</InputGroup>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						handleClose();
						console.log(`${productName}, ${productImg}, ${productPrice}`);
						addProduct({
							id: uuid(),
							name: productName,
							image: productImg,
							price: productPrice
						});
						setProductName('');
						setProductImg('');
						setProductPrice('');
					}}
					disabled={disableAdd}
				>
					ADD
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddShopping;
