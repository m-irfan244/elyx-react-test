import React from "react";
import { BrowserRouter } from "react-router-dom";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterMoment from "@mui/lab/AdapterMoment";
import { PreLoader } from "./Components/Common/Preloader";

import { DefaultLayout } from "./AppLayout/DefaultLayout";

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <React.Suspense fallback={<PreLoader />}>
          <DefaultLayout />
        </React.Suspense>
      </LocalizationProvider>
    </BrowserRouter>
  );
};
