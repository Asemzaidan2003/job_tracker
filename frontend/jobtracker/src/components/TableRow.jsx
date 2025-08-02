const TableRow = ({
  companyName,
  companyEmail,
  companyPhone,
  component,
  icon,
}) => {
  return (
    <tr className="border-b-4 border-border last:border-b-0">
      <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
        {companyName}
      </td>
      <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-text-secondary hidden md:table-cell">
        {companyEmail}
      </td>
      <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-text-secondary hidden lg:table-cell">
        {companyPhone}
      </td>
      <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
        {component}
      </td>
      <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
        {icon}
      </td>
    </tr>
  );
};

export default TableRow