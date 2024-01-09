![PersonalityAI banner](https://i.imgur.com/uq9lsZS.jpg)

## PersonalityAI

The PersonalityAI npm package allows users to interact with their favorite characters using real-time data. The package provides methods for testing the API, conducting chat sessions, creating profiles, fetching images, and retrieving conversation history.

###
Docs

### Installation

To use PersonalityAI in your project, install it using npm:

```sh
npm install personalityai
```
### Example
#### Code
```js
const PersonalityAI = require("personalityai");

const personalityAI = new PersonalityAI();
// Example usage
(async () => {
    try {
        const testResult = await personalityAI.test();
        console.log('Test Result:', testResult);
        let prompt = 'Hi what is your name?';
        let character = 'Satoru Gojo';
        let source = 'Jujutsu Kaisen';
        const Profile = await personalityAI.profile(character, source);
        console.log('Profile Result:', Profile);
        const chatResult = await personalityAI.chat(prompt, character, source);
        console.log('Chat Result:', chatResult);
    } catch (error) {
        console.error(error.message);
    }
})();
```
#### Response
```sh
Test Result: The API is working!
Profile Result: {
  character: 'Satoru Gojo',
  source: 'Jujutsu Kaisen',
  image: 'https://staticg.sportskeeda.com/editor/2023/04/8487c-16812291196707.png',
  introduction: "Yo, I'm Satoru Gojo, the strongest Jujutsu Sorcerer. Remember that name, cause it's the only one you need to know."
}
Chat Result: The name's Satoru Gojo, the strongest Jujutsu sorcerer. Remember it well.
```

## API Usage
Usage of all the api endpoints.
```javascript
const PersonalityAI = require('personalityai');

// Create an instance of PersonalityAI
const personalityAI = new PersonalityAI();

// Test the API
try {
    const testResult = await personalityAI.test();
    console.log(testResult);
} catch (error) {
    console.error(error.message);
}

// Start a chat session
const prompt = "How are you today?";
const character = "Walter White";
const source = "Breaking bad";
try {
    const chatResult = await personalityAI.chat(prompt, character, source);
    console.log(chatResult);
} catch (error) {
    console.error(error.message);
}

// Create a new profile
const profileCharacter = "Jane Smith";
try {
    const profileResult = await personalityAI.profile(profileCharacter, source);
    console.log(profileResult);
} catch (error) {
    console.error(error.message);
}

// Fetch images
const imageSource = "web";
const imageNumber = 3;
const imageOptions = { type: "animated" };
try {
    const imageResult = await personalityAI.images(imageSource, imageNumber, imageOptions);
    console.log(imageResult);
} catch (error) {
    console.error(error.message);
}

// Get conversation history
const conversationId = "123456";
try {
    const conversationResult = await personalityAI.conversations(conversationId);
    console.log(conversationResult);
} catch (error) {
    console.error(error.message);
}
```

### Constructor

#### `new PersonalityAI(apiBaseUrl, chatOptions)`

- `apiBaseUrl` (optional): The base URL of the PersonalityAI API. Defaults to 'https://personalityai.onrender.com'.
- `chatOptions` (optional): Advanced options for chat sessions.

### Methods

#### `async test()`

Tests the PersonalityAI API by making a GET request to `/test`.

#### `async chat(prompt, character, source)`

Starts a chat session with the specified prompt, character, and source. If advanced options are provided during initialization, they will be included in the request.

#### `async profile(character, source)`

Creates a new profile for the specified character and source.

#### `async images(source, number, options)`

Fetches a specified number of images from the given source. Options can be provided for more specific image requirements.

#### `async conversations(id)`

Retrieves the conversation history for the specified ID.

### Error Handling

All methods throw an `Error` object if the API request fails, providing detailed error messages.

### Note

Make sure to handle asynchronous operations appropriately, using `try` and `catch` blocks or `.then()` and `.catch()` as per your preference.

### License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.