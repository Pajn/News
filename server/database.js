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
    "logo": "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22756.504%22%20height%3D%22112.95%22%20viewBox%3D%220%200%20756.504%20112.95%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-5.496-8.86h767v127h-767z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22b%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20overflow%3D%22visible%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url(%23b"
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
