module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "module-resolver",
    {
      "root": ["./src"],
      "extensions": [
        ".ts",
        ".tsx"
      ],
      "alias": {
        "@navigation": "./src/navigation",
        "@features": "./src/features",
        "@views": "./src/views",
        "@ui": "./src/ui",
      }
    }

  ]
}
