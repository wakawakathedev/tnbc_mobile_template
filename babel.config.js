module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "extensions": [
          ".ts",
          ".tsx"
        ],
        "alias": {
          "@config": "./src/config/index.ts",
          "@features": "./src/features",
          "@navigation": "./src/navigation",
          "@store": "./src/store",
          "@views": "./src/views",
          "@ui": "./src/ui",
        }
      }
    ]
  ]
}
