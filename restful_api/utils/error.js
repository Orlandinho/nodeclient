module.exports = {
    send: (err, res, req, code = 400) => {

        console.log(`error: ${err}`);
        res.status(code).json({
            error: err
        });
    }
};