const AdminModel = require("../models/AdminModel");
const jwt = require("jsonwebtoken");

class AdminController {
	login = (req, res) => {
		const { email, password } = req.body;

		const user = AdminModel.getUser(email, password);

		const token = jwt.sign(user, process.env.TOKEN_JWT, {
			expiresIn: "1h",
		});

		if (user) {
			res.set("Authorization", `Bearer ${token}`)
				.status(200)
				.json({ success: `Bienvenue ${user.firstname}`, token });
		} else {
			res.status(401).json({ error: "Unauthorized" });
		}
	};

	get = function (req, res) {
		res.send("Hello World 🌍 get ready for the next Battle");
		console.log("Admin get");
	};

	put = (req, res) => {
		res.send("Update item");
		console.log("Admin put");
	};

	delete = (req, res) => {
		res.send("item was delete");
		console.log("Admin delete");
	};

	post = (req, res) => {
		console.log(req.username);
		res.send("J'ajoute un item");
		console.log("Admin post");
	};
}

// export default AdminController;
module.exports = new AdminController();
