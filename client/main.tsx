import { createRoot } from "react-dom/client";
import App from "./App";

// Initialize the React app
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);

  // Handle HMR for development
  if (import.meta.hot) {
    import.meta.hot.accept("./App", () => {
      root.render(<App />);
    });
  }
}
