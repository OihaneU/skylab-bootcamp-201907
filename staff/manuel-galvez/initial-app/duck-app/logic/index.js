const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const logic = {
	register: (name, surname, email, password) => {
		if (name == undefined) throw new TypeError(`Name is undefined.`)
		if (!name.trim()) throw new Error(`Name is empty or blank.`)

		if (surname == undefined) throw new Error(`Surname is undefined.`)
		if (!surname.trim()) throw new Error(`Surname is empty or blank.`)

		if (email == undefined) throw new Error(`Email is undefined.`)
		if (!email.trim()) {
			throw new Error(`Email is empty or blank.`)
		} else if (!EMAIL_REGEX.test(email)) {
			throw new Error("E-mail is invalid.")
		}

		if (password == undefined) throw new Error(`Password is undefined.`)
		if (!password.trim()) {
			throw new Error(`Password is empty or blank.`)
		} else if (password.trim().length < 4) {
			throw new Error("Password is less than 4 characters.")
		}

		// Database check
		const user = users.find(user => {
			return user.email === email && user.password === password
		})

		if (user) throw new Error("E-mail is already registered.")

		users.push({
			name: name,
			surname: surname,
			email: email,
			password: password,
			favorites: []
		})
	},

	login: (email, password) => {
		if (email == undefined) throw new Error(`Email is undefined.`)
		if (!email.trim()) {
			throw new Error(`Email is empty or blank.`)
		} else if (!EMAIL_REGEX.test(email)) {
			throw new Error("E-mail is invalid.")
		}

		if (password == undefined) throw new Error(`Password is undefined.`)
		if (!password.trim()) {
			throw new Error(`Password is empty or blank.`)
		} else if (password.trim().length < 4) {
			throw new Error("Password is less than 4 characters.")
		}

		const user = users.find(user => {
			return user.email === email && user.password === password
		})

		if (!user) throw new Error("Wrong credentials.")

		return user
	},

	searchDucks: (query, expression) => {
		if (!query.trim()) {
			throw new Error("Query is empty or blank.")
		}
		call(`http://duckling-api.herokuapp.com/api/search?q=${query}`, expression)
	},

	retrieveDuck: (duckID, expression) => {
		call(`http://duckling-api.herokuapp.com/api/ducks/${duckID}`, expression)
	},

	validateRequest: (results, request) => {
		if (request.status != 201) {
			throw new Error(response["error"])
		}
	},

	favorite: id => {
		const index = loggedUser.favorites.findIndex(fav => fav === id)
		index === -1
			? loggedUser.favorites.push(id)
			: loggedUser.favorites.splice(index, 1)
	},

	retrieveFavorites: expression => {
		const favs = []
		loggedUser.favorites.forEach(duckID => {
			logic.retrieveDuck(duckID, result => {
				const [duck, request] = [...result]
				favs.push(duck)
				if (favs.length === loggedUser.favorites.length) {
					expression(favs)
				}
			})
		})
	}
}
