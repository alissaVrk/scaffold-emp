// Import the global style enabling tailwind classes
import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ["Introduction", "Foundation", "Components", "*"]
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: "white",
    values: [
      {
        name: "white",
        value: "#FFFFFF"
      },
      {
        name: "beige",
        value: "#EDE6DD"
      },
      {
        name: "beige-64",
        value: "#F4EFE9"
      },
      {
        name: "dark",
        value: "#1E1928"
      },
      {
        name: "aubergine",
        value: "#592141"
      },
      {
        name: "sand",
        value: "#DFB995"
      },
      {
        name: "mist",
        value: "#A0B4BB"
      }
    ]
  }
};
