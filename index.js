const addressCountry = require('./lib/addressCountry')
const businessStructure = require('./lib/bizStructure')
const { entityType, owningEntity } = require('./lib/bizStructure')
const { ISIC, categories, industryCategory } = require('./lib/industry')
const { kycStatus, riskRating } = require('./lib/kyc')
const signUpChannels = require('./lib/signUpChannel')
const identificationType = require('./lib/identification')

module.exports = {
  addressCountry,
  businessStructure,
  entityType,
  owningEntity,

  // industry
  ISIC,
  categories,
  industryCategory,

  // kyc
  kycStatus,
  riskRating,
  signUpChannels, 

  identificationType
}