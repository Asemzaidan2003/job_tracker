const express = require('express');
const router = express.Router();
const { getAllCompanies, createCompany, updateCompany, deleteCompany , getCompany } = require('../controllers/company.controller.js');

router.get('/', getAllCompanies);
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);
router.get('/:id',getCompany)

module.exports = router;