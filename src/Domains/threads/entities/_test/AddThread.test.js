const Thread = require('../AddThread');

describe('a Thread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    const payload = {
      title: 'Laskar Pelangi',
    };

    expect(() => new Thread(payload)).toThrowError(
      'THREAD.NOT_CONTAIN_NEEDED_PROPERTY'
    );
  });

  it('should throw error when payload did not meet data type specification', () => {
    const payload = {
      title: 'Laskar Pelangi',
      body: Infinity,
      owner: 'owner-123',
    };

    expect(() => new Thread(payload)).toThrowError(
      'THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION'
    );
  });

  it('should create Thread object correctly', () => {
    const payload = {
      title: 'Laskar pelangi',
      body: 'Takkan terikat waktu',
      owner: 'owner-123',
    };

    const { title, body, owner } = new Thread(payload);

    expect(title).toEqual(payload.title);
    expect(body).toEqual(payload.body);
    expect(owner).toEqual(payload.owner);
  });
});
