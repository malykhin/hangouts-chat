# hangouts-chat

Simple client for Google Hangouts Chat

## Features

- Send messages to an incoming webhook registered to a Hangouts Chat room

## Installing

```bash
$ npm install hangouts-chat
```

## Using

```js
const IncomingWebHook = require('hangouts-chat').IncomingWebHook

const incomingWebHook = new IncomingWebHook('YOUR_WEB_HOOK_URL')

const messageObject = {text: 'hello'}

incomingWebHook.send(messageObject)

incomingWebHook.sendText('hello')
```

## Docs

For messageObject reference object check Google documentation:

- Simple Text Messages: https://developers.google.com/hangouts/chat/reference/message-formats/basic
- Card Formatting Messages: https://developers.google.com/hangouts/chat/reference/message-formats/cards
- Creating an incoming webhook: https://developers.google.com/hangouts/chat/how-tos/webhooks

