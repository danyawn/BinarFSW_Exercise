import {useState, useEffect} from 'react';
import {Card, Container, Row, Col, Form, Button, Alert} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

export default function EditPost() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [validation, setValidation] = useState({});
	const navigate = useNavigate();
	const {id} = useParams();

	useEffect(() => {
		getPostById();
	}, []);

	const getPostById = async () => {
		const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
		const data = await response.data.data
		setTitle(data.title);
		setContent(data.content);
	};

	const updatePost = async (e) => {
		e.preventDefault();
		await axios.patch(`http://localhost:5000/api/posts/${id}`, {
			title: title,
			content: content
		})
			.then(() => {
				navigate('/posts');
			})
			.catch((error) => {
				setValidation(error.response.data);
			})
	};

	return (
		<Container className="mt-3">
			<Row>
				<Col md="{12}">
					<Card className="border-0 rounded shadow-sm">
						<Card.Body>
							{
								validation.errors &&
								<Alert variant="danger">
									<ul class="mt-0 mb-0">
										{validation.errors.map((error, index) => (
											<li key={index}>{`${error.param} : ${error.msg}`}</li>
										))}
									</ul>
								</Alert>
							}
							<Form onSubmit={updatePost}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>TITLE</Form.Label>
									<Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Title" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>CONTENT</Form.Label>
									<Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Content" />
								</Form.Group>
								<Button variant="primary" type="submit">
									UPDATE
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}