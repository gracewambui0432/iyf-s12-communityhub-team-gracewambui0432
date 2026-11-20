import { sortNewestFirst, searchPosts } from './posts';
const posts = [
  { id: 1, title: 'Hello', author: 'Claire' },
  { id: 2, title: 'React Tips', author: 'Grace' },
];
test('sorts newest first', () => {
  expect(sortNewestFirst(posts)[0].id).toBe(2);
});
test('searches by title', () => {
  expect(searchPosts(posts, 'react').length).toBe(1);
});
test('searches by author', () => {
  expect(searchPosts(posts, 'claire').length).toBe(1);
});
