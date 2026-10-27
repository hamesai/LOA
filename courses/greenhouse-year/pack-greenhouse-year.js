/* Course pack: Small greenhouse, year-long cycle.
   Registered with ARCHIVE_ADD, so the library can hold many courses. Lesson content is in course-m1.js to course-m7.js and course-cap.js. */
ARCHIVE_ADD({
 "libraries": [
  {
   "id": "greenhouse-year",
   "subject": "Small greenhouse, year-long cycle",
   "level": "Some exposure",
   "created": "2026-10-10",
   "modules": 7,
   "challenges": 21,
   "capstone": "The 12-Month Greenhouse Cycle",
   "file": "courses/greenhouse-year/docs/Library of Alexandria - Small Greenhouse Year Cycle.md",
   "summary": "Run a small greenhouse through a full year: site and climate, crop planning, seed starting, feeding, climate control, pest management, records and a yearly review.",
   "tags": [
    "Horticulture",
    "Practical",
    "Year-long"
   ],
   "accent": "#2f8f5b",
   "metrics": {
    "Max temperature": "°C",
    "Min temperature": "°C",
    "Humidity": "%",
    "Substrate pH": "pH",
    "Substrate EC": "mS/cm",
    "Germination": "%",
    "Days to emergence": "days",
    "Harvest weight": "kg",
    "Harvest count": "count",
    "Pests per sticky card": "count"
   }
  }
 ],
 "modules": [
  {
   "key": "greenhouse-year-1",
   "library": "greenhouse-year",
   "number": "1",
   "kind": "module",
   "title": "The Greenhouse as a System",
   "hours": "3–4 h",
   "challenges": 3,
   "belt": "White",
   "status": "Not started",
   "completed_on": null
  },
  {
   "key": "greenhouse-year-2",
   "library": "greenhouse-year",
   "number": "2",
   "kind": "module",
   "title": "The Year Cycle: Planning and Succession",
   "hours": "3–4 h",
   "challenges": 3,
   "belt": "Yellow",
   "status": "Not started",
   "completed_on": null
  },
  {
   "key": "greenhouse-year-3",
   "library": "greenhouse-year",
   "number": "3",
   "kind": "module",
   "title": "Seed Starting and Transplanting",
   "hours": "3–4 h",
   "challenges": 3,
   "belt": "",
   "status": "Not started",
   "completed_on": null
  },
  {
   "key": "greenhouse-year-4",
   "library": "greenhouse-year",
   "number": "4",
   "kind": "module",
   "title": "Growing Media, Feeding, and Water Quality",
   "hours": "3–4 h",
   "challenges": 3,
   "belt": "Orange",
   "status": "Not started",
   "completed_on": null
  },
  {
   "key": "greenhouse-year-5",
   "library": "greenhouse-year",
   "number": "5",
   "kind": "module",
   "title": "Climate Control Through the Seasons",
   "hours": "3–4 h",
   "challenges": 3,
   "belt": "",
   "status": "Not started",
   "completed_on": null
  },
  {
   "key": "greenhouse-year-6",
   "library": "greenhouse-year",
   "number": "6",
   "kind": "module",
   "title": "Pest and Disease Monitoring (IPM)",
   "hours": "3 h",
   "challenges": 3,
   "belt": "Green",
   "status": "Not started",
   "completed_on": null
  },
  {
   "key": "greenhouse-year-7",
   "library": "greenhouse-year",
   "number": "7",
   "kind": "module",
   "title": "Harvest, Records, and the Annual Review",
   "hours": "3 h",
   "challenges": 3,
   "belt": "Brown",
   "status": "Not started",
   "completed_on": null
  },
  {
   "key": "greenhouse-year-cap",
   "library": "greenhouse-year",
   "number": "Capstone",
   "kind": "capstone",
   "title": "The 12-Month Greenhouse Cycle",
   "hours": "Year-long",
   "challenges": 0,
   "belt": "Black",
   "status": "Not started",
   "completed_on": null
  }
 ],
 "resources": [
  {
   "id": "r01",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Temperature Control in Greenhouses (HO-327-W)",
   "source": "Purdue Extension",
   "modules": [
    1,
    5
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.extension.purdue.edu/extmedia/HO/HO-327-W.pdf",
   "note": "Venting combinations and their effect on temperature."
  },
  {
   "id": "r02",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Greenhouse Temperature Management",
   "source": "Rutgers (A.J. Both)",
   "modules": [
    1,
    5
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://rucore.libraries.rutgers.edu/rutgers-lib/47056/PDF/1",
   "note": "Ventilation, cooling systems, wind limits."
  },
  {
   "id": "r03",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Appendix E: Season Extenders and Greenhouses",
   "source": "NC State Extension",
   "modules": [
    1,
    2,
    5
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://content.ces.ncsu.edu/extension-gardener-handbook/appendix-e-season-extenders-and-greenhouses",
   "note": "Ventilation rates, circulation fans, small-house fluctuation."
  },
  {
   "id": "r04",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Greenhouses (Backyard Gardener #6)",
   "source": "Arizona Cooperative Extension",
   "modules": [
    1
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://extension.arizona.edu/sites/default/files/attachment/Greenhouses_0.pdf",
   "note": "Orientation and climate limits in a hot climate."
  },
  {
   "id": "r05",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Seed Starting & Transplanting (HGA-00032)",
   "source": "UAF Cooperative Extension",
   "modules": [
    2
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.uaf.edu/ces/publications/database/gardening/seed-starting-transplanting.php",
   "note": "Weeks-to-transplant table used for back-calculating sow dates."
  },
  {
   "id": "r06",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Starting Vegetable Seeds Indoors: III. Germination",
   "source": "Utah State Extension",
   "modules": [
    3
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://extension.usu.edu/yardandgarden/research/starting-vegetable-seeds-indoors-germination",
   "note": "Covering, light, and watering for germination."
  },
  {
   "id": "r07",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Starting Seeds Indoors",
   "source": "University of Maryland Extension",
   "modules": [
    3
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "http://dev.extension.umd.edu/resource/starting-seeds-indoors",
   "note": "Sowing depth, lighting, thinning. The link is the dev.extension.umd.edu address the search returned."
  },
  {
   "id": "r08",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Community Garden Guide: Season Extension, Seed Starting",
   "source": "USDA NRCS",
   "modules": [
    3
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.nrcs.usda.gov/plantmaterials/mipmcar9781.pdf",
   "note": "Transplanting and propagation lights."
  },
  {
   "id": "r09",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "pH and EC Measurements in Soilless Substrates (HO-237-W)",
   "source": "Purdue Extension",
   "modules": [
    4
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://www.extension.purdue.edu/extmedia/ho/ho-237-w.pdf",
   "note": "Sampling methods, target ranges, monitoring practice."
  },
  {
   "id": "r10",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Greenhouse Temperature Management",
   "source": "Michigan State University",
   "modules": [
    5
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://www.canr.msu.edu/floriculture/resources/energy/assets/Greenhouse_Temperature_Management_by_AJ_Both.pdf",
   "note": "Heating, ventilation, and additional cooling."
  },
  {
   "id": "r11",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Greenhouse Integrated Pest Management",
   "source": "UConn Extension",
   "modules": [
    6
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://ipm-cahnr.media.uconn.edu/wp-content/uploads/sites/3216/2024/05/GreenhouseIntegratedPestManagement.pdf",
   "note": "IPM tactics and weekly monitoring."
  },
  {
   "id": "r12",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Using IPM in Greenhouses and Herbaceous Nurseries (IPM1026)",
   "source": "University of Missouri Extension",
   "modules": [
    6
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://extension.missouri.edu/publications/ipm1026",
   "note": "Biological control: inoculation versus inundation."
  },
  {
   "id": "r13",
   "library": "greenhouse-year",
   "type": "Reference",
   "title": "Your Winter Vegetable Garden (Season Extenders)",
   "source": "UC Master Gardeners, Nevada County",
   "modules": [
    2,
    7
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://ucanr.edu/sites/default/files/2014-08/197186.pdf",
   "note": "Days-before-frost planting chart adapted from Eliot Coleman's Four-Season Harvest."
  },
  {
   "id": "v01",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Starting a Garden: Seed Starting Basics",
   "source": "Illinois Extension",
   "modules": [
    3
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://extension.illinois.edu/videos/starting-garden-seed-starting-basics",
   "note": "About 10 minutes: timing, containers, mix, germination rack."
  },
  {
   "id": "v02",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Greenhouse Pest Management",
   "source": "Utah State University Extension, YouTube",
   "modules": [
    6
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.youtube.com/watch?v=S_UYyZVLjBA",
   "note": "Chapters on fungus gnats, damping-off, and spider mites (2023)."
  },
  {
   "id": "v03",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Greenhouse IPM \"How-to\" Video Series",
   "source": "YouTube playlist (publisher not confirmed)",
   "modules": [
    6
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://www.youtube.com/playlist?list=PLfSMAKNYIe_lqoR2rf3sTTMzAfek4fGun",
   "note": "Videos of 4–14 minutes, from scouting to quality assurance for biocontrol."
  },
  {
   "id": "v04",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "PourThru Substrate Testing",
   "source": "YouTube (publisher not confirmed)",
   "modules": [
    4
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://www.youtube.com/watch?v=_ig75_y7o_k",
   "note": "Step-by-step PourThru method for pH and EC."
  },
  {
   "id": "v05",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Properly Conducting a Pour-Thru Test for pH & EC",
   "source": "Ball Tech On Demand, YouTube",
   "modules": [
    4
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://www.youtube.com/watch?v=WyJ2fgkng-8",
   "note": "Ball Seed technical expert runs the test on site."
  },
  {
   "id": "v06",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "How to Ventilate a Greenhouse: Fan Size (CFM)",
   "source": "YouTube (publisher not confirmed)",
   "modules": [
    5
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.youtube.com/watch?v=nGVyLwsspsw",
   "note": "Airflow, humidity, and cooling balance. May be a vendor video."
  },
  {
   "id": "v07",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Greenhouse Cooling: Create The Perfect Environment",
   "source": "YouTube (publisher not confirmed)",
   "modules": [
    5
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.youtube.com/watch?v=ZV5vEoKTP6c",
   "note": "Why ventilation matters for temperature, humidity, and CO2."
  },
  {
   "id": "p01",
   "library": "greenhouse-year",
   "type": "Scholarly",
   "title": "The Influence of Different Cooling Systems on the Microclimate, Photosynthetic Activity and Yield of a Tomato Crop in Mediterranean Greenhouses",
   "source": "Moreno-Teruel et al., 2022, Agronomy",
   "modules": [
    5
   ],
   "difficulty": "Advanced",
   "status": "Verified",
   "url": "https://consensus.app/papers/details/0bf7aab587895d958462d5834d339e6b/?utm_source=claude_desktop",
   "note": "Pad-and-fan, fog, and natural ventilation compared; energy and water costs were not offset by gains."
  },
  {
   "id": "p02",
   "library": "greenhouse-year",
   "type": "Scholarly",
   "title": "Comparison of Different Temperature Control Systems in Tropical-Adapted Greenhouses for Green Romaine Lettuce Production",
   "source": "Kumsong et al., 2023, Horticulturae",
   "modules": [
    5
   ],
   "difficulty": "Advanced",
   "status": "Verified",
   "url": "https://consensus.app/papers/details/0501cb02d49d5b1788695e51d61c3e78/?utm_source=claude_desktop",
   "note": "Fogging plus fan gave higher growth and yield than shading in this trial."
  },
  {
   "id": "p03",
   "library": "greenhouse-year",
   "type": "Scholarly",
   "title": "Towards a Sustainable Greenhouse: Review of Trends and Emerging Practices in Analysing Greenhouse Ventilation Requirements",
   "source": "Akrami et al., 2020, Sustainability",
   "modules": [
    5
   ],
   "difficulty": "Advanced",
   "status": "Verified",
   "url": "https://consensus.app/papers/details/4db17ea2ea735880883f8359df4b7f0c/?utm_source=claude_desktop",
   "note": "Review of why ventilation sets greenhouse temperature and yield."
  },
  {
   "id": "p04",
   "library": "greenhouse-year",
   "type": "Scholarly",
   "title": "Ventilation and Irrigation Management Strategy for Tomato Cultivated in Greenhouses",
   "source": "Gong et al., 2022, Agricultural Water Management",
   "modules": [
    5,
    4
   ],
   "difficulty": "Advanced",
   "status": "Verified",
   "url": "https://consensus.app/papers/details/74ed3d886c0d5e7e963d13ae8021315b/?utm_source=claude_desktop",
   "note": "Vent position changed harvest timing; irrigation level changed yield and water-use efficiency."
  },
  {
   "id": "p05",
   "library": "greenhouse-year",
   "type": "Scholarly",
   "title": "Effect of Shading and High Temperature Amplitude in Greenhouse on Growth, Photosynthesis, Yield and Phenolic Contents of Tomato",
   "source": "Angmo et al., 2021, Physiology and Molecular Biology of Plants",
   "modules": [
    5
   ],
   "difficulty": "Advanced",
   "status": "Verified",
   "url": "https://consensus.app/papers/details/19607ca3651c59b9bb4f370fec89e426/?utm_source=claude_desktop",
   "note": "Shading cut marketable yield by 48% in this passive solar greenhouse."
  },
  {
   "id": "b01",
   "library": "greenhouse-year",
   "type": "Book",
   "title": "The Winter Harvest Handbook: Year-Round Vegetable Production Using Deep-Organic Techniques and Unheated Greenhouses",
   "source": "Eliot Coleman, Chelsea Green, 2009 (Internet Archive lending copy)",
   "modules": [
    2,
    5,
    7
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://archive.org/details/winterharvesthan0000cole",
   "note": "Yearly schedule, cold and cool greenhouses, year-round cropping. Borrowing may need a free Internet Archive account."
  },
  {
   "id": "m01",
   "library": "greenhouse-year",
   "type": "Magazine",
   "title": "Media pH, EC & Water Quality: The Basics of Monitoring",
   "source": "Greenhouse Grower, 2011 (Camberato and Lopez)",
   "modules": [
    4
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://www.greenhousegrower.com/production/plant-culture/special-series/media-ph-ec-water-quality-the-basics-of-monitoring",
   "note": "Trade-press version of the Purdue guidance; mentions lab tests and same-day PourThru."
  },
  {
   "id": "v08",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Succession Planting (Master Gardener virtual class, about 50 minutes)",
   "source": "Master Gardeners of Northern Virginia, Virginia Cooperative Extension, YouTube",
   "modules": [
    2
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.youtube.com/watch?v=HdsqCtHEJP8",
   "note": "Chapters on quick- and slow-maturing crops, interval planting, and seasonal planting. Recorded July 2025."
  },
  {
   "id": "v09",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Transplanting Seedlings: The Complete Guide",
   "source": "YouTube (publisher not confirmed)",
   "modules": [
    3
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.youtube.com/watch?v=Ca6kvgD_k9A",
   "note": "Moving seedlings on, with attention to growth spurts after germination."
  },
  {
   "id": "v10",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Complete Guide to Transplanting Seedlings",
   "source": "YouTube (publisher not confirmed)",
   "modules": [
    3
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.youtube.com/watch?v=GBp81ZZ9Ops",
   "note": "Minimal edits so each transplanting step is visible."
  },
  {
   "id": "v11",
   "library": "greenhouse-year",
   "type": "Video",
   "title": "Transplanting Seedlings",
   "source": "Mother Earth News",
   "modules": [
    3
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.motherearthnews.com/videos/transplanting-seedlings/",
   "note": "When and how to move seedlings to give them the best chance."
  },
  {
   "id": "p06",
   "library": "greenhouse-year",
   "type": "Scholarly",
   "title": "Biological and Integrated Pest Control in Greenhouses",
   "source": "van Lenteren et al., 1988, Annual Review of Entomology",
   "modules": [
    6
   ],
   "difficulty": "Advanced",
   "status": "Verified",
   "url": "https://consensus.app/papers/details/b4ef5ecac3aa5131981db5f98ce396a4/?utm_source=claude_desktop",
   "note": "Classic review of why natural enemies work in greenhouses and how they are introduced."
  },
  {
   "id": "p07",
   "library": "greenhouse-year",
   "type": "Scholarly",
   "title": "Comparative Evaluation of Biological Control Programs and Chemical Pesticides for Managing Insect and Mite Pests in Cucumber Greenhouses",
   "source": "Adly et al., 2024, Egyptian Journal of Biological Pest Control",
   "modules": [
    6
   ],
   "difficulty": "Advanced",
   "status": "Verified",
   "url": "https://consensus.app/papers/details/61c5d33c39875fd7bd83349d4747b2ee/?utm_source=claude_desktop",
   "note": "Biological programs gave similar yields to chemicals; spider mites rose in the pesticide-treated house."
  },
  {
   "id": "p08",
   "library": "greenhouse-year",
   "type": "Scholarly",
   "title": "Climate-Driven Pest and Disease Dynamics in Greenhouse Vegetables: A Review",
   "source": "Fanourakis et al., 2026, Horticulturae",
   "modules": [
    5,
    6
   ],
   "difficulty": "Advanced",
   "status": "Verified",
   "url": "https://consensus.app/papers/details/4621d03ecb895171a075c95da8653a6e/?utm_source=claude_desktop",
   "note": "Links temperature, humidity, and VPD to which pests and diseases thrive. Ties Module 5 to Module 6."
  },
  {
   "id": "b02",
   "library": "greenhouse-year",
   "type": "Book",
   "title": "Four-Season Harvest: How to Harvest Fresh Organic Vegetables from Your Home Garden All Year Long",
   "source": "Eliot Coleman, Chelsea Green, 1992 (publisher excerpt page)",
   "modules": [
    2,
    7
   ],
   "difficulty": "Intermediate",
   "status": "Verified",
   "url": "https://www.chelseagreen.com/blog/presenting-the-four-season-harvest",
   "note": "The link is the publisher's excerpt on extending the harvest season with simple protection, not the full book."
  },
  {
   "id": "m02",
   "library": "greenhouse-year",
   "type": "Magazine",
   "title": "6 Strategies for Greenhouse Vegetables Year-Round",
   "source": "Mother Earth News, 2025",
   "modules": [
    2
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.motherearthnews.com/organic-gardening/6-proven-strategies-for-year-round-harvests-zb0z1711zmit",
   "note": "Closing the hungry gap, early starts, and planting in succession."
  },
  {
   "id": "m03",
   "library": "greenhouse-year",
   "type": "Magazine",
   "title": "Succession Planting Vegetables Through All Seasons",
   "source": "Mother Earth News, 2012 (excerpt from Niki Jabbour's The Year-Round Vegetable Gardener)",
   "modules": [
    2
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.motherearthnews.com/organic-gardening/succession-planting-ze0z1211zgar",
   "note": "Keep-on-seeding approach, for example about 20 radish seeds every 2 weeks."
  },
  {
   "id": "m04",
   "library": "greenhouse-year",
   "type": "Magazine",
   "title": "Vegetables That Grow Year-Round",
   "source": "Mother Earth News, 2023",
   "modules": [
    2,
    7
   ],
   "difficulty": "Beginner",
   "status": "Verified",
   "url": "https://www.motherearthnews.com/organic-gardening/year-round-gardening-zm0z15aszsto",
   "note": "Region-by-region advice on overwintering and season extension."
  },
  {
   "id": "i01",
   "library": "greenhouse-year",
   "type": "Images",
   "title": "Greenhouse orientation and site layout diagrams",
   "source": "Google Images search",
   "modules": [
    1
   ],
   "difficulty": "Beginner",
   "status": "Search link",
   "url": "https://www.google.com/search?tbm=isch&q=greenhouse+orientation+site+layout+diagram",
   "note": "Links to a search, not a vetted image. Check each image's licence before reuse."
  },
  {
   "id": "i02",
   "library": "greenhouse-year",
   "type": "Images",
   "title": "Greenhouse crop calendar and succession planting charts",
   "source": "Google Images search",
   "modules": [
    2
   ],
   "difficulty": "Beginner",
   "status": "Search link",
   "url": "https://www.google.com/search?tbm=isch&q=greenhouse+year+round+crop+calendar+succession+planting+chart",
   "note": "Links to a search, not a vetted image."
  },
  {
   "id": "i03",
   "library": "greenhouse-year",
   "type": "Images",
   "title": "Seedling stages: true leaves and transplanting",
   "source": "Google Images search",
   "modules": [
    3
   ],
   "difficulty": "Beginner",
   "status": "Search link",
   "url": "https://www.google.com/search?tbm=isch&q=seedling+first+true+leaves+transplanting+plug+tray",
   "note": "Links to a search, not a vetted image."
  },
  {
   "id": "i04",
   "library": "greenhouse-year",
   "type": "Images",
   "title": "Substrate pH and nutrient availability charts",
   "source": "Google Images search",
   "modules": [
    4
   ],
   "difficulty": "Intermediate",
   "status": "Search link",
   "url": "https://www.google.com/search?tbm=isch&q=substrate+pH+nutrient+availability+chart+greenhouse",
   "note": "Links to a search, not a vetted image."
  },
  {
   "id": "i05",
   "library": "greenhouse-year",
   "type": "Images",
   "title": "Greenhouse ventilation and airflow diagrams",
   "source": "Google Images search",
   "modules": [
    5
   ],
   "difficulty": "Beginner",
   "status": "Search link",
   "url": "https://www.google.com/search?tbm=isch&q=greenhouse+ventilation+airflow+diagram+ridge+vent+side+inlet",
   "note": "Links to a search, not a vetted image."
  },
  {
   "id": "i06",
   "library": "greenhouse-year",
   "type": "Images",
   "title": "Greenhouse pest identification: whitefly, thrips, aphid, spider mite",
   "source": "Google Images search",
   "modules": [
    6
   ],
   "difficulty": "Beginner",
   "status": "Search link",
   "url": "https://www.google.com/search?tbm=isch&q=greenhouse+pest+identification+whitefly+thrips+aphid+spider+mite",
   "note": "Links to a search, not a vetted image."
  },
  {
   "id": "i07",
   "library": "greenhouse-year",
   "type": "Images",
   "title": "Greenhouse harvest and record-keeping log examples",
   "source": "Google Images search",
   "modules": [
    7
   ],
   "difficulty": "Beginner",
   "status": "Search link",
   "url": "https://www.google.com/search?tbm=isch&q=greenhouse+harvest+log+record+keeping+template",
   "note": "Links to a search, not a vetted image."
  }
 ],
 "details": {
  "greenhouse-year-1": {
   "prereq": "None",
   "core": "A greenhouse traps solar heat, so its climate swings faster than the outdoors, and small houses swing fastest. Site, ventilation and measured temperature set the limits for everything else in the cycle, so measure before you manage.",
   "steps": [
    "Orientation: put the long side facing south where possible. Sunlight is the most critical site factor.",
    "Ventilation: natural (ridge vents with side inlets) or mechanical (exhaust fan with motorised inlet louvers). Natural ventilation performs poorly on hot days when outside wind is below about 200 ft/min.",
    "Measure at plant height: keep sensors out of direct sun and away from vents and heaters. Log the minimum, the maximum, and readings at morning, midday and evening."
   ],
   "worked": "On a sunny day with vents closed, record the interior maximum, the outdoor maximum and the time of the peak. A reading that matches the outdoor forecast suggests the sensor is misplaced.",
   "challenges": [
    {
     "id": "C1",
     "level": "Warm-up",
     "task": "Draw a site plan showing north, the sun's path, the prevailing wind, and where the vents and inlets go.",
     "key": "Long axis oriented so the long side faces south. Ridge vents at the top, inlets low on the opposite side so air crosses the house. Prevailing wind marked.",
     "check": "Compare against the model plan. Pass if orientation, vent position, inlet position and wind direction are all present."
    },
    {
     "id": "C2",
     "level": "Core",
     "task": "Run a 14-day minimum/maximum log with three time-of-day readings per day.",
     "key": "14 rows, each with a minimum, a maximum and three timed readings.",
     "check": "Count the rows (must be 14). Every row has a minimum below its maximum and time stamps."
    },
    {
     "id": "C3",
     "level": "Stretch",
     "task": "On two sunny days, take afternoon readings with vents closed, then open. Write one paragraph stating a vent trigger temperature.",
     "key": "A vented afternoon reading lower than the sealed reading, the difference recorded, and a trigger temperature justified by your numbers.",
     "check": "Rubric: names both readings, the difference, and a trigger tied to your data."
    }
   ],
   "mistakes": [
    "Sensor beside a vent or in direct sun: move it to plant height and shade it.",
    "Using outdoor weather as the greenhouse climate: log inside the house.",
    "Assuming vents alone will cool the house in hot weather: plan shade or evaporative cooling (Module 5)."
   ],
   "review": [],
   "pass": "Site plan (C1) and 14-day log (C2) complete, and a vent trigger rule written (C3)."
  },
  "greenhouse-year-2": {
   "prereq": "Module 1",
   "core": "A year-round greenhouse is a sequence of crops, each timed to the season's light and heat. Plan backwards from the harvest date, not forwards from the seed packet.",
   "steps": [
    "Find your last spring and first autumn frost dates from your local extension office.",
    "Plan backwards: transplant date = harvest target minus days to maturity; sow date = transplant date minus weeks in the tray. Weeks in tray (UAF): broccoli 4–6, cabbage 4–6, peppers 6–7, tomatoes 7–9, cucumbers 3.",
    "Divide the year into four blocks: winter (low light, heating needed), spring (rapid growth, ventilation rising), summer (cooling and shade) and autumn (sow for winter)."
   ],
   "worked": "Tomatoes, transplant date 15 May, 8 weeks in the tray. Sow date = 15 May minus 56 days = 20 March. Illustrative: the transplant date is set to the last frost date.",
   "challenges": [
    {
     "id": "C1",
     "level": "Warm-up",
     "task": "Peppers are transplanted on 1 June. Calculate the sow-date range using 6–7 weeks in the tray.",
     "key": "13 April to 20 April (1 June minus 42 days = 20 April; minus 49 days = 13 April).",
     "check": "Compare your range with the key. Pass if both ends match."
    },
    {
     "id": "C2",
     "level": "Core",
     "task": "Build a 12-month calendar with at least three crops in each seasonal block, showing sow, transplant and harvest dates.",
     "key": "12 monthly rows, at least 12 crops in total, every crop showing three dates.",
     "check": "Rubric: every crop has three consistent dates (sow before transplant before harvest) and each season has a crop."
    },
    {
     "id": "C3",
     "level": "Stretch",
     "task": "Plan three sowings of one fast crop, 21 days apart, for a continuous harvest. State each sow date and harvest window.",
     "key": "Three sow dates exactly 21 days apart, with harvest windows that do not overlap.",
     "check": "Check the gaps between sow dates (21 days each) and that the harvest windows do not overlap."
    }
   ],
   "mistakes": [
    "Counting from today instead of from the frost date: recompute from the frost dates.",
    "Sowing everything at once: stagger sowings so the harvest is continuous.",
    "Forgetting autumn sowings for winter greens: add an autumn block to the calendar."
   ],
   "review": [
    {
     "q": "Why does a small greenhouse swing in temperature faster than a large one?",
     "a": "Its air volume is small, so opening a door changes the temperature quickly."
    },
    {
     "q": "Which way should the long side of the greenhouse face?",
     "a": "South."
    }
   ],
   "pass": "Calendar complete (C2) and succession plan written (C3), with C1 correct."
  },
  "greenhouse-year-3": {
   "prereq": "Modules 1–2",
   "core": "Germination needs warmth, moisture and sometimes light. Seedlings need light close to the source and must move on when their first true leaves appear.",
   "steps": [
    "Tray and mix: break up clumps before filling. Sow small seeds in rows 1–2 inches apart and 1/8–1/4 inch deep, at about twice the seed diameter.",
    "Warmth and moisture: most seeds germinate best at 65–75°F. Cover with a humidity dome, but never in direct sun, which overheats the tray.",
    "Light and transplanting: after emergence remove the cover and set lights close to the seedlings, raising them as the plants grow. Transplant from plug cells at the first true leaves."
   ],
   "worked": "Two standard trays (10.5 × 21 in) under one 4 ft fixture with two tubes. Each tray holds about 12–18 large transplants or 50–120 small ones, so expect 24–36 large or 100–240 small per fixture.",
   "challenges": [
    {
     "id": "C1",
     "level": "Warm-up",
     "task": "Sow one tray of lettuce. Record row spacing and sowing depth.",
     "key": "Rows 1–2 inches apart. Lettuce seed left uncovered or lightly covered, since it is light-sensitive.",
     "check": "Compare your tray with the key or a photo of a model tray. Pass if spacing and depth match."
    },
    {
     "id": "C2",
     "level": "Core",
     "task": "Sow 20 seeds of one crop at 65–75°F. Record the day each seedling emerges and the total emerged.",
     "key": "A table of 20 seeds with emergence dates and a percentage germinated.",
     "check": "The log has a total and a percentage, and emergence days fall within the packet range or any gap is explained."
    },
    {
     "id": "C3",
     "level": "Stretch",
     "task": "Run two identical trays, one on a heat mat and one without. Explain the difference in emergence time using the temperature readings.",
     "key": "The heated tray emerges earlier, with a written explanation tied to your recorded temperatures.",
     "check": "Rubric: both trays logged, temperatures recorded, explanation references the data."
    }
   ],
   "mistakes": [
    "Burying small seeds: sow shallow and cover lightly or not at all.",
    "Lights held too high: seedlings go leggy, so lower the lights as they grow.",
    "Top layer drying out: bottom-water or mist the surface with a fine spray.",
    "Transplanting too late: move seedlings at the first true leaves.",
    "Covered trays left in sun: keep them in shade or indoors."
   ],
   "review": [
    {
     "q": "Where should the thermometer sit, and why not beside a vent?",
     "a": "At plant height, away from vents, so the reading reflects the plants' air."
    },
    {
     "q": "Using the 8-week tomato rule, what is the sow date for a 1 June transplant?",
     "a": "6 April."
    }
   ],
   "pass": "Tray set-up (C1), the 20-seed germination log (C2), and the heat-mat comparison (C3)."
  },
  "greenhouse-year-4": {
   "prereq": "Modules 1–3",
   "core": "Plants take up nutrients only when the pH and the dissolved-salt level in the medium allow it. Both can be measured, so they can be tracked and corrected before the crop shows a problem.",
   "steps": [
    "Test your water first: have irrigation water tested by a lab. High alkalinity can raise the medium pH over time.",
    "Target pH: most greenhouse crops have readily available nutrients at pH 5.4–6.2. Each species has its own optimal range, so look it up for each crop.",
    "EC measures the dissolved salts in the medium: how much fertiliser is available, or salt build-up. Take five to ten samples per crop type and use the average.",
    "Pick one method and stick to it: PourThru, saturated media extract, or the 1:2 dilution test. Calibrate the meter with standards."
   ],
   "worked": "Three samples of pH 5.1, 5.3 and 5.2 average 5.2, below the 5.4 lower edge of the readily-available band. Check the fertiliser's acidity and the water's alkalinity, then retest. Do not change the programme on one reading.",
   "challenges": [
    {
     "id": "C1",
     "level": "Warm-up",
     "task": "Calibrate your pH/EC meter against its standards and log the readings.",
     "key": "Each reading matches the labelled standard within the meter's stated tolerance.",
     "check": "Compare each reading with its standard value. Pass if each is within tolerance."
    },
    {
     "id": "C2",
     "level": "Core",
     "task": "Sample five pots per crop with one method, weekly for four weeks. Log pH and EC and compute averages.",
     "key": "A log with 20 readings per crop, weekly averages and a trend note.",
     "check": "Count the readings (20). Each week's average is within the species range or has a logged action."
    },
    {
     "id": "C3",
     "level": "Stretch",
     "task": "Your pH rises from 5.8 to 6.4 over three weeks. Write what you would test and change, and in what order.",
     "key": "Test water alkalinity first, then review fertiliser acidity and the irrigation schedule, and retest after one change at a time.",
     "check": "Rubric: names water alkalinity, one change at a time, and a retest."
    }
   ],
   "mistakes": [
    "Sticking a sensor into the medium repeatedly: use an extraction method. A direct reading is only consistent if moisture is controlled and tested on the same day each week.",
    "A single sample: use five to ten and average them.",
    "Testing dry pots: irrigate as usual first, because dry pots read high in EC.",
    "An uncalibrated meter: calibrate before each session."
   ],
   "review": [
    {
     "q": "Name the two ways to calculate a sow date.",
     "a": "Back-calculate from the transplant date using weeks in the tray, or count back from the target harvest using days to maturity."
    },
    {
     "q": "What temperature range suits most germinating seeds?",
     "a": "65–75°F."
    }
   ],
   "pass": "Meter calibration logged (C1), the four-week monitoring log (C2), and the drift plan (C3)."
  },
  "greenhouse-year-5": {
   "prereq": "Modules 1–4",
   "core": "Temperature is set by solar gain, ventilation, heating and cooling. Which lever matters changes with the season: heating in winter, ventilation in spring, cooling and shade in summer.",
   "steps": [
    "Ventilation targets: in summer aim for 1 to 1.5 full air-volume exchanges per minute, more for small houses. In winter, 20–30% of one exchange per minute is enough to bring in cool air without chilling the plants.",
    "Circulation fans: small fans moving about a quarter of the house volume per minute stop warm air pooling at the top. Run them continuously in winter and switch them off in summer.",
    "Cooling options: pad-and-fan cooling commonly shows a 7–10°F gradient from inlet to outlet. Fog cools more evenly, at about one nozzle per 50–100 ft² of growing area.",
    "Shade: shade cloth, roll-up screens or shade paint control light intensity in summer."
   ],
   "worked": "A 1,000 ft³ house in summer needs 1,000–1,500 ft³/min of exhaust capacity (1–1.5 exchanges per minute). In winter, 20–30% of that is 200–300 ft³/min.",
   "challenges": [
    {
     "id": "C1",
     "level": "Warm-up",
     "task": "Calculate the summer and winter ventilation targets for a 2,000 ft³ greenhouse.",
     "key": "Summer 2,000–3,000 ft³/min. Winter 400–600 ft³/min.",
     "check": "Compare with the key. Pass if both ranges match."
    },
    {
     "id": "C2",
     "level": "Core",
     "task": "Set a vent trigger and a fan trigger, then log one week of readings to test them.",
     "key": "A log showing each trigger's activation times and the temperature band held.",
     "check": "Count the activations and confirm the logged maximum stayed below your set point except for logged exceptions."
    },
    {
     "id": "C3",
     "level": "Stretch",
     "task": "Choose a cooling plan for a hot summer day from natural ventilation, shade, pad-and-fan and fog. Justify it with airflow and gradient figures.",
     "key": "A reasoned choice. A strong answer notes natural ventilation performs poorly below about 200 ft/min outdoor wind, and pad-and-fan has a 7–10°F gradient.",
     "check": "Rubric: the choice is justified with at least one number from this module."
    }
   ],
   "mistakes": [
    "Relying on vents alone in a hot climate: add shade or evaporative cooling. Vents cannot lower the house below outdoor temperature.",
    "Turning fans off in winter: air stratifies and plants at the bottom get colder.",
    "Ignoring low-wind days: plan extra cooling for calm, hot days."
   ],
   "review": [
    {
     "q": "Which pH range keeps nutrients readily available?",
     "a": "5.4–6.2."
    },
    {
     "q": "Where should the thermometer sit?",
     "a": "At plant height, away from vents and windows."
    }
   ],
   "pass": "Ventilation targets calculated (C1), a one-week trigger log (C2), and a justified cooling plan (C3)."
  },
  "greenhouse-year-6": {
   "prereq": "Modules 1–5",
   "core": "Prevention and early detection beat late treatment. Integrated pest management combines monitoring with several control tactics, and escalates only when monitoring shows a problem.",
   "steps": [
    "The four tactic families: cultural, biological, physical or mechanical, and chemical. Decisions rest on regular monitoring; inspect weekly to catch problems early.",
    "Biological control: inoculation releases a few natural enemies early to establish long-term control; inundation releases many for short-term control. It works better in long crops and steady conditions.",
    "Screens and airflow: insect screens add resistance to airflow, so they need more area.",
    "Sanitation: remove debris and disinfect between crops. It is the cheapest control."
   ],
   "worked": "A weekly sheet records date, plant ID, and whether a pest or damage sign is present. After week 4 whitefly adults appear on one bench: check the written decision rule, record it, and act only if the rule is met.",
   "challenges": [
    {
     "id": "C1",
     "level": "Warm-up",
     "task": "Set up a weekly scouting route of 10 plants per crop and log the first two weeks.",
     "key": "A log with date, plant ID and pest/damage yes or no, for 10 plants per week.",
     "check": "Count entries: 10 per crop per week, for two weeks."
    },
    {
     "id": "C2",
     "level": "Core",
     "task": "Identify three common greenhouse pests from your own crops using an extension identification guide, and name each damage sign.",
     "key": "Three pests, each with a sign (for example whitefly: honeydew and adults that fly up when the plant is brushed).",
     "check": "Compare against the model table. Pass with 3 of 3 correct."
    },
    {
     "id": "C3",
     "level": "Stretch",
     "task": "Write a decision rule for one pest: what you monitor, the threshold, the first non-chemical action, and when to escalate.",
     "key": "A complete rule with all four parts, non-chemical action first.",
     "check": "Rubric: all four parts present and the non-chemical action comes first."
    }
   ],
   "mistakes": [
    "Treating only when damage appears: scout weekly so you catch the first insects.",
    "Skipping sanitation between crops: clean and disinfect at each turnover.",
    "Expecting beneficials to work in hot, unstable conditions: release them in steady conditions and expect slower results in variable ones."
   ],
   "review": [
    {
     "q": "What is the summer ventilation target?",
     "a": "1–1.5 air-volume exchanges per minute."
    },
    {
     "q": "Name the three methods for testing medium solution.",
     "a": "PourThru, saturated media extract, and the 1:2 dilution test."
    }
   ],
   "pass": "Two weeks of scouting log (C1), the three-pest identification (C2), and a decision rule (C3)."
  },
  "greenhouse-year-7": {
   "prereq": "Modules 1–6",
   "core": "What you record in each cycle decides how well the next cycle goes. The year ends with a clean-out and a review that compares plan with outcome.",
   "steps": [
    "Harvest log: record date, crop, bench, count or weight, quality and notes.",
    "Clean-out: between crops and at year end, remove debris and disinfect trays and benches, as in Module 6.",
    "Annual review: compare planned against actual dates and yields, then pick two changes and support each with evidence from your logs."
   ],
   "worked": "A row reads: sown 20 March, transplanted 15 May, first harvest 2 July, planned harvest 25 June. The crop ran about a week late, so the review checks whether temperature, feeding or timing was the cause. Illustrative numbers.",
   "challenges": [
    {
     "id": "C1",
     "level": "Warm-up",
     "task": "Design a harvest log template with at least eight fields.",
     "key": "Date, crop, bench, count or weight, quality, notes, and at least two more fields (for example pest present or pH/EC reading).",
     "check": "Pass if the template has at least eight fields and includes date and crop."
    },
    {
     "id": "C2",
     "level": "Core",
     "task": "Log one full crop cycle from sowing to the end of harvest, with an entry for every planned event.",
     "key": "A complete row for each planned event: sowing, transplanting, feeding, pest checks, first harvest, final harvest.",
     "check": "Every planned date has an actual date beside it."
    },
    {
     "id": "C3",
     "level": "Stretch",
     "task": "Write the annual review, 800–1,000 words, with planned against actual dates, two changes and evidence from your logs.",
     "key": "A review that uses your logs, where each change names the evidence that supports it.",
     "check": "Rubric: planned/actual comparison, two changes stated, each supported by a logged number."
    }
   ],
   "mistakes": [
    "Recording only yield: record dates too, because timing is the main thing to learn.",
    "Reusing trays without cleaning: clean and disinfect each time.",
    "Skipping the review: you repeat the same mistakes next year."
   ],
   "review": [
    {
     "q": "Name the four IPM tactic families.",
     "a": "Cultural, biological, physical or mechanical, and chemical."
    },
    {
     "q": "What is the winter rule for circulation fans?",
     "a": "Run them continuously."
    }
   ],
   "pass": "Harvest log template (C1), one full cycle logged (C2), and the annual review written (C3)."
  },
  "greenhouse-year-cap": {
   "prereq": "All seven modules",
   "core": "Run a small greenhouse for one full year, or simulate one with logs from earlier modules. Plan the year, grow it, monitor it, and review it.",
   "steps": [
    "Site plan and a 12-month climate log with min/max readings and vent and fan triggers.",
    "12-month calendar with sow, transplant and harvest dates for each crop, back-calculated from frost dates.",
    "Seed and transplant logs, plus pH and EC logs averaged per crop with actions taken when out of range.",
    "Weekly pest scouting log with a decision rule and recorded actions, a harvest log, and an annual review of 800–1,000 words."
   ],
   "worked": "",
   "challenges": [
    {
     "id": "1",
     "level": "Planning",
     "task": "Every crop has sow, transplant and harvest dates, back-calculated from frost dates.",
     "key": "The dates are consistent for every crop.",
     "check": ""
    },
    {
     "id": "2",
     "level": "Climate",
     "task": "Logs cover the full year, with vent and fan triggers set.",
     "key": "At least one trigger is justified with logged data.",
     "check": ""
    },
    {
     "id": "3",
     "level": "Media",
     "task": "pH and EC logged for each crop and averaged.",
     "key": "Each out-of-range reading has a recorded action.",
     "check": ""
    },
    {
     "id": "4",
     "level": "Pests",
     "task": "Weekly scouting is logged.",
     "key": "Every action follows a written decision rule that puts non-chemical options first.",
     "check": ""
    },
    {
     "id": "5",
     "level": "Review",
     "task": "The review compares planned against actual dates and yields.",
     "key": "Two changes, each backed by logged evidence.",
     "check": ""
    }
   ],
   "mistakes": [],
   "review": [],
   "pass": "All five rubric rows meet the passing result. This earns the Black belt."
  }
 },
 "quiz": {
  "greenhouse-year-1": [
   {
    "q": "Where should the long side of the greenhouse face, where possible?",
    "o": [
     "North",
     "East",
     "South",
     "West"
    ],
    "a": 2,
    "w": "Sunlight is the most critical site factor, so the long side faces south."
   },
   {
    "q": "Where should the thermometer sit?",
    "o": [
     "Beside a vent, so it reacts quickly",
     "At plant height, out of direct sun and away from vents and heaters",
     "On the roof ridge",
     "Next to the door"
    ],
    "a": 1,
    "w": "A reading beside a vent or in the sun does not describe the air the plants are in."
   },
   {
    "q": "When does natural ventilation perform poorly?",
    "o": [
     "On cloudy days",
     "At night",
     "When the vents are screened",
     "On hot days when outside wind is below about 200 ft/min"
    ],
    "a": 3,
    "w": "Natural ventilation relies on wind and warm air rising. With little wind on a hot day it cannot move enough air."
   },
   {
    "q": "Why does a small greenhouse swing in temperature faster than a large one?",
    "o": [
     "Its covering is thinner",
     "Its air volume is small, so an open door changes the temperature quickly",
     "It holds fewer plants",
     "It is never vented"
    ],
    "a": 1,
    "w": "Less air volume means less thermal buffer."
   },
   {
    "lec": 1,
    "q": "Paxton's ridge-and-furrow roof was set at right angles to which light?",
    "o": [
     "Midday sun",
     "Morning and evening sun",
     "Northern light",
     "Artificial light"
    ],
    "a": 1,
    "w": "Paxton set the roof at right angles to the morning and evening sun to admit more light and drain rain. {{gg-paxton}}"
   }
  ],
  "greenhouse-year-2": [
   {
    "q": "How do you work out a sow date?",
    "o": [
     "Harvest date plus days to maturity",
     "Transplant date minus weeks in the tray",
     "Last frost plus eight weeks",
     "First frost minus 21 days"
    ],
    "a": 1,
    "w": "Plan backwards: transplant date minus the weeks the plant spends in the tray."
   },
   {
    "q": "Using the UAF table, peppers spend 6–7 weeks in the tray and are transplanted on 1 June. When do you sow?",
    "o": [
     "18–25 March",
     "1–8 May",
     "13–20 April",
     "27 April–4 May"
    ],
    "a": 2,
    "w": "1 June minus 42 days is 20 April, and minus 49 days is 13 April."
   },
   {
    "q": "Why sow a fast crop every 21 days?",
    "o": [
     "It gives a continuous harvest instead of one glut",
     "It uses less seed",
     "It avoids needing a frost date",
     "It speeds up germination"
    ],
    "a": 0,
    "w": "Staggered sowings spread the harvest."
   },
   {
    "q": "Which seasonal block is for sowing winter greens?",
    "o": [
     "Spring",
     "Summer",
     "Autumn",
     "Winter"
    ],
    "a": 2,
    "w": "Winter greens are sown in autumn so they are established for the dark months."
   },
   {
    "lec": 1,
    "q": "What did Jekyll say a long drift of plants avoids?",
    "o": [
     "Slugs",
     "An unsightly empty space when the flowers are done",
     "Watering",
     "Frost"
    ],
    "a": 1,
    "w": "A long thin planting does not leave an empty space when flowers are done. {{jekyll-colour}}"
   }
  ],
  "greenhouse-year-3": [
   {
    "q": "What temperature range suits most germinating seeds?",
    "o": [
     "40–50°F",
     "65–75°F",
     "85–95°F",
     "50–60°F"
    ],
    "a": 1,
    "w": "Most seeds germinate best at 65–75°F."
   },
   {
    "q": "When do you transplant a seedling out of a plug cell?",
    "o": [
     "Before it emerges",
     "At the first true leaves",
     "After it flowers",
     "When the tray is dry"
    ],
    "a": 1,
    "w": "Leaving plugs too long slows development and can cause stem rot."
   },
   {
    "q": "What do you do with lights once seedlings emerge?",
    "o": [
     "Turn them off",
     "Hang them a metre above",
     "Bring them close, then raise them as the seedlings grow",
     "Move them to the side"
    ],
    "a": 2,
    "w": "Lights too high make seedlings leggy."
   },
   {
    "q": "Why keep a covered tray out of direct sun?",
    "o": [
     "Seeds need darkness",
     "The dome will crack",
     "Seeds dry out faster",
     "It overheats like a small greenhouse"
    ],
    "a": 3,
    "w": "A dome in direct sun can reach damaging temperatures."
   },
   {
    "lec": 1,
    "q": "A tray of 20 seeds has 17 germinate. What is the germination percentage?",
    "o": [
     "75",
     "80",
     "85",
     "90"
    ],
    "a": 2,
    "w": "17 divided by 20 is 0.85, or 85 per cent."
   }
  ],
  "greenhouse-year-4": [
   {
    "q": "Which pH range keeps most nutrients readily available?",
    "o": [
     "4.0–4.8",
     "5.4–6.2",
     "6.8–7.5",
     "7.5–8.5"
    ],
    "a": 1,
    "w": "Each species also has its own optimum, so look it up for each crop."
   },
   {
    "q": "How many samples per crop type should you take?",
    "o": [
     "One",
     "Two",
     "Five to ten, then average",
     "Twenty to thirty"
    ],
    "a": 2,
    "w": "One pot can mislead. The average of five to ten is a better basis for a decision."
   },
   {
    "q": "What does EC measure?",
    "o": [
     "Light intensity",
     "Dissolved salts in the medium",
     "Air humidity",
     "Water temperature"
    ],
    "a": 1,
    "w": "EC shows how much fertiliser is available, or whether salts are building up."
   },
   {
    "q": "Your medium pH keeps drifting up. What do you test first?",
    "o": [
     "Irrigation water alkalinity",
     "Seed age",
     "Fan speed",
     "Air temperature"
    ],
    "a": 0,
    "w": "High alkalinity in the water raises medium pH over time."
   },
   {
    "lec": 1,
    "q": "In the barrel image of Liebig's law, what sets how much the barrel holds?",
    "o": [
     "The longest stave",
     "The shortest stave",
     "The average stave",
     "The number of staves"
    ],
    "a": 1,
    "w": "The shortest stave sets the capacity. {{wiki-liebig}}"
   }
  ],
  "greenhouse-year-5": [
   {
    "q": "What is the summer ventilation target?",
    "o": [
     "0.1 exchange per minute",
     "1 to 1.5 air-volume exchanges per minute",
     "10 exchanges per minute",
     "One exchange per hour"
    ],
    "a": 1,
    "w": "Small houses need the larger figure."
   },
   {
    "q": "What is the winter ventilation target?",
    "o": [
     "20–30% of one exchange per minute",
     "One full exchange per minute",
     "None",
     "Five exchanges per minute"
    ],
    "a": 0,
    "w": "Enough to bring in cool air for mixing without chilling the plants."
   },
   {
    "q": "What temperature gradient is common with pad-and-fan cooling?",
    "o": [
     "None",
     "7–10°F from inlet to outlet",
     "30–40°F",
     "1°F"
    ],
    "a": 1,
    "w": "Fog systems cool more evenly."
   },
   {
    "q": "What should circulation fans do in winter?",
    "o": [
     "Stay off",
     "Run only at night",
     "Run continuously",
     "Run only in summer"
    ],
    "a": 2,
    "w": "Without them warm air collects at the top and cool air settles around the plants."
   },
   {
    "lec": 1,
    "q": "Why were the Crystal Palace's louvre blades S-shaped?",
    "o": [
     "For looks",
     "So rain could not enter while open",
     "To trap heat",
     "To hold shading"
    ],
    "a": 1,
    "w": "The S-shaped blades kept rain out when the ventilators were open. {{sch}}"
   }
  ],
  "greenhouse-year-6": [
   {
    "q": "Which are the four IPM tactic families?",
    "o": [
     "Cultural, biological, physical or mechanical, chemical",
     "Chemical, chemical, chemical, chemical",
     "Visual, audible, thermal, chemical",
     "Spray, dust, fog, drench"
    ],
    "a": 0,
    "w": "Decisions rest on monitoring, with chemical control as one option among four."
   },
   {
    "q": "How often should you inspect plants?",
    "o": [
     "Yearly",
     "Monthly",
     "Weekly",
     "Only when damage appears"
    ],
    "a": 2,
    "w": "Weekly inspection catches problems before they spread."
   },
   {
    "q": "What does inundation mean in biological control?",
    "o": [
     "Releasing a few enemies early for long-term control",
     "Spraying with water",
     "Removing the screens",
     "Releasing many natural enemies for short-term control"
    ],
    "a": 3,
    "w": "Releasing a few early is inoculation."
   },
   {
    "q": "In a decision rule, which action comes first?",
    "o": [
     "The non-chemical action",
     "The strongest spray",
     "Removing all plants",
     "Doing nothing"
    ],
    "a": 0,
    "w": "Escalate only if the first step does not work."
   },
   {
    "lec": 1,
    "q": "Which approach best matches Carson's argument for pest control?",
    "o": [
     "Spray on a fixed schedule",
     "Look first, decide, then use the gentlest effective response",
     "Never act",
     "Use the strongest chemical available"
    ],
    "a": 1,
    "w": "She argued for finding out first whether another method can be used, and then using chemicals sparingly and selectively. {{carson-1963}}"
   }
  ],
  "greenhouse-year-7": [
   {
    "q": "Why record dates as well as yield?",
    "o": [
     "It looks tidier",
     "Timing is the main thing you learn from",
     "Dates are required by law",
     "It costs less"
    ],
    "a": 1,
    "w": "Without dates you cannot tell whether a crop was late or early."
   },
   {
    "q": "What should happen between crops?",
    "o": [
     "Nothing",
     "Remove debris and disinfect trays and benches",
     "Open the doors for a week",
     "Re-use trays unwashed"
    ],
    "a": 1,
    "w": "Sanitation is the cheapest pest control."
   },
   {
    "q": "What does the annual review contain?",
    "o": [
     "A shopping list",
     "Planned versus actual dates and yields, and two evidence-backed changes",
     "Only the best harvest",
     "A weather forecast"
    ],
    "a": 1,
    "w": "The changes should each name a number from your logs."
   },
   {
    "q": "How many fields should a harvest log have at least?",
    "o": [
     "Three",
     "Five",
     "Eight",
     "Twelve"
    ],
    "a": 2,
    "w": "Date, crop, bench, count or weight, quality, notes, and at least two more."
   },
   {
    "lec": 1,
    "q": "What three parts does a Jekyll-style month note have in this course?",
    "o": [
     "Cost, profit, tax",
     "What I did, what I saw, next year",
     "Sow, grow, sell",
     "Rain, wind, sun"
    ],
    "a": 1,
    "w": "Did, saw, and a line for next year."
   }
  ],
  "greenhouse-year-cap": [
   {
    "lec": 1,
    "q": "In the Paxton method for scoping a year, what do you choose after the fixed limits?",
    "o": [
     "A standard repeating unit",
     "The most complex bed",
     "A new crop each week",
     "The most expensive seed"
    ],
    "a": 0,
    "w": "Choose a standard unit, then repeat it across the year. {{gg-paxton}}"
   }
  ]
 },
 "slides": [
  {
   "id": "deck-1",
   "library": "greenhouse-year",
   "module": "greenhouse-year-1",
   "title": "The Greenhouse as a System",
   "slides": [
    {
     "h": "Core idea",
     "pts": [
      "A greenhouse traps solar heat, so its climate swings faster than the outdoors.",
      "Small houses swing fastest: little air volume, so an open door changes the temperature quickly.",
      "Site, ventilation and measured temperature set the limits for every later module."
     ]
    },
    {
     "h": "Site and ventilation",
     "pts": [
      "Face the long side south where possible. Sunlight is the most critical site factor.",
      "Natural ventilation: ridge vents with side inlets. Mechanical: exhaust fan plus motorised inlet louvers.",
      "Natural ventilation struggles on hot days when outside wind is below about 200 ft/min."
     ]
    },
    {
     "h": "Measure before you manage",
     "pts": [
      "Min/max thermometer at plant height, out of direct sun, away from vents and heaters.",
      "Log the minimum, the maximum, and readings at morning, midday and evening.",
      "Worked example: on a sunny day with vents closed, record the interior maximum, the outdoor maximum and the time of the peak."
     ]
    },
    {
     "h": "Challenges",
     "pts": [
      "C1 Site plan: north, sun path, prevailing wind, vent and inlet positions.",
      "C2 A 14-day min/max log with three readings a day.",
      "C3 Sealed versus vented afternoon test, then write a vent trigger temperature."
     ]
    },
    {
     "h": "Watch for, and pass condition",
     "pts": [
      "Sensor beside a vent or in sun: move it to plant height and shade it.",
      "Outdoor weather is not greenhouse climate: log inside the house.",
      "Vents alone cannot cool below outdoor temperature."
     ],
     "note": "Pass: site plan, 14-day log, and a written vent trigger rule."
    }
   ]
  },
  {
   "id": "deck-2",
   "library": "greenhouse-year",
   "module": "greenhouse-year-2",
   "title": "The Year Cycle: Planning and Succession",
   "slides": [
    {
     "h": "Core idea",
     "pts": [
      "A year-round greenhouse is a sequence of crops, each timed to the season's light and heat.",
      "Plan backwards from the harvest date, not forwards from the seed packet."
     ]
    },
    {
     "h": "The method",
     "pts": [
      "Get last spring and first autumn frost dates from your local extension office.",
      "Transplant date = harvest target minus days to maturity. Sow date = transplant date minus weeks in the tray.",
      "Weeks in tray (UAF): broccoli 4–6, cabbage 4–6, peppers 6–7, tomatoes 7–9, cucumbers 3.",
      "Divide the year into winter, spring, summer and autumn blocks."
     ]
    },
    {
     "h": "Worked example",
     "pts": [
      "Tomatoes, transplant on 15 May, 8 weeks in the tray.",
      "Sow date = 15 May minus 56 days = 20 March."
     ],
     "note": "Illustrative: the transplant date is set to the last frost date."
    },
    {
     "h": "Challenges",
     "pts": [
      "C1 Peppers transplanted 1 June: sow between 13 and 20 April.",
      "C2 A 12-month calendar with three crops in each season block.",
      "C3 Three sowings 21 days apart for a continuous harvest."
     ]
    },
    {
     "h": "Watch for, and pass condition",
     "pts": [
      "Counting from today instead of from the frost date.",
      "Sowing everything at once instead of staggering.",
      "Forgetting autumn sowings for winter greens."
     ],
     "note": "Pass: the calendar and the succession plan are complete."
    }
   ]
  },
  {
   "id": "deck-3",
   "library": "greenhouse-year",
   "module": "greenhouse-year-3",
   "title": "Seed Starting and Transplanting",
   "slides": [
    {
     "h": "Core idea",
     "pts": [
      "Germination needs warmth, moisture and, for some crops, light.",
      "Seedlings need light close to the source, and must move on when the first true leaves appear."
     ]
    },
    {
     "h": "Tray, mix and sowing",
     "pts": [
      "Break up clumps in the mix before filling trays.",
      "Small seeds: rows 1–2 inches apart, 1/8–1/4 inch deep. Sow at about twice the seed diameter.",
      "Most seeds germinate at 65–75°F. Cover with a dome, but keep covered trays out of direct sun."
     ]
    },
    {
     "h": "After emergence",
     "pts": [
      "Remove the cover and bring lights close to the seedlings. Raise the lights as they grow.",
      "Transplant from plug cells as soon as the first true leaves develop.",
      "Worked example: two standard trays under one 4 ft two-tube fixture hold 24–36 large or 100–240 small transplants."
     ]
    },
    {
     "h": "Challenges",
     "pts": [
      "C1 Sow one tray of lettuce and record row spacing and depth.",
      "C2 Sow 20 seeds at 65–75°F and log the day each one emerges.",
      "C3 Heat mat versus no heat mat: explain the difference using your readings."
     ]
    },
    {
     "h": "Watch for, and pass condition",
     "pts": [
      "Burying small seeds: sow shallow.",
      "Lights too high: seedlings go leggy.",
      "Transplanting too late: move them at the first true leaves."
     ],
     "note": "Pass: tray set-up, germination log and the heat-mat comparison are done."
    }
   ]
  },
  {
   "id": "deck-4",
   "library": "greenhouse-year",
   "module": "greenhouse-year-4",
   "title": "Growing Media, Feeding, and Water Quality",
   "slides": [
    {
     "h": "Core idea",
     "pts": [
      "Plants take up nutrients only when pH and dissolved salts allow.",
      "Both can be measured, so you can correct them before the crop shows a problem."
     ]
    },
    {
     "h": "The method",
     "pts": [
      "Have irrigation water lab-tested. High alkalinity raises medium pH over time.",
      "Nutrients are readily available at pH 5.4–6.2. Each species also has its own range.",
      "EC measures dissolved salts: fertiliser available, or salt build-up.",
      "Take 5–10 samples per crop and average them. Use one method and a calibrated meter."
     ]
    },
    {
     "h": "Worked example",
     "pts": [
      "Samples read pH 5.1, 5.3 and 5.2, so the average is 5.2.",
      "That is below the 5.4 lower edge: check fertiliser acidity and water alkalinity, then retest.",
      "Do not change the programme on one reading."
     ]
    },
    {
     "h": "Challenges",
     "pts": [
      "C1 Calibrate the pH/EC meter against its standards and log the readings.",
      "C2 Five pots per crop, weekly for four weeks, with averages.",
      "C3 pH rises from 5.8 to 6.4 in three weeks: write what you test and change, in order."
     ]
    },
    {
     "h": "Watch for, and pass condition",
     "pts": [
      "A single sample: use five to ten and average.",
      "Testing dry pots: they read high in EC. Irrigate as usual first.",
      "An uncalibrated meter: calibrate before each session."
     ],
     "note": "Pass: calibration logged, four-week log complete, drift plan written."
    }
   ]
  },
  {
   "id": "deck-5",
   "library": "greenhouse-year",
   "module": "greenhouse-year-5",
   "title": "Climate Control Through the Seasons",
   "slides": [
    {
     "h": "Core idea",
     "pts": [
      "Temperature is set by solar gain, ventilation, heating and cooling.",
      "Which lever matters changes with the season: heating in winter, ventilation in spring, cooling and shade in summer."
     ]
    },
    {
     "h": "Ventilation targets",
     "pts": [
      "Summer: 1 to 1.5 air-volume exchanges per minute, more for small houses.",
      "Winter: 20–30% of one exchange per minute is enough to mix in cool air.",
      "Circulation fans moving about a quarter of the house volume per minute stop warm air pooling at the top. Run them in winter."
     ]
    },
    {
     "h": "Cooling and shade",
     "pts": [
      "Pad-and-fan cooling shows a 7–10°F gradient from inlet to outlet.",
      "Fog cools more evenly, at about one nozzle per 50–100 ft² of growing area.",
      "Shade cloth, screens or paint control summer light intensity."
     ],
     "note": "Research check: in one tomato trial, extra active cooling's energy and water cost was not offset by a yield gain (Moreno-Teruel et al., 2022)."
    },
    {
     "h": "Worked example and challenges",
     "pts": [
      "A 1,000 ft³ house needs 1,000–1,500 ft³/min in summer and 200–300 ft³/min in winter.",
      "C1 Calculate both targets for a 2,000 ft³ house: 2,000–3,000 and 400–600 ft³/min.",
      "C2 Set vent and fan triggers and log one week to test them.",
      "C3 Choose a cooling plan for a hot day and justify it with numbers."
     ]
    },
    {
     "h": "Watch for, and pass condition",
     "pts": [
      "Relying on vents alone in a hot climate: add shade or evaporative cooling.",
      "Turning fans off in winter: air stratifies.",
      "Ignoring calm, hot days: plan extra cooling."
     ],
     "note": "Pass: ventilation targets, one-week trigger log, and a justified cooling plan."
    }
   ]
  },
  {
   "id": "deck-6",
   "library": "greenhouse-year",
   "module": "greenhouse-year-6",
   "title": "Pest and Disease Monitoring (IPM)",
   "slides": [
    {
     "h": "Core idea",
     "pts": [
      "Prevention and early detection beat late treatment.",
      "IPM combines monitoring with several control tactics, and escalates only when monitoring shows a problem."
     ]
    },
    {
     "h": "The tactics",
     "pts": [
      "Cultural, biological, physical or mechanical, and chemical.",
      "Inspect weekly. Early detection is the point.",
      "Biological control works better in long crops and steady conditions: inoculation releases a few enemies early, inundation releases many for short-term control.",
      "Insect screens add airflow resistance, so give them extra area."
     ],
     "note": "Research check: in a cucumber greenhouse trial, biological programs matched chemical control on yield, and spider mites rose where pesticide was used (Adly et al., 2024)."
    },
    {
     "h": "Worked example",
     "pts": [
      "A weekly sheet records date, plant ID, and pest or damage yes or no.",
      "After week 4 whitefly adults appear on one bench.",
      "Check the written decision rule and act only if it is met."
     ]
    },
    {
     "h": "Challenges",
     "pts": [
      "C1 Scout 10 plants per crop weekly and log two weeks.",
      "C2 Identify three pests from your own crops and name each damage sign.",
      "C3 Write a decision rule: monitor, threshold, first non-chemical action, escalation."
     ]
    },
    {
     "h": "Watch for, and pass condition",
     "pts": [
      "Treating only when damage appears: scout weekly.",
      "Skipping sanitation between crops: clean and disinfect at each turnover.",
      "Expecting beneficials to work in hot, unstable conditions."
     ],
     "note": "Pass: scouting log, three-pest identification, and a decision rule."
    }
   ]
  },
  {
   "id": "deck-7",
   "library": "greenhouse-year",
   "module": "greenhouse-year-7",
   "title": "Harvest, Records, and the Annual Review",
   "slides": [
    {
     "h": "Core idea",
     "pts": [
      "What you record in each cycle decides how well the next one goes.",
      "The year ends with a clean-out and a review that compares plan with outcome."
     ]
    },
    {
     "h": "The routine",
     "pts": [
      "Harvest log: date, crop, bench, count or weight, quality, notes.",
      "Clean-out: remove debris and disinfect trays and benches between crops and at year end.",
      "Annual review: planned versus actual dates and yields, then two changes backed by evidence."
     ]
    },
    {
     "h": "Worked example",
     "pts": [
      "Sown 20 March, transplanted 15 May, first harvest 2 July, planned 25 June.",
      "The crop ran about a week late: was it temperature, feeding or timing?"
     ],
     "note": "Illustrative numbers."
    },
    {
     "h": "Challenges",
     "pts": [
      "C1 Design a harvest log with at least eight fields.",
      "C2 Log one full crop cycle from sowing to the last harvest.",
      "C3 Write the annual review, 800–1,000 words, using your logs."
     ]
    },
    {
     "h": "Watch for, and pass condition",
     "pts": [
      "Recording only yield: record dates too, because timing is the main lesson.",
      "Reusing trays unwashed: clean them every time.",
      "Skipping the review: you repeat the same mistakes."
     ],
     "note": "Pass: log template, one full cycle logged, annual review written."
    }
   ]
  },
  {
   "id": "deck-cap",
   "library": "greenhouse-year",
   "module": "greenhouse-year-cap",
   "title": "The 12-Month Greenhouse Cycle",
   "slides": [
    {
     "h": "The brief",
     "pts": [
      "Run a small greenhouse for one year, or simulate a year with logs.",
      "Plan the year, grow it, monitor it, and review it."
     ]
    },
    {
     "h": "Required deliverable",
     "pts": [
      "Site plan and a 12-month climate log with vent and fan triggers.",
      "12-month calendar with sow, transplant and harvest dates, back-calculated from frost dates.",
      "Seed, pH/EC, pest scouting and harvest logs.",
      "An annual review of 800–1,000 words."
     ]
    },
    {
     "h": "Rubric",
     "pts": [
      "Planning: every crop has consistent sow, transplant and harvest dates.",
      "Climate: year-long logs, triggers justified with data.",
      "Media: pH and EC averaged per crop, actions recorded.",
      "Pests: weekly scouting and a rule that puts non-chemical options first.",
      "Review: planned versus actual, two changes backed by evidence."
     ]
    },
    {
     "h": "Black belt",
     "pts": [
      "All five rubric rows meet the passing result.",
      "Tick the capstone in the Modules table to log it."
     ],
     "note": "Pass: all five criteria met."
    }
   ]
  }
 ],
 "activity": [
  {
   "id": "a1",
   "date": "2026-10-10",
   "library": "greenhouse-year",
   "event": "Library generated",
   "detail": "7 modules, 21 challenges, belt ladder and capstone saved as a markdown file."
  },
  {
   "id": "a2",
   "date": "2026-10-10",
   "library": "greenhouse-year",
   "event": "Sources verified",
   "detail": "Extension guides, videos, papers, a book, and a magazine article located in-session. Not every source was read in full."
  },
  {
   "id": "a3",
   "date": "2026-10-10",
   "library": "greenhouse-year",
   "event": "Resource types added",
   "detail": "YouTube videos, scholarly papers, a book, a magazine article, and Google Images search links attached to modules."
  },
  {
   "id": "a4",
   "date": "2026-10-10",
   "library": "greenhouse-year",
   "event": "Dashboard created",
   "detail": "Archive started. New libraries, completions, and resources are added to archive-data.js."
  },
  {
   "id": "a6",
   "date": "2026-10-10",
   "library": "greenhouse-year",
   "event": "Full course decks written",
   "detail": "31 lessons across 7 modules and the capstone, built as 466 slides with 16 diagrams, tables, worked examples, in-slide checks, embedded videos and numbered sources. Slides now open first in every module; the same content is available as Notes."
  },
  {
   "id": "a5",
   "date": "2026-10-10",
   "library": "greenhouse-year",
   "event": "Archive populated",
   "detail": "Added 4 videos, 3 papers on greenhouse pest management, 1 book, and 3 magazine articles. Still open: videos for Modules 1 and 7, a substrate pH/EC paper, and a deeper video for each module."
  }
 ],
 "updated": "2026-10-10"
});
