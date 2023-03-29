import React, { useState } from "react"
import Button from "../../components/ui/button/button"
import scrollToTop from "../../external_func/scroll-to-the-top/scroll-to-the-top"

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  const style = visible
    ? "button-scroll"
    : "button-scroll button-scroll_invisible"

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  window.addEventListener("scroll", toggleVisibility)

  return (
    <Button className={style} click={() => scrollToTop} text="Go to the top" />
  )
}
