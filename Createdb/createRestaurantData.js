// Connect to dineEasy DB
db = db.getSiblingDB("dineEasy");

// Create collection if not already present
restaurantCollection =
  db.getCollection("restaurant") || db.createCollection("restaurant");

// Delete all the previous restaurant collection data
restaurantCollection.deleteMany({});

// Insert all the restaurant data to the DB
restaurantCollection.insertMany([
  {
    resId: "1",
    name: "The Pink Door",
    image:
      "https://images.squarespace-cdn.com/content/v1/574335cf59827e45443e86b7/1503899718746-9L4CLEPKJST64L2O1VN0/4A3A4021.jpg",
    location: "1919 post alley , Seattle, WA 98104",
    rating: 4.4,
    reviews: 2000,
    cost: "30$ - 50$",
    cuisines: "Italian",
    contact: "(206) 683-0000",
    neighborhood: "Belltown / Pike Place Market",
    hours: "Till 10:00 PM",
    parkingdetails:
      "Public Pay Lot: The Pike Place Public Market Parking Garage - w/ easy access to the Market! Street parking is free after 8:00 p.m. M-F. Free on Sundays! Many Private Pay Lots nearby. ",
    isValetPark: true,
    numberOfTables: 20,
  },
  {
    resId: "2",
    name: "Terra Plata",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e3879631cec6d405f5950ec/1584468477379-39A5033VOJMMS7CZ5ROZ/rooftopsummer.jpg",
    location: "1051 Melrose Ave, Seattle, WA 98124",
    rating: 4.7,
    reviews: 983,
    cost: "20$ - 30$",
    cuisines: "Farm-to-table, Mediterranean",
    contact: "(425) 641-9997",
    neighborhood: "Capitol Hill / First Hill",
    hours: "Open till 12:00 PM",
    parkingdetails:
      "There is street parking surrounding the restaurant and five parking lots located within two blocks of Terra Platae.",
    isValetPark: false,
    numberOfTables: 10,
  },
  {
    resId: "3",
    name: "Il Terrazzo Carmine",
    image: "https://www.ilterrazzocarmine.com/img/gallery-v3/gallery-3.jpg",
    location: "411 1st Ave S, Seattle, WA 98104",
    rating: 3.8,
    reviews: 1685,
    cost: "20$ - 30$",
    cuisines: "Italian",
    contact: "(425) 677-8880",
    neighborhood: "Downtown",
    hours: "Open till 9:00 PM",
    parkingdetails: "Onsite open parking space available.",
    isValetPark: true,
    numberOfTables: 15,
  },
  {
    resId: "4",
    name: "Cinque Terre Ristorante",
    image:
      "https://images.squarespace-cdn.com/content/v1/5616b059e4b07744e820b678/1513370540169-O9ELV3KY7XY89NJYO3VD/Interior+Compressed-3.jpg",
    location: "2001 Westlake Ave, Seattle, WA 981214",
    rating: 4.0,
    reviews: 861,
    cost: "50$ - 100$",
    cuisines: "Indian",
    contact: "(425) 820-2303",
    neighborhood: "Juanita Village Retail",
    hours: "Open till 10:00 PM",
    parkingdetails: " ",
    isValetPark: false,
    numberOfTables: 7,
  },
  {
    resId: "5",
    name: "The George",
    image:
      "https://www.fairmont.com/assets/0/104/3081/3086/4231/4232/0273a866-109f-4179-8903-4f580a1845c6.jpg",
    location: "411 University St, Seattle, WA 98101",
    rating: 4.2,
    reviews: 567,
    cost: "50$ - 60$",
    cuisines: "Contemporary American, Northwest, American",
    contact: "(206)709 0111",
    neighborhood: "Downtown",
    hours: "Open till 9:45 PM",
    parkingdetails: " Public Lot",
    isValetPark: true,
    numberOfTables: 10,
  },
  {
    resId: "6",
    name: "Omega Ouzeri",
    image: "https://cdn.vox-cdn.com/thumbor/--lNMZCibcGJHqyUnBZCTsPpSJA=/0x0:1200x900/1200x800/filters:focal(0x0:1200x900)/cdn.vox-cdn.com/uploads/chorus_image/image/46852728/Omega_Ouzeri.0.0.png",
    location: "1529 14th Ave, Seattle, WA 98122",
    rating: 4.8,
    reviews: 765,
    cost: "31 to over",
    cuisines: "Greek",
    contact: "(206) 257 - 4515 ",
    neighborhood: "Capitol Hill / First Hill",
    hours: "Tue–Thu 5:30 pm–9:00 pm Fri, Sat 5:30 pm–9:30 pm",
    parkingdetails:
      "Onsite garage parking available in the REO Flats Building (same as Omega) an across the street for an hourly rate.",
    isValetPark: true,
    numberOfTables: 10,
  },

  {
    resId: "7",
    name: "Poquitos - Capitol Hill",
    image: "https://resizer.otstatic.com/v2/photos/wide-huge/10/27725119.png",
    location: "1000 E Pike Street, Seattle, WA 98122",
    rating: 4.6,
    reviews: 518,
    cost: "$31 to $50",
    cuisines: "Mexican, Traditional Mexican, Contemporary Mexican",
    contact: "(206) 590 - 5039 ",
    neighborhood: "Capitol Hill / First Hill",
    hours:
      "Mon–Fri 11:00 am–2:00 pm Mon–Thu 4:00 pm–10:00 pm Fri 4:00 pm–12:00 am Sat 12:00 pm–12:00 am Sun 12:00 pm–10:00 pm Lunch Mon–Fri 11:00 am–2:00 pm Brunch Sat, Sun 12:00 pm–3:00 pm Dinner Daily 4:00 pm–10:00 pm",
    parkingdetails: "Street Parking.",
    isValetPark: false,
    numberOfTables: 8,
  },
  {
    resId: "8",
    name: "Violet",
    image: "https://resizer.otstatic.com/v2/photos/wide-huge/2/27665971.jpg",
    location: " 1734 12th Ave, Seattle, WA 98122-2436 ",
    rating: 4.8,
    reviews: 530,
    cost: "30 and under",
    cuisines: " American, French, Spanish ",
    contact: "(206) 695-2588 ",
    neighborhood: " Capitol Hill / First Hill",
    hours:
      " Dinner: Monday: Closed Tuesday: 5:00pm – 10:00pm Wednesday: 5:00pm – 10:00pm Thursday: 5:00pm – 10:00pm Friday: 5:00pm – 12:00am Saturday: 5:00pm – 12:00am Sunday: Closed ",
    parkingdetails: " Street Parking",
    isValetPark: false,
    numberOfTables: 10,
  },
  {
    resId: "9",
    name: "Footprint Wine Tap",
    image: "https://resizer.otstatic.com/v2/photos/wide-huge/4/30660571.jpg",
    location: "900 Madison St, Seattle, WA 98104",
    rating: 5,
    reviews: 44,
    cost: "30 and under",
    cuisines: " Wine Bar, American, Bar / Lounge / Bottle Service ",
    contact: "(206) 485 - 7175 ",
    neighborhood: "Capitol Hill / First Hill",
    hours: " Tue–Thu 4:00 pm–9:00 pm Fri, Sat 4:00 pm–10:00 pm",
    parkingdetails:
      " Located in Capitol Hill on Madison St, between 12th and 13th Ave. Free 1-Hour Retail parking available (first come, first served basis) in the Citizen building garage off 13th Ave.",
    isValetPark: true,
    numberOfTables: 12,
  },
  {
    resId: "10",
    name: "Barrio - Capitol Hill",
    image: "https://resizer.otstatic.com/v2/photos/wide-huge/3/52194725.jpg",
    location: "1420 12th Ave Seattle, WA 98122",
    rating: 4.3,
    reviews: 787,
    cost: "30 and under",
    cuisines: "Mexican, Cocktail Bar, Traditional Mexican",
    contact: "(206) 588-8105",
    neighborhood: "Capitol Hill / First Hill",
    hours:
      "Mon–Fri 4:00 pm–10:00 pm Brunch Sat, Sun 11:30 am–3:00 pm Happy Hour Mon–Fri 4:00 pm–5:30 pm Sat, Sun 3:00 pm–5:30 pm Dinner Sat, Sun 3:00 pm–10:00 pm",
    parkingdetails:
      "Pay by the hour garage with a limited number of spots located in Trace Lofts (the entrance is on 12th Ave between Old Sage and Tavern Law). Street Parking is also available.",
    isValetPark: true,
    numberOfTables: 22,
  },
  {
    resId: "11",
    name: "Poco Bar & Lounge",
    image: "https://resizer.otstatic.com/v2/photos/wide-huge/2/51335269.jpg",
    location: ": E Pine St 1408, Seattle, WA 98122",
    rating: 3.6,
    reviews: 8,
    cost: "30 and under",
    cuisines: "Northwest, Seafood, Contemporary American",
    contact: "(206) 322-9463",
    neighborhood: "Capitol Hill / First Hill",
    hours: "Thu, Sun 4:00 pm–10:00 pm Fri, Sat 4:00 pm–12:00 am",
    parkingdetails: "Street Parking",
    isValetPark: false,
    numberOfTables: 8,
  },
  {
    resId: "12",
    name: "Quinn's Pub",
    image: "https://resizer.otstatic.com/v2/photos/wide-huge/3/29001987.jpg",
    location: "1001 E Pike St, Seattle, WA 98122",
    rating: 4.5,
    reviews: 184,
    cost: "$31 to $50",
    cuisines: "Gastro Pub",
    contact: "(206) 325-7711",
    neighborhood: "Capitol Hill / First Hill",
    hours: "Dinner Wed, Thu, Sun 4:00 pm–9:00 pm Fri, Sat 4:00 pm–12:00 am",
    parkingdetails: "Street Parking",
    isValetPark: false,
    numberOfTables: 15,
  },
]);
