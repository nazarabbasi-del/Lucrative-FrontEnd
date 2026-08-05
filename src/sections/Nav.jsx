import React, { useState } from 'react';
import { VLogo } from '../icons.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = ['How it works', 'CRMs', 'Pricing', 'FAQ'];
  return (
    <header className="nav">
      <div className="container">
        <a href="#top" className="logo">
          LUCRAT<VLogo size={20} />E&nbsp;AI
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}>{l}</a>
          ))}
        </nav>
        <div className="nav-right">
          <a href="#signin" className="nav-signin">Sign in</a>
          <a href="#audit" className="btn btn-primary btn-sm">Start free audit</a>
        </div>
      </div>
    </header>
  );
}
