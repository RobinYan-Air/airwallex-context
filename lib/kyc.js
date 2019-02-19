const kycProcessStatus = ['INIT', 'KYC', 'COMPLIANCE', 'SUCCESS', 'FAILURE']

const kycStatus = kycProcessStatus.map(item => ({key: item, value: capitalize(item)}))

const riskRating = [
  { label: 'LOW', value: 'LOW' },
  { label: 'MEDIUM', value: 'MEDIUM' },
  { label: 'HIGH', value: 'HIGH' },
]

module.exports = {
  kycStatus,
  riskRating
}