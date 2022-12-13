const VracModel = require("../models/VracModel");

class VracController {
	get = function (req, res) {
		const datas = VracModel.fetchAll();
		res.status(201).json({ datas });
	};

	put = (req, res) => {
		res.send("Update item");
	};

	delete = (req, res) => {
		res.send("item was delete");
	};

	post = (req, res) => {
		console.log(req.query.name);
		res.send("J'ajoute un item");
	};
}

// export default VracController;
module.exports = new VracController();
