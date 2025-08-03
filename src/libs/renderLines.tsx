export function renderLines (text: string, className = 'block mb-2') {
  const lines = text.split('\n');
  return lines.map((line, idx) => {
    // Regex para encontrar <strong>...</strong>
    const parts = line.split(/(<strong>.*?<\/strong>)/g);
    return (
      <span key={idx} className={idx < lines.length - 1 ? className : 'block'}>
        {parts.map((part, i) =>
          part.startsWith('<strong>') && part.endsWith('</strong>')
            ? <strong key={i}>{part.slice(8, -9)}</strong>
            : part
        )}
      </span>
    );
  });
}