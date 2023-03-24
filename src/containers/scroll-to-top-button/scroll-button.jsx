import React, { useState } from "react"
import Button from "../../components/ui/button/button"

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

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  window.addEventListener("scroll", toggleVisibility)

  return <Button className={style} click={scroll} text="Go to the top" />
}
