import React from 'react';
import useReveal from '../hooks/useReveal.js';

import Nav from '../sections/Nav.jsx';
import StratumHero from '../sections/stratum/StratumHero.jsx';
import StratumDashboardShowcase from '../sections/stratum/StratumDashboardShowcase.jsx';
import StratumProblem from '../sections/stratum/StratumProblem.jsx';
import StratumFeatureGrid from '../sections/stratum/StratumFeatureGrid.jsx';
import StratumMondayTimeline from '../sections/stratum/StratumMondayTimeline.jsx';
import StratumIntegrationsHub from '../sections/stratum/StratumIntegrationsHub.jsx';
import StratumPersonas from '../sections/stratum/StratumPersonas.jsx';
import StratumWhatChanges from '../sections/stratum/StratumWhatChanges.jsx';
import StratumWhyChoose from '../sections/stratum/StratumWhyChoose.jsx';
import StratumFAQ from '../sections/stratum/StratumFAQ.jsx';
import StratumClosingCTA from '../sections/stratum/StratumClosingCTA.jsx';
import Footer from '../sections/Footer.jsx';

export default function StratumPage() {
  useReveal();
  return (
    <>
      <Nav />
      <StratumHero />
      <StratumDashboardShowcase />
      <StratumProblem />
      <StratumFeatureGrid />
      <StratumMondayTimeline />
      <StratumIntegrationsHub />
      <StratumPersonas />
      <StratumWhatChanges />
      <StratumWhyChoose />
      <StratumFAQ />
      <StratumClosingCTA />
      <Footer />
    </>
  );
}