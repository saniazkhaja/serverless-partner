// importing API
 const translator = require("emoji-translator")

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // takes in user input
    const redacted = req.query.redacted;
    // key for translating emoji to name array
    const vocabulary = { '🕵🏽': 'John', '🕵🏻‍♀️': 'Nora', '🗻': 'Waverly Valley Place' };
    // creates translation model
    const translate = translator(vocabulary)
    // stores translated user input from emoji to name
    let code = "";

    // making sure user put something in
    if (typeof redacted === 'undefined' || redacted === "") {
        code = "Please enter some text to convert!"
    } else {
        // stores translated user input
        code = translate(redacted);
    }
  
    // display code
    context.res = {
        body: code
    };
}
