const { NotImplementedException } = require('../../../../errors')
class Interface {
  /**
   * Method to configure required adapters and general configs
   *
   * @param {object} config an object with this data: { enviroment: 'development'/'production', apiKey: XXXXXXX }
   * @param {string} apiKey an string with apikey provided in configuration
   */
  constructor(config) {
    this.config = config
  }

  /**
   * Method to create an webhook in Cryptum
   * 
   * @param {object} webhook object with all webhook data required: { asset, url, event, address, confirmations, protocol }
   */
  createWebhook(webhook) {
    throw new NotImplementedException()
  }

  /**
   * Method to get webhooks of the Cryptum
   * 
   * @param {string} asset asset to get respective webhooks
   * @param {string} protocol protocol to get yours webhooks
   */
  getWebhooks(asset, protocol) {
    throw new NotImplementedException()
  }

  /**
   * Method to destroy an webhook of the Cryptum
   * 
   * @param {object} webhookDestroy object with all data required to destroy: { asset, webhookId, protocol }
   * @param webhookDestroy.asset
   * @param webhookDestroy.webhookId
   * @param webhookDestroy.protocol
   */
  destroyWebhook({ asset, webhookId, protocol }) {
    throw new NotImplementedException()
  }
}

module.exports = Interface
