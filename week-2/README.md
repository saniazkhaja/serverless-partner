## Infiltration...
Your tool from last week was hit! With the new information we gathered from our missions, we've discovered some intel we can use to infiltrate the Bad Apple's main base.

![image](https://user-images.githubusercontent.com/69332964/137570336-4a1a1819-e206-4dad-b771-991ede054c46.png)
### ❓ Problem
We discovered the URL of the Bad Apple's internal network. So far, we know that you can send a GET request to `https://b4d4ppl3s.herokuapp.com/api/code` with a parameter named `code` and value of `badapples123` to get a secret message. This message encoded in ROT13 (the alphabet rotated 13 times) can then be sent in the body of a POST request with a name of `code` to `https://badapples.herokuapp.com/api/unlock` to retrieve a value named `key`.

Finally, you can head to the page `https://b4d4ppl3s.herokuapp.com/admin` and enter the `key` to login. **We've figured all this out, but our agents have to keep sending GET and POST requests again and again since the key changes every time.**

### 💡 Proposed Solution
We need YOU, our expert in serverless functions, to build an endpoint that allows our agents to simply make a GET request that returns back the `key` to login to the Bad Apple's admin account.

- [ ] Make a GET request with a parameter named `code` and value of `badapples123`
- [ ] Make a POST request with the output from the GET request in the body with a key value of `code`
- [ ] Finally, return this output to the user

You can use the npm package [`rot13-cipher`](https://www.npmjs.com/package/rot13-cipher) for this mission. 🚀

#### 🚧 Test case:
Paste your Serverless Function's url in your browser. A key that works on the login page should show up! To prove that your key works, show us the **code to the Bad Apple's headquarters**.

Good luck!