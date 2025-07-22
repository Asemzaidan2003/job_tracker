# Job Tracker (MERN Stack Project)

This is my first project using the MERN stack (MongoDB, Express.js, React, Node.js).  
The goal of this project is to track job applications, allowing users to manage the jobs they've applied for in an organized way.

🚧 **Note:** This project is still under development.

---

## 🛠 Technologies Used

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB
- **Design:** Figma (UI fully designed by me)

---

## 🚀 How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Asemzaidan2003/job_tracker.git
```
---
### 2. Setup the Backend
use terminal to go to : cd ./backend
then Create a .env file and add the following line
```bash
MONGO_URI=mongodb://localhost:27017/job_tracker
```
You can use your own MongoDB Cloud URI if you prefer

Install dependencies
```bash
npm install
```
Run the backend server
```bash
npm run dev
```

---
### 3.Setup the Frontend
Open a new terminal, then
```bash
cd ./frontend/jobtracker
```
```bash
npm install
```
```bash
npm run dev
```
---
### 4.Adding data to the database
You can use postman to do this by adding a post req to this path

```bash
http://localhost:3000/api/company
```
then add this req body:
```bash
{
  "company_name": "TechNova Solutions",
  "company_email": "info@technova.io",
  "company_phone_number": "+962798765432",
  "company_address": "King Abdullah II Street, Amman, Jordan",
  "company_linkedin": "https://linkedin.com/company/technova",
  "company_website": "https://www.technova.io",
  "company_hr_name": "Omar Al-Khatib",
  "company_hr_email": "omar.khatib@technova.io",
  "company_hr_linkedin": "https://linkedin.com/in/omarkhatib",
  "status": "Interview"
}
```
You can add as many as you want, this will be rendered dynamically in the frontend
---
### 5.What remaining tasks are needed to make the project ready?
- Finishing the form inside the popup model to add a new application and company details  
- Create an API req to post the form data 
- Writing the logic of filtering the data inside the table
- Creating pagination buttons in the UI
- Implementing pagination in the backend
- Calculating statistics about user application  
