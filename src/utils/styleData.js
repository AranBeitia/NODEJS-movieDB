const chalk = require('chalk')
const log = console.log

function styleData(dataRes) {
	dataRes.forEach((actor) => {
		log(chalk.white('Person:'))
		log(`Id: ${chalk.white(actor.id)}`)
		log(`Name: ${chalk.blue(actor.name)}`)
		log(`Department: ${chalk.magenta(actor.known_for_department)}`)

		const films = actor.known_for
		films.forEach((film) => {
			// log(film)
			if (film.title) {
				log('\n')
				log(chalk.white('\tMovie'))
				log(chalk.white(`\tId: ${film.id}`))
				log(chalk.white(`\tRelease date: ${film.release_date}`))
				log(chalk.white(`\tTitle: ${film.title}`))
				log('\n')
			} else if (film.title === undefined) {
				log(chalk.green(`${actor.name} doesn't appear in any movie\n`))
			}
		})
		log(chalk.white('---------------------------------------------'))
	})
}

function stylePersonData(dataResult) {
	log(dataResult)
	log(chalk.white('\n---------------------------------------'))
	log(chalk.white(`Person: \n`))
	log(chalk.white(`Id: ${dataResult.id}`))
	log(chalk.blue(`Name: ${dataResult.name}`))
	log(
		chalk.white(
			`Birthdate: ${dataResult.birthday} ${chalk.grey('|')} ${
				dataResult.place_of_birth
			}`
		)
	)

	if (dataResult.known_for_department === 'Acting') {
		log(`Department: ${chalk.magenta(dataResult.known_for_department)}`)
	} else {
		log('Department:')
	}

	log(`Biography: ${chalk.blue.bold(dataResult.biography)}`)

	if (dataResult.also_known_as != undefined) {
		log('\n')
		log(chalk.white('Also known as\n'))
		const alias = dataResult.also_known_as
		alias.forEach((item) => {
			log(`${chalk.white(item)}\n`)
		})
	} else {
		log('\n')
		log(`${chalk.yellow(dataResult.name)} doesn’t have any alternate names\n`)
	}
}

module.exports = { styleData, stylePersonData }
