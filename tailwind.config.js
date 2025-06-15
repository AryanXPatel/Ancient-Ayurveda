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

        // Responsive Ayurveda-specific typography scale
        hero: [
          "2rem", // Mobile: 32px
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            "@screen sm": "2.5rem", // Tablet: 40px
            "@screen lg": "3.5rem", // Desktop: 56px
          },
        ],
        display: [
          "1.75rem", // Mobile: 28px
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            "@screen sm": "2rem", // Tablet: 32px
            "@screen lg": "2.5rem", // Desktop: 40px
          },
        ],
        h1: [
          "1.5rem", // Mobile: 24px
          {
            lineHeight: "1.3",
            "@screen sm": "1.75rem", // Tablet: 28px
            "@screen lg": "2rem", // Desktop: 32px
          },
        ],
        h2: [
          "1.25rem", // Mobile: 20px
          {
            lineHeight: "1.4",
            "@screen sm": "1.375rem", // Tablet: 22px
            "@screen lg": "1.5rem", // Desktop: 24px
          },
        ],
        h3: [
          "1.125rem", // Mobile: 18px
          {
            lineHeight: "1.5",
            "@screen lg": "1.25rem", // Desktop: 20px
          },
        ],
        "body-large": [
          "1rem", // Mobile: 16px
          {
            lineHeight: "1.7",
            "@screen lg": "1.125rem", // Desktop: 18px
          },
        ],
        body: ["1rem", { lineHeight: "1.7" }], // Regular body text
        "body-small": ["0.875rem", { lineHeight: "1.6" }], // Small body text
        quote: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0.01em" }], // Testimonials
        caption: ["0.75rem", { lineHeight: "1.5" }], // Captions, meta text
        "button-large": [
          "1rem", // Mobile: 16px
          {
            lineHeight: "1.5",
            "@screen lg": "1.125rem", // Desktop: 18px
          },
        ],
        button: ["0.875rem", { lineHeight: "1.5" }], // Regular buttons
        "doctor-name": [
          "1.125rem", // Mobile: 18px
          {
            lineHeight: "1.6",
            fontWeight: "600",
            "@screen lg": "1.25rem", // Desktop: 20px
          },
        ],
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
