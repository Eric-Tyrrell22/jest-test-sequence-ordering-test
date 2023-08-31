function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe( 'non flaky long test', () => {
  it('waits and then succeeds', async() => {
    const x = getRandomInt(2);
    expect(x).toBe(0);
  });
});
