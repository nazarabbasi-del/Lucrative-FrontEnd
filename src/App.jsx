import React from 'react';
import useReveal from './hooks/useReveal.js';

import Nav from './sections/Nav.jsx';
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

export default function App() {
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
