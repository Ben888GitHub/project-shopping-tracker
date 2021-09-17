import React, { useState, useEffect, useContext } from 'react';
import {
	Container,
	InputGroup,
	Form,
	Button,
	FormControl,
	Card
} from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ImageUploading from 'react-images-uploading';

function EditShopping() {
	const { editProduct } = useContext(GlobalContext);

	let { id } = useParams();
	let history = useHistory();
	// console.log(id);

	const [productName, setProductName] = useState('');
	const [productImg, setProductImg] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productImgStr, setProductImgStr] = useState('');

	const [disableAdd, setDisableAdd] = useState(true);

	const [disableUpload, setDisableUpload] = useState(false);

	useEffect(() => {
		if (productName === '' || productImg === '' || productPrice === '') {
			setDisableAdd(true);
		} else {
			setDisableAdd(false);
		}
	}, [productName, productImg, productPrice, id]);

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setProductImg(imageList);
		console.log(imageList);
		setDisableUpload(true);
		imageList.map((image) => setProductImgStr(image.data_url));
	};

	return (
		<Container className="d-flex flex-column align-items-center justify-content-center">
			<br />
			<Card style={{ width: '28rem', padding: 50 }}>
				<Form>
					<h2 style={{ marginLeft: -30, marginTop: -20 }}>
						{' '}
						<FaArrowLeft
							onClick={() => history.goBack()}
							style={{ marginBottom: 5, marginRight: 5, cursor: 'pointer' }}
						/>{' '}
						Update Product
					</h2>
					<br />
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
						<ImageUploading
							multiple
							value={productImg}
							onChange={onChange}
							maxNumber={1}
							dataURLKey="data_url"
						>
							{({
								imageList,
								onImageUpload,
								isDragging,
								dragProps,
								onImageUpdate
							}) => (
								<div className="upload__image-wrapper">
									<Button
										style={isDragging ? { color: 'red' } : undefined}
										onClick={onImageUpload}
										{...dragProps}
										disabled={disableUpload}
									>
										Upload
									</Button>

									{imageList.map((image, index) => (
										<div key={index} className="image-item">
											<br />
											<img
												onChange={() => {
													setProductImg(image.data_url);
												}}
												src={image.data_url}
												alt=""
												width="100"
											/>
											<div className="image-item__btn-wrapper"></div>
											<br />
											<Button
												onClick={() => onImageUpdate(index)}
												{...dragProps}
											>
												Update
											</Button>
										</div>
									))}
								</div>
							)}
						</ImageUploading>
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
					<br />
					<Button
						variant="primary"
						// type="submit"
						onClick={(e) => {
							// e.preventDefault();
							editProduct({
								id: id,
								name: productName,
								image: productImgStr,
								price: parseInt(productPrice),
								quantity: 1
							});
							history.push('/');
						}}
						disabled={disableAdd}
					>
						UPDATE
					</Button>
				</Form>
			</Card>
		</Container>
	);
}

export default EditShopping;
// type="submit"
