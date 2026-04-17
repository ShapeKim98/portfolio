
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // ?print=1 진입 시 애니메이션/sticky 를 비활성화해 PDF 추출에 대비
  if (new URLSearchParams(window.location.search).has("print")) {
    document.documentElement.classList.add("print-mode");
  }

  createRoot(document.getElementById("root")!).render(<App />);
  