"use client"

import { useSyncExternalStore } from "react"
import { createPortal } from "react-dom"
import { css } from "../../../../styled-system/css"
import { AnimatePresence, motion } from "framer-motion"

interface CopyNotificationProps {
  show: boolean
  message?: string
}

const emptySubscribe = () => () => {}

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false)
}

export default function Notification({ show, message = "Copied to clipboard" }: CopyNotificationProps) {
  const isClient = useIsClient()

  if (!isClient) {
    return null
  }

  return createPortal(
    <div
      className={css({
        position: "fixed",
        left: "50%",
        top: "100px",
        transform: "translateX(-50%)",
        zIndex: 999,
        pointerEvents: "none",
      })}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={css({
              backgroundColor: "rgba(17, 17, 17, 0.8)",
              backdropFilter: "blur(10px)",
              color: "white",
              fontSize: "14px",
              padding: "5px 20px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            })}
          >
            <span
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
                color: "primary",
                fontSize: "12px",
              })}
            >
              ✓
            </span>
            <span className={css({ color: "white", "tablet-smDown": { fontSize: "11px" } })}>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  )
}
