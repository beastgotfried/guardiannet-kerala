export type Language = 'en' | 'hi' | 'ml';

export const translations = {
  en: {
    nav: {
      technology: "Technology",
      ksdma: "KSDMA",
      keralaContext: "Kerala Context",
        about: "About",
        instructions: "Instructions",
        volunteer: "Volunteer",
      volunteerNow: "Volunteer Now"
    },
    hero: {
      title1: "Mobilizing the",
      title2: "Western Ghats",
      subtitle: "Hyper-local resilience for landslide-prone zones. Connecting drone pilots, heavy machinery operators, and medical professionals",
      subtitleHighlight: " before the roads are blocked",
      getStarted: "Get Started",
      viewMap: "View Live Map",
      stats: {
        responders: "Verified Responders",
        districts: "Districts Covered",
        uptime: "Network Uptime"
      },
      scroll: "Scroll to explore"
    },
    dashboard: {
      title: "KSDMA Control Center",
      subtitle: "Real-time state-level disaster management oversight",
      metrics: {
        rainfall: "Avg Rainfall",
        wind: "Wind Speed",
        temp: "Temperature",
        risk: "Risk Index"
      },
      activeAlerts: "Active Alerts",
      nodes: "Network Nodes"
    },
    volunteer: {
      activeUnits: "Active Response Units",
      status: "Real-time Volunteer Deployment Status",
      detected: "Landslide detected in",
      sector: "sector",
      briefing: {
        show: "View Tactical Briefing",
        hide: "Hide Tactical Briefing"
      },
        interface: "OPEN VOLUNTEER INTERFACE",
        exit: "EXIT INTERFACE",
        noConnection: {
          title: "No connection?",
          server1: "Server 1",
          server2: "Server 2"
        },
        mission: {
        accepted: "Mission Accepted",
        target: "Target Location",
        distance: "Distance to Target",
        victims: "People trapped"
      }
    },
    footer: {
      platform: "Platform",
      regions: "Regions",
      resources: "Resources",
      platformItems: ["Asset Mapping", "Mesh Networking", "Skill Verification", "Camp Management"],
      regionItems: ["Wayanad", "Idukki", "Palakkad", "Kozhikode", "Malappuram"],
      links: {
        emergencyContact: "Emergency Contact",
        dgcaNorms: "DGCA Norms",
        landslideData: "KSDMA Landslide Data",
        meshNetworking: "Mesh Networking",
        assetMapping: "Asset Mapping"
      }
    },
    privacy: {
      title: "GuardianNet Privacy Notice",
      content1: "GuardianNet collects only the minimum information required to support disaster preparedness and emergency response. This may include basic identification details, declared skills or assets, and location data during active disaster events or simulations. We do not collect data for advertising, tracking, or commercial purposes.",
      content2: "Location and connectivity data are used only when necessary to identify nearby help, assign tasks, and maintain coordination during emergencies. When internet access is unavailable, GuardianNet may use Bluetooth-based peer-to-peer communication to exchange critical status updates between nearby devices. This data is shared temporarily and synchronized only when connectivity is restored.",
      content3: "All information is shared strictly with authorized disaster-response authorities and relevant responders within active response zones. Data is protected using role-based access controls and is retained only as long as required for operational or safety purposes. You may access, correct, or request deletion of your data at any time.",
      content4: "By continuing to use GuardianNet, you acknowledge and agree to this privacy policy, designed to prioritize safety, transparency, and responsible data use.",
      agree: "AGREE AND CONTINUE"
    }
  },
  hi: {
    nav: {
      technology: "तकनीक",
      ksdma: "KSDMA",
      keralaContext: "केरल संदर्भ",
        about: "हमारे बारे में",
        instructions: "निर्देश",
        volunteer: "स्वयंसेवक",
      volunteerNow: "अभी स्वयंसेवक बनें"
    },
    hero: {
      title1: "पश्चिमी घाट को",
      title2: "लामबंद करना",
      subtitle: "भूस्खलन संभावित क्षेत्रों के लिए स्थानीय लचीलापन। ड्रोन पायलटों, भारी मशीनरी ऑपरेटरों और चिकित्सा पेशेवरों को जोड़ना",
      subtitleHighlight: " सड़कें बंद होने से पहले",
      getStarted: "शुरू करें",
      viewMap: "लाइव मैप देखें",
      stats: {
        responders: "सत्यापित उत्तरदाता",
        districts: "कवर किए गए जिले",
        uptime: "नेटवर्क अपटाइम"
      },
      scroll: "अन्वेषण के लिए स्क्रॉल करें"
    },
    dashboard: {
      title: "KSDMA नियंत्रण केंद्र",
      subtitle: "वास्तविक समय राज्य स्तरीय आपदा प्रबंधन निगरानी",
      metrics: {
        rainfall: "औसत वर्षा",
        wind: "हवा की गति",
        temp: "तापमान",
        risk: "जोखिम सूचकांक"
      },
      activeAlerts: "सक्रिय अलर्ट",
      nodes: "नेटवर्क नोड्स"
    },
    volunteer: {
      activeUnits: "सक्रिय प्रतिक्रिया इकाइयाँ",
      status: "वास्तविक समय स्वयंसेवक तैनाती स्थिति",
      detected: "भूस्खलन का पता चला",
      sector: "क्षेत्र में",
      briefing: {
        show: "सामरिक ब्रीफिंग देखें",
        hide: "सामरिक ब्रीफिंग छिपाएं"
      },
      interface: "स्वयंसेवक इंटरफ़ेस खोलें",
        exit: "इंटरफ़ेस से बाहर निकलें",
        noConnection: {
          title: "कोई कनेक्शन नहीं?",
          server1: "सर्वर 1",
          server2: "सर्वर 2"
        },
        mission: {
        accepted: "मिशन स्वीकार किया गया",
        target: "लक्ष्य स्थान",
        distance: "लक्ष्य से दूरी",
        victims: "लोग फंसे हुए हैं"
      }
    },
    footer: {
      platform: "प्लेटफार्म",
      regions: "क्षेत्र",
      resources: "संसाधन",
      platformItems: ["एसेट मैपिंग", "मेश नेटवर्किंग", "कौशल सत्यापन", "शिविर प्रबंधन"],
      regionItems: ["वायनाड", "इडुक्की", "पालक्कड़", "कोझिकोड", "मलप्पुरम"],
      links: {
        emergencyContact: "आपातकालीन संपर्क",
        dgcaNorms: "DGCA मानदंड",
        landslideData: "KSDMA भूस्खलन डेटा",
        meshNetworking: "मेश नेटवर्किंग",
        assetMapping: "एसेट मैपिंग"
      }
    },
    privacy: {
      title: "गार्डियननेट गोपनीयता सूचना",
      content1: "गार्डियननेट केवल आपदा तैयारी और आपातकालीन प्रतिक्रिया का समर्थन करने के लिए आवश्यक न्यूनतम जानकारी एकत्र करता है। इसमें सक्रिय आपदा घटनाओं या सिमुलेशन के दौरान बुनियादी पहचान विवरण, घोषित कौशल या संपत्ति, और स्थान डेटा शामिल हो सकते हैं। हम विज्ञापन, ट्रैकिंग या व्यावसायिक उद्देश्यों के लिए डेटा एकत्र नहीं करते हैं।",
      content2: "स्थान और कनेक्टिविटी डेटा का उपयोग केवल आपात स्थिति के दौरान आस-पास की सहायता की पहचान करने, कार्य सौंपने और समन्वय बनाए रखने के लिए आवश्यक होने पर किया जाता है। जब इंटरनेट का उपयोग उपलब्ध नहीं होता है, तो गार्डियननेट आस-पास के उपकरणों के बीच महत्वपूर्ण स्थिति अपडेट साझा करने के लिए ब्लूटूथ-आधारित पीयर-टू-पीयर संचार का उपयोग कर सकता है। यह डेटा अस्थायी रूप से साझा किया जाता है और कनेक्टिविटी बहाल होने पर ही सिंक्रनाइज़ किया जाता है।",
      content3: "सभी जानकारी केवल अधिकृत आपदा-प्रतिक्रिया अधिकारियों और सक्रिय प्रतिक्रिया क्षेत्रों के भीतर प्रासंगिक उत्तरदाताओं के साथ साझा की जाती है। डेटा को भूमिका-आधारित पहुंच नियंत्रणों का उपयोग करके संरक्षित किया जाता है और केवल तब तक बनाए रखा जाता है जब तक परिचालन या सुरक्षा उद्देश्यों के लिए आवश्यक हो। आप किसी भी समय अपने डेटा तक पहुंच सकते हैं, उसे सुधार सकते हैं या हटाने का अनुरोध कर सकते हैं।",
      content4: "गार्डियननेट का उपयोग जारी रखकर, आप इस गोपनीयता नीति को स्वीकार करते हैं और सहमत होते हैं, जिसे सुरक्षा, पारदर्शिता और जिम्मेदार डेटा उपयोग को प्राथमिकता देने के लिए डिज़ाइन किया गया है।",
      agree: "सहमत हैं और जारी रखें"
    }
  },
  ml: {
    nav: {
      technology: "സാങ്കേതികവിദ്യ",
      ksdma: "കെ.എസ്.ഡി.എം.എ",
      keralaContext: "കേരള സാഹചര്യം",
        about: "ഞങ്ങളെക്കുറിച്ച്",
        instructions: "നിർദ്ദേശങ്ങൾ",
        volunteer: "സന്നദ്ധപ്രവർത്തകർ",
      volunteerNow: "സന്നദ്ധപ്രവർത്തകനാകൂ"
    },
    hero: {
      title1: "പശ്ചിമഘട്ടത്തെ",
      title2: "സജ്ജമാക്കുന്നു",
      subtitle: "ഉരുൾപൊട്ടൽ സാധ്യതയുള്ള മേഖലകൾക്കായി പ്രാദേശിക പ്രതിരോധം. ഡ്രോൺ പൈലറ്റുമാർ, ഹെവി മെഷിനറി ഓപ്പറേറ്റർമാർ, മെഡിക്കൽ പ്രൊഫഷണലുകൾ എന്നിവരെ ബന്ധിപ്പിക്കുന്നു",
      subtitleHighlight: " റോഡുകൾ തടസ്സപ്പെടുന്നതിന് മുമ്പ്",
      getStarted: "ആരംഭിക്കുക",
      viewMap: "ലൈവ് മാപ്പ് കാണുക",
      stats: {
        responders: "സന്നദ്ധപ്രവർത്തകർ",
        districts: "ജില്ലകൾ",
        uptime: "നെറ്റ്‌വർക്ക് ലഭ്യത"
      },
      scroll: "കൂടുതൽ അറിയാൻ സ്ക്രോൾ ചെയ്യുക"
    },
    dashboard: {
      title: "കെ.എസ്.ഡി.എം.എ കൺട്രോൾ സെന്റർ",
      subtitle: "തത്സമയ ദുരന്ത നിവാരണ മേൽനോട്ടം",
      metrics: {
        rainfall: "ശരാശരി മഴ",
        wind: "കാറ്റിന്റെ വേഗത",
        temp: "താപനില",
        risk: "അപകടസാധ്യത"
      },
      activeAlerts: "അലേർട്ടുകൾ",
      nodes: "നെറ്റ്‌വർക്ക് നോഡുകൾ"
    },
    volunteer: {
      activeUnits: "പ്രതികരണ യൂണിറ്റുകൾ",
      status: "സന്നദ്ധപ്രവർത്തകരുടെ തത്സമയ വിന്യാസ നില",
      detected: "ഉരുൾപൊട്ടൽ കണ്ടെത്തി",
      sector: "മേഖലയിൽ",
      briefing: {
        show: "വിവരങ്ങൾ കാണുക",
        hide: "വിവരങ്ങൾ മറയ്ക്കുക"
      },
      interface: "വോളന്റിയർ ഇന്റർഫേസ്",
        exit: "പുറത്തുകടക്കുക",
        noConnection: {
          title: "കണക്ഷൻ ഇല്ലേ?",
          server1: "സെർവർ 1",
          server2: "സെർവർ 2"
        },
        mission: {
        accepted: "ദൗത്യം സ്വീകരിച്ചു",
        target: "ലക്ഷ്യസ്ഥാനം",
        distance: "ദൂരം",
        victims: "കുടുങ്ങിക്കിടക്കുന്നവർ"
      }
    },
    footer: {
      platform: "പ്ലാറ്റ്‌ഫോം",
      regions: "മേഖലകൾ",
      resources: "വിഭവങ്ങൾ",
      platformItems: ["അസറ്റ് മാപ്പിംഗ്", "മെഷ് നെറ്റ്‌വർക്കിംഗ്", "നൈപുണ്യ പരിശോധന", "ക്യാമ്പ് മാനേജ്‌മെന്റ്"],
      regionItems: ["വയനാട്", "ഇടുക്കി", "പാലക്കാട്", "കോഴിക്കോട്", "മലപ്പുറം"],
      links: {
        emergencyContact: "അടിയന്തര സമ്പർക്കം",
        dgcaNorms: "DGCA മാനണ്ഡങ്ങൾ",
        landslideData: "KSDMA ഉരുൾപൊട്ടൽ വിവരങ്ങൾ",
        meshNetworking: "മെഷ് നെറ്റ്‌വർക്കിംഗ്",
        assetMapping: "അസറ്റ് മാപ്പിംഗ്"
      }
    },
    privacy: {
      title: "ഗാർഡിയൻനെറ്റ് സ്വകാര്യതാ അറിയിപ്പ്",
      content1: "ദുരന്ത നിവാരണത്തിനും അടിയന്തര പ്രതികരണത്തിനും ആവശ്യമായ കുറഞ്ഞ വിവരങ്ങൾ മാത്രമേ ഗാർഡിയൻനെറ്റ് ശേഖരിക്കുകയുള്ളൂ. ഇതിൽ അടിസ്ഥാന തിരിച്ചറിയൽ വിവരങ്ങൾ, പ്രഖ്യാപിത കഴിവുകൾ അല്ലെങ്കിൽ ആസ്തികൾ, സജീവമായ ദുരന്ത സമയത്തോ സിമുലേഷനുകളിലോ ഉള്ള ലൊക്കേഷൻ ഡാറ്റ എന്നിവ ഉൾപ്പെടാം. പരസ്യം ചെയ്യുന്നതിനോ ട്രാക്കുചെയ്യുന്നതിനോ വാണിജ്യ ആവശ്യങ്ങൾക്കോ വേണ്ടി ഞങ്ങൾ വിവരങ്ങൾ ശേഖരിക്കുന്നില്ല.",
      content2: "അടിയന്തര സാഹചര്യങ്ങളിൽ അടുത്തുള്ള സഹായം തിരിച്ചറിയുന്നതിനും ജോലികൾ ഏൽപ്പിക്കുന്നതിനും ഏകോപനം നിലനിർത്തുന്നതിനും ആവശ്യമായ സന്ദർഭങ്ങളിൽ മാത്രമേ ലൊക്കേഷൻ, കണക്റ്റിവിറ്റി വിവരങ്ങൾ ഉപയോഗിക്കുകയുള്ളൂ. ഇന്റർനെറ്റ് ലഭ്യമല്ലാത്തപ്പോൾ, അടുത്തുള്ള ഉപകരണങ്ങൾക്കിടയിൽ നിർണ്ണായക വിവരങ്ങൾ കൈമാറാൻ ഗാർഡിയൻനെറ്റ് ബ്ലൂടൂത്ത് അടിസ്ഥാനമാക്കിയുള്ള പിയർ-ടു-പിയർ ആശയവിനിമയം ഉപയോഗിച്ചേക്കാം. ഈ വിവരങ്ങൾ താൽക്കാലികമായി പങ്കിടുകയും കണക്റ്റിവിറ്റി പുനഃസ്ഥാപിക്കുമ്പോൾ മാത്രം സമന്വയിപ്പിക്കുകയും ചെയ്യുന്നു.",
      content3: "എല്ലാ വിവരങ്ങളും അംഗീകൃത ദുരന്ത നിവാരണ അതോറിറ്റികളുമായും സജീവ പ്രതികരണ മേഖലകളിലെ പ്രസക്തമായ ഉദ്യോഗസ്ഥരുമായും മാത്രമേ പങ്കിടുകയുള്ളൂ. വിവരങ്ങൾ റോൾ അധിഷ്ഠിത ആക്സസ് നിയന്ത്രണങ്ങൾ ഉപയോഗിച്ച് സംരക്ഷിക്കപ്പെട്ടിരിക്കുന്നു, കൂടാതെ പ്രവർത്തനപരമോ സുരക്ഷാപരമോ ആയ ആവശ്യങ്ങൾക്ക് ആവശ്യമുള്ള കാലത്തോളം മാത്രമേ സൂക്ഷിക്കുകയുള്ളൂ. നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ വിവരങ്ങൾ പരിശോധിക്കാനോ തിരുത്താനോ നീക്കം ചെയ്യാൻ ആവശ്യപ്പെടാനോ കഴിയും.",
      content4: "ഗാർഡിയൻനെറ്റ് തുടർന്നും ഉപയോഗിക്കുന്നതിലൂടെ, സുരക്ഷയ്ക്കും സുതാര്യതയ്ക്കും ഉത്തരവാദിത്തമുള്ള വിവര ഉപയോഗത്തിനും മുൻഗണന നൽകുന്ന ഈ സ്വകാര്യതാ നയം നിങ്ങൾ അംഗീകരിക്കുകയും സമ്മതിക്കുകയും ചെയ്യുന്നു.",
      agree: "സമ്മതിക്കുന്നു, തുടർന്നുപോകുക"
    }
  }
};
