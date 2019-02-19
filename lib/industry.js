const ISIC = {
  A: 'Agriculture, forestry and fishing',
  B: 'Mining and quarrying',
  C: 'Manufacturing',
  D: 'Electricity, gas, steam and air conditioning supply',
  E: 'Water supply; sewerage, waste management and remediation activities',
  F: 'Construction',
  G: 'Wholesale and retail trade; repair of motor vehicles and motorcycles',
  H: 'Transportation and storage',
  I: 'Accommodation and food service activities',
  J: 'Information and communication',
  K: 'Financial and insurance activities',
  L: 'Real estate activities',
  M: 'Professional, scientific and technical activities',
  N: 'Administrative and support service activities',
  O: 'Public administration and defence; compulsory social security',
  P: 'Education',
  Q: 'Human health and social work activities',
  R: 'Arts, entertainment and recreation',
  S: 'Other service activities',
  T: 'Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use',
  U: 'Activities of extraterritorial organizations and bodies'
}
const categories = {
  // isicIndustryCategories
 /*
  * Based on the sections of International Standard Industrial Classification of All Economic Activities (ISIC), Rev. 4:
  */
  '-': ['-'],
  'A': ['-'],
  'B': ['-'],
  'C': ['-'],
  'D': ['-'],
  'E': ['-'],
  'F': ['-'],
  'G': ['-'],
  'H': ['-'],
  'I': ['-'],
  'J': ['-'],
  'K': ['-'],
  'L': ['-'],
  'M': ['-'],
  'N': ['-'],
  'O': ['-'],
  'P': ['-'],
  'Q': ['-'],
  'R': ['-'],
  'S': ['-'],
  'T': ['-'],
  'U': ['-'],
  // categoriesFrom2017
  'Arts, Crafts and Collectibles': [
    '-',
    'Antiques',
    'Art and craft supplies',
    'Art dearler and galleries',
    'Camera and photographic supplies',
    'Digital art',
    'Memorabilia',
    'Music Store (instruments and sheet music)',
    'Sewing, needlework and fabrics',
    'Stamp and coin',
    'Stationary, printing and writing paper',
    'Vintage and Collectibles',
  ],
  Baby: ['-', 'Clothing', 'Furniture', 'Baby products (other)'],
  'Beauty and fragrances': ['-', 'Bath and body', 'Fragrances and perfumes', 'Makeup and cosmetics'],
  'Books and magazines': [
    '-',
    'Audio books',
    'Digital content',
    'Educational and textbooks',
    'Fiction and nonfiction',
    'Magazines',
    'Publishing and printing',
    'Rare and used books',
  ],
  'Business to Business': [
    '-',
    'Accounting',
    'Advertising',
    'Agricultural',
    'Architectural, engineering and surveying services',
    'Chemicals and allied products',
    'Commercial photography, art and graphics',
    'Construction',
    'Consulting services',
    'Educational services',
    'equioment rentals and leasing services',
    'Equipment repair services',
    'Hiring services',
    'Industrial and manufacturing supplies',
    'Mailing lists',
    'Marketing',
    'Multi- level marketing',
    'Office and commercial furniture',
    'Office supplies and equipment',
    'Publishing and printing',
    'Quick copy and reproduction services',
    'Shipping and packing',
    'Stenographic and secretarial support services',
    'Wholesale',
  ],
  'Clothing, accessories and shoes': [
    '-',
    "Children's clothing",
    "Men's clothing",
    "Women's clothing",
    'Shoes',
    'Military and civil service uniforms',
    'Accessories',
    'Retail (fine jewelry and watches)',
    'Wholesale (precious stones and mentals)',
    'Fashion Jewelry',
  ],
  'Computers, accessories and services': [
    '-',
    'Computer and data processing services',
    'Desktops, laptops and notebooks',
    'Digital content',
    'eCommerce services',
    'Maintenance and repair services',
    'Monitors and projectors',
    'Networking',
    'Online gaming',
    'Parts and accessories',
    'Peripherals',
    'Software',
    'Training services',
    'Web hosting and design',
  ],
  Education: [
    '-',
    'Business and secretarial schools',
    'Child daycare services',
    'Colleges and universities',
    'Dance halls, studios and schools',
    'Elementary and secondary schools',
    'Vocational and trade schools',
  ],
  'Electronics and telecom': [
    '-',
    'Cameras, camcorders and equipment',
    'Cell Phone, PDAs and pagers',
    'General electronic accessories',
    'Home audio',
    'Home electronics',
    'Security and surveillance',
    'Telecommunication equipment and sales',
    'Telecommunication Services',
    'Telephone cards',
    'Entertainment and media',
    'Memorabilia',
    'Movie tickets',
    'Movies (DVDs, videotapes)',
    'Music (CDs, cassettes and albums)',
    'Cable, satellite and other pay TV and radio',
    'Concert tickets',
    'Theater tickets',
    'Toys and games',
    'Slot machines',
    'Digital content',
    'Entertainers',
    'Gambling',
    'Online games',
    'Video games and systems',
  ],
  'Financial services and products': [
    '-',
    'Accounting',
    'Collection agency',
    'Commodities and futures exchange',
    'Consumer credit reporting agencies',
    'Debt counseling service',
    'Credit union',
    'Currency dealer and currency exchange',
    'Escrow',
    'Finance company',
    'Financial and investment advice',
    'Insurance',
    'Investments (general)',
    'Money service business',
    'Mortgage brokers or dealers',
    'Online gaming currency',
    'Paycheck lender or cash advance',
    'Prepaid and stored value cards',
    'Remittance',
    'Rental property management',
    'Security broker and dealers',
    'Wire transfer and money order',
  ],
  'Food retail and service': [
    '-',
    'Alcoholic beverages',
    'Catering services',
    'Coffee and tea',
    'Gourmet foods',
    'Specialty and miscellaneous food stores',
    'Restaurant',
    'Tobacco',
    'Vitamines and supplements',
  ],
  'Gifts and flowers': [
    '-',
    'Florist',
    'Gift, card, novelty and souvenir shops',
    'nursery plants and flowers',
    'Party supplies',
  ],
  Government: ['-', 'Government services'],
  'Health an personal care': [
    '-',
    'Drugstore',
    'Dental care',
    'Medical care',
    'Medical equipment and supplies',
    'Vision care',
    'Vitamins and supplements',
  ],
  'Home and garden': [
    '-',
    'Antiques',
    'Art dealers and galleries',
    'Bed and bath',
    'Construction material',
    'Drapery, window covering and upholstery',
    'Exterminating and disinfecting services',
    'Fireplace and fierplace screens',
    'Furniture',
    'Garden supplies',
    'Glass, paint and wallpaper',
    'Hardware and tools',
    'Home décor',
    'Housewares',
    'Kitchenware',
    'Landscaping',
    'Rugs and carpets',
    'Security and surveillance equipment',
    'Swimming pools and spas',
  ],
  Nonprofit: ['-', 'Charity', 'Political', 'Religious', 'Other', 'personal', 'Educational'],
  'Pets and animals': [
    '-',
    'Medication and supplements',
    'Pet shops, pet food and supplies',
    'Specialty or rare pets',
    'Veterinary services',
  ],
  'Religion and spirituality (for profit)': ['-', 'Membership services', 'Merchandise', 'Services'],
  Retail: [
    '-',
    'Chemicals and allied products',
    'Department store',
    'Discount store',
    'Durable goods',
    'Non- durable goods',
    'Used and secondhand store',
    'Variety store',
  ],
  'Service- Other': [
    '-',
    'Advertising',
    'Shopping services and buying clubs',
    'Career services',
    'Carpentry',
    'Child care services',
    'Commercial photography',
    'Computer and data processing services',
    'Computer network services',
    'Consulting services',
    'Courier services',
    'Dental care',
    'eCommerce services',
    'Electrical and small appliance repair',
    'Entertainment',
    'Equipment rental and leasing services',
    'Event and wedding planning',
    'Gambling',
    'General contractors',
    'Graphic and commercial design',
    'Health and beauty spas',
    'IDs, licenses and passports',
    'Importing and exporting',
    'Information retrieval services',
    'Insurance-',
    'Landscapting and horticultural',
    'Legal services and attorneys',
    'Local delivery service',
    'Lottery and contests',
    'Medical care',
    'Membership clubs and organizations',
    'Misc. publishing and printing',
    'Moving and storage',
    'Online dating',
    'Photofinishing and photographic studios',
    'Protective and security services',
    'Quick copy and reproduction services',
    'Radio, television and stereo repair',
    'Real estate agent',
    'Rental property management',
    'Shipping and packing',
    'Swimming pool services',
    'Tailor and alterations',
    'Telecommunication service',
    'Utilities',
    'Vision care',
    'Watch, clock and jewelry repair',
  ],
  'Sports and outdoors': [
    '-',
    'Athletic shoes',
    'Bicycle shop, service and repair',
    'Boating, saliling and accessories',
    'Camping and outdoors',
    'Dance halls, studios and schools',
    'Exercise and fitness',
    'Fan gear and memorabilia',
    'Firearm accessories',
    'Firearms',
    'Hunting',
    'knives',
    'Martial arts weapons',
    'Sport games and toys',
    'Sporting equipment',
    'Swimming pools and spas',
  ],
  'Toys and hobbies': [
    '-',
    'Arts and crafts',
    'Camera and photographic supplies',
    'Memorabilia',
    'Music sore- instruments and sheet music',
    'Stationary, printing and writing paper',
    'Video games and systems',
  ],
  Travel: [
    '-',
    'Airline',
    'Auto rental',
    'Bus line',
    'Cruises',
    'Lodging and accommodations',
    'Luggage and leather goods',
    'Recreational services',
    'Sporting and recreation camps',
    'Taxicabs and limousines',
    'Tours',
    'Trailer parks and campgrounds',
    'Transportation services',
    'Travel agency',
  ],
  'Vehicle sales': ['-', 'Auto dealer', 'Aviation', 'Boat dealer', 'Motorcycle dealer', 'vintage and collectibles'],
  'Vehicle service and accessories': [
    '-',
    'New parts and supplies (moto vehicle)',
    'Used parts (moto vehicle)',
    'Auto body repaire and paint',
    'Auto rental and service',
    'Boat rental and leases',
    'Car wash',
    'Automotive tire supply and service',
    'Tools and equipment',
    'Towing service',
    'Accessories',
  ],
}

const industryCategory = Object.keys(categories).map(item => ({ value: ISIC[item] ? `${item} - ${ISIC[item]}` : item, key: item }))


module.exports = {
  ISIC,
  categories,
  industryCategory
}