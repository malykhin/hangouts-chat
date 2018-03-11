require('isomorphic-fetch');

class Service {
  static async post (url, data){
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      timeout: 5000,
      headers: {'Content-Type': 'application/json; charset=UTF-8'}
    };
    const response = await fetch(url, options);
    Service.fetchResponseStatusValidator(response);

    return await response.json()
  }

  static fetchResponseStatusValidator (response) {
    if (response.status >= 400) {
      const error = new Error();
      error.status = response.status;
      error.message = response.statusText;
      throw error
    }
  }
}

module.exports = Service;