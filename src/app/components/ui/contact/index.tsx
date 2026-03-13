"use client"

import copyToClipboard from "@/utils/copy-to-clipboard"
import { useState } from "react"
import Notification from "../Notification"
import styles from "./styles"

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
      <div className={styles.container}>
        <p className={styles.contactItem} onClick={() => handleCopy("+522227448864")}>
          (+52) 222 744 8864
        </p>
        <p className={styles.contactItem} onClick={() => handleCopy("erletaco@outlook.com")}>
          erletaco@outlook.com
        </p>
      </div>
    </>
  )
}