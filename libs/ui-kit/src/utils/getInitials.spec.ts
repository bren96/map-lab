import { getInitials } from './getInitials';

describe('getInitials', () => {
  it('should get initials from name', () => {
    expect(getInitials('Brendan Cullen')).toBe('BC');
  });
});
