export function sortNewestFirst(posts) {
  return [...posts].sort((a, b) => b.id - a.id);
}
export function searchPosts(posts, query) {
  if (!query) return posts;
  const q = query.toLowerCase();
  return posts.filter(p => p.title.toLowerCase().includes(q) || p.author.toLowerCase().includes(q));
}
