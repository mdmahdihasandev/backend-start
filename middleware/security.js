function security(req, res, next) {

    if (req.headers.authorization === 'sdfkjgasegf') {

        console.log('Authorized');

        next();

    } else {

        res.status(401).send('Unauthorized');

    }
}

module.exports = security;