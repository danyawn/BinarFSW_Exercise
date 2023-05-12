import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Card, Container, Row, Col, Button, Table} from 'react-bootstrap';
import axios from 'axios';

export default function PostIndex() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fecthData();
	}, []);

	const fecthData = async () => {
		const response = await axios.get('http://localhost:5000/api/posts');
		const data = await response.data.data;
		setPosts(data);
	}

	const deletePost = async (id) => {
		await axios.delete(`http://localhost:5000/api/posts/${id}`);
		fecthData();
  }

	return (
		<Container className="mt-3">
			<Row>
				<Col md="{12}">
					<Card className="border-0 rounded shadow-sm">
						<Card.Body>
							<Button as={Link} to="/posts/create" variant="success" className="mb-3">TAMBAH POST</Button>
							<Table striped bordered hover className="mb-1">
								<thead>
									<tr>
										<th className='text-center'>NO.</th>
										<th className='text-center'>TITLE</th>
										<th className='text-center'>CONTENT</th>
										<th className='text-center'>AKSI</th>
									</tr>
								</thead>
								<tbody>
									{posts.map((post, index) => (
										<tr key={post.id}>
											<td>{index + 1}</td>
											<td>{post.title}</td>
											<td>{post.content}</td>
											<td className="d-flex justify-content-center">
													<div className='col-sm-4'>
														<Button as={Link} to={`/posts/edit/${post.id}`} className="me-5 btn btn-primary">EDIT</Button>
													</div>
													<div className='col-sm-4'>
														<Button onClick={() => deletePost(post.id)} className='btn btn-danger'>DELETE</Button>
													</div>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
