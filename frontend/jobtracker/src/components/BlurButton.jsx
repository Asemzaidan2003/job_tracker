import { useState } from 'react';
const BlurButton = ({
    text,
    icon,
    blurColor = "secondary",
    borderColor = "secondary",
    iconRight = false,
    handleClick,
    bg_color = "transparent",
}) => {
  const colorMap = {
    primary: '#6366F1',
    secondary: '#22D3EE',
    background: '#0F172A',
    surface: '#1E293B',
    'text-primary': '#E2E8F0',
    'text-secondary': '#94A3B8',
    success: '#10B981',
    error: '#F43F5E',
    warning: '#F59E0B',
    info: '#38BDF8',
    border: '#334155',
    hoverOverlay: '#1E293B99',
  };
  function hexToRgba(hex, alpha = 0.4) {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  const blurHex = colorMap[blurColor] || blurColor;
  const borderHex = colorMap[borderColor] || borderColor;
  const bgHex = colorMap[bg_color] || bg_color;
  const blurShadow = `0 0 12px 8px ${hexToRgba(blurHex, 0.4)}`;
  const activeShadow = `0 0 4px 2px ${hexToRgba(blurHex, 0.3)}`;

  // State to manage shadow
  const [shadow, setShadow] = useState(activeShadow);

  return (
    <button
    onClick={handleClick}
      className="p-2 border-2 rounded-full flex items-center gap-2 transition-colors active:scale-95 text-xs sm:text-sm justify-center md:text-base"
      style={{
        backgroundColor: bgHex,
        borderColor: borderHex,
        color: borderHex,
        boxShadow: shadow,
      }}
      onMouseEnter={() => setShadow(blurShadow)}
      onMouseLeave={() => setShadow(activeShadow)}
      onMouseDown={() => setShadow(activeShadow)}
      onMouseUp={() => setShadow(blurShadow)}
    >
      {iconRight ? (
        <>
          <span>{text}</span>
          {icon}
        </>
      ) : (
        <>
          {icon}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

export default BlurButton;