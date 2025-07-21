import express from 'express';
const router = express.Router();
import { getAllCompanies, createCompany, updateCompany, deleteCompany , getCompany } from '../controllers/company.controller.js'

router.get('/', getAllCompanies);
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);
router.get('/:id',getCompany)

export default router;