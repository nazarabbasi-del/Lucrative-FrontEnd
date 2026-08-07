import React from 'react';
import useReveal from '../hooks/useReveal.js';

import Nav from '../sections/Nav.jsx';
import LoftMarketingHero from '../sections/loftmarketing/LoftMarketingHero.jsx';
import LoftMarketingProblem from '../sections/loftmarketing/LoftMarketingProblem.jsx';
import LoftMarketingBrain from '../sections/loftmarketing/LoftMarketingBrain.jsx';
import LoftMarketingWorkspace from '../sections/loftmarketing/LoftMarketingWorkspace.jsx';
import LoftTeams from '../sections/loft/LoftTeams.jsx';
import LoftMarketingComparison from '../sections/loftmarketing/LoftMarketingComparison.jsx';
import LoftPersonas from '../sections/loft/LoftPersonas.jsx';
import GovernancePricing from '../sections/governance/GovernancePricing.jsx';
import LoftMarketingFAQ from '../sections/loftmarketing/LoftMarketingFAQ.jsx';
import LoftClosingCTA from '../sections/loft/LoftClosingCTA.jsx';
import Footer from '../sections/Footer.jsx';

export default function LoftMarketingPage() {
  useReveal();
  return (
    <>
      <Nav />
      <LoftMarketingHero />
      <LoftMarketingProblem />
      <LoftMarketingBrain />
      <LoftMarketingWorkspace />
      <LoftTeams />
      <LoftMarketingComparison />
      <LoftPersonas />
      <GovernancePricing />
      <LoftMarketingFAQ />
      <LoftClosingCTA />
      <Footer />
    </>
  );
}