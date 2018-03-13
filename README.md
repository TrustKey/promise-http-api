### Promise Http API

TrustKey [supervisor][0] module providing [promise][1] module interface for [http-server] module.

Provides `POST /promise/resolve` and `POST /promise/reject` methods consuming json body which execute same name promise module functions.
Also provides `GET /promise/resolve` and `GET /promise/reject` methods with `b64_body` query param with similar logic.


### Request examples with Curl:

```bash
curl -d '{"_f":"random_int_rs0","min":0,"max":10,"b64_buffers":true,"seed":"T3XYDzsGx3mHWaX35DjKZ5jIc9/abiwBvBHVKYnlqBLSSM0WhsOWrDNQrpfUGZuVAYUre57Um98Zz1bUyMHq+Q=="}' -H"Content-Type: application/json" -X POST http://127.0.0.1:3000/promise/resolve
curl http://127.0.0.1:3000/promise/resolve\?b64_body\=eyJfZiI6InJhbmRvbV9pbnRfcnMwIiwibWluIjowLCJtYXgiOjEwLCJiNjRfYnVmZmVycyI6dHJ1ZSwic2VlZCI6IlQzWFlEenNHeDNtSFdhWDM1RGpLWjVqSWM5L2FiaXdCdkJIVktZbmxxQkxTU00wV2hzT1dyRE5RcnBmVUdadVZBWVVyZTU3VW05OFp6MWJVeU1IcStRPT0ifQ==
```

[0]: https://github.com/TrustKey/supervisor
[1]: https://github.com/TrustKey/promise