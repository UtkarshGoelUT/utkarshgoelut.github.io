module.exports = {
  reactStrictMode: true,
  build: {
    vendor: ["scrollmagic"],
  },
  plugins: [
    // ssr: false to only include it on client-side
    { src: "~/plugins/scrollmagic.js", ssr: false },
  ],
};
