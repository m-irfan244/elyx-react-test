import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { AppContainer } from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalManager } from "./Hooks/globalContext/globalManager";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { CustomTheme } from "./AppLayout/theme";
import NiceModal from "@ebay/nice-modal-react";

const queryClient = new QueryClient();

ReactDOM.render(
  <>
    <QueryClientProvider client={queryClient}>
      <GlobalManager>
        <ThemeProvider theme={CustomTheme}>
          <NiceModal.Provider>
            <AppContainer />
          </NiceModal.Provider>
        </ThemeProvider>
      </GlobalManager>
    </QueryClientProvider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
