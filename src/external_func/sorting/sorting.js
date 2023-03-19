/**
 * Sort by name function
 * @param a - first user's info object
 * @param b - second user's info object
 */
export default function sortByName(a, b) {
  if (a.slug > b.slug) return 1
  if (a.slug < b.slug) return -1
  return 0
}
