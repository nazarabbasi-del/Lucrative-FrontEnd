import React from 'react';
import logosRow from '../assets/logos-hubspot-mailchimp-snowflake.png';
import salesforceLogo from '../assets/logo-salesforce.png';
import hubspotLogo from '../assets/logo-hubspot.png';

// Real provided brand marks.
export const LogoRow = ({ h = 24, style }) => (
  <img src={logosRow} alt="HubSpot, Mailchimp, Snowflake" style={{ height: h, width: 'auto', ...style }} />
);
export const SalesforceLogo = ({ h = 22 }) => (
  <img src={salesforceLogo} alt="Salesforce" style={{ height: h, width: 'auto' }} />
);
export const HubSpotLogo = ({ h = 22 }) => (
  <img src={hubspotLogo} alt="HubSpot" style={{ height: h, width: 'auto' }} />
);
