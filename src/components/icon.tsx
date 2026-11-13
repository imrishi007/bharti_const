import type { ReactNode } from "react";

const icons = {
  arrow: <><path d="M3 12h17"/><path d="m14 6 6 6-6 6"/></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/></>,
  calendar: <><rect x="2.5" y="4" width="19" height="18" rx="1"/><path d="M7 2v5m10-5v5M3 9h18m-14 4h2m2 0h2m2 0h2M7 17h2m2 0h2m2 0h2"/></>,
  road: <><path d="m2 21 6.5-18M22 21 15.5 3M12 3v3m0 3v4m0 3v5"/></>,
  bridge: <><path d="M1 13h22M1 17c6-6 16-6 22 0M3 8v13M21 8v13M3 13c2-2 5-7 9-7s7 5 9 7M7 9v4m5-7v7m5-4v4"/></>,
  water: <><path d="M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 14c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 19c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/></>,
  dam: <><path d="M2 5h20M6 5v12m12-12v12M6 17h12M9 6l1 10m5-10-1 10M2 21c2 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2"/></>,
  menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
  close: <path d="m5 5 14 14M19 5 5 19"/>,
  down: <path d="m6 9 6 6 6-6"/>,
  file: <><path d="M6 2h8l4 4v16H6zM14 2v5h4M9 12h6m-6 4h6"/></>,
  person: <><circle cx="12" cy="8" r="3.5"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></>,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{icons[name]}</svg>;
}

export function Ornament() {
  return <svg viewBox="0 0 30 26" aria-hidden="true" fill="currentColor">
    <path d="M15 1c.8 4.2 5.7 4.7 5.7 8.4 0 1.8-1.1 3.2-3 3.8.7-2.5-.8-3.4-2.7-5.4-1.9 2-3.4 2.9-2.7 5.4-1.9-.6-3-2-3-3.8C9.3 5.7 14.2 5.2 15 1ZM5.5 10.4c3.1 0 5 2.2 5 4.7-.9-1-2.2-1.1-2.9-.3-1.3 1.5 1 3.5 4 3.1-1.7 2.8-5.8 2.8-7.1.2L1 13.4c1.6.2 2.3-3 4.5-3Zm19 0c-3.1 0-5 2.2-5 4.7.9-1 2.2-1.1 2.9-.3 1.3 1.5-1 3.5-4 3.1 1.7 2.8 5.8 2.8 7.1.2l3.5-4.7c-1.6.2-2.3-3-4.5-3Z"/><path d="M15 12c2 2.4 2.7 4.2 1 6.9l2.3 1.5L15 25l-3.3-4.6 2.3-1.5c-1.7-2.7-1-4.5 1-6.9Z"/>
  </svg>;
}
