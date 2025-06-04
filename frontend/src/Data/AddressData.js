const provinces = [{

    "Name": "Koshi",
    "Nepali": "कोशी",
    "Number": "Province No. 1",

},
{

    "Name": "Madhesh",
    "Nepali": "मधेश्",
    "Number": "Province No. 2",

},
{

    "Name": "Bagmati",
    "Nepali": "बागमती",


},
{

    "Name": "Gandaki",
    "Nepali": "गण्डकी",
    "Number": "Province No. 4",

},
{

    "Name": "Lumbini",
    "Nepali": "लुम्बिनि",
    "Number": "Province No. 5",

},
{

    "Name": "Karnali",
    "Nepali": "कर्णाली",
    "Number": "Province No. 6",

},
{

    "Name": "SudurPaschim ",
    "Nepali": "सुदुर्पश्चिम",
    "Number": "Province No. 7",

}]

const districts = [
    {
        "Name": "Bhojpur",
        "Nepali": "भोजपुर जिल्ला",
        "Province": "Province No. 1",
    },
    {
        "Name": "Dhankuta",
        "Nepali": "धनकुटा जिल्ला",
        "Province": "Province No. 1",
    },
    {
        "Name": "Ilam",
        "Nepali": "इलाम जिल्ला",
        "Province": "Province No. 1",
    },
    {
        "Name": "Jhapa",
        "Nepali": "झापा जिल्ला",
        "Province": "Province No. 1",
    },
    {
        "Name": "Khotang",
        "Nepali": "खोटाँग जिल्ला",
        "Province": "Province No. 1",
    },
    {
        "Name": "Morang",
        "Nepali": "मोरंग जिल्ला",
        "Headquarters": "Biratnagar",
        "Population_2011": "965,370",
        "Area_km2": "1,855",
        "Province": "Province No. 1",
        "LocalBodiesType": ["Municipality", "Rular Municipality", "Metropolitan"]
    },
    {
        "Name": "Okhaldhunga",
        "Nepali": "ओखलढुंगा जिल्ला",
        "Headquarters": "Siddhicharan",
        "Population_2011": "147,984",
        "Area_km2": "1,074",
        "Province": "Province No. 1",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Panchthar",
        "Nepali": "पांचथर जिल्ला",
        "Headquarters": "Phidim",
        "Population_2011": "191,817",
        "Area_km2": "1,241",
        "Province": "Province No. 1",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Sankhuwasabha",
        "Nepali": "संखुवासभा जिल्ला",
        "Headquarters": "Khandbari",
        "Population_2011": "158,742",
        "Area_km2": "3,480",
        "Province": "Province No. 1",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Solukhumbu",
        "Nepali": "सोलुखुम्बू जिल्ला",
        "Headquarters": "Salleri",
        "Population_2011": "105,886",
        "Area_km2": "3,312",
        "Province": "Province No. 1",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Sunsari",
        "Nepali": "सुनसरी जिल्ला",
        "Headquarters": "Inaruwa",
        "Population_2011": "763,497",
        "Area_km2": "1,257",
        "Province": "Province No. 1",
        "LocalBodiesType": [
            "Municipality",
            "Rular Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Taplejung",
        "Nepali": "ताप्लेजुंग जिल्ला",
        "Headquarters": "Taplejung",
        "Population_2011": "127,461",
        "Area_km2": "3,646",
        "Province": "Province No. 1",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Terhathum",
        "Nepali": "तेह्रथुम जिल्ला",
        "Headquarters": "Myanglung",
        "Population_2011": "113,111",
        "Area_km2": "0,679",
        "Province": "Province No. 1",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Udayapur",
        "Nepali": "उदयपुर जिल्ला",
        "Headquarters": "Gaighat",
        "Population_2011": "317,532",
        "Area_km2": "2,063",
        "Province": "Province No. 1",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Saptari",
        "Nepali": "सप्तरी जिल्ला",
        "Headquarters": "Rajbiraj",
        "Population_2011": "639,284",
        "Area_km2": "1,363",
        "Province": "Province No. 2",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Parsa",
        "Nepali": "पर्सा जिल्ला",
        "Headquarters": "Birgunj",
        "Population_2011": "601,017",
        "Area_km2": "1,353",
        "Province": "Province No. 2",
        "LocalBodiesType": ["Municipality", "Rular Municipality", "Metropolitan"]
    },
    {
        "Name": "Sarlahi",
        "Nepali": "सर्लाही जिल्ला",
        "Headquarters": "Malangwa",
        "Population_2011": "769,729",
        "Area_km2": "1,259",
        "Province": "Province No. 2",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Bara",
        "Nepali": "बारा जिल्ला",
        "Headquarters": "Kalaiya",
        "Population_2011": "687,708",
        "Area_km2": "1,190",
        "Province": "Province No. 2",
        "LocalBodiesType": [
            "Municipality",
            "Rular Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Siraha",
        "Nepali": "सिराहा जिल्ला",
        "Headquarters": "Siraha",
        "Population_2011": "637,328",
        "Area_km2": "1,188",
        "Province": "Province No. 2",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Dhanusha",
        "Nepali": "धनुषा जिल्ला",
        "Headquarters": "Janakpur",
        "Population_2011": "754,777",
        "Area_km2": "1,180",
        "Province": "Province No. 2",
        "LocalBodiesType": [
            "Municipality",
            "Rular Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Rautahat",
        "Nepali": "रौतहट जिल्ला",
        "Headquarters": "Gaur",
        "Population_2011": "686,722",
        "Area_km2": "1,126",
        "Province": "Province No. 2",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Mahottari",
        "Nepali": "महोत्तरी जिल्ला",
        "Headquarters": "Jaleshwar",
        "Population_2011": "627,580",
        "Area_km2": "1,002",
        "Province": "Province No. 2",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Sindhuli",
        "Nepali": "सिन्धुली जिल्ला",
        "Headquarters": "Kamalamai",
        "Area_km2": "2,491",
        "Population_2011": "296,192",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Ramechhap",
        "Nepali": "रामेछाप जिल्ला",
        "Headquarters": "Manthali",
        "Area_km2": "1,546",
        "Population_2011": "202,646",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Dolakha",
        "Nepali": "दोलखा जिल्ला",
        "Headquarters": "Bhimeshwar",
        "Area_km2": "2,191",
        "Population_2011": "186,557",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Bhaktapur",
        "Nepali": "भक्तपुर जिल्ला",
        "Headquarters": "Bhaktapur",
        "Area_km2": 119,
        "Population_2011": "304,651",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality"]
    },
    {
        "Name": "Dhading",
        "Nepali": "धादिङ जिल्ला",
        "Headquarters": "Nilkantha",
        "Area_km2": "1,926",
        "Population_2011": "336,067",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Kathmandu",
        "Nepali": "काठमाडौँ जिल्ला",
        "Headquarters": "Kathmandu",
        "Area_km2": 395,
        "Population_2011": "1,744,240",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Metropolitan"]
    },
    {
        "Name": "Kavrepalanchok",
        "Nepali": "काभ्रेपलान्चोक जिल्ला",
        "Headquarters": "Dhulikhel",
        "Area_km2": "1,396",
        "Population_2011": "381,937",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Lalitpur",
        "Nepali": "ललितपुर जिल्ला",
        "Headquarters": "Lalitpur",
        "Area_km2": 385,
        "Population_2011": "468,132",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality", "Metropolitan"]
    },
    {
        "Name": "Nuwakot",
        "Nepali": "नुवाकोट जिल्ला",
        "Headquarters": "Bidur",
        "Area_km2": "1,121",
        "Population_2011": "277,471",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Rasuwa",
        "Nepali": "रसुवा जिल्ला",
        "Headquarters": "Dhunche",
        "Area_km2": "1,544",
        "Population_2011": "43,300",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Sindhupalchok",
        "Nepali": "सिन्धुपाल्चोक जिल्ला",
        "Headquarters": "Chautara",
        "Area_km2": "2,542",
        "Population_2011": "287,798",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Chitwan",
        "Nepali": "चितवन जिल्ला",
        "Headquarters": "Bharatpur",
        "Area_km2": "2,218",
        "Population_2011": "579,984",
        "Province": "Province No. 3",
        "LocalBodiesType": ["Municipality", "Rular Municipality", "Metropolitan"]
    },
    {
        "Name": "Makwanpur",
        "Nepali": "मकवानपुर जिल्ला",
        "Headquarters": "Hetauda",
        "Area_km2": "2,426",
        "Population_2011": "420,477",
        "Province": "Province No. 3",
        "LocalBodiesType": [
            "Municipality",
            "Rular Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Baglung",
        "Nepali": "बागलुङ जिल्ला",
        "Headquarters": "Baglung",
        "Area_km2": "1,784",
        "Population_2011": "268,613",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Gorkha",
        "Nepali": "गोरखा जिल्ला",
        "Headquarters": "Gorkha",
        "Area_km2": "3,610",
        "Population_2011": "271,061",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Kaski",
        "Nepali": "कास्की जिल्ला",
        "Headquarters": "Pokhara",
        "Area_km2": "2,017",
        "Population_2011": "492,098",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality", "Metropolitan"]
    },
    {
        "Name": "Lamjung",
        "Nepali": "लमजुङ जिल्ला",
        "Headquarters": "Besisahar",
        "Area_km2": "1,692",
        "Population_2011": "167,724",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Manang",
        "Nepali": "मनाङ जिल्ला",
        "Headquarters": "Chame",
        "Area_km2": "2,246",
        "Population_2011": "6,538",
        "Province": "Gandaki",
        "LocalBodiesType": ["Rular Municipality"]
    },
    {
        "Name": "Mustang",
        "Nepali": "मुस्ताङ जिल्ला",
        "Headquarters": "Jomsom",
        "Area_km2": "3,573",
        "Population_2011": "13,452",
        "Province": "Gandaki",
        "LocalBodiesType": ["Rular Municipality"]
    },
    {
        "Name": "Myagdi",
        "Nepali": "म्याग्दी जिल्ला",
        "Headquarters": "Beni",
        "Area_km2": "2,297",
        "Population_2011": "113,641",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Nawalpur",
        "Nepali": "नवलपुर जिल्ला",
        "Headquarters": "Kawasoti",
        "Area_km2": "1,043.1",
        "Population_2011": "310,864",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Parbat",
        "Nepali": "पर्वत जिल्ला",
        "Headquarters": "Kusma",
        "Area_km2": 494,
        "Population_2011": "146,590",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Syangja",
        "Nepali": "स्याङग्जा जिल्ला",
        "Headquarters": "Putalibazar",
        "Area_km2": "1,164",
        "Population_2011": "289,148",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Tanahun",
        "Nepali": "तनहुँ जिल्ला",
        "Headquarters": "Damauli",
        "Area_km2": "1,546",
        "Population_2011": "323,288",
        "Province": "Gandaki",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Kapilvastu",
        "Nepali": "कपिलवस्तु जिल्ला",
        "Headquarters": "Taulihawa",
        "Area_km2": "1,738",
        "Population_2011": "571,936",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Parasi",
        "Nepali": "परासी जिल्ला",
        "Headquarters": "Ramgram",
        "Area_km2": 634.88,
        "Population_2011": "321,058",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Rupandehi",
        "Nepali": "रुपन्देही जिल्ला",
        "Headquarters": "Siddharthanagar",
        "Area_km2": "1,360",
        "Population_2011": "880,196",
        "Province": "Province No. 5",
        "LocalBodiesType": [
            "Municipality",
            "Rular Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Arghakhanchi",
        "Nepali": "अर्घाखाँची जिल्ला",
        "Headquarters": "Sandhikharka",
        "Area_km2": "1,193",
        "Population_2011": "197,632",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Gulmi",
        "Nepali": "गुल्मी जिल्ला",
        "Headquarters": "Tamghas",
        "Area_km2": "1,149",
        "Population_2011": "280,160",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Palpa",
        "Nepali": "पाल्पा जिल्ला",
        "Headquarters": "Tansen",
        "Area_km2": "1,373",
        "Population_2011": "261,180",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Dang",
        "Nepali": "दाङ जिल्ला",
        "Headquarters": "Ghorahi",
        "Area_km2": "2,955",
        "Population_2011": "552,583",
        "Province": "Province No. 5",
        "LocalBodiesType": [
            "Municipality",
            "Rular Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Pyuthan",
        "Nepali": "प्युठान जिल्ला",
        "Headquarters": "Pyuthan",
        "Area_km2": "1,309",
        "Population_2011": "228,102",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Rolpa",
        "Nepali": "रोल्पा जिल्ला",
        "Headquarters": "Liwang",
        "Area_km2": "1,879",
        "Population_2011": "224,506",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Eastern Rukum",
        "Nepali": "पूर्वी रूकुम जिल्ला",
        "Headquarters": "Rukumkot",
        "Area_km2": "1,161.13",
        "Population_2011": "53,018",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Banke",
        "Nepali": "बाँके जिल्ला",
        "Headquarters": "Nepalganj",
        "Area_km2": "2,337",
        "Population_2011": "491,313",
        "Province": "Province No. 5",
        "LocalBodiesType": [
            "Municipality",
            "Rular Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Bardiya",
        "Nepali": "बर्दिया जिल्ला",
        "Headquarters": "Gulariya",
        "Area_km2": "2,025",
        "Population_2011": "426,576",
        "Province": "Province No. 5",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Western Rukum",
        "Nepali": "पश्चिमी रूकुम जिल्ला",
        "Headquarters": "Musikot",
        "Area_km2": "1,213.49",
        "Population_2011": "154,272",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Salyan",
        "Nepali": "सल्यान जिल्ला",
        "Headquarters": "Salyan",
        "Area_km2": "1,462",
        "Population_2011": "242,444",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Dolpa",
        "Nepali": "डोल्पा जिल्ला",
        "Headquarters": "Dunai",
        "Area_km2": "7,889",
        "Population_2011": "36,700",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Humla",
        "Nepali": "हुम्ला जिल्ला",
        "Headquarters": "Simikot",
        "Area_km2": "5,655",
        "Population_2011": "50,858",
        "Province": "Karnali",
        "LocalBodiesType": ["Rular Municipality"]
    },
    {
        "Name": "Jumla",
        "Nepali": "जुम्ला जिल्ला",
        "Headquarters": "Chandannath",
        "Area_km2": "2,531",
        "Population_2011": "108,921",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Kalikot",
        "Nepali": "कालिकोट जिल्ला",
        "Headquarters": "Manma",
        "Area_km2": "1,741",
        "Population_2011": "136,948",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Mugu",
        "Nepali": "मुगु जिल्ला",
        "Headquarters": "Gamgadhi",
        "Area_km2": "3,535",
        "Population_2011": "55,286",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Surkhet",
        "Nepali": "सुर्खेत जिल्ला",
        "Headquarters": "Birendranagar",
        "Area_km2": "2,451",
        "Population_2011": "350,804",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Dailekh",
        "Nepali": "दैलेख जिल्ला",
        "Headquarters": "Narayan",
        "Area_km2": "1,502",
        "Population_2011": "261,770",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Jajarkot",
        "Nepali": "जाजरकोट जिल्ला",
        "Headquarters": "Khalanga",
        "Area_km2": "2,230",
        "Population_2011": "171,304",
        "Province": "Karnali",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Kailali",
        "Nepali": "कैलाली जिल्ला",
        "Headquarters": "Dhangadhi",
        "Area_km2": "3,235",
        "Population_2011": "775,709",
        "Province": "SudurPaschim",
        "LocalBodiesType": [
            "Municipality",
            "Rular Municipality",
            "Sub-Metropolitan"
        ]
    },
    {
        "Name": "Achham",
        "Nepali": "अछाम जिल्ला",
        "Headquarters": "Mangalsen",
        "Area_km2": "1,680",
        "Population_2011": "257,477",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Doti",
        "Nepali": "डोटी जिल्ला",
        "Headquarters": "Dipayal Silgadhi",
        "Area_km2": "2,025",
        "Population_2011": "211,746",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Bajhang",
        "Nepali": "बझाङ जिल्ला",
        "Headquarters": "Jayaprithvi",
        "Area_km2": "3,422",
        "Population_2011": "195,159",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Bajura",
        "Nepali": "बाजुरा जिल्ला",
        "Headquarters": "Martadi",
        "Area_km2": "2,188",
        "Population_2011": "134,912",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Kanchanpur",
        "Nepali": "कंचनपुर जिल्ला",
        "Headquarters": "Bhimdatta",
        "Area_km2": "1,610",
        "Population_2011": "451,248",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Dadeldhura",
        "Nepali": "डडेलधुरा जिल्ला",
        "Headquarters": "Amargadhi",
        "Area_km2": "1,538",
        "Population_2011": "142,094",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Baitadi",
        "Nepali": "बैतडी जिल्ला",
        "Headquarters": "Dasharathchand",
        "Area_km2": "1,519",
        "Population_2011": "250,898",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    },
    {
        "Name": "Darchula",
        "Nepali": "दार्चुला जिल्ला",
        "Headquarters": "Darchula",
        "Area_km2": "2,322",
        "Population_2011": "133,274",
        "Province": "SudurPaschim",
        "LocalBodiesType": ["Municipality", "Rular Municipality"]
    }
]

const LocalBodies = [
    {
        "Name": "Mechinagar",
        "Nepali": "मेची नगर",
        "District": "Jhapa",
    },
    {
        "Name": "Budhanilkantha",
        "Nepali": "बुढानिलकण्ठ",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "107,918",
        "Area_km2": "34.8"
    },
    {
        "Name": "Gokarneshwar",
        "Nepali": "गोकर्णेश्वर",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "107,351",
        "Area_km2": "58.5"
    },
    {
        "Name": "Bhimdatta",
        "Nepali": "भीमदत्त",
        "District": "Kanchanpur",
        "Province": "Sudurpashchim",
        "Population_2011": "104,599",
        "Area_km2": "171.8"
    },
    {
        "Name": "Birendranagar",
        "Nepali": "बीरेन्द्रनगर",
        "District": "Surkhet",
        "Province": "Karnali",
        "Population_2011": "100,458",
        "Area_km2": "245.06"
    },
    {
        "Name": "Tilottama",
        "Nepali": "तिलोत्तमा",
        "District": "Rupandehi",
        "Province": "Province No. 5",
        "Population_2011": "100,149",
        "Area_km2": "126.19"
    },
    {
        "Name": "Tokha",
        "Nepali": "टोखा",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "99,032",
        "Area_km2": "17.11"
    },
    {
        "Name": "Lahan",
        "Nepali": "लहान",
        "District": "Siraha",
        "Province": "Province No. 2",
        "Population_2011": "91,766",
        "Area_km2": "167.17"
    },
    {
        "Name": "Triyuga",
        "Nepali": "त्रियुगा",
        "District": "Udayapur",
        "Province": "Province No. 1",
        "Population_2011": "87,557",
        "Area_km2": "547.43"
    },
    {
        "Name": "Chandragiri",
        "Nepali": "चन्द्रागिरी",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "85,198",
        "Area_km2": "43.92"
    },
    {
        "Name": "Madhyapur Thimi",
        "Nepali": "मध्यपुर थिमी",
        "District": "Bhaktapur",
        "Province": "Province No. 3",
        "Population_2011": "83,036",
        "Area_km2": "11.47"
    },
    {
        "Name": "Siraha",
        "Nepali": "सिरहा",
        "District": "Siraha",
        "Province": "Province No. 2",
        "Population_2011": "82,531",
        "Area_km2": "94.2"
    },
    {
        "Name": "Birtamod",
        "Nepali": "विर्तामोड",
        "District": "Jhapa",
    },
    {
        "Name": "Bhaktapur",
        "Nepali": "भक्तपुर",
        "District": "Bhaktapur",
        "Province": "Province No. 3",
        "Population_2011": "81,728",
        "Area_km2": "6.89"
    },
    {
        "Name": "Tarakeshwar",
        "Nepali": "तारकेश्वर",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "81,443",
        "Area_km2": "54.95"
    },
    {
        "Name": "Tikapur",
        "Nepali": "टिकापुर",
        "District": "Kailali",
        "Province": "Sudurpashchim",
        "Population_2011": "80,690",
        "Area_km2": "118.33"
    },
    {
        "Name": "Sundar Haraincha",
        "Nepali": "सुन्दरहरैंचा",
        "District": "Morang",
        "Province": "Province No. 1",
        "Population_2011": "80,518",
        "Area_km2": "110.16"
    },
    {
        "Name": "Suryabinayak",
        "Nepali": "सूर्यविनायक",
        "District": "Bhaktapur",
        "Province": "Province No. 3",
        "Population_2011": "78,490",
        "Area_km2": "42.45"
    },
    {
        "Name": "Godawari",
        "Nepali": "गोदावरी",
        "District": "Lalitpur",
        "Province": "Province No. 3",
        "Population_2011": "78,301",
        "Area_km2": "96.11"
    },
    {
        "Name": "Godawari, Seti",
        "Nepali": "गोदावरी",
        "District": "Kailali",
        "Province": "Sudurpashchim",
        "Population_2011": "78,018",
        "Area_km2": "305.63"
    },
    {
        "Name": "Barahachhetra",
        "Nepali": "बराहक्षेत्र",
        "District": "Sunsari",
        "Province": "Province No. 1",
        "Population_2011": "77,408",
        "Area_km2": "222.09"
    },
    {
        "Name": "Kapilvastu",
        "Nepali": "कपिलवस्तु",
        "District": "Kapilvastu",
        "Province": "Province No. 5",
        "Population_2011": "76,394",
        "Area_km2": "136.91"
    },
    {
        "Name": "Ghodaghodi",
        "Nepali": "घोडाघोडी",
        "District": "Kailali",
        "Province": "Sudurpashchim",
        "Population_2011": "75,586",
        "Area_km2": "354.45"
    },
    {
        "Name": "Lamki Chuha",
        "Nepali": "लम्की चुहा",
        "District": "Kailali",
        "Province": "Sudurpashchim",
        "Population_2011": "75,425",
        "Area_km2": "225"
    },
    {
        "Name": "Banganga",
        "Nepali": "बाणगंगा",
        "District": "Kapilvastu",
        "Province": "Province No. 5",
        "Population_2011": "75,242",
        "Area_km2": "233.68"
    },
    {
        "Name": "Damak",
        "Nepali": "दमक",
        "District": "Jhapa",
    },
    {
        "Name": "Lumbini Sanskritik",
        "Nepali": "लुम्बिनी सांस्कृतिक",
        "District": "Rupandehi",
        "Province": "Province No. 5",
        "Population_2011": "72,497",
        "Area_km2": "112.21"
    },
    {
        "Name": "Chandrapur",
        "Nepali": "चन्द्रपुर",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "72,059",
        "Area_km2": "249.96"
    },
    {
        "Name": "Kohalpur",
        "Nepali": "कोहलपुर",
        "District": "Banke",
        "Province": "Province No. 5",
        "Population_2011": "70,647",
        "Area_km2": "184.26"
    },
    {
        "Name": "Vyas",
        "Nepali": "व्यास",
        "District": "Tanahun",
        "Province": "Gandaki",
        "Population_2011": "70,335",
        "Area_km2": "248"
    },
    {
        "Name": "Ratnanagar",
        "Nepali": "रत्ननगर",
        "District": "Chitwan",
        "Province": "Province No. 3",
        "Population_2011": "69,848",
        "Area_km2": "68.68"
    },
    {
        "Name": "Barahathwa",
        "Nepali": "बरहथवा",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "69,822",
        "Area_km2": "107.05"
    },
    {
        "Name": "Rajbiraj",
        "Nepali": "राजविराज",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "69,086[5]",
        "Area_km2": "55.64[5]"
    },
    {
        "Name": "Barbardiya",
        "Nepali": "बारबर्दिया",
        "District": "Bardiya",
        "Province": "Province No. 5",
        "Population_2011": "68,012",
        "Area_km2": "226.09"
    },
    {
        "Name": "Shivaraj",
        "Nepali": "शिवराज",
        "District": "Kapilvastu",
        "Province": "Province No. 5",
        "Population_2011": "66,781",
        "Area_km2": "284.07"
    },
    {
        "Name": "Gulariya",
        "Nepali": "गुलरिया",
        "District": "Bardiya",
        "Province": "Province No. 5",
        "Population_2011": "66,679",
        "Area_km2": "118.21"
    },
    {
        "Name": "Gaushala",
        "Nepali": "गौशाला",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "66,673",
        "Area_km2": "144.73"
    },
    {
        "Name": "Bardibas",
        "Nepali": "बर्दिबास",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "66,354",
        "Area_km2": "315.57"
    },
    {
        "Name": "Belbari",
        "Nepali": "बेलवारी",
        "District": "Morang",
        "Province": "Province No. 1",
        "Population_2011": "65,892",
        "Area_km2": "132.79"
    },
    {
        "Name": "Kirtipur",
        "Nepali": "किर्तिपुर",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "65,602",
        "Area_km2": "14.76"
    },
    {
        "Name": "Bhadrapur",
        "Nepali": "भद्रपुर",
        "District": "Jhapa",
    },
    {
        "Name": "Nagarjun",
        "Nepali": "नागार्जुन",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "65,420",
        "Area_km2": "29.85"
    },
    {
        "Name": "Dudhauli",
        "Nepali": "दुधौली",
        "District": "Sindhuli",
        "Province": "Province No. 3",
        "Population_2011": "65,302",
        "Area_km2": "390.39"
    },
    {
        "Name": "Kamalamai",
        "Nepali": "कमलामाई",
        "District": "Sindhuli",
        "Province": "Province No. 3",
        "Population_2011": "65,064",
        "Area_km2": "482.57"
    },
    {
        "Name": "Buddhabhumi",
        "Nepali": "बुद्धभूमी",
        "District": "Kapilvastu",
        "Province": "Province No. 5",
        "Population_2011": "64,949",
        "Area_km2": "366.67"
    },
    {
        "Name": "Shivasatakshi",
        "Nepali": "शिवसताक्षि",
        "District": "Jhapa",
    },
    {
        "Name": "Inaruwa",
        "Nepali": "ईनरुवा",
        "District": "Sunsari",
        "Province": "Province No. 1",
        "Population_2011": "63,593",
        "Area_km2": "77.92"
    },
    {
        "Name": "Siddharthanagar",
        "Nepali": "सिद्धार्थनगर",
        "District": "Rupandehi",
        "Province": "Province No. 5",
        "Population_2011": "63,483",
        "Area_km2": "36.03"
    },
    {
        "Name": "Pathari-Shanischare",
        "Nepali": "पथरी शनिश्चरे",
        "District": "Morang",
        "Province": "Province No. 1",
        "Population_2011": "62,440",
        "Area_km2": "79.81"
    },
    {
        "Name": "Kawasoti",
        "Nepali": "कावासोती",
        "District": "Nawalpur",
        "Province": "Gandaki",
        "Population_2011": "62,421",
        "Area_km2": "108.34"
    },
    {
        "Name": "Krishnanagar",
        "Nepali": "कृष्णनगर",
        "District": "Kapilvastu",
        "Province": "Province No. 5",
        "Population_2011": "62,370",
        "Area_km2": "96.66"
    },
    {
        "Name": "Mahalaxmi",
        "Nepali": "महालक्ष्मी",
        "District": "Lalitpur",
        "Province": "Province No. 3",
        "Population_2011": "62,172",
        "Area_km2": "26.51"
    },
    {
        "Name": "Kageshwari-Manohara",
        "Nepali": "कागेश्वरी मनोहरा",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "60,237",
        "Area_km2": "27.38"
    },
    {
        "Name": "Arjundhara",
        "Nepali": "अर्जुनधारा",
        "District": "Jhapa",
    },
    {
        "Name": "Ishwarpur",
        "Nepali": "ईश्वरपूर",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "59,986",
        "Area_km2": "163.83"
    },
    {
        "Name": "Rajapur",
        "Nepali": "राजापुर",
        "District": "Bardiya",
        "Province": "Province No. 5",
        "Population_2011": "59,553",
        "Area_km2": "127.08"
    },
    {
        "Name": "Ramgram",
        "Nepali": "रामग्राम",
        "District": "Parasi",
        "Province": "Province No. 5",
        "Population_2011": "59,455",
        "Area_km2": "128.32"
    },
    {
        "Name": "Lalbandi",
        "Nepali": "लालबन्दी",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "59,395",
        "Area_km2": "238.5"
    },
    {
        "Name": "Gaindakot",
        "Nepali": "गैडाकोट",
        "District": "Nawalpur",
        "Province": "Gandaki",
        "Population_2011": "58,836",
        "Area_km2": "159.93"
    },
    {
        "Name": "Jaleshwar",
        "Nepali": "जलेश्वर",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "58,549",
        "Area_km2": "44.26"
    },
    {
        "Name": "Nilkantha",
        "Nepali": "निलकण्ठ",
        "District": "Dhading",
        "Province": "Province No. 3",
        "Population_2011": "58,515",
        "Area_km2": "197.7"
    },
    {
        "Name": "Baglung",
        "Nepali": "बागलुङ",
        "District": "Baglung",
        "Province": "Gandaki",
        "Population_2011": "57,823",
        "Area_km2": "98.01"
    },
    {
        "Name": "Rapti",
        "Nepali": "राप्ती",
        "District": "Chitwan",
        "Province": "Province No. 3",
        "Population_2011": "57,107",
        "Area_km2": "212.31"
    },
    {
        "Name": "Suryodaya",
        "Nepali": "सूर्योदय",
        "District": "Ilam",
        "Province": "Province No. 1",
        "Population_2011": "56,691",
        "Area_km2": "252.52"
    },
    {
        "Name": "Krishnapur",
        "Nepali": "कृष्णपुर",
        "District": "Kanchanpur",
        "Province": "Sudurpashchim",
        "Population_2011": "56,643",
        "Area_km2": "252.75"
    },
    {
        "Name": "Duhabi",
        "Nepali": "दुहवी",
        "District": "Sunsari",
        "Province": "Province No. 1",
        "Population_2011": "56,269",
        "Area_km2": "73.67"
    },
    {
        "Name": "Katari",
        "Nepali": "कटारी",
        "District": "Udayapur",
        "Province": "Province No. 1",
        "Population_2011": "56,146",
        "Area_km2": "424.89"
    },
    {
        "Name": "Khairhani",
        "Nepali": "खैरहनी",
        "District": "Chitwan",
        "Province": "Province No. 3",
        "Population_2011": "56,094",
        "Area_km2": "85.55"
    },
    {
        "Name": "Bansgadhi",
        "Nepali": "बासगढी",
        "District": "Bardiya",
        "Province": "Province No. 5",
        "Population_2011": "55,875",
        "Area_km2": "206.08"
    },
    {
        "Name": "Sainamaina",
        "Nepali": "सैनामैना",
        "District": "Rupandehi",
        "Province": "Province No. 5",
        "Population_2011": "55,822",
        "Area_km2": "162.18"
    },
    {
        "Name": "Banepa",
        "Nepali": "बनेपा",
        "District": "Kavrepalanchok",
        "Province": "Province No. 3",
        "Population_2011": "55,628",
        "Area_km2": "55"
    },
    {
        "Name": "Changunarayan",
        "Nepali": "चाँगुनारायण",
        "District": "Bhaktapur",
        "Province": "Province No. 3",
        "Population_2011": "55,430",
        "Area_km2": "62.98"
    },
    {
        "Name": "Sunwal",
        "Nepali": "सुनवल",
        "District": "Parasi",
        "Province": "Province No. 5",
        "Population_2011": "55,424",
        "Area_km2": "139.1"
    },
    {
        "Name": "Bardghat",
        "Nepali": "बर्दघाट",
        "District": "Parasi",
        "Province": "Province No. 5",
        "Population_2011": "55,382",
        "Area_km2": "162.05"
    },
    {
        "Name": "Ratuwamai",
        "Nepali": "रतुवामाई",
        "District": "Morang",
        "Province": "Province No. 1",
        "Population_2011": "55,380",
        "Area_km2": "142.15"
    },
    {
        "Name": "Gauriganga",
        "Nepali": "गौरीगंगा",
        "District": "Kailali",
        "Province": "Sudurpashchim",
        "Population_2011": "55,314",
        "Area_km2": "244.44"
    },
    {
        "Name": "Maharajganj",
        "Nepali": "महाराजगंज",
        "District": "Kapilvastu",
        "Province": "Province No. 5",
        "Population_2011": "54,800",
        "Area_km2": "112.21"
    },
    {
        "Name": "Urlabari",
        "Nepali": "उर्लावारी",
        "District": "Morang",
        "Province": "Province No. 1",
        "Population_2011": "54,696",
        "Area_km2": "74.62"
    },
    {
        "Name": "Mahagadhimai",
        "Nepali": "महागढीमाई",
        "District": "Bara",
        "Province": "Province No. 2",
        "Population_2011": "54,474",
        "Area_km2": "55.32"
    },
    {
        "Name": "Bidur",
        "Nepali": "विदुर",
        "District": "Nuwakot",
        "Province": "Province No. 3",
        "Population_2011": "54,351",
        "Area_km2": "130.01"
    },
    {
        "Name": "Madhyabindu",
        "Nepali": "मध्यविन्दु",
        "District": "Nawalpur",
        "Province": "Gandaki",
        "Population_2011": "54,140",
        "Area_km2": "233.35"
    },
    {
        "Name": "Punarbas",
        "Nepali": "पुनर्वास",
        "District": "Kanchanpur",
        "Province": "Sudurpashchim",
        "Population_2011": "53,633",
        "Area_km2": "103.71"
    },
    {
        "Name": "Belauri",
        "Nepali": "बेलौरी",
        "District": "Kanchanpur",
        "Province": "Sudurpashchim",
        "Population_2011": "53,544",
        "Area_km2": "123.37"
    },
    {
        "Name": "Devdaha",
        "Nepali": "देवदह",
        "District": "Rupandehi",
        "Province": "Province No. 5",
        "Population_2011": "53,523",
        "Area_km2": "136.95"
    },
    {
        "Name": "Gauradaha",
        "Nepali": "गौरादह",
        "District": "Jhapa",
    },
    {
        "Name": "Rangeli",
        "Nepali": "रंगेली",
        "District": "Morang",
        "Province": "Province No. 1",
        "Population_2011": "52,013",
        "Area_km2": "111.78"
    },
    {
        "Name": "Bhajani",
        "Nepali": "भजनी",
        "District": "Kailali",
        "Province": "Sudurpashchim",
        "Population_2011": "51,845",
        "Area_km2": "176.25"
    },
    {
        "Name": "Ramdhuni",
        "Nepali": "रामधुनी",
        "District": "Sunsari",
        "Province": "Province No. 1",
        "Population_2011": "51,752",
        "Area_km2": "91.69"
    },
    {
        "Name": "Waling",
        "Nepali": "वालिङ",
        "District": "Syangja",
        "Province": "Gandaki",
        "Population_2011": "51,143",
        "Area_km2": "128.4"
    },
    {
        "Name": "Golbazar",
        "Nepali": "गोलबजार",
        "District": "Siraha",
        "Province": "Province No. 2",
        "Population_2011": "51,137",
        "Area_km2": "111.94"
    },
    {
        "Name": "Sunawarshi",
        "Nepali": "सुनवर्षी",
        "District": "Morang",
        "Province": "Province No. 1",
        "Population_2011": "50,758",
        "Area_km2": "106.4"
    },
    {
        "Name": "Garuda",
        "Nepali": "गरुडा",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "50,481",
        "Area_km2": "44.46"
    },
    {
        "Name": "Tansen",
        "Nepali": "तानसेन",
        "District": "Palpa",
        "Province": "Province No. 5",
        "Population_2011": "50,405",
        "Area_km2": "109.8"
    },
    {
        "Name": "Mirchaiya",
        "Nepali": "मिर्चैया",
        "District": "Siraha",
        "Province": "Province No. 2",
        "Population_2011": "50,079",
        "Area_km2": "91.97"
    },
    {
        "Name": "Simraungadh",
        "Nepali": "सिम्रोनगढ",
        "District": "Bara",
        "Province": "Province No. 2",
        "Population_2011": "49,939",
        "Area_km2": "42.65"
    },
    {
        "Name": "Manara Shisawa",
        "Nepali": "मनरा शिसवा",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "49,692",
        "Area_km2": "49.73"
    },
    {
        "Name": "Bedkot",
        "Nepali": "वेदकोट",
        "District": "Kanchanpur",
        "Province": "Sudurpashchim",
        "Population_2011": "49,479",
        "Area_km2": "159.92"
    },
    {
        "Name": "Kalyanpur",
        "Nepali": "कल्याणपुर",
        "District": "Siraha",
        "Province": "Province No. 2",
        "Population_2011": "49,288",
        "Area_km2": "76.81"
    },
    {
        "Name": "Gorkha",
        "Nepali": "गोरखा",
        "District": "Gorkha",
        "Province": "Gandaki",
        "Population_2011": "49,272",
        "Area_km2": "131.86"
    },
    {
        "Name": "Phidim",
        "Nepali": "फिदिम",
        "District": "Pancthar",
        "Province": "Province No. 1",
        "Population_2011": "49,201",
        "Area_km2": "192.5"
    },
    {
        "Name": "Chaudandigadhi",
        "Nepali": "चौदण्डीगढी",
        "District": "Udayapur",
        "Province": "Province No. 1",
        "Population_2011": "48,578",
        "Area_km2": "283.78"
    },
    {
        "Name": "Ilam",
        "Nepali": "इलाम",
        "District": "Ilam",
        "Province": "Province No. 1",
        "Population_2011": "48,536",
        "Area_km2": "173.32"
    },
    {
        "Name": "Shuklagandaki",
        "Nepali": "शुक्लागण्डकी",
        "District": "Tanahun",
        "Province": "Gandaki",
        "Population_2011": "48,456",
        "Area_km2": "165"
    },
    {
        "Name": "Godaita",
        "Nepali": "गोडैता",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "47,687",
        "Area_km2": "48.62"
    },
    {
        "Name": "Lamahi",
        "Nepali": "लमही",
        "District": "Dang",
        "Province": "Province No. 5",
        "Population_2011": "47,655",
        "Area_km2": "326.66"
    },
    {
        "Name": "Dhangadimai",
        "Nepali": "धनगढीमाई",
        "District": "Siraha",
        "Province": "Province No. 2",
        "Population_2011": "47,449",
        "Area_km2": "159.51"
    },
    {
        "Name": "Diktel–Rupakot–Majuwagadhi",
        "Nepali": "दिक्तेल–रुपाकोट–मजुवागढी",
        "District": "Khotang",
        "Province": "Province No. 1",
        "Population_2011": "46,903",
        "Area_km2": "246.51"
    },
    {
        "Name": "Shuklaphanta",
        "Nepali": "शुक्लाफाँटा",
        "District": "Kanchanpur",
        "Province": "Sudurpashchim",
        "Population_2011": "46,834",
        "Area_km2": "162.57"
    },
    {
        "Name": "Bhangaha",
        "Nepali": "भँगाहा",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "46,754",
        "Area_km2": "77.21"
    },
    {
        "Name": "Paunauti",
        "Nepali": "पनौती",
        "District": "Kavrepalanchowk",
        "Province": "Province No. 3",
        "Population_2011": "46,595",
        "Area_km2": "118"
    },
    {
        "Name": "Gujara",
        "Nepali": "गुजरा",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "46,592",
        "Area_km2": "150.33"
    },
    {
        "Name": "Malangwa",
        "Nepali": "मलङ्गवा",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "46,516",
        "Area_km2": "30.44"
    },
    {
        "Name": "Chautara Sangachokgadhi",
        "Nepali": "चौतारा साँगाचोकगढी",
        "District": "Sindhupalchowk",
        "Province": "Province No. 3",
        "Population_2011": "46,501",
        "Area_km2": "165.25"
    },
    {
        "Name": "Madhuwan",
        "Nepali": "मधुवन",
        "District": "Bardiya",
        "Province": "Province No. 5",
        "Population_2011": "46,437",
        "Area_km2": "129.73"
    },
    {
        "Name": "Sabaila",
        "Nepali": "सवैला",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "45,879",
        "Area_km2": "64.47"
    },
    {
        "Name": "Bhanu",
        "Nepali": "भानु",
        "District": "Tanahun",
        "Province": "Gandaki",
        "Population_2011": "45,792",
        "Area_km2": "184"
    },
    {
        "Name": "Hanumannagar Kankalini",
        "Nepali": "हनुमाननगर कंकालिनी",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "45,734",
        "Area_km2": "118.19"
    },
    {
        "Name": "Dhanushadham",
        "Nepali": "धनुषाधाम",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "45,665",
        "Area_km2": "91.64"
    },
    {
        "Name": "Manthali",
        "Nepali": "मन्थली",
        "District": "Ramechhap",
        "Province": "Province No. 3",
        "Population_2011": "45,416",
        "Area_km2": "211.78"
    },
    {
        "Name": "Khadak",
        "Nepali": "खडक",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "45,367",
        "Area_km2": "93.77"
    },
    {
        "Name": "Melamchi",
        "Nepali": "मेलम्ची",
        "District": "Sindhupalchowk",
        "Province": "Province No. 3",
        "Population_2011": "45,343",
        "Area_km2": "158.17"
    },
    {
        "Name": "Balara",
        "Nepali": "बलरा",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "45,194",
        "Area_km2": "48.55"
    },
    {
        "Name": "Mithila",
        "Nepali": "मिथिला",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "45,164",
        "Area_km2": "187.93"
    },
    {
        "Name": "Putalibazar",
        "Nepali": "पुतलीबजार",
        "District": "Syangja",
        "Province": "Gandaki",
        "Population_2011": "44,876",
        "Area_km2": "147.21"
    },
    {
        "Name": "Dakneshwari",
        "Nepali": "दक्नेश्वारी",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "44,782",
        "Area_km2": "69.11"
    },
    {
        "Name": "Thakurbaba",
        "Nepali": "ठाकुरबाबा",
        "District": "Bardiya",
        "Province": "Province No. 5",
        "Population_2011": "44,361",
        "Area_km2": "104.57"
    },
    {
        "Name": "Surunga",
        "Nepali": "सुरुङ्‍गा",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "44,221",
        "Area_km2": "107.04"
    },
    {
        "Name": "Hariwan",
        "Nepali": "हरिवन",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "43,928",
        "Area_km2": "86.12"
    },
    {
        "Name": "Gurbhakot",
        "Nepali": "गुर्भाकोट",
        "District": "Surkhet",
        "Province": "Karnali",
        "Population_2011": "43,765",
        "Area_km2": "228.62"
    },
    {
        "Name": "Sitganga",
        "Nepali": "सितगंगा",
        "District": "Arghakhanchi",
        "Province": "Province No. 5",
        "Population_2011": "43,373",
        "Area_km2": "610.43"
    },
    {
        "Name": "Bodebarsain",
        "Nepali": "बोदेबरसाईन",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "43,229",
        "Area_km2": "58.93"
    },
    {
        "Name": "Kolhabi",
        "Nepali": "कोल्हवी",
        "District": "Bara",
        "Province": "Province No. 2",
        "Population_2011": "43,036",
        "Area_km2": "157.4"
    },
    {
        "Name": "Shahidnagar",
        "Nepali": "शहिद नगर",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "43,007",
        "Area_km2": "57.37"
    },
    {
        "Name": "Brindaban",
        "Nepali": "बृन्दावन",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "42,735",
        "Area_km2": "95.4"
    },
    {
        "Name": "Devchuli",
        "Nepali": "देवचुली",
        "District": "Nawalpur",
        "Province": "Gandaki",
        "Population_2011": "42,603",
        "Area_km2": "112.72"
    },
    {
        "Name": "Kshireshwarnath",
        "Nepali": "क्षिरेश्वरनाथ",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "42,541",
        "Area_km2": "50.85"
    },
    {
        "Name": "Belaka",
        "Nepali": "वेलका",
        "District": "Udayapur",
        "Province": "Province No. 1",
        "Population_2011": "42,356",
        "Area_km2": "344.73"
    },
    {
        "Name": "Balawa",
        "Nepali": "बलवा",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "42,341",
        "Area_km2": "44.07"
    },
    {
        "Name": "Kabilasi",
        "Nepali": "कविलासी",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "42,336",
        "Area_km2": "48.11"
    },
    {
        "Name": "Kalika",
        "Nepali": "कालिका",
        "District": "Chitwan",
        "Province": "Province No. 3",
        "Population_2011": "41,742",
        "Area_km2": "149.08"
    },
    {
        "Name": "Thaha",
        "Nepali": "थाहा",
        "District": "Makawanpur",
        "Province": "Province No. 3",
        "Population_2011": "41,623",
        "Area_km2": "191.12"
    },
    {
        "Name": "Dullu",
        "Nepali": "दुल्लु",
        "District": "Dailekh",
        "Province": "Karnali",
        "Population_2011": "41,540",
        "Area_km2": "156.77"
    },
    {
        "Name": "Ishnath",
        "Nepali": "ईशनाथ",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "41,435",
        "Area_km2": "35.18"
    },
    {
        "Name": "Bheriganga",
        "Nepali": "भेरीगंगा",
        "District": "Surkhet",
        "Province": "Karnali",
        "Population_2011": "41,407",
        "Area_km2": "256.2"
    },
    {
        "Name": "Sandhikharka",
        "Nepali": "सन्धिखर्क",
        "District": "Arghakhanchi",
        "Province": "Province No. 5",
        "Population_2011": "41,079",
        "Area_km2": "129.42"
    },
    {
        "Name": "Rajpur",
        "Nepali": "राजपुर",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "41,078",
        "Area_km2": "31.41"
    },
    {
        "Name": "Gadhimai",
        "Nepali": "गढीमाई",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "40,410",
        "Area_km2": "49.44"
    },
    {
        "Name": "Bagmati",
        "Nepali": "बागमती",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "40,399",
        "Area_km2": "101.18"
    },
    {
        "Name": "Kankai",
        "Nepali": "कन्काई",
        "District": "Jhapa",
        "Province": "Province No. 1",
        "Population_2011": "40,141",
        "Area_km2": "80.98"
    },
    {
        "Name": "Belkotgadhi",
        "Nepali": "बेलकोटगढी",
        "District": "Nuwakot",
        "Province": "Province No. 3",
        "Population_2011": "39,888",
        "Area_km2": "155.6"
    },
    {
        "Name": "Bahudarmai",
        "Nepali": "बहुदरमाई",
        "District": "Parsa",
        "Province": "Province No. 2",
        "Population_2011": "39,673",
        "Area_km2": "31.55"
    },
    {
        "Name": "Kushma",
        "Nepali": "कुश्मा",
        "District": "Parbat",
        "Province": "Gandaki",
        "Population_2011": "39,600",
        "Area_km2": "93.18"
    },
    {
        "Name": "Loharpatti",
        "Nepali": "लोहरपट्टी",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "39,579",
        "Area_km2": "50.06"
    },
    {
        "Name": "Besisahar",
        "Nepali": "बेसीशहर",
        "District": "Lamjung",
        "Province": "Gandaki",
        "Population_2011": "39,356",
        "Area_km2": "127.64"
    },
    {
        "Name": "Mahakali",
        "Nepali": "माहाकाली",
        "District": "Kanchanpur",
        "Province": "Sudurpashchim",
        "Population_2011": "39,253",
        "Area_km2": "56.84"
    },
    {
        "Name": "Purchaundi",
        "Nepali": "पुर्चौडी",
        "District": "Baitadi",
        "Province": "Sudurpashchim",
        "Population_2011": "39,174",
        "Area_km2": "198.52"
    },
    {
        "Name": "Hansapur",
        "Nepali": "हंसपुर",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "39,145",
        "Area_km2": "48.71"
    },
    {
        "Name": "Kamala",
        "Nepali": "कमला",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "38,877",
        "Area_km2": "65.85"
    },
    {
        "Name": "Pyuthan",
        "Nepali": "प्यूठान",
        "District": "Pyuthan",
        "Province": "Province No. 5",
        "Population_2011": "38,449",
        "Area_km2": "128.96"
    },
    {
        "Name": "Katahariya",
        "Nepali": "कटहरीया",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "38,413",
        "Area_km2": "40.69"
    },
    {
        "Name": "Palungtar",
        "Nepali": "पालुङटार",
        "District": "Gorkha",
        "Province": "Gandaki",
        "Population_2011": "38,174",
        "Area_km2": "158.62"
    },
    {
        "Name": "Parsagadhi",
        "Nepali": "पर्सागढी",
        "District": "Parsa",
        "Province": "Province No. 2",
        "Population_2011": "38,067",
        "Area_km2": "99.69"
    },
    {
        "Name": "Shambhunath",
        "Nepali": "शम्भुनाथ",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "38,018",
        "Area_km2": "108.71"
    },
    {
        "Name": "Panchkhal",
        "Nepali": "पाँचखाल",
        "District": "Kavrepalanchok",
        "Province": "Province No. 3",
        "Population_2011": "37,997",
        "Area_km2": "103"
    },
    {
        "Name": "Madi",
        "Nepali": "माडी",
        "District": "Chitwan",
        "Province": "Province No. 3",
        "Population_2011": "37,683",
        "Area_km2": "218.24"
    },
    {
        "Name": "Sukhipur",
        "Nepali": "सुखीपुर",
        "District": "Siraha",
        "Province": "Province No. 2",
        "Population_2011": "37,592",
        "Area_km2": "54.78"
    },
    {
        "Name": "Paroha",
        "Nepali": "परोहा",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "37,453",
        "Area_km2": "37.45"
    },
    {
        "Name": "Haripur",
        "Nepali": "हरिपुर",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "37,351",
        "Area_km2": "66.86"
    },
    {
        "Name": "Ganeshman Charnath",
        "Nepali": "गणेशमान चारनाथ",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "37,300",
        "Area_km2": "244.31"
    },
    {
        "Name": "Galyang",
        "Nepali": "गल्याङ",
        "District": "Syangja",
        "Province": "Gandaki",
        "Population_2011": "36,967",
        "Area_km2": "122.71"
    },
    {
        "Name": "Dhankuta",
        "Nepali": "धनकुटा",
        "District": "Dhankuta",
        "Province": "Province No. 1",
        "Population_2011": "36,619",
        "Area_km2": "111"
    },
    {
        "Name": "Phatuwa Bijayapur",
        "Nepali": "फतुवाबिजयपुर",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "36,533",
        "Area_km2": "65.24"
    },
    {
        "Name": "Baudhimai",
        "Nepali": "बौधीमाई",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "36,265",
        "Area_km2": "34.343"
    },
    {
        "Name": "Bangad Kupinde",
        "Nepali": "बनगाड कुपिण्डे",
        "District": "Salyan",
        "Province": "Karnali",
        "Population_2011": "36,052",
        "Area_km2": "338.21"
    },
    {
        "Name": "Haripurwa",
        "Nepali": "हरिपुर्वा",
        "District": "Sarlahi",
        "Province": "Province No. 2",
        "Population_2011": "36,042",
        "Area_km2": "30.50"
    },
    {
        "Name": "Rampur",
        "Nepali": "रामपुर",
        "District": "Palpa",
        "Province": "Province No. 5",
        "Population_2011": "35,396",
        "Area_km2": "123.34"
    },
    {
        "Name": "Chhedagad",
        "Nepali": "छेडागाड",
        "District": "Jajarkot",
        "Province": "Karnali",
        "Population_2011": "35,295",
        "Area_km2": "284.2"
    },
    {
        "Name": "Kanchanrup",
        "Nepali": "कञ्चनरूप",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "35,238",
        "Area_km2": "117.34"
    },
    {
        "Name": "Parashuram",
        "Nepali": "परशुराम",
        "District": "Dadeldhura",
        "Province": "Sudurpashchim",
        "Population_2011": "34,983",
        "Area_km2": "414.07"
    },
    {
        "Name": "Nagarain",
        "Nepali": "नगराईन",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "35,630",
        "Area_km2": "39.00"
    },
    {
        "Name": "Dasharathchand",
        "Nepali": "दशरथचन्द",
        "District": "Baitadi",
        "Province": "Sudurpashchim",
        "Population_2011": "34,575",
        "Area_km2": "135.15"
    },
    {
        "Name": "Nijgadh",
        "Nepali": "निजगढ",
        "District": "Bara",
        "Province": "Province No. 2",
        "Population_2011": "35,335",
        "Area_km2": "289.43"
    },
    {
        "Name": "Madhav Narayan",
        "Nepali": "माधव नारायण",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "35,175",
        "Area_km2": "48.53"
    },
    {
        "Name": "Gaur",
        "Nepali": "गौर",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "34,937",
        "Area_km2": "21.53"
    },
    {
        "Name": "Pachrauta",
        "Nepali": "पचरौता",
        "District": "Bara",
        "Province": "Province No. 2",
        "Population_2011": "34,175",
        "Area_km2": "44.01"
    },
    {
        "Name": "Bagchaur",
        "Nepali": "बागचौर",
        "District": "Salyan",
        "Province": "Karnali",
        "Population_2011": "34,118",
        "Area_km2": "163.14"
    },
    {
        "Name": "Sanphebagar",
        "Nepali": "साफेबगर",
        "District": "Achham",
        "Province": "Sudurpashchim",
        "Population_2011": "33,788",
        "Area_km2": "166.71"
    },
    {
        "Name": "Shaarda",
        "Nepali": "शारदा",
        "District": "Salyan",
        "Province": "Karnali",
        "Population_2011": "33,730",
        "Area_km2": "198.34"
    },
    {
        "Name": "Aathabiskot",
        "Nepali": "अाठबिसकाेट",
        "District": "Rukum West",
        "Province": "Karnali",
        "Population_2011": "33,601",
        "Area_km2": "560.34"
    },
    {
        "Name": "Mithila Bihari",
        "Nepali": "मिथिला बिहारी",
        "District": "Dhanusa",
        "Province": "Province No. 2",
        "Population_2011": "33,521",
        "Area_km2": "37.6"
    },
    {
        "Name": "Bheri",
        "Nepali": "भेरी",
        "District": "Jajarkot",
        "Province": "Karnali",
        "Population_2011": "33,515",
        "Area_km2": "219.77"
    },
    {
        "Name": "Beni",
        "Nepali": "बेनी",
        "District": "Myagdi",
        "Province": "Gandaki",
        "Population_2011": "33,498",
        "Area_km2": "76.57"
    },
    {
        "Name": "Bungal",
        "Nepali": "बुंगल",
        "District": "Bajhang",
        "Province": "Sudurpashchim",
        "Population_2011": "33,224",
        "Area_km2": "447.59"
    },
    {
        "Name": "Galkot",
        "Nepali": "गल्कोट",
        "District": "Baglung",
        "Province": "Gandaki",
        "Population_2011": "33,097",
        "Area_km2": "194.39"
    },
    {
        "Name": "Dipayal Silgadhi",
        "Nepali": "दिपायल सिलगढी",
        "District": "Doti",
        "Province": "Sudurpashchim",
        "Population_2011": "32,941",
        "Area_km2": "126.62"
    },
    {
        "Name": "Musikot",
        "Nepali": "मुसिकोट",
        "District": "Western Rukum",
        "Province": "Karnali",
        "Population_2011": "32,939",
        "Area_km2": "136.06"
    },
    {
        "Name": "Deumai",
        "Nepali": "देउमाई",
        "District": "Ilam",
        "Province": "Province No. 1",
        "Population_2011": "32,927",
        "Area_km2": "191.63"
    },
    {
        "Name": "Pokhariya",
        "Nepali": "पोखरिया",
        "District": "Parsa",
        "Province": "Province No. 2",
        "Population_2011": "32,885",
        "Area_km2": "32.47"
    },
    {
        "Name": "Musikot",
        "Nepali": "मुसिकोट",
        "District": "Gulmi",
        "Province": "Province No. 5",
        "Population_2011": "32,802",
        "Area_km2": "114.74"
    },
    {
        "Name": "Rolpa",
        "Nepali": "रोल्पा",
        "District": "Rolpa",
        "Province": "Province No. 5",
        "Population_2011": "32,759",
        "Area_km2": "270.42"
    },
    {
        "Name": "Mandandeupur",
        "Nepali": "मण्डनदेउपुर",
        "District": "Kavrepalanchok",
        "Province": "Province No. 3",
        "Population_2011": "32,659",
        "Area_km2": "89"
    },
    {
        "Name": "Bhumikasthan",
        "Nepali": "भूमिकास्थान",
        "District": "Arghakhanchi",
        "Province": "Province No. 5",
        "Population_2011": "32,640",
        "Area_km2": "159.13"
    },
    {
        "Name": "Mai",
        "Nepali": "माई",
        "District": "Ilam",
        "Province": "Province No. 1",
        "Population_2011": "32,576",
        "Area_km2": "246.11"
    },
    {
        "Name": "Resunga",
        "Nepali": "रेसुङ्गा",
        "District": "Gulmi",
        "Province": "Province No. 5",
        "Population_2011": "32,545",
        "Area_km2": "83.74"
    },
    {
        "Name": "Mangalsen",
        "Nepali": "मंगलसेन",
        "District": "Achham",
        "Province": "Sudurpashchim",
        "Population_2011": "32,331",
        "Area_km2": "220.14"
    },
    {
        "Name": "Bideha",
        "Nepali": "विदेह",
        "District": "Dhanusha",
        "Province": "Province No. 2",
        "Population_2011": "32,266",
        "Area_km2": "45.51"
    },
    {
        "Name": "Panchapuri",
        "Nepali": "पञ्चपुरी",
        "District": "Surkhet",
        "Province": "Karnali",
        "Population_2011": "32,231",
        "Area_km2": "329.9"
    },
    {
        "Name": "Dhulikhel",
        "Nepali": "धुलिखेल",
        "District": "Kavrepalanchowk",
        "Province": "Province No. 3",
        "Population_2011": "32,162",
        "Area_km2": "55"
    },
    {
        "Name": "Dewahi Gonahi",
        "Nepali": "देवाही गोनाही",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "32,146",
        "Area_km2": "33.99"
    },
    {
        "Name": "Letang Bhogateni",
        "Nepali": "लेटाङ",
        "District": "Morang",
        "Province": "Province No. 1",
        "Population_2011": "32,053",
        "Area_km2": "219.23"
    },
    {
        "Name": "Shikhar",
        "Nepali": "शिखर",
        "District": "Doti",
        "Province": "Sudurpashchim",
        "Population_2011": "31,801",
        "Area_km2": "285.37"
    },
    {
        "Name": "Aurahi",
        "Nepali": "औरही",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "31,751",
        "Area_km2": "35.76"
    },
    {
        "Name": "Shadanand",
        "Nepali": "षडानन्द",
        "District": "Bhojpur",
        "Province": "Province No. 1",
        "Population_2011": "31,610",
        "Area_km2": "241.15"
    },
    {
        "Name": "Bhimeshwar",
        "Nepali": "भीमेश्वर",
        "District": "Dolakha",
        "Province": "Province No. 3",
        "Population_2011": "31,480",
        "Area_km2": "132.5"
    },
    {
        "Name": "Jaimini",
        "Nepali": "जैमिनी",
        "District": "Baglung",
        "Province": "Gandaki",
        "Population_2011": "31,430",
        "Area_km2": "118.71"
    },
    {
        "Name": "Bhimad",
        "Nepali": "भिमाद",
        "District": "Tanahun",
        "Province": "Gandaki",
        "Population_2011": "31,362",
        "Area_km2": "129"
    },
    {
        "Name": "Rajdevi",
        "Nepali": "राजदेवी",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "31,292",
        "Area_km2": "28.21"
    },
    {
        "Name": "Khandbari",
        "Nepali": "खादँवारी",
        "District": "Sankhuwasabha",
        "Province": "Province No. 1",
        "Population_2011": "31,177",
        "Area_km2": "122.78"
    },
    {
        "Name": "Dhunibeshi",
        "Nepali": "धुनीबेंशी",
        "District": "Dhading",
        "Province": "Province No. 3",
        "Population_2011": "31,029",
        "Area_km2": "96.3"
    },
    {
        "Name": "Matihani",
        "Nepali": "मटिहानी",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "31,026",
        "Area_km2": "29.02"
    },
    {
        "Name": "Karjanha",
        "Nepali": "कर्जन्हा",
        "District": "Siraha",
        "Province": "Province No. 2",
        "Population_2011": "30,965",
        "Area_km2": "76.84"
    },
    {
        "Name": "Swargadwari",
        "Nepali": "स्वर्गद्वारी",
        "District": "Pyuthan",
        "Province": "Province No. 5",
        "Population_2011": "30,940",
        "Area_km2": "224.7"
    },
    {
        "Name": "Patan",
        "Nepali": "पाटन",
        "District": "Baitadi",
        "Province": "Sudurpashchim",
        "Population_2011": "30,435",
        "Area_km2": "219.26"
    },
    {
        "Name": "Lekbeshi",
        "Nepali": "लेकबेशी",
        "District": "Surkhet",
        "Province": "Karnali",
        "Population_2011": "30,295",
        "Area_km2": "180.92"
    },
    {
        "Name": "Ramgopalpur",
        "Nepali": "रामगोपालपुर",
        "District": "Mahottari",
        "Province": "Province No. 2",
        "Population_2011": "29,612",
        "Area_km2": "39.58"
    },
    {
        "Name": "Halesi Tuwachung",
        "Nepali": "हलेसी तुवाचुङ",
        "District": "Khotang",
        "Province": "Province No. 1",
        "Population_2011": "29,532",
        "Area_km2": "280.17"
    },
    {
        "Name": "Namobuddha",
        "Nepali": "नमोबुद्ध",
        "District": "Kavrepalanchok",
        "Province": "Province No. 3",
        "Population_2011": "29,519",
        "Area_km2": "102"
    },
    {
        "Name": "Aathabis",
        "Nepali": "आठबीस",
        "District": "Dailekh",
        "Province": "Karnali",
        "Population_2011": "29,227",
        "Area_km2": "168"
    },
    {
        "Name": "Ramechhap",
        "Nepali": "रामेछाप",
        "District": "Ramechhap",
        "Province": "Province No. 3",
        "Population_2011": "28,612",
        "Area_km2": "202.45"
    },
    {
        "Name": "Siddhicharan",
        "Nepali": "सिद्दिचरण",
        "District": "Okhaldhunga",
        "Province": "Province No. 1",
        "Population_2011": "28,374",
        "Area_km2": "167.88"
    },
    {
        "Name": "Panchadewal Binayak",
        "Nepali": "पञ्चदेवल विनायक",
        "District": "Achham",
        "Province": "Sudurpashchim",
        "Population_2011": "27,485",
        "Area_km2": "147.75"
    },
    {
        "Name": "Chaurjahari",
        "Nepali": "चौरजहारी",
        "District": "Rukum West",
        "Province": "Karnali",
        "Population_2011": "27,438",
        "Area_km2": "107.38"
    },
    {
        "Name": "Chainpur",
        "Nepali": "चैनपुर",
        "District": "Sankhuwasabha",
        "Province": "Province No. 1",
        "Population_2011": "27,308",
        "Area_km2": "223.69"
    },
    {
        "Name": "Bhojpur",
        "Nepali": "भोजपुर",
        "District": "Bhojpur",
        "Province": "Province No. 1",
        "Population_2011": "27,204",
        "Area_km2": "159.51"
    },
    {
        "Name": "Narayan",
        "Nepali": "नारायण",
        "District": "Dailekh",
        "Province": "Karnali",
        "Population_2011": "27,037",
        "Area_km2": "110.63"
    },
    {
        "Name": "Sundarbazar",
        "Nepali": "सुन्दरबजार",
        "District": "Lamjung",
        "Province": "Gandaki",
        "Population_2011": "26,861",
        "Area_km2": "72.05"
    },
    {
        "Name": "Barhabise",
        "Nepali": "बाह्रविसे",
        "District": "Sindhupalchowk",
        "Province": "Province No. 3",
        "Population_2011": "26,700",
        "Area_km2": "96.73"
    },
    {
        "Name": "Maulapur",
        "Nepali": "मौलापुर",
        "District": "Rautahat",
        "Province": "Province No. 2",
        "Population_2011": "26,431",
        "Area_km2": "34.75"
    },
    {
        "Name": "Taplejung(Phungling)",
        "Nepali": "फुङलिङ",
        "District": "Taplejung",
        "Province": "Province No. 1",
        "Population_2011": "26,406",
        "Area_km2": "125.57"
    },
    {
        "Name": "Dhorpatan",
        "Nepali": "ढोरपाटन",
        "District": "Baglung",
        "Province": "Gandaki",
        "Population_2011": "26,215",
        "Area_km2": "222.85"
    },
    {
        "Name": "Chamunda Bindrasaini",
        "Nepali": "चामुण्डा विन्द्रासैनी",
        "District": "Dailekh",
        "Province": "Karnali",
        "Population_2011": "26,149",
        "Area_km2": "90.6"
    },
    {
        "Name": "Chapakot",
        "Nepali": "चापाकोट",
        "District": "Syangja",
        "Province": "Gandaki",
        "Population_2011": "26,042",
        "Area_km2": "120.59"
    },
    {
        "Name": "Nalgad",
        "Nepali": "नलगाड",
        "District": "Jajarkot",
        "Province": "Karnali",
        "Population_2011": "25,597",
        "Area_km2": "387.44"
    },
    {
        "Name": "Bhirkot",
        "Nepali": "भिरकोट",
        "District": "Syangja",
        "Province": "Gandaki",
        "Population_2011": "25,583",
        "Area_km2": "78.23"
    },
    {
        "Name": "Shankharapur",
        "Nepali": "शङ्खरापुर",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "25,338",
        "Area_km2": "60.21"
    },
    {
        "Name": "Mahalaxmi",
        "Nepali": "महालक्ष्मी",
        "District": "Dhankuta",
        "Province": "Province No. 1",
        "Population_2011": "24,800",
        "Area_km2": "129.39"
    },
    {
        "Name": "Phalewas",
        "Nepali": "फलेवास",
        "District": "Parbat",
        "Province": "Gandaki",
        "Population_2011": "24,687",
        "Area_km2": "85.7"
    },
    {
        "Name": "Dakshinkali",
        "Nepali": "दक्षिणकाली",
        "District": "Kathmandu",
        "Province": "Province No. 3",
        "Population_2011": "24,296",
        "Area_km2": "42.68"
    },
    {
        "Name": "Kamalbazar",
        "Nepali": "कमलबजार",
        "District": "Achham",
        "Province": "Sudurpashchim",
        "Population_2011": "23,738",
        "Area_km2": "120.78"
    },
    {
        "Name": "Madhya Nepal",
        "Nepali": "मध्यनेपाल",
        "District": "Lamjung",
        "Province": "Gandaki",
        "Population_2011": "23,385",
        "Area_km2": "113.86"
    },
    {
        "Name": "Melauli",
        "Nepali": "मेलौली",
        "District": "Baitadi",
        "Province": "Sudurpashchim",
        "Population_2011": "22,545",
        "Area_km2": "119.43"
    },
    {
        "Name": "Jaya Prithvi",
        "Nepali": "जयपृथ्वी",
        "District": "Bajhang",
        "Province": "Sudurpashchim",
        "Population_2011": "22,191",
        "Area_km2": "166.79"
    },
    {
        "Name": "Pakhribas",
        "Nepali": "पाख्रिवास",
        "District": "Dhankuta",
        "Province": "Province No. 1",
        "Population_2011": "22,078",
        "Area_km2": "144.29"
    },
    {
        "Name": "Shailyashikhar",
        "Nepali": "शैल्यशिखर",
        "District": "Darchula",
        "Province": "Sudurpashchim",
        "Population_2011": "22,060",
        "Area_km2": "117.81"
    },
    {
        "Name": "Budhiganga",
        "Nepali": "बुढीगंगा",
        "District": "Bajura",
        "Province": "Sudurpashchim",
        "Population_2011": "21,677",
        "Area_km2": "59.2"
    },
    {
        "Name": "Amargadhi",
        "Nepali": "अमरगढी",
        "District": "Dadeldhura",
        "Province": "Sudurpashchim",
        "Population_2011": "21,245",
        "Area_km2": "139.33"
    },
    {
        "Name": "Mahakali",
        "Nepali": "महाकाली",
        "District": "Darchula",
        "Province": "Sudurpashchim",
        "Population_2011": "21,231",
        "Area_km2": "135.11"
    },
    {
        "Name": "Saptakoshi",
        "Nepali": "सप्तकोशी",
        "District": "Saptari",
        "Province": "Province No. 2",
        "Population_2011": "21,131",
        "Area_km2": "60.25"
    },
    {
        "Name": "Solu Dudhkunda",
        "Nepali": "सोलुदुधकुण्ड",
        "District": "Solukhumbu",
        "Province": "Province No. 1",
        "Population_2011": "20,399",
        "Area_km2": "528.09"
    },
    {
        "Name": "Khandachakra",
        "Nepali": "खाँडाचक्र",
        "District": "Kalikot",
        "Province": "Karnali",
        "Population_2011": "20,288",
        "Area_km2": "133.29"
    },
    {
        "Name": "Chhayanath Rara",
        "Nepali": "छायाँनाथ रारा",
        "District": "Mugu",
        "Province": "Karnali",
        "Population_2011": "20,078",
        "Area_km2": "480.67"
    },
    {
        "Name": "Myanglung",
        "Nepali": "म्याङलुङ",
        "District": "Terathum",
        "Province": "Province No. 1",
        "Population_2011": "19,659",
        "Area_km2": "100.21"
    },
    {
        "Name": "Chandannath",
        "Nepali": "चन्दननाथ",
        "District": "Jumla",
        "Province": "Karnali",
        "Population_2011": "19,047",
        "Area_km2": "102.03"
    },
    {
        "Name": "Budhinanda",
        "Nepali": "बुढीनन्दा",
        "District": "Bajura",
        "Province": "Sudurpashchim",
        "Population_2011": "18,776",
        "Area_km2": "232.48"
    },
    {
        "Name": "Rainas",
        "Nepali": "रार्इनास",
        "District": "Lamjung",
        "Province": "Gandaki",
        "Population_2011": "18,527",
        "Area_km2": "71.97"
    },
    {
        "Name": "Tribeni",
        "Nepali": "त्रिवेणी",
        "District": "Bajura",
        "Province": "Sudurpashchim",
        "Population_2011": "18,363",
        "Area_km2": "170.32"
    },
    {
        "Name": "Dharmadevi",
        "Nepali": "धर्मदेवी",
        "District": "Sankhuwasabha",
        "Province": "Province No. 1",
        "Population_2011": "18,235",
        "Area_km2": "132.82"
    },
    {
        "Name": "Panchkhapan",
        "Nepali": "पाँचखपन",
        "District": "Sankhuwasabha",
        "Province": "Province No. 1",
        "Population_2011": "17,521",
        "Area_km2": "148.03"
    },
    {
        "Name": "Laligurans",
        "Nepali": "लालिगुराँस",
        "District": "Terathum",
        "Province": "Province No. 1",
        "Population_2011": "16,970",
        "Area_km2": "90.27"
    },
    {
        "Name": "Badimalika",
        "Nepali": "बडीमालिका",
        "District": "Bajura",
        "Province": "Sudurpashchim",
        "Population_2011": "16,818",
        "Area_km2": "276"
    },
    {
        "Name": "Raskot",
        "Nepali": "रास्कोट",
        "District": "Kalikot",
        "Province": "Karnali",
        "Population_2011": "16,272",
        "Area_km2": "59.73"
    },
    {
        "Name": "Tilagupha",
        "Nepali": "तिलागुफा",
        "District": "Kalikot",
        "Province": "Karnali",
        "Population_2011": "15,766",
        "Area_km2": "262.56"
    },
    {
        "Name": "Jiri",
        "Nepali": "जिरी",
        "District": "Dolakha",
        "Province": "Province No. 3",
        "Population_2011": "15,515",
        "Area_km2": "211.27"
    },
    {
        "Name": "Madi",
        "Nepali": "मादी",
        "District": "Sankhuwasabha",
        "Province": "Province No. 1",
        "Population_2011": "14,470",
        "Area_km2": "110.1"
    },
    {
        "Name": "Tripura Sundari",
        "Nepali": "त्रिपुरासुन्दरी",
        "District": "Dolpa",
        "Province": "Karnali",
        "Population_2011": "10,104",
        "Area_km2": "393.54"
    },
    {
        "Name": "Thuli Bheri",
        "Nepali": "ठूली भेरी",
        "District": "Dolpa",
        "Province": "Karnali",
        "Population_2011": "8,370",
        "Area_km2": "421.34"
    },
    {
        "Name": "Hatuwagadhi",
        "Nepali": "हतुवागढी",
        "District": "Bhojpur",
        "Population_2011": "20,404",
        "Area_km2": "142.61",
        "Density": "143",
        "Province": "Province No. 1"
    },
    {
        "Name": "Ramprasad Rai",
        "Nepali": "रामप्रसाद राई",
        "District": "Bhojpur",
        "Population_2011": "18,848",
        "Area_km2": "158.83",
        "Density": "119",
        "Province": "Province No. 1"
    },
    {
        "Name": "Aamchok",
        "Nepali": "आमचोक",
        "District": "Bhojpur",
        "Population_2011": "18,720",
        "Area_km2": "184.89",
        "Density": "101",
        "Province": "Province No. 1"
    },
    {
        "Name": "Tyamke Maiyunm",
        "Nepali": "ट्याम्केमैयुम",
        "District": "Bhojpur",
        "Population_2011": "17,911",
        "Area_km2": "173.41",
        "Density": "103",
        "Province": "Province No. 1"
    },
    {
        "Name": "Arun",
        "Nepali": "अरुण",
        "District": "Bhojpur",
        "Population_2011": "17,687",
        "Area_km2": "154.76",
        "Density": "114",
        "Province": "Province No. 1"
    },
    {
        "Name": "Pauwadungma",
        "Nepali": "पौवादुङमा",
        "District": "Bhojpur",
        "Population_2011": "15,394",
        "Area_km2": "118.86",
        "Density": "130",
        "Province": "Province No. 1"
    },
    {
        "Name": "Salpasilichho",
        "Nepali": "साल्पासिलिछो",
        "District": "Bhojpur",
        "Population_2011": "13,111",
        "Area_km2": "193.33",
        "Density": "68",
        "Province": "Province No. 1"
    },
    {
        "Name": "Sangurigadhi",
        "Nepali": "सागुरीगढी",
        "District": "Dhankuta",
        "Population_2011": "21,536",
        "Area_km2": "166.44",
        "Density": "129",
        "Province": "Province No. 1"
    },
    {
        "Name": "Chaubise",
        "Nepali": "चौविसे",
        "District": "Dhankuta",
        "Population_2011": "19,283",
        "Area_km2": "147.6",
        "Density": "131",
        "Province": "Province No. 1"
    },
    {
        "Name": "Khalsa Chhintang Sahidbhumi",
        "Nepali": "खाल्सा छिन्ताङ सहीदभूमि",
        "District": "Dhankuta",
        "Population_2011": "18,760",
        "Area_km2": "99.55",
        "Density": "188",
        "Province": "Province No. 1"
    },
    {
        "Name": "Chhathar Jorpati",
        "Nepali": "छथर जोरपाटी",
        "District": "Dhankuta",
        "Population_2011": "18,322",
        "Area_km2": "102.83",
        "Density": "178",
        "Province": "Province No. 1"
    },
    {
        "Name": "Phakphokthum",
        "Nepali": "फाकफोकथुम",
        "District": "Ilam",
        "Population_2011": "21,619",
        "Area_km2": "108.79",
        "Density": "199",
        "Province": "Province No. 1"
    },
    {
        "Name": "Mai Jogmai",
        "Nepali": "माईजोगमाई",
        "District": "Ilam",
        "Population_2011": "21,044",
        "Area_km2": "172.41",
        "Density": "122",
        "Province": "Province No. 1"
    },
    {
        "Name": "Chulachuli",
        "Nepali": "चुलाचुली",
        "District": "Ilam",
        "Population_2011": "20,820",
        "Area_km2": "108.46",
        "Density": "192",
        "Province": "Province No. 1"
    },
    {
        "Name": "Rong",
        "Nepali": "रोङ",
        "District": "Ilam",
        "Population_2011": "19,135",
        "Area_km2": "155.06",
        "Density": "123",
        "Province": "Province No. 1"
    },
    {
        "Name": "Mangsebung",
        "Nepali": "माङसेबुङ",
        "District": "Ilam",
        "Population_2011": "18,503",
        "Area_km2": "142.41",
        "Density": "130",
        "Province": "Province No. 1"
    },
    {
        "Name": "Sandakpur",
        "Nepali": "सन्दकपुर",
        "District": "Ilam",
        "Population_2011": "16,065",
        "Area_km2": "156.01",
        "Density": "103",
        "Province": "Province No. 1"
    },
    {
        "Name": "Kamal",
        "Nepali": "कमल",
        "District": "Jhapa",
        "Population_2011": "44,365",
        "Area_km2": "104.57",
        "Density": "424",
        "Province": "Province No. 1"
    },
    {
        "Name": "Buddha Shanti",
        "Nepali": "बुद्धशान्ति",
        "District": "Jhapa",
        "Population_2011": "41,615",
        "Area_km2": "79.78",
        "Density": "522",
        "Province": "Province No. 1"
    },
    {
        "Name": "Kachankawal",
        "Nepali": "कचनकवल",
        "District": "Jhapa",
        "Population_2011": "39,535",
        "Area_km2": "109.45",
        "Density": "361",
        "Province": "Province No. 1"
    },
    {
        "Name": "Jhapa",
        "Nepali": "झापा",
        "District": "Jhapa",
        "Population_2011": "34,601",
        "Area_km2": "94.12",
        "Density": "368",
        "Province": "Province No. 1"
    },
    {
        "Name": "Barhadashi",
        "Nepali": "बाह्रदशी",
        "District": "Jhapa",
        "Population_2011": "33,653",
        "Area_km2": "88.44",
        "Density": "381",
        "Province": "Province No. 1"
    },
    {
        "Name": "Gaurigunj",
        "Nepali": "गौरीगंज",
        "District": "Jhapa",
        "Population_2011": "33,038",
        "Area_km2": "101.35",
        "Density": "326",
        "Province": "Province No. 1"
    },
    {
        "Name": "Haldibari",
        "Nepali": "हल्दीवारी",
        "District": "Jhapa",
        "Population_2011": "29,223",
        "Area_km2": "117.34",
        "Density": "249",
        "Province": "Province No. 1"
    },
    {
        "Name": "Khotehang",
        "Nepali": "खोटेहाङ",
        "District": "Khotang",
        "Population_2011": "22,474",
        "Area_km2": "164.09",
        "Density": "137",
        "Province": "Province No. 1"
    },
    {
        "Name": "Diprung",
        "Nepali": "दिप्रुङ",
        "District": "Khotang",
        "Population_2011": "20,175",
        "Area_km2": "136.59",
        "Density": "148",
        "Province": "Province No. 1"
    },
    {
        "Name": "Aiselukharka",
        "Nepali": "ऐसेलुखर्क",
        "District": "Khotang",
        "Population_2011": "16,097",
        "Area_km2": "125.93",
        "Density": "128",
        "Province": "Province No. 1"
    },
    {
        "Name": "Jantedhunga",
        "Nepali": "जन्तेढुंगा",
        "District": "Khotang",
        "Population_2011": "15,444",
        "Area_km2": "128.68",
        "Density": "120",
        "Province": "Province No. 1"
    },
    {
        "Name": "Kepilasgadhi",
        "Nepali": "केपिलासगढी",
        "District": "Khotang",
        "Population_2011": "15,288",
        "Area_km2": "191.55",
        "Density": "80",
        "Province": "Province No. 1"
    },
    {
        "Name": "Barahpokhari",
        "Nepali": "बराहपोखरी",
        "District": "Khotang",
        "Population_2011": "14,349",
        "Area_km2": "141.57",
        "Density": "101",
        "Province": "Province No. 1"
    },
    {
        "Name": "Lamidanda",
        "Nepali": "लामीडाँडा",
        "District": "Khotang",
        "Population_2011": "13,369",
        "Area_km2": "97.44",
        "Density": "137",
        "Province": "Province No. 1"
    },
    {
        "Name": "Sakela",
        "Nepali": "साकेला",
        "District": "Khotang",
        "Population_2011": "11,594",
        "Area_km2": "79.99",
        "Density": "145",
        "Province": "Province No. 1"
    },
    {
        "Name": "Jahada",
        "Nepali": "जहदा",
        "District": "Morang",
        "Population_2011": "41,819",
        "Area_km2": "62.38",
        "Density": "670",
        "Province": "Province No. 1"
    },
    {
        "Name": "Budi Ganga",
        "Nepali": "बुढीगंगा",
        "District": "Morang",
        "Population_2011": "41,586",
        "Area_km2": "56.41",
        "Density": "737",
        "Province": "Province No. 1"
    },
    {
        "Name": "Katahari",
        "Nepali": "कटहरी",
        "District": "Morang",
        "Population_2011": "39,775",
        "Area_km2": "51.59",
        "Density": "771",
        "Province": "Province No. 1"
    },
    {
        "Name": "Dhanpalthan",
        "Nepali": "धनपालथान",
        "District": "Morang",
        "Population_2011": "39,394",
        "Area_km2": "70.26",
        "Density": "561",
        "Province": "Province No. 1"
    },
    {
        "Name": "Kanepokhari",
        "Nepali": "कानेपोखरी",
        "District": "Morang",
        "Population_2011": "38,033",
        "Area_km2": "82.83",
        "Density": "459",
        "Province": "Province No. 1"
    },
    {
        "Name": "Gramthan",
        "Nepali": "ग्रामथान",
        "District": "Morang",
        "Population_2011": "32,717",
        "Area_km2": "71.84",
        "Density": "455",
        "Province": "Province No. 1"
    },
    {
        "Name": "Kerabari",
        "Nepali": "केरावारी",
        "District": "Morang",
        "Population_2011": "30,431",
        "Area_km2": "219.83",
        "Density": "138",
        "Province": "Province No. 1"
    },
    {
        "Name": "Miklajung",
        "Nepali": "मिक्लाजुङ",
        "District": "Morang",
        "Population_2011": "28,708",
        "Area_km2": "158.98",
        "Density": "181",
        "Province": "Province No. 1"
    },
    {
        "Name": "Manebhanjyang",
        "Nepali": "मानेभञ्ज्याङ",
        "District": "Okhaldhunga",
        "Population_2011": "21,082",
        "Area_km2": "146.61",
        "Density": "144",
        "Province": "Province No. 1"
    },
    {
        "Name": "Champadevi",
        "Nepali": "चम्पादेवी",
        "District": "Okhaldhunga",
        "Population_2011": "18,613",
        "Area_km2": "126.91",
        "Density": "147",
        "Province": "Province No. 1"
    },
    {
        "Name": "Sunkoshi",
        "Nepali": "सुनकोशी",
        "District": "Okhaldhunga",
        "Population_2011": "18,550",
        "Area_km2": "143.75",
        "Density": "129",
        "Province": "Province No. 1"
    },
    {
        "Name": "Molung",
        "Nepali": "मोलुङ",
        "District": "Okhaldhunga",
        "Population_2011": "15,862",
        "Area_km2": "112",
        "Density": "142",
        "Province": "Province No. 1"
    },
    {
        "Name": "Chisankhugadhi",
        "Nepali": "चिसंखुगढी",
        "District": "Okhaldhunga",
        "Population_2011": "15,196",
        "Area_km2": "126.91",
        "Density": "120",
        "Province": "Province No. 1"
    },
    {
        "Name": "Khiji Demba",
        "Nepali": "खिजिदेम्बा",
        "District": "Okhaldhunga",
        "Population_2011": "15,106",
        "Area_km2": "179.77",
        "Density": "84",
        "Province": "Province No. 1"
    },
    {
        "Name": "Likhu",
        "Nepali": "लिखु",
        "District": "Okhaldhunga",
        "Population_2011": "14,049",
        "Area_km2": "88.03",
        "Density": "160",
        "Province": "Province No. 1"
    },
    {
        "Name": "Miklajung",
        "Nepali": "मिक्लाजुङ",
        "District": "Panchthar",
        "Population_2011": "24,715",
        "Area_km2": "166.61",
        "Density": "148",
        "Province": "Province No. 1"
    },
    {
        "Name": "Phalgunanda",
        "Nepali": "फाल्गुनन्द",
        "District": "Panchthar",
        "Population_2011": "24,060",
        "Area_km2": "107.53",
        "Density": "224",
        "Province": "Province No. 1"
    },
    {
        "Name": "Hilihang",
        "Nepali": "हिलिहाङ",
        "District": "Panchthar",
        "Population_2011": "22,913",
        "Area_km2": "123.01",
        "Density": "186",
        "Province": "Province No. 1"
    },
    {
        "Name": "Phalelung",
        "Nepali": "फालेलुङ",
        "District": "Panchthar",
        "Population_2011": "21,884",
        "Area_km2": "207.14",
        "Density": "106",
        "Province": "Province No. 1"
    },
    {
        "Name": "Yangwarak",
        "Nepali": "याङवरक",
        "District": "Panchthar",
        "Population_2011": "18,281",
        "Area_km2": "208.63",
        "Density": "88",
        "Province": "Province No. 1"
    },
    {
        "Name": "Kummayak",
        "Nepali": "कुम्मायक",
        "District": "Panchthar",
        "Population_2011": "16,118",
        "Area_km2": "129.3",
        "Density": "125",
        "Province": "Province No. 1"
    },
    {
        "Name": "Tumbewa",
        "Nepali": "तुम्बेवा",
        "District": "Panchthar",
        "Population_2011": "13,419",
        "Area_km2": "117.34",
        "Density": "114",
        "Province": "Province No. 1"
    },
    {
        "Name": "Makalu",
        "Nepali": "मकालु",
        "District": "Sankhuwasabha",
        "Population_2011": "13,204",
        "Area_km2": "519.45",
        "Density": "25",
        "Province": "Province No. 1"
    },
    {
        "Name": "Silichong",
        "Nepali": "सिलीचोङ",
        "District": "Sankhuwasabha",
        "Population_2011": "12,174",
        "Area_km2": "293.26",
        "Density": "42",
        "Province": "Province No. 1"
    },
    {
        "Name": "Sabhapokhari",
        "Nepali": "सभापोखरी",
        "District": "Sankhuwasabha",
        "Population_2011": "10,492",
        "Area_km2": "222.08",
        "Density": "47",
        "Province": "Province No. 1"
    },
    {
        "Name": "Chichila",
        "Nepali": "चिचिला",
        "District": "Sankhuwasabha",
        "Population_2011": "7,065",
        "Area_km2": "88.63",
        "Density": "80",
        "Province": "Province No. 1"
    },
    {
        "Name": "Bhot Khola",
        "Nepali": "भोटखोला",
        "District": "Sankhuwasabha",
        "Population_2011": "6,576",
        "Area_km2": "639.01",
        "Density": "10",
        "Province": "Province No. 1"
    },
    {
        "Name": "Dudhakaushika",
        "Nepali": "दुधकौशिका",
        "District": "Solukhumbu",
        "Population_2011": "19,672",
        "Area_km2": "144.6",
        "Density": "136",
        "Province": "Province No. 1"
    },
    {
        "Name": "Necha Salyan",
        "Nepali": "नेचासल्यान",
        "District": "Solukhumbu",
        "Population_2011": "16,129",
        "Area_km2": "94.49",
        "Density": "171",
        "Province": "Province No. 1"
    },
    {
        "Name": "Dudhkoshi",
        "Nepali": "दुधकोशी",
        "District": "Solukhumbu",
        "Population_2011": "13,414",
        "Area_km2": "167.67",
        "Density": "80",
        "Province": "Province No. 1"
    },
    {
        "Name": "Maha Kulung",
        "Nepali": "महाकुलुङ",
        "District": "Solukhumbu",
        "Population_2011": "11,452",
        "Area_km2": "648.05",
        "Density": "18",
        "Province": "Province No. 1"
    },
    {
        "Name": "Sotang",
        "Nepali": "सोताङ",
        "District": "Solukhumbu",
        "Population_2011": "9,530",
        "Area_km2": "103",
        "Density": "93",
        "Province": "Province No. 1"
    },
    {
        "Name": "Khumbu Pasang Lhamu",
        "Nepali": "खुम्बु पासाङल्हमु",
        "District": "Solukhumbu",
        "Population_2011": "8,989",
        "Area_km2": "1,539.11",
        "Density": "6",
        "Province": "Province No. 1"
    },
    {
        "Name": "Likhu Pike",
        "Nepali": "लिखुपिके",
        "District": "Solukhumbu",
        "Population_2011": "5,534",
        "Area_km2": "124.38",
        "Density": "44",
        "Province": "Province No. 1"
    },
    {
        "Name": "Koshi",
        "Nepali": "कोशी",
        "District": "Sunsari",
        "Population_2011": "43,626",
        "Area_km2": "75.98",
        "Density": "574",
        "Province": "Province No. 1"
    },
    {
        "Name": "Harinagara",
        "Nepali": "हरिनगरा",
        "District": "Sunsari",
        "Population_2011": "40,846",
        "Area_km2": "52.29",
        "Density": "781",
        "Province": "Province No. 1"
    },
    {
        "Name": "Bhokraha",
        "Nepali": "भोक्राहा",
        "District": "Sunsari",
        "Population_2011": "40,509",
        "Area_km2": "63.37",
        "Density": "639",
        "Province": "Province No. 1"
    },
    {
        "Name": "Dewangunj",
        "Nepali": "देवानगन्ज",
        "District": "Sunsari",
        "Population_2011": "35,073",
        "Area_km2": "53.56",
        "Density": "655",
        "Province": "Province No. 1"
    },
    {
        "Name": "Gadhi",
        "Nepali": "गढी",
        "District": "Sunsari",
        "Population_2011": "34,852",
        "Area_km2": "67.7",
        "Density": "515",
        "Province": "Province No. 1"
    },
    {
        "Name": "Barju",
        "Nepali": "बर्जु",
        "District": "Sunsari",
        "Population_2011": "31,178",
        "Area_km2": "69.43",
        "Density": "449",
        "Province": "Province No. 1"
    },
    {
        "Name": "Sirijangha",
        "Nepali": "सिरीजङ्घा",
        "District": "Taplejung",
        "Population_2011": "15,806",
        "Area_km2": "481.09",
        "Density": "33",
        "Province": "Province No. 1"
    },
    {
        "Name": "Aathrai Triveni",
        "Nepali": "आठराई त्रिवेणी",
        "District": "Taplejung",
        "Population_2011": "13,784",
        "Area_km2": "88.83",
        "Density": "155",
        "Province": "Province No. 1"
    },
    {
        "Name": "Pathibhara Yangwarak",
        "Nepali": "पाथीभरा याङवरक",
        "District": "Taplejung",
        "Population_2011": "13,591",
        "Area_km2": "93.76",
        "Density": "145",
        "Province": "Province No. 1"
    },
    {
        "Name": "Meringden",
        "Nepali": "मेरिङदेन",
        "District": "Taplejung",
        "Population_2011": "12,548",
        "Area_km2": "210.33",
        "Density": "60",
        "Province": "Province No. 1"
    },
    {
        "Name": "Sidingwa",
        "Nepali": "सिदिङ्वा",
        "District": "Taplejung",
        "Population_2011": "12,099",
        "Area_km2": "206",
        "Density": "59",
        "Province": "Province No. 1"
    },
    {
        "Name": "Phaktanglung",
        "Nepali": "फक्ताङलुङ",
        "District": "Taplejung",
        "Population_2011": "12,017",
        "Area_km2": "1,858.51",
        "Density": "6",
        "Province": "Province No. 1"
    },
    {
        "Name": "Maiwa Khola",
        "Nepali": "मैवाखोला",
        "District": "Taplejung",
        "Population_2011": "11,037",
        "Area_km2": "138",
        "Density": "80",
        "Province": "Province No. 1"
    },
    {
        "Name": "Mikwa Khola",
        "Nepali": "मिक्वाखोला",
        "District": "Taplejung",
        "Population_2011": "9,160",
        "Area_km2": "442.96",
        "Density": "21",
        "Province": "Province No. 1"
    },
    {
        "Name": "Aathrai",
        "Nepali": "आठराई",
        "District": "Terhathum",
        "Population_2011": "21,747",
        "Area_km2": "167.07",
        "Density": "130",
        "Province": "Province No. 1"
    },
    {
        "Name": "Phedap",
        "Nepali": "फेदाप",
        "District": "Terhathum",
        "Population_2011": "17,700",
        "Area_km2": "110.83",
        "Density": "160",
        "Province": "Province No. 1"
    },
    {
        "Name": "Chhathar",
        "Nepali": "छथर",
        "District": "Terhathum",
        "Population_2011": "16,715",
        "Area_km2": "133.93",
        "Density": "125",
        "Province": "Province No. 1"
    },
    {
        "Name": "Menchayayem",
        "Nepali": "मेन्छयायेम",
        "District": "Terhathum",
        "Population_2011": "8,078",
        "Area_km2": "70.09",
        "Density": "115",
        "Province": "Province No. 1"
    },
    {
        "Name": "Udayapurgadhi",
        "Nepali": "उदयपुरगढी",
        "District": "Udayapur",
        "Population_2011": "30,731",
        "Area_km2": "209.51",
        "Density": "147",
        "Province": "Province No. 1"
    },
    {
        "Name": "Rautamai",
        "Nepali": "रौतामाई",
        "District": "Udayapur",
        "Population_2011": "23,481",
        "Area_km2": "204.08",
        "Density": "115",
        "Province": "Province No. 1"
    },
    {
        "Name": "Tapli",
        "Nepali": "ताप्ली",
        "District": "Udayapur",
        "Population_2011": "14,562",
        "Area_km2": "119.11",
        "Density": "122",
        "Province": "Province No. 1"
    },
    {
        "Name": "Limchungbung",
        "Nepali": "सुनकोशी",
        "District": "Udayapur",
        "Population_2011": "11,992",
        "Area_km2": "106.8",
        "Density": "112",
        "Province": "Province No. 1"
    },
    {
        "Name": "Subarna",
        "Nepali": "सुवर्ण",
        "District": "Bara",
        "Population_2011": "29,602",
        "Area_km2": "36.84",
        "Density": "804",
        "Province": "Province No. 2"
    },
    {
        "Name": "Adarsha Kotwal",
        "Nepali": "आदर्श कोतवाल",
        "District": "Bara",
        "Population_2011": "27,552",
        "Area_km2": "36.25",
        "Density": "760",
        "Province": "Province No. 2"
    },
    {
        "Name": "Baragadhi",
        "Nepali": "बारागढी",
        "District": "Bara",
        "Population_2011": "27,191",
        "Area_km2": "39.29",
        "Density": "692",
        "Province": "Province No. 2"
    },
    {
        "Name": "Pheta",
        "Nepali": "फेटा",
        "District": "Bara",
        "Population_2011": "26,722",
        "Area_km2": "23.65",
        "Density": "1130",
        "Province": "Province No. 2"
    },
    {
        "Name": "Karaiyamai",
        "Nepali": "करैयामाई",
        "District": "Bara",
        "Population_2011": "26,400",
        "Area_km2": "47.69",
        "Density": "554",
        "Province": "Province No. 2"
    },
    {
        "Name": "Prasauni",
        "Nepali": "प्रसौनी",
        "District": "Bara",
        "Population_2011": "24,478",
        "Area_km2": "20.24",
        "Density": "1209",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bishrampur",
        "Nepali": "विश्रामपुर",
        "District": "Bara",
        "Population_2011": "23,785",
        "Area_km2": "19.81",
        "Density": "1201",
        "Province": "Province No. 2"
    },
    {
        "Name": "Devtal",
        "Nepali": "देवताल",
        "District": "Bara",
        "Population_2011": "23,223",
        "Area_km2": "23.31",
        "Density": "996",
        "Province": "Province No. 2"
    },
    {
        "Name": "Parawanipur",
        "Nepali": "परवानीपुर",
        "District": "Bara",
        "Population_2011": "22,787",
        "Area_km2": "15.48",
        "Density": "1472",
        "Province": "Province No. 2"
    },
    {
        "Name": "Laksminiya",
        "Nepali": "लक्ष्मीनिया",
        "District": "Dhanusha",
        "Population_2011": "28,251",
        "Area_km2": "30.66",
        "Density": "921",
        "Province": "Province No. 2"
    },
    {
        "Name": "Mukhiyapatti Musaharmiya",
        "Nepali": "मुखियापट्टी मुसहरमिया",
        "District": "Dhanusha",
        "Population_2011": "25,482",
        "Area_km2": "26.84",
        "Density": "949",
        "Province": "Province No. 2"
    },
    {
        "Name": "Janak Nandini",
        "Nepali": "जनकनन्दिनी",
        "District": "Dhanusha",
        "Population_2011": "25,085",
        "Area_km2": "27.62",
        "Density": "908",
        "Province": "Province No. 2"
    },
    {
        "Name": "Aaurahi",
        "Nepali": "औरही",
        "District": "Dhanusha",
        "Population_2011": "22,578",
        "Area_km2": "25.56",
        "Density": "883",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bateshwar",
        "Nepali": "बटेश्वर",
        "District": "Dhanusha",
        "Population_2011": "21,530",
        "Area_km2": "31.66",
        "Density": "680",
        "Province": "Province No. 2"
    },
    {
        "Name": "Dhanauji",
        "Nepali": "धनौजी",
        "District": "Dhanusha",
        "Population_2011": "21,395",
        "Area_km2": "22.13",
        "Density": "967",
        "Province": "Province No. 2"
    },
    {
        "Name": "Sonama",
        "Nepali": "सोनमा",
        "District": "Mahottari",
        "Population_2011": "38,747",
        "Area_km2": "57.77",
        "Density": "671",
        "Province": "Province No. 2"
    },
    {
        "Name": "Pipara",
        "Nepali": "पिपरा",
        "District": "Mahottari",
        "Population_2011": "35,524",
        "Area_km2": "39.98",
        "Density": "889",
        "Province": "Province No. 2"
    },
    {
        "Name": "Samsi",
        "Nepali": "साम्सी",
        "District": "Mahottari",
        "Population_2011": "33,791",
        "Area_km2": "21.57",
        "Density": "1567",
        "Province": "Province No. 2"
    },
    {
        "Name": "Ekdara",
        "Nepali": "एकडारा",
        "District": "Mahottari",
        "Population_2011": "29,315",
        "Area_km2": "24",
        "Density": "1221",
        "Province": "Province No. 2"
    },
    {
        "Name": "Mahottari",
        "Nepali": "महोत्तरी",
        "District": "Mahottari",
        "Population_2011": "27,430",
        "Area_km2": "28.08",
        "Density": "977",
        "Province": "Province No. 2"
    },
    {
        "Name": "Sakhuwa Prasauni",
        "Nepali": "सखुवा प्रसौनी",
        "District": "Parsa",
        "Population_2011": "32,448",
        "Area_km2": "74.27",
        "Density": "437",
        "Province": "Province No. 2"
    },
    {
        "Name": "Jagarnathpur",
        "Nepali": "जगरनाथपुर",
        "District": "Parsa",
        "Population_2011": "31,591",
        "Area_km2": "45.29",
        "Density": "698",
        "Province": "Province No. 2"
    },
    {
        "Name": "Chhipaharmai",
        "Nepali": "छिपहरमाई",
        "District": "Parsa",
        "Population_2011": "26,671",
        "Area_km2": "24.9",
        "Density": "1071",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bindabasini",
        "Nepali": "बिन्दबासिनी",
        "District": "Parsa",
        "Population_2011": "24,468",
        "Area_km2": "26.04",
        "Density": "940",
        "Province": "Province No. 2"
    },
    {
        "Name": "Paterwa Sugauli",
        "Nepali": "पटेर्वा सुगौली",
        "District": "Parsa",
        "Population_2011": "23,901",
        "Area_km2": "64.29",
        "Density": "372",
        "Province": "Province No. 2"
    },
    {
        "Name": "Jira Bhavani",
        "Nepali": "जिरा भवानी",
        "District": "Parsa",
        "Population_2011": "22,765",
        "Area_km2": "55.39",
        "Density": "411",
        "Province": "Province No. 2"
    },
    {
        "Name": "Kalikamai",
        "Nepali": "कालिकामाई",
        "District": "Parsa",
        "Population_2011": "21,131",
        "Area_km2": "24.66",
        "Density": "857",
        "Province": "Province No. 2"
    },
    {
        "Name": "Pakaha Mainpur",
        "Nepali": "पकाहा मैनपुर",
        "District": "Parsa",
        "Population_2011": "20,717",
        "Area_km2": "21.26",
        "Density": "974",
        "Province": "Province No. 2"
    },
    {
        "Name": "Thori",
        "Nepali": "ठोरी",
        "District": "Parsa",
        "Population_2011": "20,296",
        "Area_km2": "128.67",
        "Density": "158",
        "Province": "Province No. 2"
    },
    {
        "Name": "Dhobini",
        "Nepali": "धोबीनी",
        "District": "Parsa",
        "Population_2011": "19,911",
        "Area_km2": "24.41",
        "Density": "816",
        "Province": "Province No. 2"
    },
    {
        "Name": "Durga Bhagawati",
        "Nepali": "दुर्गा भगवती",
        "District": "Rautahat",
        "Population_2011": "22,599",
        "Area_km2": "19.8",
        "Density": "1141",
        "Province": "Province No. 2"
    },
    {
        "Name": "Yamunamai",
        "Nepali": "यमुनामाई",
        "District": "Rautahat",
        "Population_2011": "23,885",
        "Area_km2": "16.7",
        "Density": "1430",
        "Province": "Province No. 2"
    },
    {
        "Name": "Tilathi Koiladi",
        "Nepali": "तिलाठी कोईलाडी",
        "District": "Saptari",
        "Population_2011": "32,389",
        "Area_km2": "32.91",
        "Density": "984",
        "Province": "Province No. 2"
    },
    {
        "Name": "Belhi Chapena",
        "Nepali": "बेल्ही चपेना",
        "District": "Saptari",
        "Population_2011": "29,459",
        "Area_km2": "47.9",
        "Density": "615",
        "Province": "Province No. 2"
    },
    {
        "Name": "Chhinnamasta",
        "Nepali": "छिन्नमस्ता",
        "District": "Saptari",
        "Population_2011": "28,370",
        "Area_km2": "38.71",
        "Density": "733",
        "Province": "Province No. 2"
    },
    {
        "Name": "Mahadeva",
        "Nepali": "महादेवा",
        "District": "Saptari",
        "Population_2011": "28,542",
        "Area_km2": "34.97",
        "Density": "816",
        "Province": "Province No. 2"
    },
    {
        "Name": "Aagnisaira Krishnasawaran",
        "Nepali": "अग्निसाइर कृष्णासवरन",
        "District": "Saptari",
        "Population_2011": "27,129",
        "Area_km2": "103.08",
        "Density": "263",
        "Province": "Province No. 2"
    },
    {
        "Name": "Rupani",
        "Nepali": "रुपनी",
        "District": "Saptari",
        "Population_2011": "26,387",
        "Area_km2": "56.08",
        "Density": "471",
        "Province": "Province No. 2"
    },
    {
        "Name": "Balan-Bihul",
        "Nepali": "बलान-बिहुल",
        "District": "Saptari",
        "Population_2011": "26,068",
        "Area_km2": "33.04",
        "Density": "789",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bishnupur",
        "Nepali": "बिष्णुपुर",
        "District": "Saptari",
        "Population_2011": "23,035",
        "Area_km2": "37",
        "Density": "623",
        "Province": "Province No. 2"
    },
    {
        "Name": "Tirhut",
        "Nepali": "तिरहुत",
        "District": "Saptari",
        "Population_2011": "22,010",
        "Area_km2": "37.81",
        "Density": "582",
        "Province": "Province No. 2"
    },
    {
        "Name": "Chandranagar",
        "Nepali": "चन्द्रनगर",
        "District": "Sarlahi",
        "Population_2011": "33,328",
        "Area_km2": "47.5",
        "Density": "702",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bramhapuri",
        "Nepali": "ब्रह्मपुरी",
        "District": "Sarlahi",
        "Population_2011": "29,832",
        "Area_km2": "33.89",
        "Density": "880",
        "Province": "Province No. 2"
    },
    {
        "Name": "Ramnagar",
        "Nepali": "रामनगर",
        "District": "Sarlahi",
        "Population_2011": "28,727",
        "Area_km2": "26.44",
        "Density": "1086",
        "Province": "Province No. 2"
    },
    {
        "Name": "Chakraghatta",
        "Nepali": "चक्रघट्टा",
        "District": "Sarlahi",
        "Population_2011": "27,952",
        "Area_km2": "25.16",
        "Density": "1111",
        "Province": "Province No. 2"
    },
    {
        "Name": "Kaudena",
        "Nepali": "कौडेना",
        "District": "Sarlahi",
        "Population_2011": "26,085",
        "Area_km2": "25.33",
        "Density": "1030",
        "Province": "Province No. 2"
    },
    {
        "Name": "Dhankaul",
        "Nepali": "धनकौल",
        "District": "Sarlahi",
        "Population_2011": "24,788",
        "Area_km2": "45.94",
        "Density": "540",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bishnu",
        "Nepali": "विष्णु",
        "District": "Sarlahi",
        "Population_2011": "24,748",
        "Area_km2": "28.09",
        "Density": "881",
        "Province": "Province No. 2"
    },
    {
        "Name": "Basbariya",
        "Nepali": "बसबरिया",
        "District": "Sarlahi",
        "Population_2011": "23,568",
        "Area_km2": "29.42",
        "Density": "801",
        "Province": "Province No. 2"
    },
    {
        "Name": "Parsa",
        "Nepali": "पर्सा",
        "District": "Sarlahi",
        "Population_2011": "21,650",
        "Area_km2": "23.12",
        "Density": "936",
        "Province": "Province No. 2"
    },
    {
        "Name": "Laksmipur Patari",
        "Nepali": "लक्ष्मीपुर पतारी",
        "District": "Siraha",
        "Population_2011": "26,913",
        "Area_km2": "42.33",
        "Density": "636",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bariyarpatti",
        "Nepali": "बरियारपट्टी",
        "District": "Siraha",
        "Population_2011": "25,256",
        "Area_km2": "37.72",
        "Density": "670",
        "Province": "Province No. 2"
    },
    {
        "Name": "Aaurahi",
        "Nepali": "औरही",
        "District": "Siraha",
        "Population_2011": "23,046",
        "Area_km2": "35.87",
        "Density": "642",
        "Province": "Province No. 2"
    },
    {
        "Name": "Arnama",
        "Nepali": "अर्नमा",
        "District": "Siraha",
        "Population_2011": "22,912",
        "Area_km2": "37.76",
        "Density": "607",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bhagawanpur",
        "Nepali": "भगवानपुर",
        "District": "Siraha",
        "Population_2011": "20,957",
        "Area_km2": "33.03",
        "Density": "634",
        "Province": "Province No. 2"
    },
    {
        "Name": "Naraha",
        "Nepali": "नरहा",
        "District": "Siraha",
        "Population_2011": "19,369",
        "Area_km2": "29.28",
        "Density": "662",
        "Province": "Province No. 2"
    },
    {
        "Name": "Nawarajpur",
        "Nepali": "नवराजपुर",
        "District": "Siraha",
        "Population_2011": "19,019",
        "Area_km2": "32.18",
        "Density": "591",
        "Province": "Province No. 2"
    },
    {
        "Name": "Sakhuwanankarkatti",
        "Nepali": "सखुवानान्कारकट्टी",
        "District": "Siraha",
        "Population_2011": "18,558",
        "Area_km2": "32.84",
        "Density": "565",
        "Province": "Province No. 2"
    },
    {
        "Name": "Bishnupur",
        "Nepali": "विष्णुपुर",
        "District": "Siraha",
        "Population_2011": "18,522",
        "Area_km2": "26.34",
        "Density": "703",
        "Province": "Province No. 2"
    },
    {
        "Name": "Ichchhakamana",
        "Nepali": "इच्छाकामना",
        "District": "Chitwan",
        "Population_2011": "25,012",
        "Area_km2": "166.73",
        "Density": "150",
        "Province": "Province No. 3"
    },
    {
        "Name": "Thakre",
        "Nepali": "थाक्रे",
        "District": "Dhading",
        "Population_2011": "32,914",
        "Area_km2": "96.41",
        "Density": "341",
        "Province": "Province No. 3"
    },
    {
        "Name": "Benighat Rorang",
        "Nepali": "बेनीघाट रोराङ्ग",
        "District": "Dhading",
        "Population_2011": "31,475",
        "Area_km2": "29.17",
        "Density": "1,079",
        "Province": "Province No. 3"
    },
    {
        "Name": "Galchhi",
        "Nepali": "गल्छी",
        "District": "Dhading",
        "Population_2011": "27,784",
        "Area_km2": "129.08",
        "Density": "215",
        "Province": "Province No. 3"
    },
    {
        "Name": "Gajuri",
        "Nepali": "गजुरी",
        "District": "Dhading",
        "Population_2011": "27,084",
        "Area_km2": "138.66",
        "Density": "195",
        "Province": "Province No. 3"
    },
    {
        "Name": "Jwalamukhi",
        "Nepali": "ज्वालामूखी",
        "District": "Dhading",
        "Population_2011": "23,966",
        "Area_km2": "114.04",
        "Density": "210",
        "Province": "Province No. 3"
    },
    {
        "Name": "Siddhalekh",
        "Nepali": "सिद्धलेक",
        "District": "Dhading",
        "Population_2011": "23,729",
        "Area_km2": "106.09",
        "Density": "224",
        "Province": "Province No. 3"
    },
    {
        "Name": "Tripura Sundari",
        "Nepali": "त्रिपुरासुन्दरी",
        "District": "Dhading",
        "Population_2011": "22,960",
        "Area_km2": "271.23",
        "Density": "85",
        "Province": "Province No. 3"
    },
    {
        "Name": "Gangajamuna",
        "Nepali": "गङ्गाजमुना",
        "District": "Dhading",
        "Population_2011": "21,784",
        "Area_km2": "152.72",
        "Density": "143",
        "Province": "Province No. 3"
    },
    {
        "Name": "Netrawati Dabjong",
        "Nepali": "नेत्रावती डबजोङ",
        "District": "Dhading",
        "Population_2011": "12,870",
        "Area_km2": "181.78",
        "Density": "71",
        "Province": "Province No. 3"
    },
    {
        "Name": "Khaniyabas",
        "Nepali": "खनियाबास",
        "District": "Dhading",
        "Population_2011": "12,749",
        "Area_km2": "120.8",
        "Density": "106",
        "Province": "Province No. 3"
    },
    {
        "Name": "Ruby Valley",
        "Nepali": "रुवी भ्याली",
        "District": "Dhading",
        "Population_2011": "9,565",
        "Area_km2": "401.85",
        "Density": "24",
        "Province": "Province No. 3"
    },
    {
        "Name": "Kalinchok",
        "Nepali": "कालिन्चोक",
        "District": "Dolakha",
        "Population_2011": "22,954",
        "Area_km2": "132.49",
        "Density": "173",
        "Province": "Province No. 3"
    },
    {
        "Name": "Melung",
        "Nepali": "मेलुङ",
        "District": "Dolakha",
        "Population_2011": "20,210",
        "Area_km2": "86.54",
        "Density": "234",
        "Province": "Province No. 3"
    },
    {
        "Name": "Shailung",
        "Nepali": "शैलुङ",
        "District": "Dolakha",
        "Population_2011": "20,098",
        "Area_km2": "128.67",
        "Density": "156",
        "Province": "Province No. 3"
    },
    {
        "Name": "Baiteshwar",
        "Nepali": "वैतेश्वर",
        "District": "Dolakha",
        "Population_2011": "19,876",
        "Area_km2": "80.41",
        "Density": "247",
        "Province": "Province No. 3"
    },
    {
        "Name": "Tamakoshi",
        "Nepali": "तामाकोशी",
        "District": "Dolakha",
        "Population_2011": "18,849",
        "Area_km2": "153.06",
        "Density": "123",
        "Province": "Province No. 3"
    },
    {
        "Name": "Bigu",
        "Nepali": "विगु",
        "District": "Dolakha",
        "Population_2011": "18,449",
        "Area_km2": "663.2",
        "Density": "28",
        "Province": "Province No. 3"
    },
    {
        "Name": "Gaurishankar",
        "Nepali": "गौरिशंकर",
        "District": "Dolakha",
        "Population_2011": "17,062",
        "Area_km2": "681.39",
        "Density": "25",
        "Province": "Province No. 3"
    },
    {
        "Name": "Roshi",
        "Nepali": "रोशी",
        "District": "Kavrepalanchok",
        "Population_2011": "28,746",
        "Area_km2": "176",
        "Density": "163",
        "Province": "Province No. 3"
    },
    {
        "Name": "Temal",
        "Nepali": "तेमाल",
        "District": "Kavrepalanchok",
        "Population_2011": "22,712",
        "Area_km2": "89",
        "Density": "255",
        "Province": "Province No. 3"
    },
    {
        "Name": "Chaunri Deurali",
        "Nepali": "चौंरी देउराली",
        "District": "Kavrepalanchok",
        "Population_2011": "20,829",
        "Area_km2": "98",
        "Density": "213",
        "Province": "Province No. 3"
    },
    {
        "Name": "Bhumlu",
        "Nepali": "भुम्लु",
        "District": "Kavrepalanchok",
        "Population_2011": "18,916",
        "Area_km2": "91",
        "Density": "208",
        "Province": "Province No. 3"
    },
    {
        "Name": "Mahabharat",
        "Nepali": "महाभारत",
        "District": "Kavrepalanchok",
        "Population_2011": "18,283",
        "Area_km2": "186",
        "Density": "98",
        "Province": "Province No. 3"
    },
    {
        "Name": "Bethanchok",
        "Nepali": "बेथानचोक",
        "District": "Kavrepalanchok",
        "Population_2011": "16,777",
        "Area_km2": "101",
        "Density": "166",
        "Province": "Province No. 3"
    },
    {
        "Name": "Khanikhola",
        "Nepali": "खानीखोला",
        "District": "Kavrepalanchok",
        "Population_2011": "14,398",
        "Area_km2": "132",
        "Density": "109",
        "Province": "Province No. 3"
    },
    {
        "Name": "Bagmati",
        "Nepali": "बाग्मती",
        "District": "Lalitpur",
        "Population_2011": "13,049",
        "Area_km2": "111.49",
        "Density": "117",
        "Province": "Province No. 3"
    },
    {
        "Name": "Konjyosom",
        "Nepali": "कोन्ज्योसोम",
        "District": "Lalitpur",
        "Population_2011": "9,709",
        "Area_km2": "44.16",
        "Density": "220",
        "Province": "Province No. 3"
    },
    {
        "Name": "Mahankal",
        "Nepali": "महाङ्काल",
        "District": "Lalitpur",
        "Population_2011": "9,453",
        "Area_km2": "82.44",
        "Density": "115",
        "Province": "Province No. 3"
    },
    {
        "Name": "Bakaiya",
        "Nepali": "बकैया",
        "District": "Makwanpur",
        "Population_2011": "39,620",
        "Area_km2": "393.75",
        "Density": "101",
        "Province": "Province No. 3"
    },
    {
        "Name": "Manhari",
        "Nepali": "मनहरी",
        "District": "Makwanpur",
        "Population_2011": "38,399",
        "Area_km2": "199.52",
        "Density": "192",
        "Province": "Province No. 3"
    },
    {
        "Name": "Bagmati",
        "Nepali": "बाग्मती",
        "District": "Makwanpur",
        "Population_2011": "30,495",
        "Area_km2": "311.79",
        "Density": "98",
        "Province": "Province No. 3"
    },
    {
        "Name": "Raksirang",
        "Nepali": "राक्सिराङ्ग",
        "District": "Makwanpur",
        "Population_2011": "26,192",
        "Area_km2": "226.7",
        "Density": "116",
        "Province": "Province No. 3"
    },
    {
        "Name": "Makawanpurgadhi",
        "Nepali": "मकवानपुरगढी",
        "District": "Makwanpur",
        "Population_2011": "25,322",
        "Area_km2": "148.72",
        "Density": "170",
        "Province": "Province No. 3"
    },
    {
        "Name": "Kailash",
        "Nepali": "कैलाश",
        "District": "Makwanpur",
        "Population_2011": "23,922",
        "Area_km2": "204.48",
        "Density": "117",
        "Province": "Province No. 3"
    },
    {
        "Name": "Bhimphedi",
        "Nepali": "भीमफेदी",
        "District": "Makwanpur",
        "Population_2011": "23,344",
        "Area_km2": "245.27",
        "Density": "95",
        "Province": "Province No. 3"
    },
    {
        "Name": "Indrasarowar",
        "Nepali": "ईन्द्र सरोवर",
        "District": "Makwanpur",
        "Population_2011": "17,585",
        "Area_km2": "97.34",
        "Density": "181",
        "Province": "Province No. 3"
    },
    {
        "Name": "Kakani",
        "Nepali": "ककनी",
        "District": "Nuwakot",
        "Population_2011": "27,073",
        "Area_km2": "87.97",
        "Density": "308",
        "Province": "Province No. 3"
    },
    {
        "Name": "Dupcheshwar",
        "Nepali": "दुप्चेश्वर",
        "District": "Nuwakot",
        "Population_2011": "22,106",
        "Area_km2": "131.62",
        "Density": "168",
        "Province": "Province No. 3"
    },
    {
        "Name": "Shivapuri",
        "Nepali": "शिवपुरी",
        "District": "Nuwakot",
        "Population_2011": "20,769",
        "Area_km2": "101.5",
        "Density": "205",
        "Province": "Province No. 3"
    },
    {
        "Name": "Tadi",
        "Nepali": "तादी",
        "District": "Nuwakot",
        "Population_2011": "17,932",
        "Area_km2": "69.8",
        "Density": "257",
        "Province": "Province No. 3"
    },
    {
        "Name": "Likhu",
        "Nepali": "लिखु",
        "District": "Nuwakot",
        "Population_2011": "16,852",
        "Area_km2": "47.88",
        "Density": "352",
        "Province": "Province No. 3"
    },
    {
        "Name": "Suryagadhi",
        "Nepali": "सुर्यगढी",
        "District": "Nuwakot",
        "Population_2011": "16,800",
        "Area_km2": "49.09",
        "Density": "342",
        "Province": "Province No. 3"
    },
    {
        "Name": "Panchakanya",
        "Nepali": "पञ्चकन्या",
        "District": "Nuwakot",
        "Population_2011": "15,945",
        "Area_km2": "53.47",
        "Density": "298",
        "Province": "Province No. 3"
    },
    {
        "Name": "Tarkeshwar",
        "Nepali": "तारकेश्वर",
        "District": "Nuwakot",
        "Population_2011": "15,719",
        "Area_km2": "72.62",
        "Density": "216",
        "Province": "Province No. 3"
    },
    {
        "Name": "Kispang",
        "Nepali": "किस्पाङ",
        "District": "Nuwakot",
        "Population_2011": "14,861",
        "Area_km2": "82.57",
        "Density": "180",
        "Province": "Province No. 3"
    },
    {
        "Name": "Myagang",
        "Nepali": "म्यागङ",
        "District": "Nuwakot",
        "Population_2011": "13,479",
        "Area_km2": "97.83",
        "Density": "138",
        "Province": "Province No. 3"
    },
    {
        "Name": "Khandadevi",
        "Nepali": "खाँडादेवी",
        "District": "Ramechhap",
        "Population_2011": "25,761",
        "Area_km2": "150.7",
        "Density": "171",
        "Province": "Province No. 3"
    },
    {
        "Name": "Likhu Tamakoshi",
        "Nepali": "लिखु तामाकोशी",
        "District": "Ramechhap",
        "Population_2011": "23,109",
        "Area_km2": "124.51",
        "Density": "186",
        "Province": "Province No. 3"
    },
    {
        "Name": "Doramba",
        "Nepali": "दोरम्बा",
        "District": "Ramechhap",
        "Population_2011": "22,738",
        "Area_km2": "140.88",
        "Density": "161",
        "Province": "Province No. 3"
    },
    {
        "Name": "Gokulganga",
        "Nepali": "गोकुलगङ्गा",
        "District": "Ramechhap",
        "Population_2011": "20,058",
        "Area_km2": "198.4",
        "Density": "101",
        "Province": "Province No. 3"
    },
    {
        "Name": "Sunapati",
        "Nepali": "सुनापती",
        "District": "Ramechhap",
        "Population_2011": "18,141",
        "Area_km2": "86.98",
        "Density": "209",
        "Province": "Province No. 3"
    },
    {
        "Name": "Umakunda",
        "Nepali": "उमाकुण्ड",
        "District": "Ramechhap",
        "Population_2011": "17,601",
        "Area_km2": "451.99",
        "Density": "39",
        "Province": "Province No. 3"
    },
    {
        "Name": "Naukunda",
        "Nepali": "नौकुण्ड",
        "District": "Rasuwa",
        "Population_2011": "11,824",
        "Area_km2": "126.99",
        "Density": "93",
        "Province": "Province No. 3"
    },
    {
        "Name": "Kalika",
        "Nepali": "कालिका",
        "District": "Rasuwa",
        "Population_2011": "9,421",
        "Area_km2": "192.54",
        "Density": "49",
        "Province": "Province No. 3"
    },
    {
        "Name": "Uttargaya",
        "Nepali": "उत्तरगया",
        "District": "Rasuwa",
        "Population_2011": "8,255",
        "Area_km2": "104.51",
        "Density": "79",
        "Province": "Province No. 3"
    },
    {
        "Name": "Gosaikund",
        "Nepali": "गोसाईकुण्ड",
        "District": "Rasuwa",
        "Population_2011": "7,143",
        "Area_km2": "978.77",
        "Density": "7",
        "Province": "Province No. 3"
    },
    {
        "Name": "Aamachodingmo",
        "Nepali": "आमाछोदिङमो",
        "District": "Rasuwa",
        "Population_2011": "5,490",
        "Area_km2": "682.23",
        "Density": "8",
        "Province": "Province No. 3"
    },
    {
        "Name": "Tinpatan",
        "Nepali": "तिनपाटन",
        "District": "Sindhuli",
        "Population_2011": "38,395",
        "Area_km2": "280.26",
        "Density": "137",
        "Province": "Province No. 3"
    },
    {
        "Name": "Marin",
        "Nepali": "मरिण",
        "District": "Sindhuli",
        "Population_2011": "27,822",
        "Area_km2": "324.55",
        "Density": "86",
        "Province": "Province No. 3"
    },
    {
        "Name": "Hariharpurgadhi",
        "Nepali": "हरिहरपुरगढी",
        "District": "Sindhuli",
        "Population_2011": "27,727",
        "Area_km2": "343.9",
        "Density": "81",
        "Province": "Province No. 3"
    },
    {
        "Name": "Sunkoshi",
        "Nepali": "सुनकोशी",
        "District": "Sindhuli",
        "Population_2011": "21,473",
        "Area_km2": "154.68",
        "Density": "139",
        "Province": "Province No. 3"
    },
    {
        "Name": "Golanjor",
        "Nepali": "गोलन्जोर",
        "District": "Sindhuli",
        "Population_2011": "19,329",
        "Area_km2": "184.13",
        "Density": "105",
        "Province": "Province No. 3"
    },
    {
        "Name": "Phikkal",
        "Nepali": "फिक्कल",
        "District": "Sindhuli",
        "Population_2011": "16,968",
        "Area_km2": "186.06",
        "Density": "91",
        "Province": "Province No. 3"
    },
    {
        "Name": "Ghyanglekh",
        "Nepali": "घ्याङलेख",
        "District": "Sindhuli",
        "Population_2011": "13,661",
        "Area_km2": "166.77",
        "Density": "82",
        "Province": "Province No. 3"
    },
    {
        "Name": "Indrawati",
        "Nepali": "र्इन्द्रावती",
        "District": "Sindhupalchok",
        "Population_2011": "28,517",
        "Area_km2": "105.09",
        "Density": "271",
        "Province": "Province No. 3"
    },
    {
        "Name": "Panchpokhari Thangpal",
        "Nepali": "पाँचपोखरी थाङपाल",
        "District": "Sindhupalchok",
        "Population_2011": "20,860",
        "Area_km2": "187.29",
        "Density": "111",
        "Province": "Province No. 3"
    },
    {
        "Name": "Jugal",
        "Nepali": "जुगल",
        "District": "Sindhupalchok",
        "Population_2011": "19,231",
        "Area_km2": "273.62",
        "Density": "70",
        "Province": "Province No. 3"
    },
    {
        "Name": "Balephi",
        "Nepali": "बलेफी",
        "District": "Sindhupalchok",
        "Population_2011": "18,909",
        "Area_km2": "61.6",
        "Density": "307",
        "Province": "Province No. 3"
    },
    {
        "Name": "Helambu",
        "Nepali": "हेलम्बु",
        "District": "Sindhupalchok",
        "Population_2011": "17,671",
        "Area_km2": "287.26",
        "Density": "62",
        "Province": "Province No. 3"
    },
    {
        "Name": "Bhotekoshi",
        "Nepali": "भोटेकोशी",
        "District": "Sindhupalchok",
        "Population_2011": "17,156",
        "Area_km2": "278.31",
        "Density": "62",
        "Province": "Province No. 3"
    },
    {
        "Name": "Sunkoshi",
        "Nepali": "सुनकोशी",
        "District": "Sindhupalchok",
        "Population_2011": "16,713",
        "Area_km2": "72.84",
        "Density": "229",
        "Province": "Province No. 3"
    },
    {
        "Name": "Lisankhu Pakhar",
        "Nepali": "लिसंखु पाखर",
        "District": "Sindhupalchok",
        "Population_2011": "15,155",
        "Area_km2": "98.61",
        "Density": "154",
        "Province": "Province No. 3"
    },
    {
        "Name": "Tripura Sundari",
        "Nepali": "त्रिपुरासुन्दरी",
        "District": "Sindhupalchok",
        "Population_2011": "15,062",
        "Area_km2": "94.28",
        "Density": "160",
        "Province": "Province No. 3"
    },
    {
        "Name": "Badigad",
        "Nepali": "वडिगाड",
        "District": "Baglung",
        "Population_2011": "30,906",
        "Area_km2": "178.68",
        "Density": "173",
        "Province": "Gandaki"
    },
    {
        "Name": "Kathekhola",
        "Nepali": "काठेखोला",
        "District": "Baglung",
        "Population_2011": "22,865",
        "Area_km2": "82.88",
        "Density": "276",
        "Province": "Gandaki"
    },
    {
        "Name": "Nisikhola",
        "Nepali": "निसीखोला",
        "District": "Baglung",
        "Population_2011": "20,611",
        "Area_km2": "244.37",
        "Density": "84",
        "Province": "Gandaki"
    },
    {
        "Name": "Bareng",
        "Nepali": "वरेङ",
        "District": "Baglung",
        "Population_2011": "14,492",
        "Area_km2": "75.28",
        "Density": "193",
        "Province": "Gandaki"
    },
    {
        "Name": "Tarakhola",
        "Nepali": "ताराखोला",
        "District": "Baglung",
        "Population_2011": "12,009",
        "Area_km2": "129.53",
        "Density": "93",
        "Province": "Gandaki"
    },
    {
        "Name": "Tamankhola",
        "Nepali": "तमानखोला",
        "District": "Baglung",
        "Population_2011": "10,659",
        "Area_km2": "178.02",
        "Density": "60",
        "Province": "Gandaki"
    },
    {
        "Name": "Shahid Lakhan",
        "Nepali": "शहिद लखन",
        "District": "Gorkha",
        "Population_2011": "27,555",
        "Area_km2": "148.97",
        "Density": "185",
        "Province": "Gandaki"
    },
    {
        "Name": "Barpak Sulikot",
        "Nepali": "बारपाक सुलीकोट",
        "District": "Gorkha",
        "Population_2011": "25,389",
        "Area_km2": "200.63",
        "Density": "127",
        "Province": "Gandaki"
    },
    {
        "Name": "Aarughat",
        "Nepali": "आरूघाट",
        "District": "Gorkha",
        "Population_2011": "23,887",
        "Area_km2": "160.79",
        "Density": "149",
        "Province": "Gandaki"
    },
    {
        "Name": "Siranchok",
        "Nepali": "सिरानचोक",
        "District": "Gorkha",
        "Population_2011": "23,628",
        "Area_km2": "121.66",
        "Density": "194",
        "Province": "Gandaki"
    },
    {
        "Name": "Gandaki",
        "Nepali": "गण्डकी",
        "District": "Gorkha",
        "Population_2011": "23,253",
        "Area_km2": "123.86",
        "Density": "188",
        "Province": "Gandaki"
    },
    {
        "Name": "Bhimsen Thapa",
        "Nepali": "भिमसेनथापा",
        "District": "Gorkha",
        "Population_2011": "22,033",
        "Area_km2": "101.25",
        "Density": "218",
        "Province": "Gandaki"
    },
    {
        "Name": "Ajirkot",
        "Nepali": "अजिरकोट",
        "District": "Gorkha",
        "Population_2011": "14,802",
        "Area_km2": "198.05",
        "Density": "75",
        "Province": "Gandaki"
    },
    {
        "Name": "Dharche",
        "Nepali": "धार्चे",
        "District": "Gorkha",
        "Population_2011": "13,229",
        "Area_km2": "651.52",
        "Density": "20",
        "Province": "Gandaki"
    },
    {
        "Name": "Chum Nubri",
        "Nepali": "चुम नुव्री",
        "District": "Gorkha",
        "Population_2011": "6,923",
        "Area_km2": "1,648.65",
        "Density": "4",
        "Province": "Gandaki"
    },
    {
        "Name": "Annapurna",
        "Nepali": "अन्नपुर्ण",
        "District": "Kaski",
        "Population_2011": "23,417",
        "Area_km2": "33.33",
        "Density": "703",
        "Province": "Gandaki"
    },
    {
        "Name": "Machhapuchhre",
        "Nepali": "माछापुछ्रे",
        "District": "Kaski",
        "Population_2011": "21,868",
        "Area_km2": "544.58",
        "Density": "40",
        "Province": "Gandaki"
    },
    {
        "Name": "Madi",
        "Nepali": "मादी",
        "District": "Kaski",
        "Population_2011": "18,153",
        "Area_km2": "563",
        "Density": "32",
        "Province": "Gandaki"
    },
    {
        "Name": "Rupa",
        "Nepali": "रूपा",
        "District": "Kaski",
        "Population_2011": "14,519",
        "Area_km2": "94.81",
        "Density": "153",
        "Province": "Gandaki"
    },
    {
        "Name": "Marsyangdi",
        "Nepali": "मर्स्याङदी",
        "District": "Lamjung",
        "Population_2011": "18,759",
        "Area_km2": "597.25",
        "Density": "31",
        "Province": "Gandaki"
    },
    {
        "Name": "Dordi",
        "Nepali": "दोर्दी",
        "District": "Lamjung",
        "Population_2011": "18,392",
        "Area_km2": "350.93",
        "Density": "52",
        "Province": "Gandaki"
    },
    {
        "Name": "Dudhpokhari",
        "Nepali": "दूधपोखरी",
        "District": "Lamjung",
        "Population_2011": "10,975",
        "Area_km2": "153.33",
        "Density": "72",
        "Province": "Gandaki"
    },
    {
        "Name": "Kwaholasothar",
        "Nepali": "क्व्होलासोथार",
        "District": "Lamjung",
        "Population_2011": "10,032",
        "Area_km2": "175.37",
        "Density": "57",
        "Province": "Gandaki"
    },
    {
        "Name": "Manang Disyang",
        "Nepali": "मनाङ डिस्याङ",
        "District": "Manang",
        "Population_2011": "2,222",
        "Area_km2": "694.63",
        "Density": "3",
        "Province": "Gandaki"
    },
    {
        "Name": "Nason",
        "Nepali": "नासोँ",
        "District": "Manang",
        "Population_2011": "1,938",
        "Area_km2": "709.58",
        "Density": "3",
        "Province": "Gandaki"
    },
    {
        "Name": "Chame",
        "Nepali": "चामे",
        "District": "Manang",
        "Population_2011": "1,129",
        "Area_km2": "78.86",
        "Density": "14",
        "Province": "Gandaki"
    },
    {
        "Name": "Narpa Bhumi",
        "Nepali": "नार्पा भूमी",
        "District": "Manang",
        "Population_2011": "538",
        "Area_km2": "837.54",
        "Density": "1",
        "Province": "Gandaki"
    },
    {
        "Name": "Gharapjhong",
        "Nepali": "घरपझोङ",
        "District": "Mustang",
        "Population_2011": "3,029",
        "Area_km2": "316",
        "Density": "10",
        "Province": "Gandaki"
    },
    {
        "Name": "Thasang",
        "Nepali": "थासाङ",
        "District": "Mustang",
        "Population_2011": "2,912",
        "Area_km2": "289",
        "Density": "10",
        "Province": "Gandaki"
    },
    {
        "Name": "Baragung Muktichhetra",
        "Nepali": "बारागुङ मुक्तिक्षेत्र",
        "District": "Mustang",
        "Population_2011": "2,330",
        "Area_km2": "886",
        "Density": "3",
        "Province": "Gandaki"
    },
    {
        "Name": "Lomanthang",
        "Nepali": "लोमन्थाङ",
        "District": "Mustang",
        "Population_2011": "1,899",
        "Area_km2": "727",
        "Density": "3",
        "Province": "Gandaki"
    },
    {
        "Name": "Lo-Ghekar Damodarkunda",
        "Nepali": "लो-घेकर दामोदरकुण्ड",
        "District": "Mustang",
        "Population_2011": "1,423",
        "Area_km2": "1,344",
        "Density": "1",
        "Province": "Gandaki"
    },
    {
        "Name": "Malika",
        "Nepali": "मालिका",
        "District": "Myagdi",
        "Population_2011": "19,458",
        "Area_km2": "147",
        "Density": "132",
        "Province": "Gandaki"
    },
    {
        "Name": "Mangala",
        "Nepali": "मंगला",
        "District": "Myagdi",
        "Population_2011": "16,286",
        "Area_km2": "89",
        "Density": "183",
        "Province": "Gandaki"
    },
    {
        "Name": "Raghuganga",
        "Nepali": "रघुगंगा",
        "District": "Myagdi",
        "Population_2011": "15,753",
        "Area_km2": "379",
        "Density": "42",
        "Province": "Gandaki"
    },
    {
        "Name": "Dhaulagiri",
        "Nepali": "धवलागिरी",
        "District": "Myagdi",
        "Population_2011": "14,104",
        "Area_km2": "1,037",
        "Density": "14",
        "Province": "Gandaki"
    },
    {
        "Name": "Annapurna",
        "Nepali": "अन्नपुर्ण",
        "District": "Myagdi",
        "Population_2011": "13,315",
        "Area_km2": "556.41",
        "Density": "24",
        "Province": "Gandaki"
    },
    {
        "Name": "Hupsekot",
        "Nepali": "हुप्सेकोट",
        "District": "Nawalpur",
        "Population_2011": "25,065",
        "Area_km2": "189.21",
        "Density": "132",
        "Province": "Gandaki"
    },
    {
        "Name": "Binayi Triveni",
        "Nepali": "विनयी त्रिवेणी",
        "District": "Nawalpur",
        "Population_2011": "25,036",
        "Area_km2": "267.13",
        "Density": "94",
        "Province": "Gandaki"
    },
    {
        "Name": "Bulingtar",
        "Nepali": "बुलिङटार",
        "District": "Nawalpur",
        "Population_2011": "19,122",
        "Area_km2": "147.68",
        "Density": "129",
        "Province": "Gandaki"
    },
    {
        "Name": "Baudikali",
        "Nepali": "बौदीकाली",
        "District": "Nawalpur",
        "Population_2011": "15,734",
        "Area_km2": "91.87",
        "Density": "171",
        "Province": "Gandaki"
    },
    {
        "Name": "Jaljala",
        "Nepali": "जलजला",
        "District": "Parbat",
        "Population_2011": "21,454",
        "Area_km2": "82.26",
        "Density": "261",
        "Province": "Gandaki"
    },
    {
        "Name": "Modi",
        "Nepali": "मोदी",
        "District": "Parbat",
        "Population_2011": "21,284",
        "Area_km2": "143.6",
        "Density": "148",
        "Province": "Gandaki"
    },
    {
        "Name": "Painyu",
        "Nepali": "पैयूं",
        "District": "Parbat",
        "Population_2011": "15,381",
        "Area_km2": "42.65",
        "Density": "361",
        "Province": "Gandaki"
    },
    {
        "Name": "Bihadi",
        "Nepali": "विहादी",
        "District": "Parbat",
        "Population_2011": "13,403",
        "Area_km2": "44.8",
        "Density": "299",
        "Province": "Gandaki"
    },
    {
        "Name": "Mahashila",
        "Nepali": "महाशिला",
        "District": "Parbat",
        "Population_2011": "9,857",
        "Area_km2": "49.38",
        "Density": "200",
        "Province": "Gandaki"
    },
    {
        "Name": "Kaligandaki",
        "Nepali": "कालीगण्डकी",
        "District": "Syangja",
        "Population_2011": "21,728",
        "Area_km2": "73.51",
        "Density": "296",
        "Province": "Gandaki"
    },
    {
        "Name": "Biruwa",
        "Nepali": "विरुवा",
        "District": "Syangja",
        "Population_2011": "18,413",
        "Area_km2": "95.79",
        "Density": "192",
        "Province": "Gandaki"
    },
    {
        "Name": "Harinas",
        "Nepali": "हरीनास",
        "District": "Syangja",
        "Population_2011": "17,343",
        "Area_km2": "87.48",
        "Density": "198",
        "Province": "Gandaki"
    },
    {
        "Name": "Aandhikhola",
        "Nepali": "आँधीखोला",
        "District": "Syangja",
        "Population_2011": "16,589",
        "Area_km2": "69.61",
        "Density": "238",
        "Province": "Gandaki"
    },
    {
        "Name": "Arjun Chaupari",
        "Nepali": "अर्जुन चौपारी",
        "District": "Syangja",
        "Population_2011": "16,176",
        "Area_km2": "57.22",
        "Density": "283",
        "Province": "Gandaki"
    },
    {
        "Name": "Phedikhola",
        "Nepali": "फेदीखोला",
        "District": "Syangja",
        "Population_2011": "12,341",
        "Area_km2": "56.73",
        "Density": "218",
        "Province": "Gandaki"
    },
    {
        "Name": "Rishing",
        "Nepali": "ऋषिङ्ग",
        "District": "Tanahun",
        "Population_2011": "25,870",
        "Area_km2": "215",
        "Density": "120",
        "Province": "Gandaki"
    },
    {
        "Name": "Myagde",
        "Nepali": "म्याग्दे",
        "District": "Tanahun",
        "Population_2011": "22,502",
        "Area_km2": "115",
        "Density": "196",
        "Province": "Gandaki"
    },
    {
        "Name": "Aanbu Khaireni",
        "Nepali": "आँबुखैरेनी",
        "District": "Tanahun",
        "Population_2011": "20,768",
        "Area_km2": "128",
        "Density": "162",
        "Province": "Gandaki"
    },
    {
        "Name": "Bandipur",
        "Nepali": "बन्दिपुर",
        "District": "Tanahun",
        "Population_2011": "20,013",
        "Area_km2": "102",
        "Density": "196",
        "Province": "Gandaki"
    },
    {
        "Name": "Ghiring",
        "Nepali": "घिरिङ",
        "District": "Tanahun",
        "Population_2011": "19,318",
        "Area_km2": "126",
        "Density": "153",
        "Province": "Gandaki"
    },
    {
        "Name": "Devghat",
        "Nepali": "देवघाट",
        "District": "Tanahun",
        "Population_2011": "16,131",
        "Area_km2": "159",
        "Density": "101",
        "Province": "Gandaki"
    },
    {
        "Name": "Malarani",
        "Nepali": "मालारानी",
        "District": "Arghakhanchi",
        "Population_2011": "28,044",
        "Area_km2": "101.06",
        "Density": "277",
        "Province": "Province No. 5"
    },
    {
        "Name": "Pandini",
        "Nepali": "पाणिनी",
        "District": "Arghakhanchi",
        "Population_2011": "26,424",
        "Area_km2": "151.42",
        "Density": "175",
        "Province": "Province No. 5"
    },
    {
        "Name": "Chhatradev",
        "Nepali": "छत्रदेव",
        "District": "Arghakhanchi",
        "Population_2011": "25,336",
        "Area_km2": "87.62",
        "Density": "289",
        "Province": "Province No. 5"
    },
    {
        "Name": "Raptisonari",
        "Nepali": "राप्ती सोनारी",
        "District": "Banke",
        "Population_2011": "59,946",
        "Area_km2": "1,041.73",
        "Density": "58",
        "Province": "Province No. 5"
    },
    {
        "Name": "Baijnath",
        "Nepali": "वैजनाथ",
        "District": "Banke",
        "Population_2011": "54,418",
        "Area_km2": "141.67",
        "Density": "384",
        "Province": "Province No. 5"
    },
    {
        "Name": "Khajura",
        "Nepali": "खजुरा",
        "District": "Banke",
        "Population_2011": "50,961",
        "Area_km2": "101.91",
        "Density": "500",
        "Province": "Province No. 5"
    },
    {
        "Name": "Janaki",
        "Nepali": "जानकी",
        "District": "Banke",
        "Population_2011": "37,830",
        "Area_km2": "63.32",
        "Density": "597",
        "Province": "Province No. 5"
    },
    {
        "Name": "Duduwa",
        "Nepali": "डुडुवा",
        "District": "Banke",
        "Population_2011": "37,460",
        "Area_km2": "91.1",
        "Density": "411",
        "Province": "Province No. 5"
    },
    {
        "Name": "Narainapur",
        "Nepali": "नरैनापुर",
        "District": "Banke",
        "Population_2011": "34,942",
        "Area_km2": "172.34",
        "Density": "203",
        "Province": "Province No. 5"
    },
    {
        "Name": "Badhaiyatal",
        "Nepali": "बढैयाताल",
        "District": "Bardiya",
        "Population_2011": "47,868",
        "Area_km2": "115.19",
        "Density": "416",
        "Province": "Province No. 5"
    },
    {
        "Name": "Geruwa",
        "Nepali": "गेरुवा",
        "District": "Bardiya",
        "Population_2011": "34,871",
        "Area_km2": "78.41",
        "Density": "445",
        "Province": "Province No. 5"
    },
    {
        "Name": "Rapti",
        "Nepali": "राप्ती",
        "District": "Dang",
        "Population_2011": "40,763",
        "Area_km2": "161.07",
        "Density": "253",
        "Province": "Province No. 5"
    },
    {
        "Name": "Gadhawa",
        "Nepali": "गढवा",
        "District": "Dang",
        "Population_2011": "38,592",
        "Area_km2": "358.57",
        "Density": "108",
        "Province": "Province No. 5"
    },
    {
        "Name": "Babai",
        "Nepali": "बबई",
        "District": "Dang",
        "Population_2011": "27,469",
        "Area_km2": "257.48",
        "Density": "107",
        "Province": "Province No. 5"
    },
    {
        "Name": "Shantinagar",
        "Nepali": "शान्तिनगर",
        "District": "Dang",
        "Population_2011": "25,203",
        "Area_km2": "116.02",
        "Density": "217",
        "Province": "Province No. 5"
    },
    {
        "Name": "Rajpur",
        "Nepali": "राजपुर",
        "District": "Dang",
        "Population_2011": "25,037",
        "Area_km2": "577.33",
        "Density": "43",
        "Province": "Province No. 5"
    },
    {
        "Name": "Banglachuli",
        "Nepali": "वंगलाचुली",
        "District": "Dang",
        "Population_2011": "24,245",
        "Area_km2": "245.14",
        "Density": "99",
        "Province": "Province No. 5"
    },
    {
        "Name": "Dangisharan",
        "Nepali": "दंगीशरण",
        "District": "Dang",
        "Population_2011": "21,484",
        "Area_km2": "110.7",
        "Density": "194",
        "Province": "Province No. 5"
    },
    {
        "Name": "Satyawati",
        "Nepali": "सत्यवती",
        "District": "Gulmi",
        "Population_2011": "23,807",
        "Area_km2": "115.92",
        "Density": "205",
        "Province": "Province No. 5"
    },
    {
        "Name": "Dhurkot",
        "Nepali": "धुर्कोट",
        "District": "Gulmi",
        "Population_2011": "22,454",
        "Area_km2": "86.32",
        "Density": "260",
        "Province": "Province No. 5"
    },
    {
        "Name": "Gulmi Durbar",
        "Nepali": "गुल्मीदरवार",
        "District": "Gulmi",
        "Population_2011": "22,037",
        "Area_km2": "79.99",
        "Density": "275",
        "Province": "Province No. 5"
    },
    {
        "Name": "Madane",
        "Nepali": "मदाने",
        "District": "Gulmi",
        "Population_2011": "21,899",
        "Area_km2": "94.52",
        "Density": "232",
        "Province": "Province No. 5"
    },
    {
        "Name": "Chandrakot",
        "Nepali": "चन्द्रकोट",
        "District": "Gulmi",
        "Population_2011": "21,827",
        "Area_km2": "105.73",
        "Density": "206",
        "Province": "Province No. 5"
    },
    {
        "Name": "Malika",
        "Nepali": "मालिका",
        "District": "Gulmi",
        "Population_2011": "21,729",
        "Area_km2": "92.49",
        "Density": "235",
        "Province": "Province No. 5"
    },
    {
        "Name": "Chhatrakot",
        "Nepali": "छत्रकोट",
        "District": "Gulmi",
        "Population_2011": "21,481",
        "Area_km2": "87.01",
        "Density": "247",
        "Province": "Province No. 5"
    },
    {
        "Name": "Isma",
        "Nepali": "ईस्मा",
        "District": "Gulmi",
        "Population_2011": "20,964",
        "Area_km2": "81.88",
        "Density": "256",
        "Province": "Province No. 5"
    },
    {
        "Name": "Kaligandaki",
        "Nepali": "कालीगण्डकी",
        "District": "Gulmi",
        "Population_2011": "18,876",
        "Area_km2": "101.04",
        "Density": "187",
        "Province": "Province No. 5"
    },
    {
        "Name": "Ruru",
        "Nepali": "रुरु",
        "District": "Gulmi",
        "Population_2011": "18,581",
        "Area_km2": "67.38",
        "Density": "276",
        "Province": "Province No. 5"
    },
    {
        "Name": "Mayadevi",
        "Nepali": "मायादेवी",
        "District": "Kapilvastu",
        "Population_2011": "48,218",
        "Area_km2": "88.53",
        "Density": "545",
        "Province": "Province No. 5"
    },
    {
        "Name": "Shuddhodhan",
        "Nepali": "शुद्धोधन",
        "District": "Kapilvastu",
        "Population_2011": "45,201",
        "Area_km2": "91.69",
        "Density": "493",
        "Province": "Province No. 5"
    },
    {
        "Name": "Yasodhara",
        "Nepali": "यसोधरा",
        "District": "Kapilvastu",
        "Population_2011": "38,952",
        "Area_km2": "67.56",
        "Density": "577",
        "Province": "Province No. 5"
    },
    {
        "Name": "Bijaynagar",
        "Nepali": "विजयनगर",
        "District": "Kapilvastu",
        "Population_2011": "36,937",
        "Area_km2": "173.19",
        "Density": "213",
        "Province": "Province No. 5"
    },
    {
        "Name": "Triveni Susta",
        "Nepali": "त्रिवेणी सुस्ता",
        "District": "Parasi",
        "Population_2011": "43,797",
        "Area_km2": "112.17",
        "Density": "390",
        "Province": "Province No. 5"
    },
    {
        "Name": "Pratappur",
        "Nepali": "प्रतापपुर",
        "District": "Parasi",
        "Population_2011": "41,315",
        "Area_km2": "87.55",
        "Density": "472",
        "Province": "Province No. 5"
    },
    {
        "Name": "Sarawal",
        "Nepali": "सरावल",
        "District": "Parasi",
        "Population_2011": "38,163",
        "Area_km2": "73.19",
        "Density": "521",
        "Province": "Province No. 5"
    },
    {
        "Name": "Palhi Nandan",
        "Nepali": "पाल्हीनन्दन",
        "District": "Parasi",
        "Population_2011": "35,429",
        "Area_km2": "44.67",
        "Density": "793",
        "Province": "Province No. 5"
    },
    {
        "Name": "Rainadevi Chhahara",
        "Nepali": "रैनादेवी छहरा",
        "District": "Palpa",
        "Population_2011": "26,469",
        "Area_km2": "175.88",
        "Density": "150",
        "Province": "Province No. 5"
    },
    {
        "Name": "Mathagadhi",
        "Nepali": "माथागढी",
        "District": "Palpa",
        "Population_2011": "25,017",
        "Area_km2": "215.49",
        "Density": "116",
        "Province": "Province No. 5"
    },
    {
        "Name": "Nisdi",
        "Nepali": "निस्दी",
        "District": "Palpa",
        "Population_2011": "22,611",
        "Area_km2": "194.5",
        "Density": "116",
        "Province": "Province No. 5"
    },
    {
        "Name": "Bagnaskali",
        "Nepali": "वगनासकाली",
        "District": "Palpa",
        "Population_2011": "21,361",
        "Area_km2": "84.17",
        "Density": "254",
        "Province": "Province No. 5"
    },
    {
        "Name": "Rambha",
        "Nepali": "रम्भा",
        "District": "Palpa",
        "Population_2011": "20,190",
        "Area_km2": "94.12",
        "Density": "215",
        "Province": "Province No. 5"
    },
    {
        "Name": "Purbakhola",
        "Nepali": "पूर्वखोला",
        "District": "Palpa",
        "Population_2011": "19,589",
        "Area_km2": "138.05",
        "Density": "142",
        "Province": "Province No. 5"
    },
    {
        "Name": "Tinau",
        "Nepali": "तिनाउ",
        "District": "Palpa",
        "Population_2011": "19,085",
        "Area_km2": "202",
        "Density": "94",
        "Province": "Province No. 5"
    },
    {
        "Name": "Ribdikot",
        "Nepali": "रिब्दीकोट",
        "District": "Palpa",
        "Population_2011": "18,770",
        "Area_km2": "124.55",
        "Density": "151",
        "Province": "Province No. 5"
    },
    {
        "Name": "Naubahini",
        "Nepali": "नौबहिनी",
        "District": "Pyuthan",
        "Population_2011": "30,292",
        "Area_km2": "213.41",
        "Density": "142",
        "Province": "Province No. 5"
    },
    {
        "Name": "Jhimaruk",
        "Nepali": "झिमरुक",
        "District": "Pyuthan",
        "Population_2011": "27,931",
        "Area_km2": "106.93",
        "Density": "261",
        "Province": "Province No. 5"
    },
    {
        "Name": "Gaumukhi",
        "Nepali": "गौमुखी",
        "District": "Pyuthan",
        "Population_2011": "25,421",
        "Area_km2": "139.04",
        "Density": "183",
        "Province": "Province No. 5"
    },
    {
        "Name": "Airawati",
        "Nepali": "ऐरावती",
        "District": "Pyuthan",
        "Population_2011": "22,392",
        "Area_km2": "156.75",
        "Density": "143",
        "Province": "Province No. 5"
    },
    {
        "Name": "Sarumarani",
        "Nepali": "सरुमारानी",
        "District": "Pyuthan",
        "Population_2011": "18,627",
        "Area_km2": "157.97",
        "Density": "118",
        "Province": "Province No. 5"
    },
    {
        "Name": "Mallarani",
        "Nepali": "मल्लरानी",
        "District": "Pyuthan",
        "Population_2011": "17,686",
        "Area_km2": "80.09",
        "Density": "221",
        "Province": "Province No. 5"
    },
    {
        "Name": "Mandavi",
        "Nepali": "माण्डवी",
        "District": "Pyuthan",
        "Population_2011": "15,058",
        "Area_km2": "113.08",
        "Density": "133",
        "Province": "Province No. 5"
    },
    {
        "Name": "Sunil Smriti",
        "Nepali": "सुनिल स्मृति",
        "District": "Rolpa",
        "Population_2011": "28,213",
        "Area_km2": "156.55",
        "Density": "180",
        "Province": "Province No. 5"
    },
    {
        "Name": "Runtigadhi",
        "Nepali": "रुन्टीगढी",
        "District": "Rolpa",
        "Population_2011": "27,929",
        "Area_km2": "232.69",
        "Density": "120",
        "Province": "Province No. 5"
    },
    {
        "Name": "Lungri",
        "Nepali": "लुङ्ग्री",
        "District": "Rolpa",
        "Population_2011": "23,631",
        "Area_km2": "135.23",
        "Density": "175",
        "Province": "Province No. 5"
    },
    {
        "Name": "Triveni",
        "Nepali": "त्रिवेणी",
        "District": "Rolpa",
        "Population_2011": "22,957",
        "Area_km2": "205.39",
        "Density": "112",
        "Province": "Province No. 5"
    },
    {
        "Name": "Paribartan",
        "Nepali": "परिवर्तन",
        "District": "Rolpa",
        "Population_2011": "20,778",
        "Area_km2": "163.01",
        "Density": "127",
        "Province": "Province No. 5"
    },
    {
        "Name": "Gangadev",
        "Nepali": "गंगादेव",
        "District": "Rolpa",
        "Population_2011": "20,009",
        "Area_km2": "124.38",
        "Density": "161",
        "Province": "Province No. 5"
    },
    {
        "Name": "Madi",
        "Nepali": "माडी",
        "District": "Rolpa",
        "Population_2011": "17,986",
        "Area_km2": "129.05",
        "Density": "139",
        "Province": "Province No. 5"
    },
    {
        "Name": "Sunchhahari",
        "Nepali": "सुनछहरी",
        "District": "Rolpa",
        "Population_2011": "16,034",
        "Area_km2": "277.62",
        "Density": "58",
        "Province": "Province No. 5"
    },
    {
        "Name": "Thawang",
        "Nepali": "थवाङ",
        "District": "Rolpa",
        "Population_2011": "10,881",
        "Area_km2": "191.07",
        "Density": "57",
        "Province": "Province No. 5"
    },
    {
        "Name": "Bhume",
        "Nepali": "भूमे",
        "District": "Eastern Rukum",
        "Population_2011": "18,589",
        "Area_km2": "273.67",
        "Density": "68",
        "Province": "Province No. 5"
    },
    {
        "Name": "Putha Uttarganga",
        "Nepali": "पुठा उत्तरगंगा",
        "District": "Eastern Rukum",
        "Population_2011": "17,932",
        "Area_km2": "560.34",
        "Density": "32",
        "Province": "Province No. 5"
    },
    {
        "Name": "Sisne",
        "Nepali": "सिस्ने",
        "District": "Eastern Rukum",
        "Population_2011": "16,497",
        "Area_km2": "327.12",
        "Density": "50",
        "Province": "Province No. 5"
    },
    {
        "Name": "Gaidhawa",
        "Nepali": "गैडहवा",
        "District": "Rupandehi",
        "Population_2011": "47,565",
        "Area_km2": "96.79",
        "Density": "491",
        "Province": "Province No. 5"
    },
    {
        "Name": "Mayadevi",
        "Nepali": "मायादेवी",
        "District": "Rupandehi",
        "Population_2011": "47,196",
        "Area_km2": "72.44",
        "Density": "652",
        "Province": "Province No. 5"
    },
    {
        "Name": "Kotahimai",
        "Nepali": "कोटहीमाई",
        "District": "Rupandehi",
        "Population_2011": "41,006",
        "Area_km2": "58.26",
        "Density": "704",
        "Province": "Province No. 5"
    },
    {
        "Name": "Marchawarimai",
        "Nepali": "मर्चवारीमाई",
        "District": "Rupandehi",
        "Population_2011": "38,776",
        "Area_km2": "48.55",
        "Density": "799",
        "Province": "Province No. 5"
    },
    {
        "Name": "Siyari",
        "Nepali": "सियारी",
        "District": "Rupandehi",
        "Population_2011": "38,466",
        "Area_km2": "66.17",
        "Density": "581",
        "Province": "Province No. 5"
    },
    {
        "Name": "Sammarimai",
        "Nepali": "सम्मरीमाई",
        "District": "Rupandehi",
        "Population_2011": "38,305",
        "Area_km2": "50.78",
        "Density": "754",
        "Province": "Province No. 5"
    },
    {
        "Name": "Rohini",
        "Nepali": "रोहिणी",
        "District": "Rupandehi",
        "Population_2011": "37,175",
        "Area_km2": "64.32",
        "Density": "578",
        "Province": "Province No. 5"
    },
    {
        "Name": "Shuddhodhan",
        "Nepali": "शुद्धोधन",
        "District": "Rupandehi",
        "Population_2011": "34,638",
        "Area_km2": "57.66",
        "Density": "601",
        "Province": "Province No. 5"
    },
    {
        "Name": "Om Satiya",
        "Nepali": "ओमसतीया",
        "District": "Rupandehi",
        "Population_2011": "34,191",
        "Area_km2": "48.54",
        "Density": "704",
        "Province": "Province No. 5"
    },
    {
        "Name": "Kanchan",
        "Nepali": "कञ्चन",
        "District": "Rupandehi",
        "Population_2011": "33,072",
        "Area_km2": "58.51",
        "Density": "565",
        "Province": "Province No. 5"
    },
    {
        "Name": "Gurans",
        "Nepali": "गुराँस",
        "District": "Dailekh",
        "Population_2011": "22,033",
        "Area_km2": "164.79",
        "Density": "134",
        "Province": "Karnali"
    },
    {
        "Name": "Bhairabi",
        "Nepali": "भैरवी",
        "District": "Dailekh",
        "Population_2011": "21,233",
        "Area_km2": "110.46",
        "Density": "192",
        "Province": "Karnali"
    },
    {
        "Name": "Naumule",
        "Nepali": "नौमुले",
        "District": "Dailekh",
        "Population_2011": "20,802",
        "Area_km2": "228.59",
        "Density": "91",
        "Province": "Karnali"
    },
    {
        "Name": "Mahabu",
        "Nepali": "महावु",
        "District": "Dailekh",
        "Population_2011": "19,277",
        "Area_km2": "110.8",
        "Density": "174",
        "Province": "Karnali"
    },
    {
        "Name": "Thantikandh",
        "Nepali": "ठाँटीकाँध",
        "District": "Dailekh",
        "Population_2011": "18,896",
        "Area_km2": "88.22",
        "Density": "214",
        "Province": "Karnali"
    },
    {
        "Name": "Bhagawatimai",
        "Nepali": "भगवतीमाई",
        "District": "Dailekh",
        "Population_2011": "18,778",
        "Area_km2": "151.52",
        "Density": "124",
        "Province": "Karnali"
    },
    {
        "Name": "Dungeshwar",
        "Nepali": "डुंगेश्वर",
        "District": "Dailekh",
        "Population_2011": "15,883",
        "Area_km2": "105.19",
        "Density": "151",
        "Province": "Karnali"
    },
    {
        "Name": "Mudkechula",
        "Nepali": "मुड्केचुला",
        "District": "Dolpa",
        "Population_2011": "5,129",
        "Area_km2": "250.08",
        "Density": "21",
        "Province": "Karnali"
    },
    {
        "Name": "Kaike",
        "Nepali": "काईके",
        "District": "Dolpa",
        "Population_2011": "3,576",
        "Area_km2": "466.6",
        "Density": "8",
        "Province": "Karnali"
    },
    {
        "Name": "She Phoksundo",
        "Nepali": "शे फोक्सुन्डो",
        "District": "Dolpa",
        "Population_2011": "3,099",
        "Area_km2": "123.07",
        "Density": "25",
        "Province": "Karnali"
    },
    {
        "Name": "Jagadulla",
        "Nepali": "जगदुल्ला",
        "District": "Dolpa",
        "Population_2011": "2,273",
        "Area_km2": "83.3",
        "Density": "27",
        "Province": "Karnali"
    },
    {
        "Name": "Dolpo Buddha",
        "Nepali": "डोल्पो बुद्ध",
        "District": "Dolpa",
        "Population_2011": "2,126",
        "Area_km2": "377.38",
        "Density": "6",
        "Province": "Karnali"
    },
    {
        "Name": "Chharka Tangsong",
        "Nepali": "छार्का ताङसोङ",
        "District": "Dolpa",
        "Population_2011": "1,451",
        "Area_km2": "345.57",
        "Density": "4",
        "Province": "Karnali"
    },
    {
        "Name": "Simkot",
        "Nepali": "सिमकोट",
        "District": "Humla",
        "Population_2011": "11,557",
        "Area_km2": "785.89",
        "Density": "15",
        "Province": "Karnali"
    },
    {
        "Name": "Sarkegad",
        "Nepali": "सर्केगाड",
        "District": "Humla",
        "Population_2011": "9,868",
        "Area_km2": "306.7",
        "Density": "32",
        "Province": "Karnali"
    },
    {
        "Name": "Adanchuli",
        "Nepali": "अदानचुली",
        "District": "Humla",
        "Population_2011": "7,116",
        "Area_km2": "150.61",
        "Density": "47",
        "Province": "Karnali"
    },
    {
        "Name": "Kharpunath",
        "Nepali": "खार्पुनाथ",
        "District": "Humla",
        "Population_2011": "6,011",
        "Area_km2": "880",
        "Density": "7",
        "Province": "Karnali"
    },
    {
        "Name": "Tanjakot",
        "Nepali": "ताँजाकोट",
        "District": "Humla",
        "Population_2011": "5,964",
        "Area_km2": "159.1",
        "Density": "37",
        "Province": "Karnali"
    },
    {
        "Name": "Chankheli",
        "Nepali": "चंखेली",
        "District": "Humla",
        "Population_2011": "5,517",
        "Area_km2": "1,310.41",
        "Density": "4",
        "Province": "Karnali"
    },
    {
        "Name": "Namkha",
        "Nepali": "नाम्खा",
        "District": "Humla",
        "Population_2011": "3,900",
        "Area_km2": "2,419.64",
        "Density": "2",
        "Province": "Karnali"
    },
    {
        "Name": "Junichande",
        "Nepali": "जुनीचाँदे",
        "District": "Jajarkot",
        "Population_2011": "21,733",
        "Area_km2": "346.21",
        "Density": "63",
        "Province": "Karnali"
    },
    {
        "Name": "Kuse",
        "Nepali": "कुसे",
        "District": "Jajarkot",
        "Population_2011": "20,621",
        "Area_km2": "273.97",
        "Density": "75",
        "Province": "Karnali"
    },
    {
        "Name": "Barekot",
        "Nepali": "बारेकोट",
        "District": "Jajarkot",
        "Population_2011": "18,083",
        "Area_km2": "577.5",
        "Density": "31",
        "Province": "Karnali"
    },
    {
        "Name": "Shivalaya",
        "Nepali": "शिवालय",
        "District": "Jajarkot",
        "Population_2011": "15,269",
        "Area_km2": "134.26",
        "Density": "114",
        "Province": "Karnali"
    },
    {
        "Name": "Tatopani",
        "Nepali": "तातोपानी",
        "District": "Jumla",
        "Population_2011": "14,638",
        "Area_km2": "525.56",
        "Density": "28",
        "Province": "Karnali"
    },
    {
        "Name": "Patarasi",
        "Nepali": "पातारासी",
        "District": "Jumla",
        "Population_2011": "14,571",
        "Area_km2": "814.07",
        "Density": "18",
        "Province": "Karnali"
    },
    {
        "Name": "Tila",
        "Nepali": "तिला",
        "District": "Jumla",
        "Population_2011": "13,607",
        "Area_km2": "175.49",
        "Density": "78",
        "Province": "Karnali"
    },
    {
        "Name": "Kanaka Sundari",
        "Nepali": "कनकासुन्दरी",
        "District": "Jumla",
        "Population_2011": "12,977",
        "Area_km2": "225.39",
        "Density": "58",
        "Province": "Karnali"
    },
    {
        "Name": "Sinja",
        "Nepali": "सिंजा",
        "District": "Jumla",
        "Population_2011": "12,395",
        "Area_km2": "153.29",
        "Density": "81",
        "Province": "Karnali"
    },
    {
        "Name": "Hima",
        "Nepali": "हिमा",
        "District": "Jumla",
        "Population_2011": "10,961",
        "Area_km2": "132.32",
        "Density": "83",
        "Province": "Karnali"
    },
    {
        "Name": "Guthichaur",
        "Nepali": "गुठिचौर",
        "District": "Jumla",
        "Population_2011": "9,870",
        "Area_km2": "427",
        "Density": "23",
        "Province": "Karnali"
    },
    {
        "Name": "Narharinath",
        "Nepali": "नरहरिनाथ",
        "District": "Kalikot",
        "Population_2011": "21,366",
        "Area_km2": "143.86",
        "Density": "149",
        "Province": "Karnali"
    },
    {
        "Name": "Palata",
        "Nepali": "पलाता",
        "District": "Kalikot",
        "Population_2011": "15,303",
        "Area_km2": "318.84",
        "Density": "48",
        "Province": "Karnali"
    },
    {
        "Name": "Shubha Kalika",
        "Nepali": "शुभ कालिका",
        "District": "Kalikot",
        "Population_2011": "14,080",
        "Area_km2": "97.32",
        "Density": "145",
        "Province": "Karnali"
    },
    {
        "Name": "Sanni Triveni",
        "Nepali": "सान्नी त्रिवेणी",
        "District": "Kalikot",
        "Population_2011": "12,846",
        "Area_km2": "136.71",
        "Density": "94",
        "Province": "Karnali"
    },
    {
        "Name": "Pachaljharana",
        "Nepali": "पचालझरना",
        "District": "Kalikot",
        "Population_2011": "12,343",
        "Area_km2": "166.92",
        "Density": "74",
        "Province": "Karnali"
    },
    {
        "Name": "Mahawai",
        "Nepali": "महावै",
        "District": "Kalikot",
        "Population_2011": "8,323",
        "Area_km2": "322.07",
        "Density": "26",
        "Province": "Karnali"
    },
    {
        "Name": "Khatyad",
        "Nepali": "खत्याड",
        "District": "Mugu",
        "Population_2011": "17,116",
        "Area_km2": "281.12",
        "Density": "61",
        "Province": "Karnali"
    },
    {
        "Name": "Soru",
        "Nepali": "सोरु",
        "District": "Mugu",
        "Population_2011": "12,238",
        "Area_km2": "365.8",
        "Density": "33",
        "Province": "Karnali"
    },
    {
        "Name": "Mugum Karmarong",
        "Nepali": "मुगुम कार्मारोंग",
        "District": "Mugu",
        "Population_2011": "5,396",
        "Area_km2": "2,106.91",
        "Density": "3",
        "Province": "Karnali"
    },
    {
        "Name": "Sani Bheri",
        "Nepali": "सानीभेरी",
        "District": "Western Rukum",
        "Population_2011": "22,194",
        "Area_km2": "133.8",
        "Density": "166",
        "Province": "Karnali"
    },
    {
        "Name": "Triveni",
        "Nepali": "त्रिवेणी",
        "District": "Western Rukum",
        "Population_2011": "19,404",
        "Area_km2": "85.49",
        "Density": "227",
        "Province": "Karnali"
    },
    {
        "Name": "Banphikot",
        "Nepali": "बाँफिकोट",
        "District": "Western Rukum",
        "Population_2011": "18,696",
        "Area_km2": "190.42",
        "Density": "98",
        "Province": "Karnali"
    },
    {
        "Name": "Kumakh",
        "Nepali": "कुमाख",
        "District": "Salyan",
        "Population_2011": "24,972",
        "Area_km2": "177.28",
        "Density": "141",
        "Province": "Karnali"
    },
    {
        "Name": "Kalimati",
        "Nepali": "कालीमाटी",
        "District": "Salyan",
        "Population_2011": "23,005",
        "Area_km2": "500.72",
        "Density": "46",
        "Province": "Karnali"
    },
    {
        "Name": "Chhatreshwari",
        "Nepali": "छत्रेश्वरी",
        "District": "Salyan",
        "Population_2011": "21,452",
        "Area_km2": "150.69",
        "Density": "142",
        "Province": "Karnali"
    },
    {
        "Name": "Darma",
        "Nepali": "दार्मा",
        "District": "Salyan",
        "Population_2011": "19,966",
        "Area_km2": "81.46",
        "Density": "245",
        "Province": "Karnali"
    },
    {
        "Name": "Kapurkot",
        "Nepali": "कपुरकोट",
        "District": "Salyan",
        "Population_2011": "18,204",
        "Area_km2": "119.21",
        "Density": "153",
        "Province": "Karnali"
    },
    {
        "Name": "Triveni",
        "Nepali": "त्रिवेणी",
        "District": "Salyan",
        "Population_2011": "16,634",
        "Area_km2": "119.11",
        "Density": "140",
        "Province": "Karnali"
    },
    {
        "Name": "Siddha Kumakh",
        "Nepali": "सिद्ध कुमाख",
        "District": "Salyan",
        "Population_2011": "13,593",
        "Area_km2": "89.36",
        "Density": "152",
        "Province": "Karnali"
    },
    {
        "Name": "Barahatal",
        "Nepali": "बराहताल",
        "District": "Surkhet",
        "Population_2011": "26,802",
        "Area_km2": "455.09",
        "Density": "59",
        "Province": "Karnali"
    },
    {
        "Name": "Simta",
        "Nepali": "सिम्ता",
        "District": "Surkhet",
        "Population_2011": "25,845",
        "Area_km2": "241.64",
        "Density": "10",
        "Province": "Karnali"
    },
    {
        "Name": "Chaukune",
        "Nepali": "चौकुने",
        "District": "Surkhet",
        "Population_2011": "25,240",
        "Area_km2": "381.01",
        "Density": "66",
        "Province": "Karnali"
    },
    {
        "Name": "Chingad",
        "Nepali": "चिङ्गाड",
        "District": "Surkhet",
        "Population_2011": "17,275",
        "Area_km2": "170.19",
        "Density": "102",
        "Province": "Karnali"
    },
    {
        "Name": "Ramaroshan",
        "Nepali": "रामारोशन",
        "District": "Achham",
        "Population_2011": "25,166",
        "Area_km2": "173.33",
        "Density": "145",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Chaurpati",
        "Nepali": "चौरपाटी",
        "District": "Achham",
        "Population_2011": "25,149",
        "Area_km2": "182.16",
        "Density": "138",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Turmakhand",
        "Nepali": "तुर्माखाँद",
        "District": "Achham",
        "Population_2011": "24,940",
        "Area_km2": "232.07",
        "Density": "107",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Mellekh",
        "Nepali": "मेल्लेख",
        "District": "Achham",
        "Population_2011": "24,670",
        "Area_km2": "134.78",
        "Density": "183",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Dhankari",
        "Nepali": "ढँकारी",
        "District": "Achham",
        "Population_2011": "21,562",
        "Area_km2": "227.88",
        "Density": "95",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Bannigadi Jayagad",
        "Nepali": "बान्नीगडीजैगड",
        "District": "Achham",
        "Population_2011": "17,359",
        "Area_km2": "58.26",
        "Density": "298",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Dogdakedar",
        "Nepali": "दोगडाकेदार",
        "District": "Baitadi",
        "Population_2011": "24,632",
        "Area_km2": "126.38",
        "Density": "195",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Dilashaini",
        "Nepali": "डिलाशैनी",
        "District": "Baitadi",
        "Population_2011": "22,924",
        "Area_km2": "125.28",
        "Density": "183",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Sigas",
        "Nepali": "सिगास",
        "District": "Baitadi",
        "Population_2011": "21,510",
        "Area_km2": "245.44",
        "Density": "88",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Pancheshwar",
        "Nepali": "पञ्चेश्वर",
        "District": "Baitadi",
        "Population_2011": "18,766",
        "Area_km2": "120.41",
        "Density": "156",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Surnaya",
        "Nepali": "सुर्नया",
        "District": "Baitadi",
        "Population_2011": "18,549",
        "Area_km2": "124.52",
        "Density": "149",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Shivanath",
        "Nepali": "शिवनाथ",
        "District": "Baitadi",
        "Population_2011": "17,115",
        "Area_km2": "81.65",
        "Density": "210",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Kedarsyu",
        "Nepali": "केदारस्यु",
        "District": "Bajhang",
        "Population_2011": "21,307",
        "Area_km2": "113.91",
        "Density": "187",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Thalara",
        "Nepali": "थलारा",
        "District": "Bajhang",
        "Population_2011": "17,952",
        "Area_km2": "105.51",
        "Density": "170",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Bitthadchir",
        "Nepali": "बित्थडचिर",
        "District": "Bajhang",
        "Population_2011": "17,154",
        "Area_km2": "86.15",
        "Density": "199",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Chhabis Pathibhera",
        "Nepali": "छब्बीसपाथिभेरा",
        "District": "Bajhang",
        "Population_2011": "16,296",
        "Area_km2": "116.34",
        "Density": "140",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Chhanna",
        "Nepali": "छान्ना",
        "District": "Bajhang",
        "Population_2011": "15,893",
        "Area_km2": "113.52",
        "Density": "140",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Masta",
        "Nepali": "मष्टा",
        "District": "Bajhang",
        "Population_2011": "14,951",
        "Area_km2": "109.24",
        "Density": "137",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Durgathali",
        "Nepali": "दुर्गाथली",
        "District": "Bajhang",
        "Population_2011": "12,972",
        "Area_km2": "61.83",
        "Density": "210",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Talkot",
        "Nepali": "तलकोट",
        "District": "Bajhang",
        "Population_2011": "11,557",
        "Area_km2": "335.26",
        "Density": "34",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Surma",
        "Nepali": "सुर्मा",
        "District": "Bajhang",
        "Population_2011": "9,022",
        "Area_km2": "270.8",
        "Density": "33",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Saipal",
        "Nepali": "सइपाल",
        "District": "Bajhang",
        "Population_2011": "2,182",
        "Area_km2": "1,467.27",
        "Density": "2",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Khaptad Chhededaha",
        "Nepali": "खप्तड छेडेदह",
        "District": "Bajura",
        "Population_2011": "18,575",
        "Area_km2": "135.08",
        "Density": "138",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Swami Kartik Khapar",
        "Nepali": "स्वामिकार्तिक खापर",
        "District": "Bajura",
        "Population_2011": "12,784",
        "Area_km2": "110.55",
        "Density": "116",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Jagannath",
        "Nepali": "जगन्नाथ",
        "District": "Bajura",
        "Population_2011": "9,432",
        "Area_km2": "171.72",
        "Density": "55",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Himali",
        "Nepali": "हिमाली",
        "District": "Bajura",
        "Population_2011": "9214",
        "Area_km2": "830.33",
        "Density": "11",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Gaumul",
        "Nepali": "गौमुल",
        "District": "Bajura",
        "Population_2011": "8,515",
        "Area_km2": "314.66",
        "Density": "27",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Navadurga",
        "Nepali": "नवदुर्गा",
        "District": "Dadeldhura",
        "Population_2011": "19,957",
        "Area_km2": "141.89",
        "Density": "141",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Aalitaal",
        "Nepali": "आलिताल",
        "District": "Dadeldhura",
        "Population_2011": "18,531",
        "Area_km2": "292.87",
        "Density": "63",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Ganyapadhura",
        "Nepali": "गन्यापधुरा",
        "District": "Dadeldhura",
        "Population_2011": "15,093",
        "Area_km2": "135.65",
        "Density": "111",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Bhageshwar",
        "Nepali": "भागेश्वर",
        "District": "Dadeldhura",
        "Population_2011": "14,129",
        "Area_km2": "233.38",
        "Density": "61",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Ajaymeru",
        "Nepali": "अजयमेरु",
        "District": "Dadeldhura",
        "Population_2011": "7,066",
        "Area_km2": "148.9",
        "Density": "47",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Naugad",
        "Nepali": "नौगाड",
        "District": "Darchula",
        "Population_2011": "15,874",
        "Area_km2": "180.27",
        "Density": "88",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Malikarjun",
        "Nepali": "मालिकार्जुन",
        "District": "Darchula",
        "Population_2011": "15,581",
        "Area_km2": "100.82",
        "Density": "155",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Marma",
        "Nepali": "मार्मा",
        "District": "Darchula",
        "Population_2011": "14,956",
        "Area_km2": "208.06",
        "Density": "72",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Lekam",
        "Nepali": "लेकम",
        "District": "Darchula",
        "Population_2011": "14,838",
        "Area_km2": "83.98",
        "Density": "177",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Duhu",
        "Nepali": "दुहु",
        "District": "Darchula",
        "Population_2011": "10,818",
        "Area_km2": "65.35",
        "Density": "166",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Vyans",
        "Nepali": "ब्याँस",
        "District": "Darchula",
        "Population_2011": "10,347",
        "Area_km2": "839.26",
        "Density": "12",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Api Himal",
        "Nepali": "अपि हिमाल",
        "District": "Darchula",
        "Population_2011": "6,779",
        "Area_km2": "613.95",
        "Density": "11",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Aadarsha",
        "Nepali": "आदर्श",
        "District": "Doti",
        "Population_2011": "23,945",
        "Area_km2": "128.47",
        "Density": "186",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Purbichauki",
        "Nepali": "पूर्वीचौकी",
        "District": "Doti",
        "Population_2011": "22,483",
        "Area_km2": "117.66",
        "Density": "191",
        "Province": "SudurPashchim"
    },
    {
        "Name": "K.I. Singh",
        "Nepali": "केआईसिंह",
        "District": "Doti",
        "Population_2011": "20,903",
        "Area_km2": "127.01",
        "Density": "165",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Jorayal",
        "Nepali": "जोरायल",
        "District": "Doti",
        "Population_2011": "20,824",
        "Area_km2": "419.09",
        "Density": "50",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Sayal",
        "Nepali": "सायल",
        "District": "Doti",
        "Population_2011": "19,551",
        "Area_km2": "122.72",
        "Density": "159",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Bogatan-Fudsil",
        "Nepali": "वोगटान–फुड्सिल",
        "District": "Doti",
        "Population_2011": "17,902",
        "Area_km2": "300.22",
        "Density": "60",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Badikedar",
        "Nepali": "बड्डी केदार",
        "District": "Doti",
        "Population_2011": "16,720",
        "Area_km2": "332.55",
        "Density": "50",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Janaki Rural Municipality",
        "Nepali": "जानकी",
        "District": "Kailali",
        "Population_2011": "48,540",
        "Area_km2": "107.27",
        "Density": "453",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Kailari Rural Municipality",
        "Nepali": "कैलारी",
        "District": "Kailali",
        "Population_2011": "47,987",
        "Area_km2": "233.27",
        "Density": "206",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Joshipur",
        "Nepali": "जोशीपुर",
        "District": "Kailali",
        "Population_2011": "36,459",
        "Area_km2": "65.57",
        "Density": "556",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Bardagoriya Rural Municipality",
        "Nepali": "बर्गगोरिया",
        "District": "Kailali",
        "Population_2011": "32,683",
        "Area_km2": "77.26",
        "Density": "423",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Mohanyal Rural Municipality",
        "Nepali": "मोहन्याल",
        "District": "Kailali",
        "Population_2011": "22,053",
        "Area_km2": "626.95",
        "Density": "35",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Chure Rural Municipality",
        "Nepali": "चुरे",
        "District": "Kailali",
        "Population_2011": "18,924",
        "Area_km2": "493.18",
        "Density": "38",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Laljhadi",
        "Nepali": "लालझाँडी",
        "District": "Kanchanpur",
        "Population_2011": "22,569",
        "Area_km2": "154.65",
        "Density": "146",
        "Province": "SudurPashchim"
    },
    {
        "Name": "Beldandi",
        "Nepali": "बेलडाँडी",
        "District": "Kanchanpur",
        "Population_2011": "21,949",
        "Area_km2": "36.7",
        "Density": "598",
        "Province": "SudurPashchim"
    }

]


export {
    provinces, districts, LocalBodies
};