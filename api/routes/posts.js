const express = require('express');
const router = express.Router();

const {Post} = require('../models')
const {body, validationResult} = require('express-validator');

router.get('/api/posts', async (req, res) => {
	try {
		const posts = await Post.findAll({
			order: [
				['id', 'DESC']
			]
		})
		return res.status(200).json({
			status: true,
			message: 'List Data Posts',
			data: posts
		})
	} catch(err) {
		console.log(err)
		return res.status(500).json({
			status: false,
			message: 'Internal Server Error',
		})
	}
})

router.post('/api/posts', [
	body('title').notEmpty(),
	body('content').notEmpty()
], async (req, res) => {
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		return res.status(422).json({
			errors: errors.array()
		});
	}
	let formData = {
		title: req.body.title,
		content: req.body.content
	}
	try {
		const newPost = await Post.create(formData)
		return res.status(201).json({
			status: true,
			message: 'Insert Data Successfully',
			data: newPost
		})
	} catch(err) {
		console.log(err)
		return res.status(500).json({
			status: false,
			message: 'Internal Server Error',
		})
	}
})

router.get('/api/posts/:id', async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id)
		if(!post) {
			return res.status(404).json({
				status: false,
				message: 'Data Post Not Found!',
			})
		}
		return res.status(200).json({
			status: true,
			message: 'Detail Data Post',
			data: post
		})
	} catch(err) {
		console.log(err)
		return res.status(500).json({
			status: false,
			message: 'Internal Server Error',
		})
	}
})

router.patch('/api/posts/:id', [
	body('title').notEmpty(),
	body('content').notEmpty()
], async (req, res) => {
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		return res.status(422).json({
			errors: errors.array()
		});
	}
	let formData = {
		title: req.body.title,
		content: req.body.content
	}
	try {
		await Post.update(formData, {
			where: {
				id: req.params.id
			}
		})
		return res.status(200).json({
			status: true,
			message: 'Update Data Successfully!'
		})
	} catch(err) {
		console.log(err)
		return res.status(500).json({
			status: false,
			message: 'Internal Server Error',
		})
	}
})

router.delete('/api/posts/:id', async (req, res) => {
	try {
		const status = await Post.destroy({
			where: {
				id: req.params.id
			}
		})
		if(!status) return res.status(404).json({msg: 'Post Not Found'})
		return res.status(200).json({
			status: true,
			message: 'Delete Data Successfully!',
		})
	} catch(err) {
		console.log(err)
		return res.status(500).json({
			status: false,
			message: 'Internal Server Error',
		})
	}
})

module.exports = router;