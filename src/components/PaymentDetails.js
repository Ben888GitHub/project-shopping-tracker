import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function PaymentDetails() {
	const { cart } = useContext(GlobalContext);
	let history = useHistory();

	return (
		<>
			<br />
			<Card style={{ width: '31rem', margin: '0 auto' }}>
				<Card.Header style={{ background: '#212529' }}>
					<h5 style={{ color: 'white', marginTop: 10, fontWeight: 'bold' }}>
						<FaRegArrowAltCircleLeft
							onClick={() => history.goBack()}
							style={{
								marginRight: 5,
								fontSize: 24,
								marginBottom: 3,
								cursor: 'pointer'
							}}
						/>{' '}
						Confirm Payment
					</h5>{' '}
				</Card.Header>
				<Card.Body>
					<Card.Title style={{ marginBottom: 15 }}>
						Products <span style={{ float: 'right' }}>Total ($)</span>
					</Card.Title>

					{cart.map((item, idx) => (
						<Card.Text key={idx}>
							{item.name}, <span>${item.price}</span>{' '}
							<span>({item.quantity}x)</span>{' '}
							<span style={{ float: 'right' }}>
								${item.price * item.quantity}
							</span>
						</Card.Text>
					))}

					<div className="text-center" style={{ marginTop: 15 }}>
						<Button
							style={{
								fontWeight: 'bold',
								alignItems: 'center',
								margin: '0 auto'
							}}
							variant="success"
						>
							PAY ($
							{cart
								.map((cartItem) => cartItem.price * cartItem.quantity)
								.reduce((a, b) => a + b, 0)}
							)
						</Button>
					</div>
				</Card.Body>
			</Card>
		</>
	);
}

export default PaymentDetails;
