describe( 'non flaky long test', () => {
  it('waits and then succeeds', async() => {
    await new Promise( r => setTimeout( r, 4000 ) );
    expect(0).toBe(0);
  });
});
