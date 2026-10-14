/**
 * Kisan Sahayak — In-House Native Translation Dictionaries
 * Supports: English (en), Marathi (mr), Hindi (hi)
 * 100% Client-Side & Independent (No external Google or Chrome dependencies)
 */

const KISAN_TRANSLATIONS = {
  // Navigation & Header
  "Home": { mr: "मुख्यपृष्ठ", hi: "होम" },
  "Dashboard": { mr: "डॅशबोर्ड", hi: "डैशबोर्ड" },
  "Farmer Dashboard": { mr: "शेतकरी डॅशबोर्ड", hi: "किसान डैशबोर्ड" },
  "Crops": { mr: "पिके", hi: "फसलें" },
  "Seeds & Crops": { mr: "बियाणे व पिके", hi: "बीज और फसलें" },
  "Seeds & Crops Directory": { mr: "बियाणे व पिके निर्देशिका", hi: "बीज और फसल निर्देशिका" },
  "Tools": { mr: "अवजारे", hi: "उपकरण" },
  "Farming Tools": { mr: "शेती अवजारे", hi: "कृषि उपकरण" },
  "Farming Tools & Machinery": { mr: "शेती अवजारे व यंत्रसामग्री", hi: "कृषि उपकरण और मशीनरी" },
  "Farming Equipment": { mr: "शेती उपकरणे", hi: "कृषि उपकरण" },
  "Schemes": { mr: "योजना", hi: "योजनाएं" },
  "Government Schemes": { mr: "सरकारी योजना", hi: "सरकारी योजनाएं" },
  "Loans": { mr: "कर्ज", hi: "ऋण" },
  "Loans & Subsidies": { mr: "कर्ज व सबसिडी", hi: "ऋण और सब्सिडी" },
  "Guides": { mr: "मार्गदर्शक", hi: "गाइड" },
  "Farming Knowledge Guides": { mr: "शेती माहिती मार्गदर्शक", hi: "कृषि ज्ञान मार्गदर्शिका" },
  "Organic & Soil Guides": { mr: "सेंद्रिय व माती मार्गदर्शक", hi: "जैविक और मृदा गाइड" },
  "Weather": { mr: "हवामान", hi: "मौसम" },
  "Weather & Farm Tips": { mr: "हवामान व शेती सल्ला", hi: "मौसम और कृषि सलाह" },
  "Weather Forecasts": { mr: "हवामान अंदाज", hi: "मौसम पूर्वानुमान" },
  "Market": { mr: "बाजार", hi: "बाज़ार" },
  "Mandi & Marketplace": { mr: "मंडी व शेतमाल बाजार", hi: "मंडी और बाज़ार" },
  "Agri Marketplace & Mandis": { mr: "कृषी बाजारपेठ व मंड्या", hi: "कृषि बाज़ार और मंडियां" },
  "Community": { mr: "समुदाय", hi: "समुदाय" },
  "Farmer Community": { mr: "शेतकरी समुदाय", hi: "किसान समुदाय" },
  "Farmer Community Hub": { mr: "शेतकरी समुदाय केंद्र", hi: "किसान समुदाय केंद्र" },
  "Farmer Profile": { mr: "शेतकरी प्रोफाइल", hi: "किसान प्रोफ़ाइल" },
  "Admin Dashboard": { mr: "प्रशासक डॅशबोर्ड", hi: "एडमिन डैशबोर्ड" },
  "Admin Control Center": { mr: "प्रशासक नियंत्रण केंद्र", hi: "एडमिन नियंत्रण केंद्र" },
  "Admin": { mr: "प्रशासक", hi: "व्यवस्थापक" },

  // Auth & Actions
  "Login": { mr: "लॉगिन करा", hi: "लॉग इन" },
  "Register": { mr: "नोंदणी करा", hi: "पंजीकरण करें" },
  "Logout": { mr: "लॉगआउट", hi: "लॉग आउट" },
  "Sign Out": { mr: "बाहेर पडा", hi: "साइन आउट" },
  "Join as Farmer": { mr: "शेतकरी म्हणून जोडा", hi: "किसान के रूप में जुड़ें" },
  "Saved": { mr: "जतन केलेले", hi: "सहेजे गए" },
  "Saved Resources": { mr: "जतन केलेले स्त्रोत", hi: "सहेजे गए संसाधन" },
  "Select Language / भाषा निवडा": { mr: "भाषा निवडा", hi: "भाषा चुनें" },
  "Website Language / भाषा निवडा:": { mr: "वेबसाइट भाषा निवडा:", hi: "वेबसाइट भाषा चुनें:" },
  "Change Language / भाषा बदला": { mr: "भाषा बदला", hi: "भाषा बदलें" },

  // Hero Section & Taglines
  "Smart Resources • Stronger Farmers": { mr: "स्मार्ट साधने • सक्षम शेतकरी", hi: "स्मार्ट संसाधन • सशक्त किसान" },
  "One-Stop Indian Farmer Support Portal": { mr: "भारतीय शेतकऱ्यांसाठी एकात्मिक सहाय्य पोर्टल", hi: "भारतीय किसानों का संपूर्ण सहायता पोर्टल" },
  "Empowering Farmers with the Right Resources": { mr: "योग्य साधनांसह शेतकऱ्यांचे सक्षमीकरण", hi: "सही संसाधनों से किसानों का सशक्तिकरण" },
  "Access farming knowledge, government schemes, crop information, agricultural tools, weather resources, marketplaces and farmer support — all in one place.": {
    mr: "शेती ज्ञान, सरकारी योजना, पिकांची माहिती, शेती अवजारे, हवामान अंदाज, बाजारभाव आणि शेतकरी सहाय्य — सर्व एकाच ठिकाणी.",
    hi: "कृषि ज्ञान, सरकारी योजनाएं, फसल जानकारी, कृषि उपकरण, मौसम संसाधन, बाज़ार और किसान सहायता — सब एक ही स्थान पर।"
  },
  "Explore Resources": { mr: "साधने शोधा", hi: "संसाधन खोजें" },
  "Smart Agri Portal": { mr: "स्मार्ट कृषी पोर्टल", hi: "स्मार्ट कृषि पोर्टल" },
  "Direct Access to Verified Indian Schemes": { mr: "सत्यापित भारतीय योजनांची थेट माहिती", hi: "सत्यापित भारतीय योजनाओं तक सीधी पहुंच" },
  "Live Portal": { mr: "थेट पोर्टल", hi: "लाइव पोर्टल" },
  "Access DBT benefits, KCC loans at 4% interest, and direct crop damage insurance claims.": {
    mr: "डीबीटी लाभ, ४% व्याजदरावर केसीसी कर्ज, आणि थेट पीक नुकसान भरपाई क्लेम मिळवा.",
    hi: "डीबीटी लाभ, 4% ब्याज पर केसीसी ऋण, और प्रत्यक्ष फसल बीमा दावा प्राप्त करें।"
  },

  // Stats Strip
  "Verified Resources": { mr: "सत्यापित साधने", hi: "सत्यापित संसाधन" },
  "Crop Guides & Seeds": { mr: "पीक मार्गदर्शक व बियाणे", hi: "फसल गाइड और बीज" },
  "Agri Categories": { mr: "कृषी श्रेणी", hi: "कृषि श्रेणियां" },

  // Sections & Headings
  "Browse by Agriculture Category": { mr: "कृषी श्रेणीनुसार शोधा", hi: "कृषि श्रेणी अनुसार खोजें" },
  "Explore curated collections of agricultural schemes, modern machinery, season-wise crops, financial subsidies, and expert advisory.": {
    mr: "सरकारी योजना, आधुनिक यंत्रसामग्री, हंगामी पिके, आर्थिक सबसिडी आणि तज्ज्ञांचा सल्ला यांचे संकलन एक्सप्लोर करा.",
    hi: "सरकारी योजनाओं, आधुनिक मशीनरी, मौसमी फसलों, वित्तीय सब्सिडी और विशेषज्ञ सलाह का अन्वेषण करें।"
  },
  "Explore Scheme": { mr: "योजना पहा", hi: "योजना देखें" },
  "Explore Crops": { mr: "पिके पहा", hi: "फसलें देखें" },
  "View Tools": { mr: "अवजारे पहा", hi: "उपकरण देखें" },
  "Check Loans": { mr: "कर्ज तपासा", hi: "ऋण जांचें" },
  "Read Guides": { mr: "मार्गदर्शक वाचा", hi: "गाइड पढ़ें" },
  "View Weather": { mr: "हवामान पहा", hi: "मौसम देखें" },
  "Visit Market": { mr: "बाजार पहा", hi: "बाज़ार देखें" },
  "Join Discussion": { mr: "चर्चेत सामील व्हा", hi: "चर्चा में शामिल हों" },

  // Featured Resources
  "Featured Agriculture Resources": { mr: "प्रमुख कृषी संसाधने", hi: "प्रमुख कृषि संसाधन" },
  "Popular government schemes, high-yield seed recommendations, and farming guides most utilized by Indian farmers this week.": {
    mr: "या आठवड्यात भारतीय शेतकऱ्यांकडून सर्वाधिक वापरल्या जाणाऱ्या लोकप्रिय सरकारी योजना, बियाणे आणि शेती मार्गदर्शक.",
    hi: "इस सप्ताह भारतीय किसानों द्वारा सर्वाधिक उपयोग की जाने वाली लोकप्रिय सरकारी योजनाएं, उन्नत बीज और कृषि गाइड।"
  },
  "View Details": { mr: "तपशील पहा", hi: "विवरण देखें" },
  "Save": { mr: "जतन करा", hi: "सहेजें" },
  "Category": { mr: "श्रेणी", hi: "श्रेणी" },
  "Provider": { mr: "प्रदाता", hi: "प्रदाता" },
  "Agency": { mr: "संस्था", hi: "संस्था" },
  "Eligibility": { mr: "पात्रता", hi: "पात्रता" },
  "Benefits": { mr: "फायदे", hi: "लाभ" },
  "Documents Required": { mr: "आवश्यक कागदपत्रे", hi: "आवश्यक दस्तावेज" },
  "How to Apply": { mr: "अर्ज कसा करावा", hi: "आवेदन कैसे करें" },
  "Visit Official Portal": { mr: "अधिकृत पोर्टलला भेट द्या", hi: "आधिकारिक पोर्टल पर जाएं" },
  "Close": { mr: "बंद करा", hi: "बंद करें" },

  // Search & Filter
  "Search": { mr: "शोधा", hi: "खोजें" },
  "Search resources, schemes, crops, tools...": { mr: "साधने, योजना, पिके, अवजारे शोधा...", hi: "संसाधन, योजनाएं, फसलें, उपकरण खोजें..." },
  "Search schemes, subsidies, criteria...": { mr: "योजना, सबसिडी, निकष शोधा...", hi: "योजनाएं, सब्सिडी, नियम खोजें..." },
  "Search crop variety, season, soil type...": { mr: "पिकांची जात, हंगाम, माती प्रकार शोधा...", hi: "फसल किस्म, मौसम, मिट्टी का प्रकार खोजें..." },
  "Search tractor, harvester, pump, drone...": { mr: "ट्रॅक्टर, हार्वेस्टर, पंप, ड्रोन शोधा...", hi: "ट्रैक्टर, हार्वेस्टर, पंप, ड्रोन खोजें..." },
  "Search loans, interest rates, eligibility...": { mr: "कर्ज, व्याजदर, पात्रता शोधा...", hi: "ऋण, ब्याज दरें, पात्रता खोजें..." },
  "Search guides, organic techniques, soil health...": { mr: "मार्गदर्शक, सेंद्रिय तंत्र, माती आरोग्य शोधा...", hi: "गाइड, जैविक तकनीक, मृदा स्वास्थ्य खोजें..." },
  "All Categories": { mr: "सर्व श्रेणी", hi: "सभी श्रेणियां" },
  "Filter by Category": { mr: "श्रेणीनुसार फिल्टर करा", hi: "श्रेणी अनुसार फ़िल्टर करें" },
  "Sort by": { mr: "क्रमवारी", hi: "क्रमबद्ध करें" },
  "Clear Filters": { mr: "फिल्टर काढा", hi: "फ़िल्टर हटाएं" },
  "No resources found": { mr: "कोणतेही स्त्रोत आढळले नाहीत", hi: "कोई संसाधन नहीं मिला" },

  // Weather Page
  "Live Agricultural Weather & Farming Advisory": { mr: "थेट कृषी हवामान व शेती सल्ला", hi: "लाइव कृषि मौसम और कृषि सलाह" },
  "Real-time forecasts, temperature, precipitation, humidity and actionable farming advice.": {
    mr: "रिअल-टाइम हवामान अंदाज, तापमान, पाऊस, आर्द्रता आणि शेतकऱ्यांसाठी कृतीयोग्य सल्ला.",
    hi: "वास्तविक समय का मौसम पूर्वानुमान, तापमान, वर्षा, आर्द्रता और किसानों के लिए उपयोगी सलाह।"
  },
  "Temperature": { mr: "तापमान", hi: "तापमान" },
  "Humidity": { mr: "आर्द्रता", hi: "आर्द्रता" },
  "Wind Speed": { mr: "वाऱ्याचा वेग", hi: "हवा की गति" },
  "Rain Chance": { mr: "पावसाची शक्यता", hi: "बारिश की संभावना" },
  "Farm Advisory": { mr: "शेती सल्ला", hi: "कृषि सलाह" },
  "7-Day Forecast": { mr: "७ दिवसांचा अंदाज", hi: "7-दिवसीय पूर्वानुमान" },

  // Marketplace & Mandi
  "Agricultural Marketplace & Mandi Prices": { mr: "कृषी बाजारपेठ व थेट बाजारभाव", hi: "कृषि बाज़ार और मंडी भाव" },
  "Live mandi prices, equipment rentals, buy/sell organic produce and connect with buyers.": {
    mr: "थेट बाजारभाव, शेती अवजारे भाड्याने, सेंद्रिय शेतमाल खरेदी-विक्री आणि खरेदीदारांशी थेट संपर्क.",
    hi: "लाइव मंडी भाव, उपकरण किराया, जैविक उत्पाद क्रय-विक्रय और खरीदारों से सीधा संपर्क।"
  },
  "Commodity": { mr: "शेतमाल", hi: "कृषि जिंस" },
  "Mandi / Market": { mr: "मंडी / बाजार", hi: "मंडी / बाज़ार" },
  "Min Price": { mr: "किमान भाव", hi: "न्यूनतम मूल्य" },
  "Max Price": { mr: "कमाल भाव", hi: "अधिकतम मूल्य" },
  "Modal Price": { mr: "सरासरी भाव", hi: "औसत मूल्य" },

  // Community
  "Farmer Community Forum": { mr: "शेतकरी समुदाय मंच", hi: "किसान समुदाय मंच" },
  "Ask questions, share real farming experience, solve crop disease problems, and connect with fellow cultivators.": {
    mr: "प्रश्न विचारा, शेतीचे अनुभव सामायिक करा, पीक रोगांवर उपाय शोधा आणि इतर शेतकऱ्यांशी संवाद साधा.",
    hi: "प्रश्न पूछें, अपने कृषि अनुभव साझा करें, फसल रोग समस्याओं का समाधान पाएं और किसान भाइयों से जुड़ें।"
  },
  "Ask a Question": { mr: "प्रश्न विचारा", hi: "प्रश्न पूछें" },
  "Post Question": { mr: "प्रश्न पोस्ट करा", hi: "प्रश्न पोस्ट करें" },
  "Answers": { mr: "उत्तरे", hi: "उत्तर" },
  "Helpful": { mr: "उपयुक्त", hi: "मददगार" },

  // Rating & Review Modal
  "Farmer Review": { mr: "शेतकरी अभिप्राय", hi: "किसान समीक्षा" },
  "Rate Resource": { mr: "संसाधनाला रेटिंग द्या", hi: "संसाधन को रेटिंग दें" },
  "Share your feedback and experience to help fellow farmers across India.": {
    mr: "भारतातील इतर शेतकरी बांधवांना मदत करण्यासाठी तुमचा अनुभव आणि अभिप्राय सामायिक करा.",
    hi: "भारत भर के किसान भाइयों की मदद के लिए अपनी प्रतिक्रिया और अनुभव साझा करें।"
  },
  "Your Rating": { mr: "तुमचे रेटिंग", hi: "आपकी रेटिंग" },
  "Your Experience / Suggestions": { mr: "तुमचा अनुभव / सूचना", hi: "आपका अनुभव / सुझाव" },
  "Submit Feedback": { mr: "अभिप्राय पाठवा", hi: "प्रतिक्रिया सबमिट करें" },
  "Cancel": { mr: "रद्द करा", hi: "रद्द करें" },

  // Forms & User Inputs
  "Full Name": { mr: "पूर्ण नाव", hi: "पूरा नाम" },
  "Email Address": { mr: "ईमेल पत्ता", hi: "ईमेल पता" },
  "Username": { mr: "वापरकर्ता नाव", hi: "उपयोगकर्ता नाम" },
  "Password": { mr: "पासवर्ड", hi: "पासवर्ड" },
  "Confirm Password": { mr: "पासवर्ड पुष्टी करा", hi: "पासवर्ड की पुष्टि करें" },
  "State / UT": { mr: "राज्य / केंद्रशासित प्रदेश", hi: "राज्य / केंद्र शासित प्रदेश" },
  "Preferred Farming Interest": { mr: "शेतीतील आवड / प्राधान्य", hi: "पसंदीदा कृषि रुचि" },
  "Save Changes": { mr: "बदल जतन करा", hi: "परिवर्तन सहेजें" },
  "Update Profile": { mr: "प्रोफाइल अपडेट करा", hi: "प्रोफ़ाइल अपडेट करें" },

  // Footer & Help
  "Quick Links": { mr: "जलद दुवे", hi: "त्वरित लिंक" },
  "Farmer Helpline": { mr: "शेतकरी हेल्पलाइन", hi: "किसान हेल्पलाइन" },
  "National Kisan Call Center:": { mr: "राष्ट्रीय किसान कॉल सेंटर:", hi: "राष्ट्रीय किसान कॉल सेंटर:" },
  "Toll-Free • 22 Regional Languages • 6 AM - 10 PM": {
    mr: "टोल-फ्री • २२ प्रादेशिक भाषा • सकाळी ६ ते रात्री १०",
    hi: "टोल-फ्री • 22 क्षेत्रीय भाषाएं • सुबह 6 से रात 10 बजे"
  },
  "730+ Krishi Vigyan Kendras (KVK)": { mr: "७३०+ कृषी विज्ञान केंद्रे (KVK)", hi: "730+ कृषि विज्ञान केंद्र (KVK)" },
  "Indian Agriculture Empowered": { mr: "भारतीय शेती सक्षम", hi: "सशक्त भारतीय कृषि" },
  "Disclaimer:": { mr: "अस्वीकरण:", hi: "अस्वीकरण:" },
  "All rights reserved. Smart Resources • Better Farming • Stronger Farmers.": {
    mr: "सर्व हक्क राखीव. स्मार्ट साधने • उत्तम शेती • सक्षम शेतकरी.",
    hi: "सर्वाधिकार सुरक्षित। स्मार्ट संसाधन • बेहतर खेती • सशक्त किसान।"
  }
};
