const chalk = require('chalk')
const log = console.log

function styleData(dataRes) {
	dataRes.forEach((actor) => {
		log(chalk.white('****-------****'))
		log(`Id: ${chalk.magenta(actor.id)}`)
		log(`Name: ${chalk.blue(actor.name)}`)
		log(`Department: ${chalk.red.bgYellow(actor.known_for_department)}`)
		log(chalk.white('-------****'))
		// log(actor.known_for)

		const films = actor.known_for

		films.forEach((film) => {
			if (film.title) {
				log(chalk.bold(film.title))
			}
			if (film.name) {
				log(chalk.red(film.name))
			}
		})
	})
}

module.exports = { styleData }
