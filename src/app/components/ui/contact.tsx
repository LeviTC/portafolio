"use client"

import copyToClipboard from "@/utils/copy-to-clipboard"
import { css } from "../../../../styled-system/css"
import { useState } from "react"
import Notification from "./Notification"

const contactStyle = css({
  cursor: "pointer",
  transition: "color 0.3s ease",
  position: "relative",
  _hover: { color: "primary" },
})

export default function Contact() {
  const [show, setShow] = useState(false);

  const handleCopy = (text: string) => {
    copyToClipboard(text)
    setShow(true)
    setTimeout(() => setShow(false), 2000)
  }

  return (
    <>
      <Notification show={show} />
        <div className={css({ display: "flex", mt: "50px", gap: "100px", color: "white"})}>
          <p className={contactStyle} onClick={() => handleCopy("+522227448864")}>
            (+52) 222 744 8864
          </p>
          <p className={contactStyle} onClick={() => handleCopy("erletaco@outlook.com")}>
            erletaco@outlook.com
          </p>
      </div>
    </>
  )
}