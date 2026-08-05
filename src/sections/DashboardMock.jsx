import React from 'react';
import { VLogo } from '../icons.jsx';
import {
  IconHome, IconDollar, IconActivity, IconLink, IconGear,
  IconSearch, IconSparkle, IconBell, IconWallet, IconEnvelope, IconArrowUpRight,
} from '../icons.jsx';
import { HubSpotLogo } from './BrandLogos.jsx';

const HubspotIcon = () => <HubSpotLogo h={18} />;

export default function DashboardMock({ compact = false }) {
  return (
    <div className="dash-mock">
      <div className="dash-sidebar">
        <div className="logo-mark"><VLogo size={22} /></div>
        <div className="icon-btn active"><IconHome /></div>
        <div className="icon-btn"><IconDollar /></div>
        <div className="icon-btn"><IconActivity /></div>
        <div className="icon-btn"><IconLink /></div>
        <div className="icon-btn"><IconGear /></div>
      </div>
      <div className="dash-main">
        <div className="dash-topbar">
          <div className="dash-search"><IconSearch /> Search</div>
          <div className="icon-btn"><IconSparkle /></div>
          <div className="icon-btn"><IconBell /></div>
          <div className="icon-btn"><IconGear /></div>
          <div className="dash-avatar"><span className="av" />Awais</div>
        </div>

        {!compact && (
          <div className="dash-cards">
            <div className="dash-card">
              <h5>Connected Apps</h5>
              <div className="dash-item">
                <div className="ic"><HubspotIcon /></div>
                <div className="txt"><b>Hubspot Audit &amp; Optimization</b><span>Used 2 times · Costs 100 credits per use</span></div>
              </div>
              <div className="dash-item">
                <div className="ic"><IconEnvelope /></div>
                <div className="txt"><b>Email Deliverability Checker</b><span>Used 3 times · Costs 10 credits per use</span></div>
              </div>
            </div>
            <div className="dash-card">
              <h5>Quick Actions</h5>
              <div className="dash-item">
                <div className="ic"><IconWallet /></div>
                <div className="txt"><b>Purchase Credits</b><span>Buy more credits to use services</span></div>
              </div>
              <div className="dash-item">
                <div className="ic"><IconLink /></div>
                <div className="txt"><b>Connect Accounts</b><span>Integrate your external accounts</span></div>
              </div>
            </div>
          </div>
        )}

        <div className="dash-activities">
          <h5>Recent Activities <IconArrowUpRight /></h5>
          {[
            ['Connected Email Deliverability Checker', 'Oct 29, 2025, 02:35 PM', '-10 Credits'],
            ['HubSpot audit completed successfully', 'Oct 24, 2025, 02:08 PM', '-100 Credits'],
          ].map(([title, date, credit]) => (
            <div className="activity-row" key={title}>
              <div className="ic"><HubspotIcon /></div>
              <div className="txt"><b>{title}</b><span>{date}</span></div>
              <span className="badge-credit">{credit}</span>
              <span className="mini-btn">View Full Report</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
