import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import routes from "application/routes";
import { QueryClientProvider, QueryClient } from "react-query";
import { HelmetProvider } from "react-helmet-async";

import { AppLayout, Loader } from "presentation-layer/components";
import { ROUTER_PATH_LIST } from "application/constants";
import {  ReferenceCategoryContextProvider } from "application/contexts/CategoryContext"

import "App.scss";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
      <ReferenceCategoryContextProvider>
        <Router basename="/">
          <AppLayout>
            <Suspense fallback={<Loader />}>
              <Switch>
                {routes.map(({ component: Component, ...rest }) => (
                  <Route
                    {...rest}
                    key={rest.path}
                    render={(props: any) => <Component {...props} />}
                    exact
                  />
                ))}
                <Redirect from="*" to={ROUTER_PATH_LIST.default} />
              </Switch>
            </Suspense>
          </AppLayout>
        </Router>
        </ReferenceCategoryContextProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
