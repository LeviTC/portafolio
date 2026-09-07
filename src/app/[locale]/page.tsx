import { setRequestLocale } from "next-intl/server";
import { css } from "../../../styled-system/css";
import Experience from "../components/sections/experience";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects/index";
import Navbar from "../components/ui/navbar";
import { Footer } from "../components/ui/footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000000",
        color: "white",
        gap: "200px",

        "tablet-lgDown": {
          gap: "150px",
        },
      })}
    >
      <Navbar />

      <Hero />

      <Experience />

      <Projects />

      <Footer />
    </main>
  );
}
