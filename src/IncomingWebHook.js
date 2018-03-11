const requestService = require('./services/request');

class IncomingWebHook {
  constructor(incomingWebHookUrl) {
    this.incomingWebHookUrl = incomingWebHookUrl
  }

  async send (messageObject) {
    return await requestService.post(this.incomingWebHookUrl, messageObject)
  }

  sendText (text) {
    return this.send({text})
  }
}

module.exports = IncomingWebHook;