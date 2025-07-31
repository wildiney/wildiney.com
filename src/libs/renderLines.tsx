export function renderLines (text: string, className = 'block mb-2') {
  const lines = text.split('\n');
  return lines.map((line, idx) => (
    <span key={idx} className={idx < lines.length - 1 ? className : 'block'}>
      {line}
    </span>
  ));
}