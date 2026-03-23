"use client"
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles";
import { useEffect } from "react";

interface ModalProps {
  show: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ show, onClose, children }: ModalProps) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"  // <-- agrega esto
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""  // <-- y esto
    }
  
    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [show])
  
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
            className={styles.backdrop}
          />

          {/* contenido */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.2 }}
            className={styles.container}
          
          >
            <button
              onClick={onClose}
              className={styles.closeButton}
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