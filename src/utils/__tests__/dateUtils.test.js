import formatLocaleTime from '../dateUtils'

test('should time format to look nice', () => {
  expect(formatLocaleTime(new Date('October 13, 2021, 16:01:26'))).toEqual('04:01 pm')
})