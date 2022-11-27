class Thread {
  constructor(payload) {
    this._verifyPayload(payload);

    const { title, body, owner } = payload;

    this.title = title;
    this.body = body;
    this.owner = owner;
  }

  _verifyPayload({ title, body, owner }) {
    if (!title || !body || !owner) {
      throw new Error('THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof title !== 'string' || typeof body !== 'string' || typeof owner !== 'string') {
      throw new Error('THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (title.length > 50) {
      throw new Error('THREAD.title_LIMIT_CHAR');
    }

    if (!title.match(/^[\w\-\s]+$/)) {
      throw new Error('THREAD.title_CONTAIN_RESTRICTED_CHARACTER');
    }
  }
}

module.exports = Thread;