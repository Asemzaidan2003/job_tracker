import Company from '../model/company.model.js';
console.log(Company);

export function getAllCompanies(req, res) {
    Company.find({})
        .then(companies => res.status(200).json(companies))
        .catch(err => res.status(500).json({ message: 'Error fetching companies', error: err.message }));
}

export function createCompany(req, res) {
    const newCompany = new Company(req.body);
    newCompany.save()
        .then(company => res.status(201).json(company))
        .catch(err => res.status(500).json({ message: 'Error creating company', error: err.message }));
}

export function updateCompany(req, res) {
    const { id } = req.params;
    Company.findByIdAndUpdate(id, req.body, { new: true })
        .then(company => {
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }
            res.status(200).json(company);
        })
        .catch(err => res.status(500).json({ message: 'Error updating company', error: err.message }));
}

export function deleteCompany(req, res) {
    const { id } = req.params;
    Company.findByIdAndDelete(id)
        .then(company => {
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }
            res.status(204).json();
        })
        .catch(err => res.status(500).json({ message: 'Error deleting company', error: err.message }));
}

export function getCompany(req, res) {
    const { id } = req.params;
    Company.findById(id)
        .then(company => {
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }
            res.status(200).json(company);
        })
        .catch(err => res.status(500).json({ message: 'Error fetching company', error: err.message }));
}
