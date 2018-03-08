### Promise Http API

TrustKey [supervisor][0] module providing [promise][1] module interface for [http-server] module.

Provides `POST /promise/resolve` and `POST /promise/reject` methods consuming json body which execute same name promise module functions.
Also provides `GET /promise/resolve` and `GET /promise/reject` methods with `b64_body` query param with similar logic.


### Request examples with Curl:

```bash
curl -d '{"promise_alg":"random_int_rs0","min":0,"max":10,"b64_buffers":true,"seed":"T3XYDzsGx3mHWaX35DjKZ5jIc9/abiwBvBHVKYnlqBLSSM0WhsOWrDNQrpfUGZuVAYUre57Um98Zz1bUyMHq+Q=="}' -H"Content-Type: application/json" -X POST http://127.0.0.1:3000/promise/resolve
curl http://127.0.0.1:3000/promise/resolve\?b64_body\=ew0KCSJwcm9taXNlX2FsZyI6ICJyYW5kb21faW50X3JzMCIsDQoJIm1pbiI6IDAsDQoJIm1heCI6IDEwLA0KCSJiNjRfYnVmZmVycyI6IHRydWUsDQoJInNlZWQiOiAiVDNYWUR6c0d4M21IV2FYMzVEaktaNWpJYzkvYWJpd0J2QkhWS1lubHFCTFNTTTBXaHNPV3JETlFycGZVR1p1VkFZVXJlNTdVbTk4WnoxYlV5TUhxK1E9PSINCn0=
```

[0]: https://github.com/TrustKey/supervisor
[1]: https://github.com/TrustKey/promise