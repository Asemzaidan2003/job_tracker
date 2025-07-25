import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
        unique: true
    },
    company_email:{
        type: String,
        required: true,
        unique: true
    },
    company_phone_number: {
        type: String,
        required: true,
        unique: true
    },
    company_address: {
        type: String,
        required: true
    },
    company_linkedin: {
        type: String,
        required: false
    },
    company_website: {
        type: String,
        required: false
    },
    company_hr_name: {
        type: String,
        required: false
    },
    company_hr_email: {
        type: String,
        required: false
    },
    company_hr_linkedin: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['Not Applied', 'Applied', 'Interview', 'Rejected', 'Offer', 'No Response'],
        default: 'Not Applied'
    }
}, 
{timestamps: true});
const Company = mongoose.model("Company", companySchema);
export default Company;