import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import Global from "./styles/global";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <Global />
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
