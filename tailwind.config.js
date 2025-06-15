/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f0",
          500: "#2d5016",
          900: "#0f1a08",
        },
        accent: {
          500: "#d4af37",
        },
        terracotta: {
          500: "#cd853f",
        },
      },
      fontFamily: {
        // Primary sans-serif - Inter (body text, buttons, labels)
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],

        // Elegant serif - Cormorant Garamond (main headings, taglines)
        heading: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],

        // Readable serif - Lora (subheadings, article titles)
        subheading: ["Lora", "Georgia", "Times New Roman", "serif"],

        // Traditional serif - Playfair Display (quotes, testimonials, special text)
        accent: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],

        // Clean sans-serif alias
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Base accessibility sizes
        xs: ["0.75rem", { lineHeight: "1.5" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.6" }], // 14px
        base: ["1rem", { lineHeight: "1.6" }], // 16px (minimum for accessibility)
        lg: ["1.125rem", { lineHeight: "1.6" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.5" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1.4" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1.3" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "1.2" }], // 36px
        "5xl": ["3rem", { lineHeight: "1.1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px

        // Ayurveda-specific typography scale
        hero: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // Hero headings
        display: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }], // Display headings
        h1: ["2rem", { lineHeight: "1.3" }], // Main headings
        h2: ["1.5rem", { lineHeight: "1.4" }], // Subheadings
        h3: ["1.25rem", { lineHeight: "1.5" }], // Section headings
        "body-lg": ["1.125rem", { lineHeight: "1.7" }], // Large body text
        body: ["1rem", { lineHeight: "1.7" }], // Regular body text
        "body-sm": ["0.875rem", { lineHeight: "1.6" }], // Small body text
        quote: ["1.25rem", { lineHeight: "1.6", letterSpacing: "0.01em" }], // Testimonials
        caption: ["0.75rem", { lineHeight: "1.5" }], // Captions, meta text
      },
      letterSpacing: {
        tightest: "-0.025em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.05em",
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.2",
        normal: "1.5",
        relaxed: "1.6",
        loose: "1.7",
        "extra-loose": "1.8",
      },
    },
  },
  plugins: [],
};
