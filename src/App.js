import React, { useState, useEffect, useCallback } from 'react';

const STAGES = {
  dev: {
    label: 'Dev',
    url: 'https://or9112xy9d.execute-api.us-east-1.amazonaws.com/dev/dev',
    accentColor: '#378ADD',
    pillBg: '#E6F1FB',
    pillColor: '#185FA5',
    dotColor: '#378ADD',
  },
  prod: {
    label: 'Prod',
    url: 'https://or9112xy9d.execute-api.us-east-1.amazonaws.com/prod/prod',
    accentColor: '#639922',
    pillBg: '#EAF3DE',
    pillColor: '#3B6D11',
    dotColor: '#639922',
  },
};

function PulsingDot({ color, isError }) {
  return (
    <span style={{
      width: 6, height: 6, borderRadius: '50%', flexShrink: 0, display: 'inline-block',
      background: isError ? '#E24B4A' : color,
      animation: isError ? 'none' : 'blink 2s ease-in-out infinite',
    }} />
  );
}

function LoadingBar({ color }) {
  return (
    <div style={{ height: 4, borderRadius: 2, background: '#e0e0e0', overflow: 'hidden', marginTop: 2 }}>
      <div style={{
        height: '100%', width: '40%', borderRadius: 2, background: color,
        animation: 'slide 1s ease-in-out infinite',
      }} />
    </div>
  );
}

function StageCard({ stageKey, data }) {
  const cfg = STAGES[stageKey];
  const isLoading = data.status === 'loading';
  const isError = data.status === 'error';

  const pillStyle = {
    display: 'flex', alignItems: 'center', gap: 5,
    fontSize: 11, fontWeight: 500, padding: '4px 10px', borderRadius: 20,
    background: isError ? '#FCEBEB' : cfg.pillBg,
    color: isError ? '#A32D2D' : cfg.pillColor,
  };

  return (
    <div style={{
      background: '#fff', border: '0.5px solid #e0e0e0', borderRadius: 14,
      padding: '1.25rem', position: 'relative', overflow: 'hidden',
      transition: 'border-color 0.2s', flex: 1,
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        borderRadius: '14px 14px 0 0', background: cfg.accentColor,
      }} />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16, marginTop: 4 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#888', letterSpacing: '0.03em', textTransform: 'uppercase' }}>Stage</div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#111', marginTop: 2 }}>{cfg.label}</div>
        </div>
        <div style={pillStyle}>
          <PulsingDot color={cfg.dotColor} isError={isError} />
          <span>{isLoading ? 'conectando' : isError ? 'error' : 'activo'}</span>
        </div>
      </div>

      <div style={{ height: '0.5px', background: '#e0e0e0', margin: '0 0 14px' }} />
      <div style={{ fontSize: 11, color: '#aaa', marginBottom: 6, fontWeight: 500, letterSpacing: '0.02em' }}>Respuesta</div>
      <div style={{ fontSize: 14, fontFamily: 'monospace', color: isError ? '#c0392b' : '#111', minHeight: 20, wordBreak: 'break-word' }}>
        {isLoading ? <LoadingBar color={cfg.accentColor} /> : data.message}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14, paddingTop: 12, borderTop: '0.5px solid #e0e0e0' }}>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#aaa" strokeWidth="1.5">
          <circle cx="8" cy="8" r="6"/><path d="M8 4v4l2.5 2.5"/>
        </svg>
        <span style={{ fontSize: 11, color: '#bbb', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          /{stageKey}/{stageKey}
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [stages, setStages] = useState({
    dev: { status: 'loading', message: '', latency: null },
    prod: { status: 'loading', message: '', latency: null },
  });
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchAll = useCallback(() => {
    setStages({
      dev: { status: 'loading', message: '', latency: null },
      prod: { status: 'loading', message: '', latency: null },
    });

    Object.entries(STAGES).forEach(([key, cfg]) => {
      const t0 = Date.now();
      fetch(cfg.url)
        .then(r => r.json())
        .then(d => setStages(prev => ({ ...prev, [key]: { status: 'ok', message: d.body, latency: Date.now() - t0 } })))
        .catch(e => setStages(prev => ({ ...prev, [key]: { status: 'error', message: 'Error: ' + e.message, latency: null } })));
    });

    setLastUpdated(new Date());
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const keyframes = `
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.35} }
    @keyframes slide { 0%{transform:translateX(-100%)} 100%{transform:translateX(350%)} }
  `;

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: 640, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <style>{keyframes}</style>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#185FA5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 500, color: '#111', lineHeight: 1.2 }}>API Gateway</div>
            <div style={{ fontSize: 12, color: '#888' }}>Monitor de stages</div>
          </div>
        </div>
        <button onClick={fetchAll} style={{
          fontSize: 12, color: '#666', border: '0.5px solid #ccc', background: 'transparent',
          borderRadius: 8, padding: '6px 12px', cursor: 'pointer',
        }}>
          Actualizar
        </button>
      </div>

      <div style={{ display: 'flex', gap: 14, marginBottom: '1.25rem' }}>
        {Object.keys(STAGES).map(key => (
          <StageCard key={key} stageKey={key} data={stages[key]} />
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, color: '#bbb' }}>
          {lastUpdated ? 'Última actualización: ' + lastUpdated.toLocaleTimeString('es-MX') : '—'}
        </span>
        <div style={{ display: 'flex', gap: 6, fontSize: 11, fontFamily: 'monospace', color: '#888' }}>
          {Object.entries(stages).map(([key, d]) => (
            <span key={key}>{key}: {d.latency != null ? d.latency + 'ms' : '—'}</span>
          ))}
        </div>
      </div>
    </div>
  );
}