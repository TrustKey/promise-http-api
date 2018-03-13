module.exports = function setup(options, imports, register) {
    console.log("promise-http-api module setup");

    const httpServer = imports.http_server;
    let app = httpServer.app;
    let promise = imports.promise;

    const promiseHandler = (req, resp) => {
        let body = req.body;
        body.b64_buffers = true;

        promise.resolve(body, res => resp.send(res));
    };


    app.post('/promise/resolve', promiseHandler);


    const b64ProxyHandler = (req, resp) => {
        if(!req.query.b64_body)
            return resp.status(500).send({success: false, error: "No b64_body query param"});

        try {
            const jsonString = new Buffer(req.query.b64_body, 'base64').toString('ascii');
            const body = JSON.parse(jsonString);

            return promiseHandler({body: body}, resp);
        }
        catch (e) {
            resp.status(500).send({success: false, error: JSON.stringify(e.message)});
        }
    };

    app.get('/promise/resolve', b64ProxyHandler);

    register(null, { });
};