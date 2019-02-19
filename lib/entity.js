const entityType = ['COMPANY', 'PERSONAL']

const OWNING_ENTITIES = [
  'Airwallex (Hong Kong) Limited',
  'Airwallex Pty Ltd',
  'Airwallex (Singapore) Pte Ltd',
  'Airwallex (UK) Ltd',
]

const owningEntity = OWNING_ENTITIES.map(item => ({ key: item, value: item }))

module.exports = {
  entityType,
  owningEntity
}