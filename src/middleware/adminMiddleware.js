const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
	const token = req.get("Authorization").split(" ")[1];

	jwt.verify(token, process.env.TOKEN_JWT, (err, decoded) => {
		if (err) {
			console.error(err.message);
			res.status(401).json({ error: `Oups.. ${err.message} ` });
		} else {
			if (decoded.role !== "admin") {
				res.status(401).json({
					error: "Mais tu n'as pas le droit d'être là toi !",
				});
			} else {
				req.username = `${decoded.firstname}-${decoded.lastname}`;
				next();
			}
		}
	});
};

module.exports = adminMiddleware;
