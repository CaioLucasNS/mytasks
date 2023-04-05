describe('Equality', () => {
  it('basic use - toEqual', () => {
    expect(1 + 1).toEqual(2);

    expect('developer').toEqual('developer');

    expect({name: 'caio'}).toEqual({name: 'caio'});
  });

  //   it('basic use - toBe', () => {
  //     expect(1 + 1).toBe(2);

  //     expect('developer').toBe('developer');

  //     expect({name: 'caio'}).toBe({name: 'caio'}); // failed
  //   });

  it('Not method', () => {
    expect(1 + 1).not.toBe(3);
  });
});

describe('Match - regular expressions', () => {
  it('basic use - toMatch', () => {
    expect('developer').toMatch(/\w+/);
  });
});

describe('Compare numbers', () => {
  it('basic use toBe Greater than or Less than', () => {
    expect(1 + 1).toBeGreaterThan(1);
    expect(1 + 1).toBeLessThan(3);
  });
});

describe('Mock', () => {
  it('mock implementation', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5);

    expect(fakeAdd(1, 1)).toBe(5);
  });
});

export {};
