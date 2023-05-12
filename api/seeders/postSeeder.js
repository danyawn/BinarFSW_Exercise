'use strict';
const fs = require('fs')
const data = fs.readFileSync('./data/posts.json', 'utf-8')
const posts = JSON.parse(data)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {

		let postsSeeder = []
		posts.forEach(post => {
			postsSeeder.push({
				"title": post.title,
				"content": post.content,
				"createdAt": new Date(),
				"updatedAt": new Date()
			})
		});
		await queryInterface.bulkInsert('Posts', postsSeeder)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Posts');
	}
};
