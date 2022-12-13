const adminMiddleware = (req, res, next) => {
	const isAdmin = false;

	if (isAdmin) {
		next();
	} else {
		console.log("coucou");
		return res.status(401).json({ error: "not authorized" });
	}
};

module.exports = adminMiddleware;