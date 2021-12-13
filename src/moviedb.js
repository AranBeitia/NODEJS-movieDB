// #!/usr/bin/env node

import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { Command } from 'commander'
dotenv.config({ path: 'variables.env' })
const key = process.env.API_KEY

// const { Command } = require('commander')
const program = new Command()
program.version('0.0.1')

program
	.command('get-persons')
	.description('Make a network request to fetch most popular persons')
	.action(function handleAction() {
		fetch(`https://api.themoviedb.org/3/person/popular?page=1&api_key=${key}`)
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error))
	})

program
	.command('get-person')
	.description('Make a network request to fetch the data of a single person')
	.action(function handleAction() {
		console.log('hello-world')
	})

program
	.command('get-movies')
	.description('Make a network request to fetch movies')
	.action(function handleAction() {
		console.log('hello-world')
	})

program
	.command('get-movie')
	.description('Make a network request to fetch the data of a single person')
	.action(function handleAction() {
		console.log('hello-world')
	})

// error on unknown commands

program.parse(process.argv)
