const express = require('express');
// Twitter API client for node supporting the REST and Streaming API
const Twit = require('twit');
const emojiRegex = require('emoji-regex');
// const regexEmoji = require('regex-emoji');

const T = new Twit({
  consumer_key:        'sqpssPBQAX7HhA8gUP8HBGUcZ',
  consumer_secret:     '0ZGVcdbQQYToX5YIJI6hcjJv9yXYYZrnQkRi1Z2l3RJFncvxWF',
  access_token:        '852803558906839040-KjRfwBIGi3Q4lpcoK6r7aQxg95TB78c',
  access_token_secret: 'pZZOW3FptfNh62iizXN3kAfCvC8FOW8DK0sTfYRcKFK4Y',
});

// Simple express server running on port 5000

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  // lang should be 'eu' by default
  T.get('search/tweets', { q: 'banana', lang: 'en', count: 100 }, (err, data, response) => {
    const formattedData = data.statuses.map((status) => {
      return {
        text: status.text
          .replace(/([a-zA-Z\d])+:/g, '')
          .replace(/@([a-zA-Z1-9-_]+)/g, '')
          .replace(/#([a-zA-Z1-9-_]+)/g, '')
          .replace(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g, '')
          .replace(emojiRegex(), ''),
      };
    });
    res.send({ express: formattedData });
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
