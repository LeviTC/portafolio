import { Project } from "@/types/project";

export const PROFESSIONAL_PROJECTS: Project[] = [
  {
    title: "B Life ERP",
    shortDescription: "Developed and maintained core modules for an ERP system used for order processing, inventory management, and warehouse operations.",
    description: "Developed and maintained multiple modules for an ERP system used to manage warehouse operations, orders, and inventory. Built interactive dashboards for business metrics visualization, implemented order management interfaces, and developed warehouse tools such as barcode-based order picking. Also integrated secure authentication with Cloudflare CAPTCHA.",
    technologies: ["React", "TypeScript", "Vite", "Zustand", "Redux"],
    imagePath: "/blife-erp.png",
  },
  {
    title: "B Life MX (e-commerce)",
    shortDescription: "Developed and maintained the B Life MX e-commerce platform with responsive design and performance improvements using Next.js.",
    description: "Developed and maintained the B Life MX e-commerce platform, implementing responsive design and improving performance by leveraging Next.js features such as server-side rendering and optimized routing.",
    technologies: ["React", "TypeScript", "Next.js"],
    imagePath: "/blife-mx.png",
    urlSite: "https://blife.mx/",
  },
  {
    title: "B Life Mayoreo (e-commerce)",
    shortDescription: "Developed and maintained the B Life Mayoreo wholesale e-commerce platform with responsive design and performance improvements.",
    description: "Developed and maintained the B Life Mayoreo wholesale e-commerce platform, implementing responsive design and improving performance to support a smooth purchasing experience for business customers.",
    technologies: ["React", "TypeScript", "Vite", "Redux"],
    imagePath: "/blife-mayoreo.png",
    urlSite: "https://mayoreo.blife.mx/",
  },
  {
    title: "B Life USA (e-commerce)",
    shortDescription: "Developed and maintained the B Life USA e-commerce platform with responsive design and performance improvements.",
    description: "Developed and maintained the B Life USA e-commerce platform, implementing responsive design and improving performance to deliver a fast and reliable shopping experience for U.S. customers.",
    technologies: ["React", "TypeScript", "Vite", "Redux"],
    imagePath: "/blife-usa.png",
    urlSite: "https://blifesupplements.com/",
  },
  {
    title: "B Life App",
    shortDescription: "Developed and maintained a mobile e-commerce application for browsing products, placing orders, and tracking order status.",
    description: "Developed and maintained a mobile e-commerce application that allowed users to browse products, place orders, and track order status. Implemented interfaces for product listings, order management, and order tracking, and integrated deep links to enable direct navigation to specific products and sections within the app.",
    technologies: ["Flutter", "Dart", "Riverpod"],
    imagePath: "/blife-app.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.blifemx",
    iosUrl: "https://apps.apple.com/mx/app/b-life/id6472727690",
  },
  {
    title: "B Life Checkout",
    shortDescription: "Developed and maintained the checkout flow for the B Life e-commerce platform.",
    description: "Developed and maintained the checkout flow for the B Life e-commerce platform. Integrated backend payment endpoints for processing transactions and implemented shipping rate calculations by consuming APIs from FedEx, Estafeta, and DHL based on the user's delivery address.",
    technologies: [ "React", "TypeScript", "Vite", ],
    imagePath: "/blife-checkout.png",
  },
  {
    title: "B Life Armado (App)",
    shortDescription: "Developed and maintained a warehouse mobile app used by staff to scan products and process order packing using Zebra PDAs.",
    description: "Developed and maintained a warehouse mobile application used by staff to process and pack orders. Implemented barcode scanning workflows using Zebra PDA devices to verify products and integrated label printing for order identification during the packing process.",
    technologies: ["React Native (CLI)", "TypeScript", "Redux"],
  },
  {
    title: "B Life escaneo (App)",
    shortDescription: "Developed and maintained a warehouse mobile app used to dispatch packed orders and assign shipments to shipping carriers.",
    description: "Developed and maintained a warehouse mobile application used to dispatch packed orders. Implemented workflows to register outgoing shipments, assign orders to shipping carriers, and track which carrier trip each shipment was associated with during the delivery process.",
    technologies: ["React Native (Expo)", "TypeScript", "Redux"],
  },
];