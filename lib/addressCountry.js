const { CountryNames } = require('@airwallex/frontend-common')

const addressCountry = Object.keys(CountryNames).map((countryKey) => ({
  label: CountryNames[countryKey].en,
  value: countryKey,
}))

module.exports = addressCountry
