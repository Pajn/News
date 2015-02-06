var articles = [
  {
    "type": 'Article',
    "title": "Så opererar ryska nättroll i Sverige",
    "url": "http://www.dn.se/nyheter/sverige/sa-opererar-ryska-nattroll-i-sverige/",
    "imageUrl": "http://d2.dn-static.se/UploadedImages/2015/2/5/7721d597-0584-4e11-b9cb-2c1a1bc509d4/original.jpg",
    "preamble": "Översättningsprogram, kommentarer på nyhetssajter och byte av identiteter. Så opererar sannolikt ryska nättroll i Sverige med syfte att sprida Putinvänliga uppgifter. ”Det pågår ett propagandakrig”, säger Ulrik Franke på FOI.",
    "date": "2015-02-05T10:22+02:00",
    "rating": 0
  },
  {
    "type": 'Article',
    "title": "Pentagon: Putin har asperger",
    "url": "http://www.dn.se/nyheter/varlden/pentagon-putin-har-asperger/",
    "imageUrl": "http://d1.dn-static.se/UploadedImages/2015/2/5/f0ace1c6-0b9c-4398-9381-3a4c03dcf9d6/original.jpg",
    "preamble": "Rysslands president Vladimir Putin har Aspergers syndrom slår en grupp fast i det amerikanska försvarshögkvarteret Pentagon. Diagnosen är ”autistisk störning som påverkar alla hans beslut”, enligt dokument som bland andra USA Today kommit över.",
    "date": "2015-02-05T14:07+02:00",
    "rating": 1
  },
  {
    "type": 'Article',
    "title": "Så dåligt rustat är Sverige mot det ryska psykkriget",
    "url": "http://www.dn.se/nyheter/sverige/sa-daligt-rustat-ar-sverige-mot-det-ryska-psykkriget/",
    "imageUrl": "http://d1.dn-static.se/UploadedImages/2015/2/5/364e607b-8c87-47ab-8c7f-d034d1d5fc44/original.jpg",
    "preamble": "Nättroll och mer pengar till statskontrollerade medier. Ryssland rustar sin psykologiska krigföring – men Sveriges beredskap är allt annat än god. ”Den största risken är att våra politiker fattar beslut på felaktiga grunder”, säger Lars Nicander på Försvarshögskolan.",
    "date": "2015-02-05T17:57+02:00",
    "rating": 0
  },
  {
    "type": 'Article',
    "title": "Forskare: E-cigaretter kan skada lungorna",
    "url": "http://www.dn.se/nyheter/vetenskap/forskare-e-cigaretter-kan-skada-lungorna/",
    "preamble": "Möss som utsätts för ånga från cigaretter löper större risk att drabbas av luftvägsinfektioner. Det säger en grupp forskare i USA, som studerat hur möss påverkas av e-cigaretter.",
    "date": "2015-02-05T19:19+02:00",
    "rating": 2
  },
  {
    "type": 'Article',
    "title": "Död man i lägenhet i Ystad - polisen utreder mord",
    "imageUrl": "http://gfx2.aftonbladet-cdn.se/image/20273571/485/normal/f2bb296c8b8fa/ystadskott.jpg",
    "url": "http://www.aftonbladet.se/nyheter/article20273128.ab",
    "preamble": "En man i 25-årsåldern har hittats död i en lägenhet i centrala Ystad. Polisen har spärrat av ett större område och tio polisbilar är på plats. – Vi misstänker mord, säger Calle Persson vid Skånepolisen.",
    "date": "2015-02-05",
    "rating": 0
  },
  {
    "type": 'Article',
    "title": "FN: IS använder barn som självmordsbombare",
    "url": "http://www.dn.se/nyheter/varlden/fn-is-anvander-barn-som-sjalvmordsbombare/",
    "preamble": "Terrorgruppen Islamiska staten använder barn som självmordsbombare, rövar bort unga och säljer dem som sexslavar. Det säger FN i en ny rapport.",
    "date": "2015-02-05T15:40+02:00",
    "rating": -1
  },
  {
    "type": 'Article',
    "title": "IS-terrorn blev FP-kris i Sverige",
    "imageUrl": "http://gfx2.aftonbladet-cdn.se/image/19587226/485/normal/cdcd0c94e17ac/(F)-24FOLKPARTIETS-NYA-TALESPERSONER_1.jpg",
    "url": "http://www.aftonbladet.se/ledare/ledarkronika/danielswedin/article20266562.ab",
    "date": "2015-02-04",
    "rating": 0
  },
  {
    "type": 'Article',
    "title": "IS-flagga på bro i Smedby",
    "imageUrl": "http://d6jf7ok6u1qis.cloudfront.net/imengine/image.php?uuid=b4528a7b-ac4a-4350-b6c8-868f4dba9004&type=preview&source=false&function=thumbnail&width=2500&height=2000&q=72",
    "url": "http://www.barometern.se/kalmar/is-flagga-pa-bro-i-smedby/",
    "preamble": 'Flera läsare hörde på lördagsmorgonen av sig om en IS-flagga som någon har hängt upp på flera broar i Smedby. Polisen upprättade på lördagsförmiddagen en anmälan om förargelseväckande beteende och tog flaggan i beslag.',
    "date": "2014-08-30",
    "rating": 2
  },
  {
    "type": 'Article',
    "title": "Mordet på Emil, 6, på väg att lösas",
    "imageUrl": "http://gfx.aftonbladet-cdn.se/image/20266290/368/normal/e7b26f1d176ef/emil.jpg",
    "url": "http://www.aftonbladet.se/nyheter/article20266105.ab",
    "preamble": 'Den sexårige Emil Rittbo mördades av rånare på flykt. I över 20 år har mördarna gått fria. Nu är fallet på väg att klaras upp.',
    "date": "2015-02-04",
    "rating": -2
  }
];

var authors = [
  {
    "type": 'Author',
    "name": "Marit Sundberg",
    "email": "marit.sundberg@dn.se"
  },
  {
    "type": 'Author',
    "name": "Ossi Carp",
    "email": "ossi.carp@dn.se"
  },
  {
    "type": 'Author',
    "name": "Eric Emanuelsson",
    "email": "eric.emanuelsson@aftonbladet.se"
  },
  {
    "type": 'Author',
    'name': 'Amanda Johansson Murie',
    'email': 'amanda.johanssonmurie@dn.se'
  },
  {
    "type": 'Author',
    "name": "Thomas Hall",
    "email": "thomas.hall@dn.se"
  },
  {
    "type": 'Author',
    "name": "Daniel Swedin",
    "email": "daniel.swedin@aftonbladet.se"
  },
  {
    "type": 'Author',
    "name": "Josefine Frej",
  },
  {
    "type": 'Author',
    "name": "Mira Micic",
  },
  {
    "type": 'Author',
    "name": "Unknown Author",
  },
];

var concepts = [
  {
    "type": 'Concept',
    "name": "Ryssland",
  },
  {
    "type": 'Concept',
    "name": "Putin"
  },
  {
    "type": 'Concept',
    "name": "Polis"
  },
  {
    "type": 'Concept',
    "name": "Mord"
  },
  {
    "type": 'Concept',
    "name": "IS"
  },
  {
    "type": 'Concept',
    "name": "Barn"
  },
  {
    "type": 'Concept',
    "name": "Barack Obama"
  },
  {
    "type": 'Concept',
    "name": "USA"
  },
  {
    "type": 'Concept',
    "name": "Sport"
  },
];

