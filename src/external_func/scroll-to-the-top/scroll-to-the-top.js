/**
 * Scroll to the top function
 * @param smooth - bool, if true scrollBehavior will be "smooth", by default it`s value is "auto"
 */
export default function scrollToTop(smooth) {
  const scrollBehavior = smooth ? "smooth" : "auto"
  window.scrollTo({
    top: 0,
    behavior: scrollBehavior,
  })
}
