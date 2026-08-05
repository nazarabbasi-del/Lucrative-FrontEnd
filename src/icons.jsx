import React from 'react';

export const VLogo = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="26" r="5" stroke="#E8A63D" strokeWidth="3" fill="none" />
    <circle cx="32" cy="10" r="3.4" stroke="#16181D" strokeWidth="2.6" fill="none" />
    <path d="M8 8 L20 22 L32 10" stroke="#E8A63D" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="8" cy="8" r="3" fill="#E8A63D" />
  </svg>
);

export const IconHome = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M4 11.5L12 4l8 7.5V20a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
);
export const IconDollar = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3v18M17 7.5c0-1.8-2-3-5-3s-5 1.3-5 3 2 2.8 5 3.2 5 1.6 5 3.3-2 3-5 3-5-1.2-5-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
);
export const IconActivity = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 12h4l2-8 6 16 2-8h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
export const IconLink = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M9 15l6-6M10 6l1-1a4 4 0 116 6l-1 1M14 18l-1 1a4 4 0 11-6-6l1-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
);
export const IconGear = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/><path d="M19.4 15a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1 1.55V21a2 2 0 01-4 0v-.09a1.7 1.7 0 00-1.11-1.55 1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.55-1H3a2 2 0 010-4h.09A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.34H9a1.7 1.7 0 001-1.55V3a2 2 0 014 0v.09a1.7 1.7 0 001 1.51 1.7 1.7 0 001.87-.34l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.34 1.87V9a1.7 1.7 0 001.55 1H21a2 2 0 010 4h-.09a1.7 1.7 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.3"/></svg>
);
export const IconSearch = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...p}><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
);
export const IconBell = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M10 20a2 2 0 004 0" stroke="currentColor" strokeWidth="1.7"/></svg>
);
export const IconWallet = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M3 10h18M16 14.5h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
);
export const IconSparkle = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill="currentColor"/></svg>
);
export const IconEnvelope = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
);
export const IconArrowUpRight = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}><path d="M7 17L17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
export const IconCheck = (p) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
export const IconX = (p) => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
);
export const IconAlert = (p) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l10 18H2L12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 10v4M12 17.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
);
export const IconChevronDown = (p) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
export const IconArrowLeft = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...p}><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
export const IconArrowRight = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
export const IconSend = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...p}><path d="M4 12L20 4l-6 16-3-7-7-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
);
