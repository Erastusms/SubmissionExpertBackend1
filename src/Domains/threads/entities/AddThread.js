class AddThread {
  constructor(payload) {
    this._verifyPayload(payload);

    const { title, body } = payload;

    this.title = title;
    this.body = body;
  }

  _verifyPayload({ title, body }) {
    if (!title || !body) {
      throw new Error('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof title !== 'string' || typeof body !== 'string') {
      throw new Error('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (title.length > 50) {
      throw new Error('ADD_THREAD.title_LIMIT_CHAR');
    }

    if (!title.match(/^[\w\-\s]+$/)) {
      throw new Error('ADD_THREAD.title_CONTAIN_RESTRICTED_CHARACTER');
    }
  }
}

module.exports = AddThread;
