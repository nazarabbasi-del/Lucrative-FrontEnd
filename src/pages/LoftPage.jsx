import React from 'react';
import useReveal from '../hooks/useReveal.js';

import Nav from '../sections/Nav.jsx';
import LoftHero from '../sections/loft/LoftHero.jsx';
import LoftProblem from '../sections/loft/LoftProblem.jsx';
import LoftUnifiedBrain from '../sections/loft/LoftUnifiedBrain.jsx';
import LoftWhyChoose from '../sections/loft/LoftWhyChoose.jsx';
import LoftTeams from '../sections/loft/LoftTeams.jsx';
import LoftComparison from '../sections/loft/LoftComparison.jsx';
import LoftPersonas from '../sections/loft/LoftPersonas.jsx';
import GovernancePricing from '../sections/governance/GovernancePricing.jsx';
import LoftFAQ from '../sections/loft/LoftFAQ.jsx';
import LoftClosingCTA from '../sections/loft/LoftClosingCTA.jsx';
import Footer from '../sections/Footer.jsx';

export default function LoftPage() {
  useReveal();
  return (
    <>
      <Nav />
      <LoftHero />
      <LoftProblem />
      <LoftUnifiedBrain />
      <LoftWhyChoose />
      <LoftTeams />
      <LoftComparison />
      <LoftPersonas />
      <GovernancePricing />
      <LoftFAQ />
      <LoftClosingCTA />
      <Footer />
    </>
  );
}