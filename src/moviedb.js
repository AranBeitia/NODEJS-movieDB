// #!/usr/bin/env node

const { Command } = require('commander')
const dotenv = require('dotenv')
const https = require('https')
const requestMethods = require('./utils/requestMethods')
const styles = require('./utils/styleData')
dotenv.config({ path: 'variables.env' })
const ora = require('ora')

const apiKey = process.env.API_KEY

const program = new Command()
program.version('0.0.1')

program
	.command('get-persons')
	.description('Make a network request to fetch most popular persons')
	.requiredOption('-p, --popular', 'fetch popular people')
	.requiredOption(
		'--page <number>',
		'The page of persons data results to fetch'
	)
	// programOptions returns an object with all the required options
	.action((programOptions) => {
		const requestOptions = requestMethods.getOptions(
			'person/popular',
			programOptions.page,
			apiKey
		)

		const request = https.request(requestOptions, (response) => {
			const spinner = ora('loading pipol')
			console.log(`statusCode: ${response.statusCode}`)
			let body = ''
			response
				.on('data', (data) => {
					spinner.start()
					body += data
				})
				.on('end', () => {
					let jsonResponse = JSON.parse(body)
					const dataRes = jsonResponse.results
					styles.styleData(dataRes)
					spinner.succeed('Popular person data loaded')
				})
		})

		request.on('error', (error) => {
			console.log(error)
			spinner.succeed('Failed to fetch the persons data')
		})

		request.end()
	})

program
	.command('get-person')
	.description('Make a network request to fetch the data of a single person')
	.requiredOption('-i --id <id>', 'The id of the person')
	.action((programOptions) => {
		console.log(programOptions.id)
		const requestOptions = requestMethods.getOptionsPerson(
			'person',
			programOptions.id,
			apiKey
		)

		const request = https.request(requestOptions, (response) => {
			const spinner = ora('Fetching the person data...')
			console.log(`statusCode: ${response.statusCode}`)
			let body = ''

			response
				.on('data', (data) => {
					body += data
					spinner.start()
				})
				.on('end', () => {
					let jsonResponse = JSON.parse(body)
					styles.stylePersonData(jsonResponse)
					spinner.succeed('Person data loaded')
				})
		})

		request.on('error', (error) => {
			console.log(error)
			spinner.fail('personita failed')
		})

		request.end()
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
