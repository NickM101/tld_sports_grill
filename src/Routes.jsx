import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import SportsAtmosphere from "pages/sports-atmosphere";
import Homepage from "pages/homepage";
import LocationVisit from "pages/location-visit";
import GalleryShowcase from "pages/gallery-showcase";
import AboutStory from "pages/about-story";
import ContactEvents from "pages/contact-events";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/sports-atmosphere" element={<SportsAtmosphere />} />
        <Route path="/location-visit" element={<LocationVisit />} />
        <Route path="/gallery-showcase" element={<GalleryShowcase />} />
        <Route path="/about-story" element={<AboutStory />} />
        <Route path="/contact-events" element={<ContactEvents />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;