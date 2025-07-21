import { FaChevronDown } from "react-icons/fa";

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

const OptionsList = ({
  list,
  text_color = "text-secondary",
  iconColor = "secondary",
  icon,
  applicationValue,
  onChange
}) => {
  const statusColorKey = applicationValue; // "Applied", "Rejected", etc.
  const colorValue = colorMap[statusColorKey] || colorMap[text_color] || text_color;
  const iconColorValue = colorMap[statusColorKey] || colorMap[iconColor] || iconColor;

  return (
    <div className="relative max-w-xs sm:max-w-sm md:max-w-md">
      <select
        value={applicationValue}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-surface rounded-xl text-sm sm:text-base focus:outline-none focus:border-secondary transition-colors cursor-pointer w-full pr-8"
        style={{ color: colorValue }}
      >
        {list.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className="bg-surface text-text-secondary hover:bg-secondary hover:text-white text-center"
          >
            {item.value}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        {icon ? icon : <FaChevronDown style={{ color: iconColorValue }} />}
      </span>
    </div>
  );
};

export default OptionsList;
