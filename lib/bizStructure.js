const businessStructure = ['COMPANY', 'PARTNERSHIP', 'SOLE_PROPRIETOR', 'ASSOCIATION', 'SOLE_TRADER']

module.exports = businessStructure.map(item => ({ key: item, value: item.toLowerCase() }))