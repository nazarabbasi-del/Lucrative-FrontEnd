import React from 'react';
import useReveal from '../hooks/useReveal.js';

import Nav from '../sections/Nav.jsx';
import GovernanceHero from '../sections/governance/GovernanceHero.jsx';
import GovernanceDashboardGrid from '../sections/governance/GovernanceDashboardGrid.jsx';
import GovernanceProblem from '../sections/governance/GovernanceProblem.jsx';
import FindFixGovern from '../sections/governance/FindFixGovern.jsx';
import MultiCRMDiagram from '../sections/governance/MultiCRMDiagram.jsx';
import GovernanceComparison from '../sections/governance/GovernanceComparison.jsx';
import GovernancePersonas from '../sections/governance/GovernancePersonas.jsx';
import GovernancePricing from '../sections/governance/GovernancePricing.jsx';
import FAQ from '../sections/FAQ.jsx';
import GovernanceClosingCTA from '../sections/governance/GovernanceClosingCTA.jsx';
import Footer from '../sections/Footer.jsx';

export default function GovernancePage() {
  useReveal();
  return (
    <div className="gov-page">
      <Nav />
      <GovernanceHero />
      <GovernanceDashboardGrid />
      <GovernanceProblem />
      <FindFixGovern />
      <MultiCRMDiagram />
      <GovernanceComparison />
      <GovernancePersonas />
      <GovernancePricing />
      <FAQ />
      <GovernanceClosingCTA />
      <Footer />
    </div>
  );
}
