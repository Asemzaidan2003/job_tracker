import { useState } from 'react';
import TextInput from './TextInput';
import Bean from './Bean';
import Button from './Button';
import { FaPlusSquare } from 'react-icons/fa';
import { API_URL } from "../config";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    company_email: "",
    company_phone_number: "",
    company_address: "",
    company_linkedin: "",
    company_website: "",
    company_hr_name: "",
    company_hr_email: "",
    company_hr_linkedin: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.company_name || !formData.company_email) {
      alert("Required fields must be filled in !!");
      return;
    }
    console.log(formData);
    try {
      const res = await fetch(`${API_URL}/company`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Error Sending Application data");

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Bean component={<TextInput text="Company name" name="company_name" value={formData.company_name} onChange={handleChange} />} />
        <Bean component={<TextInput text="Company email" name="company_email" value={formData.company_email} onChange={handleChange} />} />
        <Bean component={<TextInput text="Phone number" name="company_phone_number" value={formData.company_phone_number} onChange={handleChange} />} />
        <Bean component={<TextInput text="Company address" name="company_address" value={formData.company_address} onChange={handleChange} />} />
        <Bean component={<TextInput text="LinkedIn" name="company_linkedin" value={formData.company_linkedin} onChange={handleChange} />} />
        <Bean component={<TextInput text="Website" name="company_website" value={formData.company_website} onChange={handleChange} />} />
        <Bean component={<TextInput text="HR name" name="company_hr_name" value={formData.company_hr_name} onChange={handleChange} />} />
        <Bean component={<TextInput text="HR email" name="company_hr_email" value={formData.company_hr_email} onChange={handleChange} />} />
        <Bean component={<TextInput text="HR LinkedIn" name="company_hr_linkedin" value={formData.company_hr_linkedin} onChange={handleChange} />} />
      </div>

      <Button
        text="Create Application"
        icon={<FaPlusSquare className="text-text-primary" />}
        bg_color="bg-success"
        handleClick={handleSubmit}
      />
    </>
  );
};

export default ApplicationForm;