var newspapers = [
  {
    "type": 'Newspaper',
    "name": "DN",
    "logo": "http://www.dn.se/Images/Logos/dnse-logo.png"
  },
  {
    "type": 'Newspaper',
    "name": "Aftonbladet",
    "logo": "http://gfx.aftonbladet-cdn.se/image/15415922/499/normal/8b55cea916eda/aftonbladet.gif"
  },
  {
    "type": 'Newspaper',
    "name": "Barometern",
    "logo": "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22756.504%22%20height%3D%22112.95%22%20viewBox%3D%220%200%20756.504%20112.95%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-5.496-8.86h767v127h-767z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22b%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20overflow%3D%22visible%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url(%23b)%22%3E%3Cpath%20d%3D%22M526.363%20107.896c-2.728%200-3.844-1.529-3.873-3.948v-63.061l2.207-2.417c5.333%2013.782%2024.684%206.245%2021.024-11.322l-.655-.208c-3.146%203.855-10.746%202.249-10.895-2.284l-.609-.174c-3.562%205.75-7.101%2010.188-11.19%2014.56-.72-7.104-5.335-12.703-11.741-15.551h-.855c-4.621%204.35-10.896%2010.457-17.345%2015.494l.828%201.049%203.03-2.164c2.84%201.109%204.325%203.717%204.325%207.799v47.048c0%201.313.187%203.604.37%204.794%201.472%209.451%208.468%2014.581%2016.914%2014.581%2012.364%200%2017.604-7.63%2018.217-16.953l-1.332-.104c-.535%207.824-4.524%2012.861-8.42%2012.861%22%2F%3E%3Cpath%20d%3D%22M613.964%2095.056c-.339%207.979-2.817%2012.122-5.852%2012.122-1.294%200-2.211-.672-2.211-2.526v-61.243c0-2.558-.118-4.832-.458-6.854-1.574-9.542-6.802-13.149-14.354-13.149-7.685%200-13.995%204.536-16.408%2012.608h-.285c-1.346-5.18-5.544-10.086-10.843-12.44h-.854c-4.621%204.351-10.322%209.763-16.77%2014.798l.83%201.047%202.454-1.763c2.842%201.109%204.325%203.421%204.325%207.503l-.027%2065.896h21.814s-.005-68.605-.011-68.704c-.274-5.323.86-9.953%205.42-9.953%201.523%200%202.826%201.286%203.189%202.775.095.357.187%201.16.187%201.807v56.338c0%202.262.199%204.878.507%206.634%201.736%209.808%207.89%2012.142%2014.087%2012.144%2013.056.002%2016.243-7.484%2016.632-16.953l-1.372-.087zM234.072%20101.865l-1.09.606c-2.242-1.753-6.496-4.495-7.795-6.396-.194-.285-.458-1.016-.458-1.394v-59.739l1.089-.695c2.208%201.707%206.496%204.584%207.796%206.481.193.284.458%201.017.458%201.396v59.741zm16.651-72.469c-2.925-1.759-6.478-3.688-9.766-6.299h-1.163c-7.025%205.599-15.488%2010.438-27.729%2017.335-7.586%204.275-9.191%209.607-9.191%2016.972v40.966c0%205.044%203.188%207.889%205.13%209.051%202.849%201.694%206.534%203.688%209.822%206.298h1.104c5.146-4.566%2015.514-10.429%2027.728-17.335%207.58-4.287%209.192-9.608%209.192-16.974v-40.968c.003-5.043-3.188-7.878-5.127-9.046M188.42%20107.896c-2.725%200-3.844-1.529-3.872-3.948v-63.061l2.207-2.417c5.332%2013.782%2026.101%206.245%2022.354-11.322l-.674-.208c-3.601%204.04-11.113%202.271-12.2-2.284l-.611-.174c-3.562%205.75-7.099%2010.188-11.188%2014.56-.722-7.104-5.336-12.703-11.742-15.551h-.856c-4.623%204.35-10.896%2010.457-17.343%2015.494l.826%201.049%203.032-2.164c2.84%201.109%204.326%203.717%204.326%207.799v47.048c0%201.313.184%203.604.367%204.794%201.472%209.451%208.47%2014.581%2016.914%2014.581%2012.367%200%2017.605-7.63%2018.219-16.953l-1.332-.104c-.539%207.824-4.527%2012.861-8.427%2012.861M385.577%2031.773c9.229%2017.332%207.713%2033.11-1.802%2039.717v-38.469l1.802-1.248zm3.83%2076.311c-3.514%200-5.632-2.823-5.632-6.318v-28.986c16.675-7.591%2033.584-28.212%2012.683-50.333h-.987c-4.36%203.921-13.188%2010.035-23.892%2016.653-7.396%204.572-9.605%209.555-9.605%2016.878v30.608c0%201.991.165%204.462.376%206.218%201.552%2012.812%208.759%2019.286%2022.539%2019.286%2012.005%200%2017.522-8.787%2019.28-21.52l-1.362-.146c-1.394%2010.316-5.162%2017.66-13.4%2017.66%22%2F%3E%3Cdefs%3E%3Cpath%20id%3D%22c%22%20d%3D%22M1.001-1h614.339v114.716h-614.339z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22d%22%3E%3Cuse%20xlink%3Ahref%3D%22%23c%22%20overflow%3D%22visible%22%2F%3E%3C%2FclipPath%3E%3Cpath%20clip-path%3D%22url(%23d)%22%20d%3D%22M147.928%20104.658v-63.99l3.884-3.539v-.858c-5.794-2.517-14.677-8.558-19.759-12.774h-.782c-6.646%204.805-18.583%2011.699-26.486%2016.104-5.694%203.168-9.338%206.37-9.338%2015.271v40.8c0%201.092.158%203.101.298%204.07%201.199%208.467%207.324%2012.352%2014.833%2012.352%207.677%200%2013.472-5.042%2016.165-10.65h.236c1.614%205.324%205.355%2010.657%2013.771%2010.657%2013.061%200%2016.229-7.485%2016.617-16.953l-1.373-.082c-.338%207.981-2.895%2012.123-5.854%2012.123-1.292-.004-2.212-.675-2.212-2.531m-29.198%203.316c-.788%200-1.474-.391-1.474-1.702v-71.177l.423-.267c2.335%202.254%205.713%205.096%208.324%206.729v58.229c-1.163%203.058-5.066%208.188-7.273%208.188%22%2F%3E%3Cdefs%3E%3Cpath%20id%3D%22e%22%20d%3D%22M1.001-1h614.339v114.716h-614.339z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22f%22%3E%3Cuse%20xlink%3Ahref%3D%22%23e%22%20overflow%3D%22visible%22%2F%3E%3C%2FclipPath%3E%3Cpath%20clip-path%3D%22url(%23f)%22%20d%3D%22M42.894%2019.403l4.948-3.234c8.767-5.107%2015.789%209.586%2015.789%2016.178%200%207.016-.056%2012.02-9.042%2017.492l-11.127%206.783v-29.851c0-2.658-.197-5.106-.568-7.368m-.252-1.428c-2.435-11.785-10.151-18.04-22.004-18.04-12.59%200-19.02%207.719-19.02%2015.536l1.351.089c0-6.58%204.885-11.901%209.41-11.901%203.848%200%206.434%202.15%206.434%206.748v91.823c0%20.997-.016%202.22-.214%203.287-.51%202.704-1.972%204.793-5.526%204.793-2.876%200-5.999-2.506-5.999-5.372%200-2.714.826-4.606%203.571-5.82%202.479-1.095%204.522-3.104%204.522-7.098%200-4.195-3.385-6.947-6.677-6.947-5.004%200-7.554%204.134-7.554%209.548%200%2010.086%205.253%2017.52%2016.97%2017.52%2013.377%200%2022.718-7.598%2024.747-20.453.479-3.034.809-6.824.809-10.64v-22.864l5.312-3.239c2.234-1.29%204.198-1.911%206.001-1.911%205.174%200%208.166%203.238%208.166%209.254v32.462c0%204.052.021%207.417-.374%208.83-.696%202.499-2.869%203.628-5.012%203.628-4.809%200-9.369-5.767-9.369-16.517%200-7.342%202.729-13.184%208.347-17.675l-.771-1.089c-5.514%204.107-8.997%2010.676-8.997%2018.798%200%2013.129%206.943%2021.367%2018.038%2021.367%2012.842%200%2024.296-8.893%2024.296-31.222%200-24.924-15.083-32.904-29.353-31.291l-.128-.422c11.091-5.357%2026.021-13.156%2026.021-27.812%200-11.747-4.912-17.848-13.157-22.318h-.811l-.014-.027-29.015%2018.975z%22%2F%3E%3Cpath%20d%3D%22M318.735%2036.254c-1.604-8.479-6.887-12.854-13.86-12.854-7.688%200-14.043%204.531-16.453%2012.609h-.235c-1.341-5.182-5.541-10.088-10.836-12.441h-.857c-4.623%204.352-10.896%2010.163-17.343%2015.198l.827%201.047%203.029-2.162c2.843%201.109%204.326%203.421%204.326%207.505l-.029%2065.894h21.815s-.004-69.765-.01-69.862c0-4.396%201.078-8.794%205.412-8.794%201.522%200%202.824%201.286%203.193%202.776.09.356.184%201.16.184%201.806v74.074h21.787v-.078l.002.078v-68.704c0-5.329.861-9.952%205.422-9.952%201.521%200%202.822%201.286%203.194%202.776.089.356.181%201.16.181%201.806v56.338c0%202.262.198%204.878.509%206.633%201.733%209.809%207.886%2012.143%2014.082%2012.144%2013.06.002%2016.242-7.483%2016.632-16.952l-1.373-.082c-.338%207.979-2.819%2012.122-5.854%2012.122-1.291%200-2.211-.672-2.211-2.526l.002-42.449v-18.793c0-2.558-.122-4.834-.457-6.854-1.577-9.542-6.803-13.149-14.354-13.149-7.763%200-14.131%204.625-16.486%2012.854h-.237l-.002-.008zM470.514%2031.713c9.215%2017.332%207.698%2033.164-1.802%2039.775v-38.527l1.802-1.248zm3.824%2076.371c-3.507%200-5.625-2.823-5.625-6.317v-28.987c16.648-7.591%2033.562-28.211%2012.664-50.332h-.987c-4.354%203.92-13.171%2010.034-23.874%2016.653-7.396%204.571-9.605%209.554-9.605%2016.877v30.609c0%201.99.164%204.463.377%206.219%201.553%2012.812%208.76%2019.286%2022.539%2019.286%2011.987%200%2017.5-8.788%2019.255-21.521l-1.363-.146c-1.392%2010.315-5.157%2017.659-13.381%2017.659M415.54%20105.482c1.994%203.819%205.976%206.606%2012.285%206.607%2013.059%200%2016.229-7.483%2016.618-16.953l-1.373-.081c-.337%207.979-2.896%2012.122-5.854%2012.122-1.293%200-2.212-.671-2.212-2.526v-77.328h10.965v-1.334h-10.965v-11.839c.148-5.677%203.847-6.858%207.945-7.153v-1.332c-16.111%200-29.716%205.603-29.716%2019.168v1.158h-6.329v1.334h6.329v65.4c0%201.287.083%203.671.188%204.792.313%203.327%201.06%205.934%202.119%207.965%22%2F%3E%3Cdefs%3E%3Cpath%20id%3D%22g%22%20d%3D%22M-5.496-8.86h767v127h-767z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22h%22%3E%3Cuse%20xlink%3Ahref%3D%22%23g%22%20overflow%3D%22visible%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url(%23h)%22%3E%3Cpath%20d%3D%22M686.906%2021.438v68.777c0%208.021-2.396%2010.229-7.488%2010.229-5.392%200-7.487-2.52-7.487-10.229v-68.777c0-8.652%202.549-10.229%207.487-10.229%205.539%200%207.488%202.519%207.488%2010.229zm-7.49%2091.217c14.314%200%2020.358-7.174%2020.358-23.39v-66.877c0-16.687-6.684-23.39-20.358-23.39-14.312%200-20.358%207.328-20.358%2023.39v66.877c-.001%2016.84%206.522%2023.39%2020.358%2023.39zM745.264%2011.485h-8.43v90.024h6.704v9.72h-26.26v-9.72h6.705v-90.024h-8.434v16.635h-10.916v-27.791h51.546v27.791h-10.915z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
  },
  {
    "type": 'Newspaper',
    "name": "BBC News",
    "logo": "http://static.bbci.co.uk/frameworks/barlesque/2.83.4/desktop/3.5/img/blq-blocks_grey_alpha.png"
  },
  {
    "type": 'Newspaper',
    "name": "Washington Post",
    "logo": "http://img.washingtonpost.com/rw/sites/twpweb/img/logos/twp-hp-logo.png?t=201410130600"
  },
  {
    "type": 'Newspaper',
    "name": "Washington Times",
    "logo": "http://media.washtimes.com/static/beta/v4/images/logo-twt.svg"
  },
  {
    "type": 'Newspaper',
    "name": "Indianapolis Star",
    "logo": "http://www.gannett-cdn.com/sites/indystar/images/site-masthead-logo@2x.png"
  },
  {
    "type": 'Newspaper',
    "name": "USA TODAY",
    "logo": "http://i.usatoday.net/Dynamic_logos%5C2015-02-06-grammy%5C020615-grammy.png"
  },
  {
    "type": 'Newspaper',
    "name": "USA Hockey",
    "logo": "http://assets.ngin.com.s3.amazonaws.com/site_files/usa_hockey/i/sitckyNav/logo.png"
  },
  {
    "type": 'Newspaper',
    "name": "World Soccer Talk",
    "logo": "http://worldsoccertalk.com/wp-content/themes/epltalk/images/logos/WST_logo.png"
  },
  {
    "type": 'Newspaper',
    "name": "Rysslands röst",
    "logo": "http://swedish.ruvr.ru/img/logo/adpt/swe.png"
  },
  {
    "type": 'Newspaper',
    "name": "Svenska Dagbladet",
    "logo": "http://www.svd.se/template/images/sections/ece_frontpage/header.png"
  },
  {
    "type": 'Newspaper',
    "name": "Expressen",
    "logo": "http://x.cdn-expressen.se/images/f3/3f/f33f950895d04c3fb152046c6733291a/original.gif"
  },
  {
    "type": 'Newspaper',
    "name": "Forbes",
    "logo": "http://i.forbesimg.com/assets/img/forbes_logo/forbes_logo_white.svg"
  },
  {
    "type": 'Newspaper',
    "name": "Unknown Paper",
    "logo": "http://www.dyadmusic.co.uk/wp-content/uploads/2014/01/UnknownCopyrightLicence.png"
  }
];

