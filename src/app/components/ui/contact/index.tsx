"use client";

import ContactActionTrigger from "../contact-action";
import styles from "./styles";

const PHONE_VALUE = "+522227448864";
const EMAIL_VALUE = "erletaco@outlook.com";

export default function Contact() {
  return (
    <div className={styles.container}>
      <ContactActionTrigger
        kind="phone"
        value={PHONE_VALUE}
        label="(+52) 222 744 8864"
        className={styles.contactItem}
      />
      <ContactActionTrigger
        kind="email"
        value={EMAIL_VALUE}
        label="erletaco@outlook.com"
        className={styles.contactItem}
      />
    </div>
  );
}
