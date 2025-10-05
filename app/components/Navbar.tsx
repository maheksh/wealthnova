'use client';

export default function Navbar() {
  return (
    <nav className="navbar" style={{ position: 'fixed', top: 0, zIndex: 10000, width: '100%', height: '3.5rem', backgroundColor: '#121212', padding: '0.75rem', overflow: 'hidden' }}>
      <div className="navbar-content">
        <h1 className="navbar-title">WealthNova</h1>
      </div>
    </nav>
  );
}