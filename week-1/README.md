## 🤪 'Moji Wars
Thanks for taking up this assignment, agent! We need a new tool ASAP that'll speed up the work we do at the agency significantly.

![spy kids](https://media.giphy.com/media/Zvgb12U8GNjvq/giphy.gif)
### ❓ Problem
Currently, in order to un-redact TOP SECRET information in our documents, our agents have to manually replace emojis with the corresponding names and places. This is time consuming!

### 💡 Proposed Solution
We need YOU, our expert in serverless functions, to build an endpoint that allows our agents to simply send the redacted document's content in a parameter named `redacted` and receive back a translated version that's easy to read.

- [ ] 🕵🏽 should be replaced with `John`
- [ ] 🕵🏻‍♀️ should be replaced with `Nora`
- [ ] 🗻 should be replaced with `Waverly Valley Place`

You can use the npm package [`emoji-translator`](https://www.npmjs.com/package/emoji-translator) for this mission. 🚀

#### 🚧 Test case:
If our agents send `Mission 1: Operation Moji Town Steal. 🕵🏻‍♀️ and 🕵🏽 will conduct surveillance at 5:00 PM EST sharp in 🗻.` in a paramter of `redacted`, they should receive `Mission 1: Operation Moji Town Steal. Nora and John will conduct surveillance at 5:00 PM EST sharp in Waverly Valley Place.`

![image](https://user-images.githubusercontent.com/69332964/136634136-a2a39fd8-1d3c-44b7-8fc8-2af36e335f85.png)

Good luck!