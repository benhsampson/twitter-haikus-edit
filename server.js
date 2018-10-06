const express = require('express');
const bodyParser = require('body-parser');
// Twitter API client for node supporting the REST and Streaming API
const Twit = require('twit');
const emojiRegex = require('emoji-regex');
const numberToWords = require('number-to-words');
const syllable = require('syllable');

const T = new Twit({
  consumer_key:        'sqpssPBQAX7HhA8gUP8HBGUcZ',
  consumer_secret:     '0ZGVcdbQQYToX5YIJI6hcjJv9yXYYZrnQkRi1Z2l3RJFncvxWF',
  access_token:        '852803558906839040-KjRfwBIGi3Q4lpcoK6r7aQxg95TB78c',
  access_token_secret: 'pZZOW3FptfNh62iizXN3kAfCvC8FOW8DK0sTfYRcKFK4Y',
});

// Simple express server running on port 5000

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const replaceNumbers = (string) => {
  let finalString = string;
  const numbers = string.match(/\b\d+\b/g);

  if (numbers && numbers.length > 0) {
    numbers.forEach((number) => {
      finalString = finalString.replace(number, numberToWords.toWords(parseInt(number, 10)));
    });
  }

  return finalString;
};

app.post('/api/hello', (req, res) => {
  const { screen_name } = req.body;

  // lang should be 'eu' by default
  // The count should be the number of Tweets this user has posted in total
  T.get('statuses/user_timeline', { screen_name, lang: 'en', count: 3000 }, (err, data, response) => {
    console.log('DATA', data);

    const formattedData = data.map((status) => {
      // Convert from digits to worded numbers and capitalize
      const text = capitalize(replaceNumbers(status.text
        // Remove new lines, replace with spaces
        .replace(/[↵\n]/g, ' ')
        // Remove URLS
        .replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, '')
        // Remove retweets and following mention
        .replace(/^RT+[ \t]*@([a-zA-Z0-9-_]+)+[ \t]*/g, '')
        // Remove mentions all together
        .replace(/@([a-zA-Z0-9-_]+)+[ \t]*/g, '')
        // Remove RT after mentions
        .replace(/RT/g, '')
        // Remove #hashtags
        .replace(/#([a-zA-Z0-9-_]+)/g, '')
        // Remove emojis
        .replace(emojiRegex(), '')
        // Remove punctuation
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        // Remove double-spaces/tabs/indentation
        .replace(/\s\s+/g, ' ')
        // Trim removing surrounding white space
        .trim()));

        return {
          _id: status.id,
          text,
        };
    });

    let haikus = [];

    let haiku = {
      _id: '',
      first: '',
      second: '',
      third: '',
    };

    formattedData.forEach(({ _id, text }) => {
      if (!haiku.first) {
        haiku.first = syllable(text) === 5 ? text : '';
      } else if (!haiku.second) {
        haiku.second = syllable(text) === 7 ? text : '';
      } else if (!haiku.third && syllable(text) === 5) {
        haiku.third = text;
        haikus.push({
          ...haiku,
          _id,
        });
        haiku = {};
        console.log(haiku);
      }
    });

    console.log(haikus);

    res.send({
      haikus,
      name: data[0].user.name,
      count: data[0].user.statuses_count,
    });
  });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle react routing, return all requests to the React client-side app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