var scopes = [
  {
    type: 'Scope',
    name: 'Lokalt',
  },
  {
    type: 'Scope',
    name: 'Sverige',
  },
  {
    type: 'Scope',
    name: 'Världen',
  },
];

var relations = [
  {
    "start": articles[0],
    "end": concepts[0],
    "label": "Concept"
  },
  {
    "start": articles[1],
    "end": concepts[0],
    "label": "Concept"
  },
  {
    "start": articles[2],
    "end": concepts[0],
    "label": "Concept"
  },
  {
    "start": articles[2],
    "end": concepts[7],
    "label": "Concept"
  },
  {
    "start": articles[0],
    "end": concepts[1],
    "label": "Concept"
  },
  {
    "start": articles[1],
    "end": concepts[1],
    "label": "Concept"
  },
  {
    "start": articles[4],
    "end": concepts[2],
    "label": "Concept"
  },
  {
    "start": articles[4],
    "end": concepts[3],
    "label": "Concept"
  },
  {
    "start": articles[5],
    "end": concepts[3],
    "label": "Concept"
  },
  {
    "start": articles[5],
    "end": concepts[4],
    "label": "Concept"
  },
  {
    "start": articles[6],
    "end": concepts[4],
    "label": "Concept"
  },
  {
    "start": articles[7],
    "end": concepts[4],
    "label": "Concept"
  },
  {
    "start": articles[7],
    "end": concepts[2],
    "label": "Concept"
  },
  {
    "start": articles[8],
    "end": concepts[5],
    "label": "Concept"
  },
  {
    "start": articles[8],
    "end": concepts[3],
    "label": "Concept"
  },
  {
    "start": articles[5],
    "end": concepts[5],
    "label": "Concept"
  },
  {
    "start": articles[0],
    "end": authors[0],
    "label": "Author"
  },
  {
    "start": articles[2],
    "end": authors[0],
    "label": "Author"
  },
  {
    "start": articles[1],
    "end": authors[1],
    "label": "Author"
  },
  {
    "start": articles[3],
    "end": authors[3],
    "label": "Author"
  },
  {
    "start": articles[4],
    "end": authors[2],
    "label": "Author"
  },
  {
    "start": articles[5],
    "end": authors[4],
    "label": "Author"
  },
  {
    "start": articles[6],
    "end": authors[5],
    "label": "Author"
  },
  {
    "start": articles[7],
    "end": authors[6],
    "label": "Author"
  },
  {
    "start": articles[8],
    "end": authors[7],
    "label": "Author"
  },
  {
    "start": articles[0],
    "end": newspapers[0],
    "label": "Newspaper"
  },
  {
    "start": articles[1],
    "end": newspapers[0],
    "label": "Newspaper"
  },
  {
    "start": articles[2],
    "end": newspapers[0],
    "label": "Newspaper"
  },
  {
    "start": articles[3],
    "end": newspapers[0],
    "label": "Newspaper"
  },
  {
    "start": articles[4],
    "end": newspapers[1],
    "label": "Newspaper"
  },
  {
    "start": articles[5],
    "end": newspapers[0],
    "label": "Newspaper"
  },
  {
    "start": articles[6],
    "end": newspapers[1],
    "label": "Newspaper"
  },
  {
    "start": articles[7],
    "end": newspapers[2],
    "label": "Newspaper"
  },
  {
    "start": articles[8],
    "end": newspapers[1],
    "label": "Newspaper"
  },
  {
    "start": articles[0],
    "end": scopes[2],
    "label": "Scope"
  },
  {
    "start": articles[1],
    "end": scopes[2],
    "label": "Scope"
  },
  {
    "start": articles[2],
    "end": scopes[1],
    "label": "Scope"
  },
  {
    "start": articles[3],
    "end": scopes[2],
    "label": "Scope"
  },
  {
    "start": articles[4],
    "end": scopes[1],
    "label": "Scope"
  },
  {
    "start": articles[5],
    "end": scopes[2],
    "label": "Scope"
  },
  {
    "start": articles[6],
    "end": scopes[1],
    "label": "Scope"
  },
  {
    "start": articles[7],
    "end": scopes[0],
    "label": "Scope"
  },
  {
    "start": articles[8],
    "end": scopes[1],
    "label": "Scope"
  },
];

