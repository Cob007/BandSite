const baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";

export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async postComment(commentData) {
    try {
      const header = {
        "Content-Type": "application/json",
      };
      const getCommentURL = `${baseUrl}comments?api_key=${this.apiKey}`;
      const res = await axios.post(getCommentURL, commentData, {
        headers: header,
      });
      console.log(res);
      return res.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async getComment() {
    try {
      const getCommentURL = `${baseUrl}comments?api_key=${this.apiKey}`;
      const res = await axios.get(getCommentURL);
      return res.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async getShows() {
    try {
      const getCommentURL = `${baseUrl}showdates?api_key=${this.apiKey}`;
      const res = await axios.get(getCommentURL);
      return res.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}

export class Converter {
  constructor(timestamp) {
    this.timestamp = timestamp;
  }

  getUsDateFormatter() {
    const date = new Date(this.timestamp);
    return date.toLocaleDateString("en-US");
  }
}
