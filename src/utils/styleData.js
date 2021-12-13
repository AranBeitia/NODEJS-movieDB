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

module.exports = { styleData }
