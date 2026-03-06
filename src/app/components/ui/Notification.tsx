"use client"

import { css } from "../../../../styled-system/css"
import { AnimatePresence, motion } from "framer-motion"

interface CopyNotificationProps {
  show: boolean
  message?: string
}

export default function Notification({ show, message = "Copied to clipboard" }: CopyNotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={css({
            position: "fixed",
            top: "100px",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(17, 17, 17, 0.8)",
            backdropFilter: "blur(10px)",  
            color: "white",
            fontSize: "14px",
            padding: "5px 20px",
            borderRadius: "14px",
            zIndex: 999,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          })}
        >
          <span className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            color: "#EB4A4A",
            fontSize: "12px",
          })}>
            ✓
          </span>
          <span className={css({ color: "white" })}>
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}