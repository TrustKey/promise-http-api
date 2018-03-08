module.exports = function setup(options, imports, register) {
    console.log("promise-http-api module setup");

    const httpServer = imports.http_server;
    let app = httpServer.app;
    let promise = imports.promise;

    const PromiseMethod = {
        create: 0,
        resolve: 1
    };


    const promiseHandler = (method) => (req, resp) => {
        let body = req.body;
        body.b64_buffers = true;

        if(method === PromiseMethod.create)
            promise.createPromise(body, res => resp.send(res));
        else
            promise.resolvePromise(body, res => resp.send(res));
    };


    app.post('/promise/create', promiseHandler(PromiseMethod.create));
    app.post('/promise/resolve', promiseHandler(PromiseMethod.resolve));


    const b64ProxyHandler = (method) => (req, resp) => {
        if(!req.query.b64_body)
            return resp.status(500).send({success: false, error: "No b64_body query param"});

        try {
            const jsonString = new Buffer(req.query.b64_body, 'base64').toString('ascii');
            const body = JSON.parse(jsonString);

            return promiseHandler(method)({body: body}, resp);
        }
        catch (e) {
            resp.status(500).send({success: false, error: JSON.stringify(e.message)});
        }
    };

    app.get('/promise/create', b64ProxyHandler(PromiseMethod.create));
    app.get('/promise/resolve', b64ProxyHandler(PromiseMethod.resolve));

    register(null, { });
};