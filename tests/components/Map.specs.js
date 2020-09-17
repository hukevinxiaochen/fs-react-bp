describe('D3 map tests', () => {
  it('should render a redlining map of Chicago with <path> elements in our svg', function () {
    const shallowWrapper = shallow(<Map />);
    const hasPathElements = shallowWrapper.containsAnyMatchingElements([
      <path />,
    ]);

    expect(hasPathElements).to.equal(true);
  });
});
