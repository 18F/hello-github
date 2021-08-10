// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");
const fs = require("fs");

// WebClient insantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient(process.env.API_KEY, {
  //   // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG,
});

// Post a message to a channel your app is in using ID and message text
async function publishMessage(text) {
  try {
    // Call the chat.postMessage method using the built-in WebClient
    const result = await client.chat.postMessage({
      // The token you used to initialize your app
      token: process.env.API_KEY,
      channel: "C02AJN43BD4",
      text: text,
      // You could also use a blocks[] array to send richer content
    });

    // Print result, which includes information about the message (like TS)
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

function formatMessage(newEmployee) {
  const { name, preferredFirstName, pronouns, city, favoriteMovie, funFact } =
    newEmployee;
  return `Let's all welcome *${name}* (${pronouns}, ${city}) to TTS!\n\nLet's learn more about ${preferredFirstName}:\n- *Favorite movie*: ${favoriteMovie}\n- *Fun fact*: ${funFact}`;
}

if (process.argv.length > 2) {
  console.log("This is process.argv", process.argv);
  const addedFiles = process.argv.slice(2);

  addedFiles.forEach((addedFile) => {
    let rawdata = fs.readFileSync(addedFile);
    let newEmployee = JSON.parse(rawdata);

    console.log("Added file", addedFile);
    publishMessage(formatMessage(newEmployee));
  });
}
