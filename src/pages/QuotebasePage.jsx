import React from 'react';
import useReveal from '../hooks/useReveal.js';

import Nav from '../sections/Nav.jsx';
import QuotebaseHero from '../sections/quotebase/QuotebaseHero.jsx';
import QuotebaseVerified from '../sections/quotebase/QuotebaseVerified.jsx';
import QuotebaseChatProblem from '../sections/quotebase/QuotebaseChatProblem.jsx';
import QuotebaseFeatures from '../sections/quotebase/QuotebaseFeatures.jsx';
import QuotebaseMondayTimeline from '../sections/quotebase/QuotebaseMondayTimeline.jsx';
import QuotebaseAgentDiagram from '../sections/quotebase/QuotebaseAgentDiagram.jsx';
import QuotebaseOutcomes from '../sections/quotebase/QuotebaseOutcomes.jsx';
import QuoteFAQ from '../sections/quotebase/QuoteFAQ.jsx';
import QuotebaseClosingCTA from '../sections/quotebase/QuotebaseClosingCTA.jsx';
import Footer from '../sections/Footer.jsx';

export default function QuotebasePage() {
  useReveal();
  return (
    <>
      <Nav />
      <QuotebaseHero />
      <QuotebaseVerified />
      <QuotebaseChatProblem />
      <QuotebaseFeatures />
      <QuotebaseMondayTimeline />
      <QuotebaseAgentDiagram />
      <QuotebaseOutcomes />
      <QuoteFAQ/>
      <QuotebaseClosingCTA />
      <Footer />
    </>
  );
}