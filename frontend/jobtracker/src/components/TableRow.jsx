import Model from "./Model";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const TableRow = ({
  companyName,
  companyEmail,
  companyPhone,
  component,
  icon,
  companyOtherDetails,
}) => {
  const [model, setModel] = useState(false);

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
        <button onClick={() => setModel(true)}>
          {icon}
        </button>
        {model && (
          <Model setModel={setModel}>
            <div className="flex justify-between items-center p-4">
              <h1 className="text-base sm:text-2xl md:text-4xl font-inter font-bold">
                Application details
              </h1>
              <button onClick={() => setModel(false)} className="focus:outline-none">
                <IoMdCloseCircle className="w-6 h-6 sm:w-8 sm:h-8 text-error cursor-pointer hover:text-red-600" size={32} />
              </button>
            </div>
            <div className="w-full max-w-4xl text-left p-4 space-y-3 break-words">
              <p className="text-text-secondary">
                Here you can read more details about the application.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 break-words">
                <div>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">Company Name:</strong>{" "}
                    {companyOtherDetails.company_name}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">Company Email:</strong>{" "}
                    {companyOtherDetails.company_email}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">Company Phone:</strong>{" "}
                    {companyOtherDetails.company_phone_number}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">Status:</strong>{" "}
                    {companyOtherDetails.status}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-all flex flex-wrap">
                    <strong className="font-medium text-text-primary">Company Address:</strong>{" "}
                    {companyOtherDetails.company_address}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">Company Website:</strong>{" "}
                    {companyOtherDetails.company_website}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">Company LinkedIn:</strong>{" "}
                    {companyOtherDetails.company_linkedin}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">HR Name:</strong>{" "}
                    {companyOtherDetails.company_hr_name}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">HR Email:</strong>{" "}
                    {companyOtherDetails.company_hr_email}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">HR LinkedIn:</strong>{" "}
                    {companyOtherDetails.company_hr_linkedin}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">Created At:</strong>{" "}
                    {companyOtherDetails.createdAt}
                  </p>
                  <p className="text-lg text-text-secondary mb-1 break-words flex flex-wrap">
                    <strong className="font-medium text-text-primary">Updated At:</strong>{" "}
                    {companyOtherDetails.updatedAt}
                  </p>
                </div>
              </div>
            </div>
          </Model>
        )}
      </td>
    </tr>
  );
};

export default TableRow;