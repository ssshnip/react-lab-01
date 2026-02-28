import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ErrorBoundary from "./pages/ErrorBoundary";

const Dashboard = lazy(() => import("./pages/Dashboard"));

function Loading() {
  return <p>Loading...</p>;
}

function ErrorFallback() {
  return (
    <div>
      <h2>Something went wrong</h2>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);