"use client"
import { AnimatePresence, motion } from "framer-motion";
import { css } from "../../../../../styled-system/css";

interface ModalProps {
  show: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ show, onClose, children }: ModalProps) {
  return (
    <AnimatePresence
    >
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={css({
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(12px)",
              zIndex: 200,
            })}
          />

          {/* contenido */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.2 }}
            className={css({
              position: "fixed",
              top: "50%",
              left: "50%",
              backgroundColor: "#000",
              border: "1px solid #333",
              borderRadius: "8px",
              padding: "40px",
              zIndex: 201,
              maxWidth: "900px",
              width: "90%",
            })}
          
          >
            <button
              onClick={onClose}
              className={css({
                position: "absolute",
                top: "16px",
                right: "20px",
                background: "none",
                border: "none",
                color: "#aaaaaa",
                fontSize: "24px",
                cursor: "pointer",
                transition: "color 0.2s ease",
                _hover: { color: "white" },
              })}
            >
              ✕
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}