module.exports = {
  articles: articles,
  authors: authors,
  concepts: concepts,
  newspapers: newspapers,
  scopes: scopes,
  relations: relations
};


module.exports.getBarackFromGoogle = function() {
  var results = [{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"2014 års mästare i Major League Soccer, Los Angeles Galaxy, fick i går träffa president Barack Obama i vita huset. Det var storlagets tredje resa till den amerikanska huvudstaden de senaste fyra åren då man fortsätter att rada upp titlar. För lagets ...","unescapedUrl":"http://www.aftonbladet.se/sportbladet/fotboll/internationell/article20258974.ab","url":"http%3A%2F%2Fwww.aftonbladet.se%2Fsportbladet%2Ffotboll%2Finternationell%2Farticle20258974.ab","title":"Här får svensken träffa Barack Obama","titleNoFormatting":"Här får svensken träffa Barack Obama","location":"","publisher":"Aftonbladet","publishedDate":"Tue, 03 Feb 2015 00:47:33 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dse\u0026fd\u003dS\u0026url\u003dhttp://www.aftonbladet.se/sportbladet/fotboll/internationell/article20258974.ab\u0026cid\u003d52779218022903\u0026ei\u003d7mfUVOjfNoKB5Qa9u4HYCA\u0026usg\u003dAFQjCNFIuxZA9zARs6jgAvkYKW1SauUfAQ","language":"sv","image":{"url":"http://gfx2.aftonbladet-cdn.se/image/20259883/485/widescreen/222f7ad4bfccc/65392-730bf35fcec4b4ddc1ad67adb05cf2bbb3e73417.jpg","tbUrl":"http://t0.gstatic.com/images?q\u003dtbn:ANd9GcSAeNBTB1O3JNfaaRc_xraSyGDvW3R1Ufo5geCOphAyp0-5kIg1jt_FsY0","originalContextUrl":"http://www.aftonbladet.se/sportbladet/fotboll/internationell/article20258974.ab","publisher":"Aftonbladet","tbWidth":80,"tbHeight":45}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Efter att Stefan Ishizakis klubb Los Angeles Galaxy i början av december säkrade titeln i MLS-ligan har den förre Elfsborgsspelaren och hans lagkamrater väntat på att få träffa Barack Obama. \u0026quot;Ser jag nervös ut?\u0026quot; Det gick under måndagskvällen att följa ...","unescapedUrl":"http://www.expressen.se/gt/sport/har-far-stefan-ishizaki-traffa-barack-obama/","url":"http%3A%2F%2Fwww.expressen.se%2Fgt%2Fsport%2Fhar-far-stefan-ishizaki-traffa-barack-obama%2F","title":"Här får Stefan Ishizaki träffa Barack Obama","titleNoFormatting":"Här får Stefan Ishizaki träffa Barack Obama","location":"","publisher":"Expressen","publishedDate":"Mon, 02 Feb 2015 14:30:00 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dse\u0026fd\u003dS\u0026url\u003dhttp://www.expressen.se/gt/sport/har-far-stefan-ishizaki-traffa-barack-obama/\u0026cid\u003d0\u0026ei\u003d7mfUVOjfNoKB5Qa9u4HYCA\u0026usg\u003dAFQjCNG4q08iPAQILSzsFhtJ6Mhvw9VXwg","language":"sv","image":{"url":"http://y.cdn-expressen.se/images/4e/59/4e5919c289954ee78f08cfd62e33e8fc/16x9/645@70.jpg","tbUrl":"http://t2.gstatic.com/images?q\u003dtbn:ANd9GcTxphyF3zjffPwNANqIGQ9eRODIJoL6s2ElmnRwtmWBgEx6RGKKkdBiBOg","originalContextUrl":"http://www.expressen.se/gt/sport/har-far-stefan-ishizaki-traffa-barack-obama/","publisher":"Expressen","tbWidth":80,"tbHeight":44}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Jordaniens kung Abdullah, som fördömt handlingen, kortade av sitt USA-besök och begav sig hemåt efter ett extrainkallat möte med president Barack Obama i Vita huset. Bara några timmar senare meddelades att två fångar avrättats. Den ena var mot den...","unescapedUrl":"http://www.svd.se/nyheter/utrikes/abdullah-barack-obama-is-jordanien-pilot-video_4307481.svd","url":"http%3A%2F%2Fwww.svd.se%2Fnyheter%2Futrikes%2Fabdullah-barack-obama-is-jordanien-pilot-video_4307481.svd","title":"Jordanien avrättar två i hämndaktion","titleNoFormatting":"Jordanien avrättar två i hämndaktion","location":"","publisher":"Svenska Dagbladet","publishedDate":"Tue, 03 Feb 2015 20:52:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dse\u0026fd\u003dS\u0026url\u003dhttp://www.svd.se/nyheter/utrikes/abdullah-barack-obama-is-jordanien-pilot-video_4307481.svd\u0026cid\u003d0\u0026ei\u003d7mfUVOjfNoKB5Qa9u4HYCA\u0026usg\u003dAFQjCNGo5VznEbe-AnfXKsVHo5Wt1tmT8Q","language":"sv"},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Barack Obama tror inte att en verklig militär konflikt mellan USA och Ryssland är ett vist beslut för Amerika och hela världen. Washington försöker dock förstärka de Nato-länder som gränsar till Ryssland. Vita huset tänker fortsätta sin politiska kurs ...","unescapedUrl":"http://swedish.ruvr.ru/2015_02_02/Barack-Obama-vi-har-framjat-maktskiftet-i-Ukraina-7996/","url":"http%3A%2F%2Fswedish.ruvr.ru%2F2015_02_02%2FBarack-Obama-vi-har-framjat-maktskiftet-i-Ukraina-7996%2F","title":"Barack Obama: vi har främjat maktskiftet i Ukraina","titleNoFormatting":"Barack Obama: vi har främjat maktskiftet i Ukraina","location":"","publisher":"Rysslands röst","publishedDate":"Mon, 02 Feb 2015 08:45:43 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dse\u0026fd\u003dS\u0026url\u003dhttp://swedish.ruvr.ru/2015_02_02/Barack-Obama-vi-har-framjat-maktskiftet-i-Ukraina-7996/\u0026cid\u003d52779218880300\u0026ei\u003d7mfUVOjfNoKB5Qa9u4HYCA\u0026usg\u003dAFQjCNHvFJN_W6zWBJhdGiuodZcT9mzZOQ","language":"sv"}];
  var publishers = results
    .map(function(result) {
      return newspapers
        .filter(function(newspaper) {
          return newspaper.name.indexOf(result.publisher) == 0;
        })[0] || newspapers[14];
    });

  var entities = results
    .map(function(result) {
      return {
        "type": 'Article',
        "title": result.title,
        "url": result.unescapedUrl,
        "imageUrl": (result.image || {}).url,
        "preamble": result.content,
        "date": result.publishedDate,
        "rating": 0
      };
    }).concat(publishers);

  var relations = [];
  publishers.forEach(function(publisher, index) {
    relations.push({
      start: entities[index],
      end: publisher,
      label: 'Newspaper',
    });

    relations.push({
      start: entities[index],
      end: authors[8],
      label: 'Author',
    });
  });

  results.forEach(function(result, index) {
    relations.push({
      start: entities[index],
      end: scopes[2],
      label: 'Scope',
    });

    relations.push({
      start: entities[index],
      end: concepts[6],
      label: 'Concept',
    });
    relations.push({
      start: entities[index],
      end: concepts[7],
      label: 'Concept',
    });
  });

  return [entities.concat(concepts).concat(scopes).concat(authors).concat(newspapers), relations];
};


module.exports.getUsaFromGoogle = function() {
  var results = [{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"With exiles such as Jose Abreu, Yasiel Puig, Aroldis Chapman and Yoenis Cespedes now plying their trade in the USA, Cuba finds itself lagging behind other baseball-loving Latin countries. Ironically, the cure for Cuban baseball might be found in what ...","unescapedUrl":"http://www.usatoday.com/story/sports/mlb/2015/02/04/cuba-mlb-defections-caribbean-series/22897737/","url":"http%3A%2F%2Fwww.usatoday.com%2Fstory%2Fsports%2Fmlb%2F2015%2F02%2F04%2Fcuba-mlb-defections-caribbean-series%2F22897737%2F","title":"Can agreement with USA fix defects in Cuban baseball?","titleNoFormatting":"Can agreement with USA fix defects in Cuban baseball?","location":"","publisher":"USA TODAY","publishedDate":"Wed, 04 Feb 2015 18:26:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.usatoday.com/story/sports/mlb/2015/02/04/cuba-mlb-defections-caribbean-series/22897737/\u0026cid\u003d52778731145132\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNH9xwYNb5Jj8XzeeahNACaGwEEbOw","language":"en","image":{"url":"http://www.gannett-cdn.com/-mm-/f15c9f647aa85487291bebef7f42dda556d59b8e/c\u003d62-0-3565-2635\u0026r\u003dx513\u0026c\u003d680x510/local/-/media/USATODAY/USATODAY/2014/04/30//1398906011000-4-30-abreu.jpg","tbUrl":"http://t3.gstatic.com/images?q\u003dtbn:ANd9GcRd9eqbKeuCW2PFRl2gtknuIn0c39T5sHcOHWlB_7EHGPxr3v0bNC4bSRo","originalContextUrl":"http://www.usatoday.com/story/sports/mlb/2015/02/04/cuba-mlb-defections-caribbean-series/22897737/","publisher":"USA TODAY","tbWidth":80,"tbHeight":60}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"http://news.google.com/news/story?ncl\u003dd3VaMmc1WZUn50MwAI6TdeE6DvF8M\u0026hl\u003den\u0026ned\u003dus","content":"McFarland, USA is a Mayhem Pictures production which will be released by Walt Disney Walt Disney on March 20th. The Hollywood Reporter “reported” the budget at $17 million way back in December of 2013, but I would be surprised if the film ended up...","unescapedUrl":"http://www.forbes.com/sites/scottmendelson/2015/02/05/review-kevin-costners-mcfarland-usa-is-an-empathic-underdog-sports-drama/","url":"http%3A%2F%2Fwww.forbes.com%2Fsites%2Fscottmendelson%2F2015%2F02%2F05%2Freview-kevin-costners-mcfarland-usa-is-an-empathic-underdog-sports-drama%2F","title":"Review: Kevin Costner Shines In McFarland, USA","titleNoFormatting":"Review: Kevin Costner Shines In McFarland, USA","location":"","publisher":"Forbes","publishedDate":"Thu, 05 Feb 2015 08:52:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.forbes.com/sites/scottmendelson/2015/02/05/review-kevin-costners-mcfarland-usa-is-an-empathic-underdog-sports-drama/\u0026cid\u003d52778730985301\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNFxj9_QTm2e4PvwNtU1P4Cs3Nn3Eg","language":"en","image":{"url":"http://i57.tinypic.com/ljtsi.jpg","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcTGBm4CbNUGIu_EG3vjDTSYbWQNl1KFNi1d4DzUjPoJisj8bpIn_jtpkR4","originalContextUrl":"http://www.forbes.com/sites/scottmendelson/2015/02/05/review-kevin-costners-mcfarland-usa-is-an-empathic-underdog-sports-drama/","publisher":"Forbes","tbWidth":53,"tbHeight":80},"relatedStories":[{"unescapedUrl":"http://variety.com/2015/film/reviews/film-review-mcfarland-usa-1201423326/","url":"http%3A%2F%2Fvariety.com%2F2015%2Ffilm%2Freviews%2Ffilm-review-mcfarland-usa-1201423326%2F","title":"Film Review: McFarland, USA","titleNoFormatting":"Film Review: McFarland, USA","location":"","publisher":"Variety","publishedDate":"Wed, 04 Feb 2015 09:00:37 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://variety.com/2015/film/reviews/film-review-mcfarland-usa-1201423326/\u0026cid\u003d52778730985301\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNFn19cRTamdY-vUBj2XozJILHml9w","language":"en"},{"unescapedUrl":"http://www.hollywoodreporter.com/review/mcfarland-usa-film-review-770069","url":"http%3A%2F%2Fwww.hollywoodreporter.com%2Freview%2Fmcfarland-usa-film-review-770069","title":"McFarland, USA: Film Review","titleNoFormatting":"McFarland, USA: Film Review","location":"","publisher":"Hollywood Reporter","publishedDate":"Wed, 04 Feb 2015 08:52:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.hollywoodreporter.com/review/mcfarland-usa-film-review-770069\u0026cid\u003d52778730985301\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNERze-gq5PVhG-3OrYl4i8kD4mEuQ","language":"en"}]},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"After a scoreless first period, Team USA opened the scoring on the power play 10:24 into the second stanza. Nikko Landeros (Chicago, Ill.) took a pass from Declan Farmer (Tampa, Fla.) and found Kevin McKee (Chicago, Ill.) in front of the net to give ...","unescapedUrl":"http://www.usahockey.com/news_article/show/475447?referrer_id\u003d752796","url":"http%3A%2F%2Fwww.usahockey.com%2Fnews_article%2Fshow%2F475447%3Freferrer_id%3D752796","title":"USA Defeats Korea in World Sled Challenge Semifinal","titleNoFormatting":"USA Defeats Korea in World Sled Challenge Semifinal","location":"","publisher":"USA Hockey","publishedDate":"Thu, 05 Feb 2015 15:29:01 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.usahockey.com/news_article/show/475447%3Freferrer_id%3D752796\u0026cid\u003d52778732026718\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNHwq6ayIFd0yeCXwz-EwkR0u17Y1w","language":"en","image":{"url":"http://cdn2.sportngin.com/attachments/photo/4440/0433/OIL_8842_medium.JPG","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcRnHuDRfWq3SXhecYEKHUuD3PXHzyVP5CL5RF-fU9-kfYnem0nJhSwtkzE","originalContextUrl":"http://www.usahockey.com/news_article/show/475447?referrer_id\u003d752796","publisher":"USA Hockey","tbWidth":80,"tbHeight":58}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"http://news.google.com/news/story?ncl\u003ddDingpmtmYtbnPMrPF8e-T4ItwWrM\u0026hl\u003den\u0026ned\u003dus","content":"2015 got off to a bad start for the USA as they fell 3-2 on the road in Chile. Overall it was a mixed performance with good showings by Michael Bradley and Jozy Altidore, but poor showing from Jermaine Jones and Clint Dempsey. The USA has now lost ...","unescapedUrl":"https://worldsoccertalk.com/2015/02/05/preview-of-the-usa-vs-panama-international-friendly/","url":"https%3A%2F%2Fworldsoccertalk.com%2F2015%2F02%2F05%2Fpreview-of-the-usa-vs-panama-international-friendly%2F","title":"Preview of the USA vs. Panama international friendly","titleNoFormatting":"Preview of the USA vs. Panama international friendly","location":"","publisher":"World Soccer Talk","publishedDate":"Thu, 05 Feb 2015 19:22:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttps://worldsoccertalk.com/2015/02/05/preview-of-the-usa-vs-panama-international-friendly/\u0026cid\u003d52778732136432\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNFtwJ_YbxJI7vzY_rAnhLtTq8RSWw","language":"en","image":{"url":"http://worldsoccertalk.com/wp-content/uploads/2014/03/jurgen-klinsmann.jpg","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcQRwsG12fV0e4MRci0K76YrdrUsvf4YQQcEUkF5J1rFbwH2lbH_4R8UDz0","originalContextUrl":"https://worldsoccertalk.com/2015/02/05/preview-of-the-usa-vs-panama-international-friendly/","publisher":"World Soccer Talk","tbWidth":80,"tbHeight":53},"relatedStories":[{"unescapedUrl":"http://www.socceramerica.com/article/62526/usa-panama-three-storylines-to-follow.html","url":"http%3A%2F%2Fwww.socceramerica.com%2Farticle%2F62526%2Fusa-panama-three-storylines-to-follow.html","title":"USA-Panama: Three storylines to follow","titleNoFormatting":"USA-Panama: Three storylines to follow","location":"","publisher":"Soccer America","publishedDate":"Thu, 05 Feb 2015 19:33:45 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.socceramerica.com/article/62526/usa-panama-three-storylines-to-follow.html\u0026cid\u003d52778732136432\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNHMuC7nLU65D04LIHmp_FrmNcgrSg","language":"en"},{"unescapedUrl":"http://www.mlssoccer.com/news/article/2015/02/05/usa-vs-panama-international-friendly-match-preview","url":"http%3A%2F%2Fwww.mlssoccer.com%2Fnews%2Farticle%2F2015%2F02%2F05%2Fusa-vs-panama-international-friendly-match-preview","title":"USA vs. Panama | International Friendly Match Preview","titleNoFormatting":"USA vs. Panama | International Friendly Match Preview","location":"","publisher":"MLSsoccer.com","publishedDate":"Thu, 05 Feb 2015 16:56:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.mlssoccer.com/news/article/2015/02/05/usa-vs-panama-international-friendly-match-preview\u0026cid\u003d52778732136432\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNHpouJoXNsp3u1W-g6rt82ecYtjzA","language":"en"},{"unescapedUrl":"http://mlsgb.com/2015/02/05/international-preview-prediction-usa-vs-panama/","url":"http%3A%2F%2Fmlsgb.com%2F2015%2F02%2F05%2Finternational-preview-prediction-usa-vs-panama%2F","title":"International Preview and Prediction: USA vs Panama","titleNoFormatting":"International Preview and Prediction: USA vs Panama","location":"","publisher":"MLSGB (blog)","publishedDate":"Thu, 05 Feb 2015 11:14:32 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://mlsgb.com/2015/02/05/international-preview-prediction-usa-vs-panama/\u0026cid\u003d52778732136432\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNFsVc5l2T2AqgeGNdyWVcyZ3kxrLA","language":"en"}]}];
  var publishers = results
    .map(function(result) {
      return newspapers
        .filter(function(newspaper) {
          return newspaper.name.indexOf(result.publisher) == 0;
        })[0] || newspapers[14];
    });

  var entities = results
    .map(function(result) {
      return {
        "type": 'Article',
        "title": result.title,
        "url": result.unescapedUrl,
        "imageUrl": result.image.url,
        "preamble": result.content,
        "date": result.publishedDate,
        "rating": 0
      };
    }).concat(publishers);

  var relations = [];
  publishers.forEach(function(publisher, index) {
    relations.push({
      start: entities[index],
      end: publisher,
      label: 'Newspaper',
    });

    relations.push({
      start: entities[index],
      end: authors[8],
      label: 'Author',
    });
  });

  results.forEach(function(_, index) {
    relations.push({
      start: entities[index],
      end: scopes[2],
      label: 'Scope',
    });

    relations.push({
      start: entities[index],
      end: concepts[7],
      label: 'Concept',
    });
  });

  relations.push({
    start: entities[1],
    end: concepts[8],
    label: 'Concept',
  });

  relations.push({
    start: entities[2],
    end: concepts[8],
    label: 'Concept',
  });

  return [entities.concat(concepts).concat(scopes).concat(authors).concat(newspapers), relations];
};

module.exports.getSportFromGoogle = function() {
  var results = [{"GsearchResultClass":"GnewsSearch","clusterUrl":"http://news.google.com/news/story?ncl\u003ddIj-eqV7wkMNypMofNXV9HdmnC9CM\u0026hl\u003den\u0026ned\u003dus","content":"Fan intensity was measured by looking at per-game hockey attendance as a percentage of total population and Google search traffic that includes the word “hockey.” Quality of life took into account crime, disposable income, unemployment, and dining and...","unescapedUrl":"http://www.startribune.com/local/290957391.html","url":"http%3A%2F%2Fwww.startribune.com%2Flocal%2F290957391.html","title":"Grand Forks crowned Americas Best Hockey Town","titleNoFormatting":"Grand Forks crowned Americas Best Hockey Town","location":"","publisher":"Minneapolis Star Tribune","publishedDate":"Thu, 05 Feb 2015 11:51:05 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.startribune.com/local/290957391.html\u0026cid\u003d52778731822863\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNH6D-HCcDisETSw12adESmBjE4v1w","language":"en","image":{"url":"https://bringmethenews.files.wordpress.com/2015/02/getty_hockey-fans.jpg?w\u003d458","tbUrl":"http://t0.gstatic.com/images?q\u003dtbn:ANd9GcSMe4Clk7sph5WJgLDpUxG9cOioIhchQpG3jUCA6CKh3UK1j5cXNMVGSYwR","originalContextUrl":"http://bringmethenews.com/2015/02/05/americas-best-hockey-towns-a-study-that-minnesotans-will-hate/","publisher":"Rick Kupchella's BringMeTheNews","tbWidth":80,"tbHeight":53},"relatedStories":[{"unescapedUrl":"http://www.grandforksherald.com/sports/local-sports/3672943-local-clipboard-boys-hockey-girls-hockey-girls-basketball-prep-wrestling","url":"http%3A%2F%2Fwww.grandforksherald.com%2Fsports%2Flocal-sports%2F3672943-local-clipboard-boys-hockey-girls-hockey-girls-basketball-prep-wrestling","title":"LOCAL CLIPBOARD: Boys hockey, girls hockey, girls basketball, prep wrestling","titleNoFormatting":"LOCAL CLIPBOARD: Boys hockey, girls hockey, girls basketball, prep wrestling","location":"","publisher":"Grand Forks Herald","publishedDate":"Thu, 05 Feb 2015 21:37:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.grandforksherald.com/sports/local-sports/3672943-local-clipboard-boys-hockey-girls-hockey-girls-basketball-prep-wrestling\u0026cid\u003d52778731822863\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNHjxvrywah-olazP53HpouMywu20g","language":"en"},{"unescapedUrl":"http://www.inforum.com/news/3672803-grand-forks-named-top-hockey-town-us","url":"http%3A%2F%2Fwww.inforum.com%2Fnews%2F3672803-grand-forks-named-top-hockey-town-us","title":"Grand Forks named top hockey town in US","titleNoFormatting":"Grand Forks named top hockey town in US","location":"","publisher":"INFORUM","publishedDate":"Thu, 05 Feb 2015 19:52:12 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.inforum.com/news/3672803-grand-forks-named-top-hockey-town-us\u0026cid\u003d52778731822863\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNFhDa_1T8sUAh4_YODZ14yHql-tQw","language":"en"},{"unescapedUrl":"http://bringmethenews.com/2015/02/05/americas-best-hockey-towns-a-study-that-minnesotans-will-hate/","url":"http%3A%2F%2Fbringmethenews.com%2F2015%2F02%2F05%2Famericas-best-hockey-towns-a-study-that-minnesotans-will-hate%2F","title":"Americas Best Hockey Towns? A study that Minnesotans will hate","titleNoFormatting":"Americas Best Hockey Towns? A study that Minnesotans will hate","location":"","publisher":"Rick Kupchella's BringMeTheNews","publishedDate":"Thu, 05 Feb 2015 12:37:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://bringmethenews.com/2015/02/05/americas-best-hockey-towns-a-study-that-minnesotans-will-hate/\u0026cid\u003d52778731822863\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNG4nAy16VbsZT4eULI0DqvAP-1cjQ","language":"en"},{"unescapedUrl":"http://www.collegehockeynews.com/news/2015/02/05_behind_the_scenes_north_dakotas.php","url":"http%3A%2F%2Fwww.collegehockeynews.com%2Fnews%2F2015%2F02%2F05_behind_the_scenes_north_dakotas.php","title":"Behind the Scenes: North Dakotas Finest","titleNoFormatting":"Behind the Scenes: North Dakotas Finest","location":"","publisher":"College Hockey News","publishedDate":"Thu, 05 Feb 2015 10:45:00 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.collegehockeynews.com/news/2015/02/05_behind_the_scenes_north_dakotas.php\u0026cid\u003d52778731822863\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNE3FsB0ro_3_gcb5N2HETVFTWDgRQ","language":"en"}]},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Dobber launched his fantasy hockey website DobberHockey back in 2005 and has been Puck Daddys resident fantasy hockey expert since 2009. Just a month away from the NHL Trade Deadline and just six weeks away from fantasy hockey playoffs in a lot...","unescapedUrl":"http://sports.yahoo.com/blogs/nhl-puck-daddy/yahoo-fantasy-hockey--why-bobby-ryan-is-a-stud--victor-hedman-a-dud-143742473.html","url":"http%3A%2F%2Fsports.yahoo.com%2Fblogs%2Fnhl-puck-daddy%2Fyahoo-fantasy-hockey--why-bobby-ryan-is-a-stud--victor-hedman-a-dud-143742473.html","title":"Yahoo Fantasy Hockey: Why Bobby Ryan is a stud, Victor Hedmans a dud","titleNoFormatting":"Yahoo Fantasy Hockey: Why Bobby Ryan is a stud, Victor Hedmans a dud","location":"","publisher":"Yahoo Sports (blog)","publishedDate":"Thu, 05 Feb 2015 06:37:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://sports.yahoo.com/blogs/nhl-puck-daddy/yahoo-fantasy-hockey--why-bobby-ryan-is-a-stud--victor-hedman-a-dud-143742473.html\u0026cid\u003d52778731679709\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNGzx-a7_CG6uwJTIoOEG4Dpver4VQ","language":"en","image":{"url":"http://l3.yimg.com/bt/api/res/1.2/RbrOwFSEduGOgBiZJzdRJA--/YXBwaWQ9eW5ld3M7Zmk9ZmlsbDtoPTM3NztpbD1wbGFuZTtweG9mZj01MDtweW9mZj0wO3E9NzU7dz02NzA-/http://l.yimg.com/os/publish-images/sports/2015-02-05/cd1e3a60-ad40-11e4-a040-c1ccd102df16_462570732.jpg","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcQg8CoVc8YygeSI8x8QkukzvMz-rUPM9V3-ojn0JC_dcjL2kCOM_wU_mReE","originalContextUrl":"http://sports.yahoo.com/blogs/nhl-puck-daddy/yahoo-fantasy-hockey--why-bobby-ryan-is-a-stud--victor-hedman-a-dud-143742473.html","publisher":"Yahoo Sports (blog)","tbWidth":80,"tbHeight":45}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"http://news.google.com/news/story?ncl\u003ddNd4nmD5ag7KvrM_3U8V_mPY3BZ3M\u0026hl\u003den\u0026ned\u003dus","content":"RANDOLPH – A portion of Sussex Turnpike was closed after a bus carrying the Delbarton junior varsity ice hockey team caught fire Thursday afternoon, Randolph police said. Detective Lt. Christopher Giuliani said a private Wilkerson Transportation bus ...","unescapedUrl":"http://www.dailyrecord.com/story/news/local/2015/02/05/school-bus-catches-fire-randolph/22938735/","url":"http%3A%2F%2Fwww.dailyrecord.com%2Fstory%2Fnews%2Flocal%2F2015%2F02%2F05%2Fschool-bus-catches-fire-randolph%2F22938735%2F","title":"Bus carrying Delbarton ice hockey team catches fire in Randolph","titleNoFormatting":"Bus carrying Delbarton ice hockey team catches fire in Randolph","location":"","publisher":"Daily Record","publishedDate":"Thu, 05 Feb 2015 13:01:13 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.dailyrecord.com/story/news/local/2015/02/05/school-bus-catches-fire-randolph/22938735/\u0026cid\u003d52778731627972\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNFgcvFkmksGnJn_aQeE4iVU_IWtzA","language":"en","image":{"url":"http://media.nj.com/morris_impact/photo/randolphfire1jpg-643a912bf46b3846.jpg","tbUrl":"http://t0.gstatic.com/images?q\u003dtbn:ANd9GcQYu4omtHqQZ0v9Iq20euQtvnDcowP4c_NIQ__cNRxa5sn1sUJq8XCuMoc_","originalContextUrl":"http://www.nj.com/morris/index.ssf/2015/02/no_injuries_reported_following_school_bus_fire_in.html","publisher":"NJ.com","tbWidth":80,"tbHeight":70},"relatedStories":[{"unescapedUrl":"http://newjersey.news12.com/news/delbarton-jv-hockey-team-escapes-injury-after-bus-catches-fire-1.9908996","url":"http%3A%2F%2Fnewjersey.news12.com%2Fnews%2Fdelbarton-jv-hockey-team-escapes-injury-after-bus-catches-fire-1.9908996","title":"Hockey team escapes injury after bus fire","titleNoFormatting":"Hockey team escapes injury after bus fire","location":"","publisher":"News 12 New Jersey","publishedDate":"Thu, 05 Feb 2015 14:24:06 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://newjersey.news12.com/news/delbarton-jv-hockey-team-escapes-injury-after-bus-catches-fire-1.9908996\u0026cid\u003d52778731627972\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNHliv6Tfdpdv1sr6D3YjEK3QcY18Q","language":"en"}]},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Martin Brodeur, who officially retired last week, after twenty-two seasons in the National Hockey League, is the most accomplished goaltender in the history of the sport, but his legacy is somewhat fraught. Im referring to the painted lines beneath ...","unescapedUrl":"http://www.newyorker.com/news/sporting-scene/martin-brodeur-hockey-shifting-boundaries","url":"http%3A%2F%2Fwww.newyorker.com%2Fnews%2Fsporting-scene%2Fmartin-brodeur-hockey-shifting-boundaries","title":"Shifting Boundaries","titleNoFormatting":"Shifting Boundaries","location":"","publisher":"The New Yorker","publishedDate":"Thu, 05 Feb 2015 04:56:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.newyorker.com/news/sporting-scene/martin-brodeur-hockey-shifting-boundaries\u0026cid\u003d52778731800421\u0026ei\u003dt43UVMjbLcT94gb_n4CIBQ\u0026usg\u003dAFQjCNHXcwSJZQXy6Xx1CBkTgSN7Z6i7nw","language":"en","image":{"url":"http://www.newyorker.com/wp-content/uploads/2015/02/McGrath-Brodeur-1200.jpg","tbUrl":"http://t0.gstatic.com/images?q\u003dtbn:ANd9GcSnVi3uKLpa0CySZtCQAsFQFASWH6sqXIr6v3GwgZCgph0ZUuzckO56rFM","originalContextUrl":"http://www.newyorker.com/news/sporting-scene/martin-brodeur-hockey-shifting-boundaries","publisher":"The New Yorker","tbWidth":80,"tbHeight":80}}];
  results = results.concat([{"GsearchResultClass":"GnewsSearch","clusterUrl":"http://news.google.com/news/story?ncl\u003dd5E0OiatTwdCARMs-DOIdQnKISBYM\u0026hl\u003den\u0026ned\u003dus","content":"MALABO, Equatorial Guinea (AP) — Police used tear gas to disperse angry fans during an African Cup semifinal on Thursday. With Ghana leading host Equatorial Guinea 3-0, unruly fans forced Gabonese referee Eric Otogo-Castane to halt the match with...","unescapedUrl":"http://www.huffingtonpost.com/2015/02/05/ghana-soccer-riots_n_6625048.html","url":"http%3A%2F%2Fwww.huffingtonpost.com%2F2015%2F02%2F05%2Fghana-soccer-riots_n_6625048.html","title":"Ghana Soccer Match Interrupted By Riots, Tear Gas","titleNoFormatting":"Ghana Soccer Match Interrupted By Riots, Tear Gas","location":"","publisher":"Huffington Post","publishedDate":"Thu, 05 Feb 2015 13:44:18 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.huffingtonpost.com/2015/02/05/ghana-soccer-riots_n_6625048.html\u0026cid\u003d52778731097835\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNHwTPmo6jaXlXr8dVxy0Z-7n3EpUw","language":"en","image":{"url":"http://assets.nydailynews.com/polopoly_fs/1.2104826.1423173933!/img/httpImage/image.jpg_gen/derivatives/article_970/soccer-nations.jpg","tbUrl":"http://t3.gstatic.com/images?q\u003dtbn:ANd9GcTrmSUsrq_7W-ltGFpGcBjtA9qNm7-AQlSowgQCQAs8UZ4f_KKS45M06Hox","originalContextUrl":"http://www.nydailynews.com/sports/fans-force-halt-african-cup-semifinal-soccer-match-article-1.2104811","publisher":"New York Daily News","tbWidth":80,"tbHeight":54},"relatedStories":[{"unescapedUrl":"http://www.bloomberg.com/news/articles/2015-02-05/ghana-to-buy-80mw-of-power-from-ivory-coast-to-watch-soccer-game","url":"http%3A%2F%2Fwww.bloomberg.com%2Fnews%2Farticles%2F2015-02-05%2Fghana-to-buy-80mw-of-power-from-ivory-coast-to-watch-soccer-game","title":"Ghana to Buy 80MW of Power From Ivory Coast to Watch Soccer Game","titleNoFormatting":"Ghana to Buy 80MW of Power From Ivory Coast to Watch Soccer Game","location":"","publisher":"Bloomberg","publishedDate":"Thu, 05 Feb 2015 00:26:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.bloomberg.com/news/articles/2015-02-05/ghana-to-buy-80mw-of-power-from-ivory-coast-to-watch-soccer-game\u0026cid\u003d52778731097835\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNH0Z11E-XQBufEdIboroN47Qruh3g","language":"en"},{"unescapedUrl":"http://www.nydailynews.com/sports/fans-force-halt-african-cup-semifinal-soccer-match-article-1.2104811","url":"http%3A%2F%2Fwww.nydailynews.com%2Fsports%2Ffans-force-halt-african-cup-semifinal-soccer-match-article-1.2104811","title":"Fans force halt of African Cup semifinal soccer match","titleNoFormatting":"Fans force halt of African Cup semifinal soccer match","location":"","publisher":"New York Daily News","publishedDate":"Thu, 05 Feb 2015 13:56:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.nydailynews.com/sports/fans-force-halt-african-cup-semifinal-soccer-match-article-1.2104811\u0026cid\u003d52778731097835\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNEcuydwp2oIHSvV7U7ZMktlS0qRYQ","language":"en"},{"unescapedUrl":"http://af.reuters.com/article/sportsNews/idAFKBN0LA0HN20150206","url":"http%3A%2F%2Faf.reuters.com%2Farticle%2FsportsNews%2FidAFKBN0LA0HN20150206","title":"Grant worried about player security during chaotic semi","titleNoFormatting":"Grant worried about player security during chaotic semi","location":"","publisher":"Reuters Africa","publishedDate":"Thu, 05 Feb 2015 14:52:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://af.reuters.com/article/sportsNews/idAFKBN0LA0HN20150206\u0026cid\u003d52778731097835\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNFqQVDs2bD0RW5eRDakLgmDcEU3zw","language":"en"}]},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Those players wont be appearing in Boise, but the most likely team, Athletic Bilbao, is one of only three clubs never to be relegated to a lower division - the others are Real Madrid and FC Barcelona, two of the most popular soccer teams in the world ...","unescapedUrl":"http://www.idahostatesman.com/2015/02/06/3631189/basque-soccer-in-boise-what-we.html","url":"http%3A%2F%2Fwww.idahostatesman.com%2F2015%2F02%2F06%2F3631189%2Fbasque-soccer-in-boise-what-we.html","title":"Basque soccer in Boise: What we know","titleNoFormatting":"Basque soccer in Boise: What we know","location":"","publisher":"The Idaho Statesman","publishedDate":"Thu, 05 Feb 2015 23:18:45 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.idahostatesman.com/2015/02/06/3631189/basque-soccer-in-boise-what-we.html\u0026cid\u003d0\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNFOkf0j3QVmApszgsUKh6LOi4BY3g","language":"en"},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"There was an odd moment during the ceremony last month awarding Cristiano Ronaldo FIFAs Ballon dOr award, and it wasnt the Portuguese strikers meme-worthy scream in celebration of being recognized as the best soccer player in the world (for the ...","unescapedUrl":"http://www.theatlantic.com/entertainment/archive/2015/02/messi-and-ronaldo-are-historys-greatest-soccer-players/385158/","url":"http%3A%2F%2Fwww.theatlantic.com%2Fentertainment%2Farchive%2F2015%2F02%2Fmessi-and-ronaldo-are-historys-greatest-soccer-players%2F385158%2F","title":"Messi and Ronaldo Are The Greatest Soccer Players in History","titleNoFormatting":"Messi and Ronaldo Are The Greatest Soccer Players in History","location":"","publisher":"The Atlantic","publishedDate":"Thu, 05 Feb 2015 09:26:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.theatlantic.com/entertainment/archive/2015/02/messi-and-ronaldo-are-historys-greatest-soccer-players/385158/\u0026cid\u003d52778732286490\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNH14bI304Ldk9UsWAgiULhCQ30g5g","language":"en","image":{"url":"http://cdn.theatlantic.com/static/newsroom/img/mt/2015/02/RTR4EMP9/lead.jpg?njbdtu","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcRDpB_rqHcrNW3nUp_tQ_JI3mYzc9i9Y59MIMGqsTF1fyphRz1SsgFhNUw","originalContextUrl":"http://www.theatlantic.com/entertainment/archive/2015/02/messi-and-ronaldo-are-historys-greatest-soccer-players/385158/","publisher":"The Atlantic","tbWidth":80,"tbHeight":74}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"http://news.google.com/news/story?ncl\u003ddh7aWJuod2NUjWMYg2bcp6i5GyDsM\u0026hl\u003den\u0026ned\u003dus","content":"Privately-held New Balance announced plans to enter the soccer market in simultaneous star-studded events in New York and London, featuring Arsenal midfielder Aaron Ramsey in London and Costa Rican footballer and Vancouver Whitecap Kendall...","unescapedUrl":"http://www.forbes.com/sites/kurtbadenhausen/2015/02/04/new-balance-enters-global-soccer-market/","url":"http%3A%2F%2Fwww.forbes.com%2Fsites%2Fkurtbadenhausen%2F2015%2F02%2F04%2Fnew-balance-enters-global-soccer-market%2F","title":"New Balance Challenges Nike And Adidas With Entry Into Global Soccer Market","titleNoFormatting":"New Balance Challenges Nike And Adidas With Entry Into Global Soccer Market","location":"","publisher":"Forbes","publishedDate":"Wed, 04 Feb 2015 12:30:27 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.forbes.com/sites/kurtbadenhausen/2015/02/04/new-balance-enters-global-soccer-market/\u0026cid\u003d52778731137146\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNH1oXPX4HSy885lzBnpErS6nx1vXA","language":"en","image":{"url":"http://blogs-images.forbes.com/kurtbadenhausen/files/2015/02/ramsey.jpg","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcRE0v9bkmTghCU9DT1YWartw78XjjruXYchXFM9YKfkbst8QZvNGs36fBMe","originalContextUrl":"http://www.forbes.com/sites/kurtbadenhausen/2015/02/04/new-balance-enters-global-soccer-market/","publisher":"Forbes","tbWidth":80,"tbHeight":70},"relatedStories":[{"unescapedUrl":"http://abcnews.go.com/Sports/wireStory/balance-joins-soccer-market-liverpool-shirt-deal-28744317","url":"http%3A%2F%2Fabcnews.go.com%2FSports%2FwireStory%2Fbalance-joins-soccer-market-liverpool-shirt-deal-28744317","title":"New Balance Joins Soccer Market With Liverpool Shirt Deal","titleNoFormatting":"New Balance Joins Soccer Market With Liverpool Shirt Deal","location":"","publisher":"ABC News","publishedDate":"Thu, 05 Feb 2015 05:30:00 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://abcnews.go.com/Sports/wireStory/balance-joins-soccer-market-liverpool-shirt-deal-28744317\u0026cid\u003d52778731137146\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNEXFlvUFMdBZenXFZhSnZsfEuh8tQ","language":"en"},{"unescapedUrl":"http://www.bloomberg.com/news/articles/2015-02-04/new-balance-goes-on-offense-slides-into-soccer","url":"http%3A%2F%2Fwww.bloomberg.com%2Fnews%2Farticles%2F2015-02-04%2Fnew-balance-goes-on-offense-slides-into-soccer","title":"New Balance Goes on Offense, Slides Into Soccer","titleNoFormatting":"New Balance Goes on Offense, Slides Into Soccer","location":"","publisher":"Bloomberg","publishedDate":"Wed, 04 Feb 2015 12:26:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.bloomberg.com/news/articles/2015-02-04/new-balance-goes-on-offense-slides-into-soccer\u0026cid\u003d52778731137146\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNHnXP9as4zV00vB2idLFsTztdA9FA","language":"en"},{"unescapedUrl":"http://www.oregonlive.com/playbooks-profits/index.ssf/2015/02/new_balance_jumps_into_soccer.html","url":"http%3A%2F%2Fwww.oregonlive.com%2Fplaybooks-profits%2Findex.ssf%2F2015%2F02%2Fnew_balance_jumps_into_soccer.html","title":"New Balance jumps into soccer, challenging Nike, Adidas","titleNoFormatting":"New Balance jumps into soccer, challenging Nike, Adidas","location":"","publisher":"OregonLive.com","publishedDate":"Wed, 04 Feb 2015 13:22:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.oregonlive.com/playbooks-profits/index.ssf/2015/02/new_balance_jumps_into_soccer.html\u0026cid\u003d52778731137146\u0026ei\u003dP47UVMjnKcuG4QavtICwBQ\u0026usg\u003dAFQjCNG7uvKE40NlgpGQEN2HUq2Ra6Dj6w","language":"en"}]}]);
  var publishers = results
    .map(function(result) {
      return newspapers
        .filter(function(newspaper) {
          return newspaper.name.indexOf(result.publisher) == 0;
        })[0] || newspapers[14];
    });

  var entities = results
    .map(function(result) {
      return {
        "type": 'Article',
        "title": result.title,
        "url": result.unescapedUrl,
        "imageUrl": (result.image || {}).url,
        "preamble": result.content,
        "date": result.publishedDate,
        "rating": 0
      };
    }).concat(publishers);

  var relations = [];
  publishers.forEach(function(publisher, index) {
    relations.push({
      start: entities[index],
      end: publisher,
      label: 'Newspaper',
    });

    relations.push({
      start: entities[index],
      end: authors[8],
      label: 'Author',
    });
  });

  results.forEach(function(_, index) {
    relations.push({
      start: entities[index],
      end: scopes[2],
      label: 'Scope',
    });

    relations.push({
      start: entities[index],
      end: concepts[8],
      label: 'Concept',
    });
  });

  return [entities.concat(concepts).concat(scopes).concat(authors).concat(newspapers), relations];
};
