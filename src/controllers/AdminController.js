class AdminController {
	login = (req, res) => {
		console.log(req.body);
		res.send("Login");
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
		console.log(req.query.name);
		res.send("J'ajoute un item");
		console.log("Admin post");
	};
}

// export default AdminController;
module.exports = new AdminController();
