import React from 'react';
import { VLogo } from '../icons.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = ['How it works', 'CRMs', 'Pricing', 'FAQ'];

  const services = [
    { label: 'Lucrative Sales', href: '#sales' },
    { label: 'Lucrative Marketing', href: '#marketing' },
    { label: 'Lucrative Analytics', href: '#analytics' },
    { label: 'Lucrative Quote', href: '#quote' },
    { label: 'Lucrative Governance', href: '#governance' },
  ];

  return (
    <header className="nav">
      <div className="container">
        <a href="#top" className="logo">
          LUCRAT<VLogo size={20} />E&nbsp;AI
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {l}
            </a>
          ))}

          {/* Services Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="nav-dropdown-trigger">
              Services
              <span className={`dropdown-arrow ${open ? 'open' : ''}`}>
                ↓
              </span>
            </button>

            {open && (
              <div className="nav-dropdown-menu">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="nav-dropdown-item"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="nav-right">
          <a href="#signin" className="nav-signin">
            Sign in
          </a>

          <a href="#audit" className="btn btn-primary btn-sm">
            Start free audit
          </a>
        </div>
      </div>
    </header>
  );
}