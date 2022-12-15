class AdminModel {
	getUser = (email, password) => {
		// SELECT * FROM user WHERE email = $email AND password = $password
		if (email === "anthony@lebg.com" && password === "admin") {
			return {
				id: 1,
				firstname: "Anthony",
				lastname: "LeBG",
				email: "anthony@lebg.com",
				role: "user",
			};
		} else {
			return false;
		}
	};
}

module.exports = new AdminModel();
