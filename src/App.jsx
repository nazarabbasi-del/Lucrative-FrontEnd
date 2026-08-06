import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useReveal from './hooks/useReveal.js';

import Nav from './sections/Nav.jsx';

// Homepage sections
import Hero from './sections/Hero.jsx';
import LLMDiagram from './sections/LLMDiagram.jsx';
import LogoStrip from './sections/LogoStrip.jsx';
import ProductOverview from './sections/ProductOverview.jsx';
import PowerHouse from './sections/PowerHouse.jsx';
import ComparisonTable from './sections/ComparisonTable.jsx';
import FeaturePairs from './sections/FeaturePairs.jsx';
import ProblemTabs from './sections/ProblemTabs.jsx';
import OrbitDiagram from './sections/OrbitDiagram.jsx';
import PersonaSwitcher from './sections/PersonaSwitcher.jsx';
import CapabilitiesGrid from './sections/CapabilitiesGrid.jsx';
import Testimonial from './sections/Testimonial.jsx';
import CTABanner from './sections/CTABanner.jsx';
import FAQ from './sections/FAQ.jsx';
import ClosingCTA from './sections/ClosingCTA.jsx';
import Footer from './sections/Footer.jsx';

// Service pages
import GovernancePage from './pages/GovernancePage.jsx';
import LoftMarketingPage from './pages/LoftMarketingPage.jsx';
import LoftPage from './pages/LoftPage.jsx';
import QuotebasePage from './pages/QuotebasePage.jsx';
import StratumPage from './pages/StratumPage.jsx';


function HomePage() {
  useReveal();

  return (
    <>
      <Nav />

      <Hero />
      <LLMDiagram />
      <LogoStrip />
      <ProductOverview />
      <PowerHouse />
      <ComparisonTable />
      <FeaturePairs />
      <ProblemTabs />
      <OrbitDiagram />
      <PersonaSwitcher />
      <CapabilitiesGrid />
      <Testimonial />
      <CTABanner />
      <FAQ />
      <ClosingCTA />

      <Footer />
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Homepage */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Services */}
        <Route
          path="/loft"
          element={<LoftPage />}
        />

        <Route
          path="/loft-marketing"
          element={<LoftMarketingPage />}
        />

        <Route
          path="/stratum"
          element={<StratumPage />}
        />

        <Route
          path="/quotebase"
          element={<QuotebasePage />}
        />

        <Route
          path="/governance"
          element={<GovernancePage />}
        />

      </Routes>
    </BrowserRouter>
  );
}