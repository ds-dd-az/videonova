import React, { useEffect, useState } from "react"
import Button from "../../components/ui/button/button"
import scrollToTop from "../../external_func/scroll-to-the-top/scroll-to-the-top"

/**
 * Scroll To Top button
 *
 * becomes visible after document.documentElement.scrollTop value is more than 300,
 * onClick scrolls to the top with behavior value "smooth"
 * @returns node, Button with "go to the top" inner text
 */
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

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
  })

  const smooth = true
  const scrollFunc = () => scrollToTop(smooth)

  return <Button className={style} click={scrollFunc} text="Go to the top" />
}
