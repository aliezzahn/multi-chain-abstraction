await Bun.build({
  entrypoints: ["./src/index.js"],
  outdir: "./build",
  target: "bun",
  sourcemap: "external",
  minify: true,
  compile: true,
});