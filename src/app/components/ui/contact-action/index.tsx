"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import copyToClipboard from "@/utils/copy-to-clipboard";
import Notification from "../Notification";
import styles from "./styles";

type ContactKind = "phone" | "email";

type ContactActionTriggerProps = {
  kind: ContactKind;
  value: string;
  label: string;
  className?: string;
  placement?: "bottom" | "top";
};

export default function ContactActionTrigger({
  kind,
  value,
  label,
  className,
  placement = "bottom",
}: ContactActionTriggerProps) {
  const t = useTranslations("ContactActions");
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [showCopyNotice, setShowCopyNotice] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleCopy = () => {
    copyToClipboard(value);
    setShowCopyNotice(true);
    setOpen(false);
    setTimeout(() => setShowCopyNotice(false), 2000);
  };

  const handlePrimaryAction = () => {
    if (kind === "phone") {
      window.open(`https://wa.me/${value.replace(/\D/g, "")}`, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${value}`;
    }
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={styles.root}>
      <Notification show={showCopyNotice} />
      <button
        type="button"
        className={className ?? styles.trigger}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            className={styles.menu(placement)}
            initial={{ opacity: 0, y: placement === "top" ? -8 : 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: placement === "top" ? -6 : 6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              role="menuitem"
              className={styles.menuItem}
              onClick={handleCopy}
            >
              {t("copy")}
            </button>
            <button
              type="button"
              role="menuitem"
              className={styles.menuItem}
              onClick={handlePrimaryAction}
            >
              {kind === "phone" ? t("whatsapp") : t("sendEmail")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
