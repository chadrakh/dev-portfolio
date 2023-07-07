import { lazy, Suspense } from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Landing = lazy(() => import("../../Pages/Landing/Landing"));
const Projects = lazy(() => import("../../Pages/Projects/Projects"));
const Contact = lazy(() => import("../../Pages/Contact/Contact"));

const Routes = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress/>}>
        <BrowserRoutes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </BrowserRoutes>
      </Suspense>
    </>
  );
};

export default Routes;