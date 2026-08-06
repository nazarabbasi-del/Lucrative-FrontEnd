import React, { useState } from 'react';
import { VLogo } from '../icons.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'CRMs', href: '#crms' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const services = [
    { label: 'Lucrative Sales', href: '/loft' },
    { label: 'Lucrative Marketing', href: '/loft-marketing' },
    { label: 'Lucrative Analytics', href: '/stratum' },
    { label: 'Lucrative Quote', href: '/quotebase' },
    { label: 'Lucrative Governance', href: '/governance' },
  ];

  return (
    <header className="nav">
      <div className="container">

        {/* Logo */}
        <a href="#top" className="logo">
          LUCRAT<VLogo size={20} />E&nbsp;AI
        </a>

        {/* Main Navigation */}
        <nav className="nav-links">

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
            >
              {link.label}
            </a>
          ))}

          {/* Services Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={open}
            >
              <span>Services</span>

              <span
                className={`dropdown-arrow ${open ? 'open' : ''}`}
              >
                ↓
              </span>
            </button>

            <div
              className={`nav-dropdown-menu ${
                open ? 'show' : ''
              }`}
            >
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="nav-dropdown-item"
                  onClick={() => setOpen(false)}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

        </nav>

        {/* Right Side */}
        <div className="nav-right">

          <a
            href="#signin"
            className="nav-signin"
          >
            Sign in
          </a>

          <a
            href="#audit"
            className="btn btn-primary btn-sm"
          >
            Start free audit
          </a>

        </div>

      </div>
    </header>
  );
}