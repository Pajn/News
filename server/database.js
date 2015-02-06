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
    "logo": "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22756.504%22%20height%3D%22112.95%22%20viewBox%3D%220%200%20756.504%20112.95%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-5.496-8.86h767v127h-767z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22b%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20overflow%3D%22visible%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url(%23b"
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
  var results = [{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"2014 års mästare i Major League Soccer, Los Angeles Galaxy, fick i går träffa president Barack Obama i vita huset. Det var storlagets tredje resa till den amerikanska huvudstaden de senaste fyra åren då man fortsätter att rada upp titlar. För lagets ...","unescapedUrl":"http://www.aftonbladet.se/sportbladet/fotboll/internationell/article20258974.ab","url":"http%3A%2F%2Fwww.aftonbladet.se%2Fsportbladet%2Ffotboll%2Finternationell%2Farticle20258974.ab","title":"Här får svensken träffa Barack Obama","titleNoFormatting":"Här får svensken träffa Barack Obama","location":"","publisher":"Aftonbladet","publishedDate":"Tue, 03 Feb 2015 00:47:33 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dse\u0026fd\u003dS\u0026url\u003dhttp://www.aftonbladet.se/sportbladet/fotboll/internationell/article20258974.ab\u0026cid\u003d52779218022903\u0026ei\u003d7mfUVOjfNoKB5Qa9u4HYCA\u0026usg\u003dAFQjCNFIuxZA9zARs6jgAvkYKW1SauUfAQ","language":"sv","image":{"url":"http://gfx2.aftonbladet-cdn.se/image/20259883/485/widescreen/222f7ad4bfccc/65392-730bf35fcec4b4ddc1ad67adb05cf2bbb3e73417.jpg","tbUrl":"http://t0.gstatic.com/images?q\u003dtbn:ANd9GcSAeNBTB1O3JNfaaRc_xraSyGDvW3R1Ufo5geCOphAyp0-5kIg1jt_FsY0","originalContextUrl":"http://www.aftonbladet.se/sportbladet/fotboll/internationell/article20258974.ab","publisher":"Aftonbladet","tbWidth":80,"tbHeight":45}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Efter att Stefan Ishizakis klubb Los Angeles Galaxy i början av december säkrade titeln i MLS-ligan har den förre Elfsborgsspelaren och hans lagkamrater väntat på att få träffa Barack Obama. \u0026quot;Ser jag nervös ut?\u0026quot; Det gick under måndagskvällen att följa ...","unescapedUrl":"http://www.expressen.se/gt/sport/har-far-stefan-ishizaki-traffa-barack-obama/","url":"http%3A%2F%2Fwww.expressen.se%2Fgt%2Fsport%2Fhar-far-stefan-ishizaki-traffa-barack-obama%2F","title":"Här får Stefan Ishizaki träffa Barack Obama","titleNoFormatting":"Här får Stefan Ishizaki träffa Barack Obama","location":"","publisher":"Expressen","publishedDate":"Mon, 02 Feb 2015 14:30:00 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dse\u0026fd\u003dS\u0026url\u003dhttp://www.expressen.se/gt/sport/har-far-stefan-ishizaki-traffa-barack-obama/\u0026cid\u003d0\u0026ei\u003d7mfUVOjfNoKB5Qa9u4HYCA\u0026usg\u003dAFQjCNG4q08iPAQILSzsFhtJ6Mhvw9VXwg","language":"sv","image":{"url":"http://y.cdn-expressen.se/images/4e/59/4e5919c289954ee78f08cfd62e33e8fc/16x9/645@70.jpg","tbUrl":"http://t2.gstatic.com/images?q\u003dtbn:ANd9GcTxphyF3zjffPwNANqIGQ9eRODIJoL6s2ElmnRwtmWBgEx6RGKKkdBiBOg","originalContextUrl":"http://www.expressen.se/gt/sport/har-far-stefan-ishizaki-traffa-barack-obama/","publisher":"Expressen","tbWidth":80,"tbHeight":44}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Jordaniens kung Abdullah, som fördömt handlingen, kortade av sitt USA-besök och begav sig hemåt efter ett extrainkallat möte med president Barack Obama i Vita huset. Bara några timmar senare meddelades att två fångar avrättats. Den ena var mot den\u0026nbsp;...","unescapedUrl":"http://www.svd.se/nyheter/utrikes/abdullah-barack-obama-is-jordanien-pilot-video_4307481.svd","url":"http%3A%2F%2Fwww.svd.se%2Fnyheter%2Futrikes%2Fabdullah-barack-obama-is-jordanien-pilot-video_4307481.svd","title":"Jordanien avrättar två i hämndaktion","titleNoFormatting":"Jordanien avrättar två i hämndaktion","location":"","publisher":"Svenska Dagbladet","publishedDate":"Tue, 03 Feb 2015 20:52:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dse\u0026fd\u003dS\u0026url\u003dhttp://www.svd.se/nyheter/utrikes/abdullah-barack-obama-is-jordanien-pilot-video_4307481.svd\u0026cid\u003d0\u0026ei\u003d7mfUVOjfNoKB5Qa9u4HYCA\u0026usg\u003dAFQjCNGo5VznEbe-AnfXKsVHo5Wt1tmT8Q","language":"sv"},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"Barack Obama tror inte att en verklig militär konflikt mellan USA och Ryssland är ett vist beslut för Amerika och hela världen. Washington försöker dock förstärka de Nato-länder som gränsar till Ryssland. Vita huset tänker fortsätta sin politiska kurs ...","unescapedUrl":"http://swedish.ruvr.ru/2015_02_02/Barack-Obama-vi-har-framjat-maktskiftet-i-Ukraina-7996/","url":"http%3A%2F%2Fswedish.ruvr.ru%2F2015_02_02%2FBarack-Obama-vi-har-framjat-maktskiftet-i-Ukraina-7996%2F","title":"Barack Obama: vi har främjat maktskiftet i Ukraina","titleNoFormatting":"Barack Obama: vi har främjat maktskiftet i Ukraina","location":"","publisher":"Rysslands röst","publishedDate":"Mon, 02 Feb 2015 08:45:43 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dse\u0026fd\u003dS\u0026url\u003dhttp://swedish.ruvr.ru/2015_02_02/Barack-Obama-vi-har-framjat-maktskiftet-i-Ukraina-7996/\u0026cid\u003d52779218880300\u0026ei\u003d7mfUVOjfNoKB5Qa9u4HYCA\u0026usg\u003dAFQjCNHvFJN_W6zWBJhdGiuodZcT9mzZOQ","language":"sv"}];
  var publishers = results
    .map(function(result) {
      return newspapers
        .filter(function(newspaper) {
          return newspaper.name.indexOf(result.publisher) == 0;
        })[0];
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

  return [entities.concat(concepts).concat(scopes), relations];
};


module.exports.getUsaFromGoogle = function() {
  var results = [{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"With exiles such as Jose Abreu, Yasiel Puig, Aroldis Chapman and Yoenis Cespedes now plying their trade in the USA, Cuba finds itself lagging behind other baseball-loving Latin countries. Ironically, the cure for Cuban baseball might be found in what ...","unescapedUrl":"http://www.usatoday.com/story/sports/mlb/2015/02/04/cuba-mlb-defections-caribbean-series/22897737/","url":"http%3A%2F%2Fwww.usatoday.com%2Fstory%2Fsports%2Fmlb%2F2015%2F02%2F04%2Fcuba-mlb-defections-caribbean-series%2F22897737%2F","title":"Can agreement with USA fix defects in Cuban baseball?","titleNoFormatting":"Can agreement with USA fix defects in Cuban baseball?","location":"","publisher":"USA TODAY","publishedDate":"Wed, 04 Feb 2015 18:26:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.usatoday.com/story/sports/mlb/2015/02/04/cuba-mlb-defections-caribbean-series/22897737/\u0026cid\u003d52778731145132\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNH9xwYNb5Jj8XzeeahNACaGwEEbOw","language":"en","image":{"url":"http://www.gannett-cdn.com/-mm-/f15c9f647aa85487291bebef7f42dda556d59b8e/c\u003d62-0-3565-2635\u0026r\u003dx513\u0026c\u003d680x510/local/-/media/USATODAY/USATODAY/2014/04/30//1398906011000-4-30-abreu.jpg","tbUrl":"http://t3.gstatic.com/images?q\u003dtbn:ANd9GcRd9eqbKeuCW2PFRl2gtknuIn0c39T5sHcOHWlB_7EHGPxr3v0bNC4bSRo","originalContextUrl":"http://www.usatoday.com/story/sports/mlb/2015/02/04/cuba-mlb-defections-caribbean-series/22897737/","publisher":"USA TODAY","tbWidth":80,"tbHeight":60}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"http://news.google.com/news/story?ncl\u003dd3VaMmc1WZUn50MwAI6TdeE6DvF8M\u0026hl\u003den\u0026ned\u003dus","content":"McFarland, USA is a Mayhem Pictures production which will be released by Walt Disney Walt Disney on March 20th. The Hollywood Reporter “reported” the budget at $17 million way back in December of 2013, but I would be surprised if the film ended up\u0026nbsp;...","unescapedUrl":"http://www.forbes.com/sites/scottmendelson/2015/02/05/review-kevin-costners-mcfarland-usa-is-an-empathic-underdog-sports-drama/","url":"http%3A%2F%2Fwww.forbes.com%2Fsites%2Fscottmendelson%2F2015%2F02%2F05%2Freview-kevin-costners-mcfarland-usa-is-an-empathic-underdog-sports-drama%2F","title":"Review: Kevin Costner Shines In \u0026#39;McFarland, USA\u0026#39;","titleNoFormatting":"Review: Kevin Costner Shines In \u0026#39;McFarland, USA\u0026#39;","location":"","publisher":"Forbes","publishedDate":"Thu, 05 Feb 2015 08:52:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.forbes.com/sites/scottmendelson/2015/02/05/review-kevin-costners-mcfarland-usa-is-an-empathic-underdog-sports-drama/\u0026cid\u003d52778730985301\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNFxj9_QTm2e4PvwNtU1P4Cs3Nn3Eg","language":"en","image":{"url":"http://i57.tinypic.com/ljtsi.jpg","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcTGBm4CbNUGIu_EG3vjDTSYbWQNl1KFNi1d4DzUjPoJisj8bpIn_jtpkR4","originalContextUrl":"http://www.forbes.com/sites/scottmendelson/2015/02/05/review-kevin-costners-mcfarland-usa-is-an-empathic-underdog-sports-drama/","publisher":"Forbes","tbWidth":53,"tbHeight":80},"relatedStories":[{"unescapedUrl":"http://variety.com/2015/film/reviews/film-review-mcfarland-usa-1201423326/","url":"http%3A%2F%2Fvariety.com%2F2015%2Ffilm%2Freviews%2Ffilm-review-mcfarland-usa-1201423326%2F","title":"Film Review: \u0026#39;McFarland, USA\u0026#39;","titleNoFormatting":"Film Review: \u0026#39;McFarland, USA\u0026#39;","location":"","publisher":"Variety","publishedDate":"Wed, 04 Feb 2015 09:00:37 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://variety.com/2015/film/reviews/film-review-mcfarland-usa-1201423326/\u0026cid\u003d52778730985301\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNFn19cRTamdY-vUBj2XozJILHml9w","language":"en"},{"unescapedUrl":"http://www.hollywoodreporter.com/review/mcfarland-usa-film-review-770069","url":"http%3A%2F%2Fwww.hollywoodreporter.com%2Freview%2Fmcfarland-usa-film-review-770069","title":"\u0026#39;McFarland, USA\u0026#39;: Film Review","titleNoFormatting":"\u0026#39;McFarland, USA\u0026#39;: Film Review","location":"","publisher":"Hollywood Reporter","publishedDate":"Wed, 04 Feb 2015 08:52:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.hollywoodreporter.com/review/mcfarland-usa-film-review-770069\u0026cid\u003d52778730985301\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNERze-gq5PVhG-3OrYl4i8kD4mEuQ","language":"en"}]},{"GsearchResultClass":"GnewsSearch","clusterUrl":"","content":"After a scoreless first period, Team USA opened the scoring on the power play 10:24 into the second stanza. Nikko Landeros (Chicago, Ill.) took a pass from Declan Farmer (Tampa, Fla.) and found Kevin McKee (Chicago, Ill.) in front of the net to give ...","unescapedUrl":"http://www.usahockey.com/news_article/show/475447?referrer_id\u003d752796","url":"http%3A%2F%2Fwww.usahockey.com%2Fnews_article%2Fshow%2F475447%3Freferrer_id%3D752796","title":"USA Defeats Korea in World Sled Challenge Semifinal","titleNoFormatting":"USA Defeats Korea in World Sled Challenge Semifinal","location":"","publisher":"USA Hockey","publishedDate":"Thu, 05 Feb 2015 15:29:01 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.usahockey.com/news_article/show/475447%3Freferrer_id%3D752796\u0026cid\u003d52778732026718\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNHwq6ayIFd0yeCXwz-EwkR0u17Y1w","language":"en","image":{"url":"http://cdn2.sportngin.com/attachments/photo/4440/0433/OIL_8842_medium.JPG","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcRnHuDRfWq3SXhecYEKHUuD3PXHzyVP5CL5RF-fU9-kfYnem0nJhSwtkzE","originalContextUrl":"http://www.usahockey.com/news_article/show/475447?referrer_id\u003d752796","publisher":"USA Hockey","tbWidth":80,"tbHeight":58}},{"GsearchResultClass":"GnewsSearch","clusterUrl":"http://news.google.com/news/story?ncl\u003ddDingpmtmYtbnPMrPF8e-T4ItwWrM\u0026hl\u003den\u0026ned\u003dus","content":"2015 got off to a bad start for the USA as they fell 3-2 on the road in Chile. Overall it was a mixed performance with good showings by Michael Bradley and Jozy Altidore, but poor showing from Jermaine Jones and Clint Dempsey. The USA has now lost ...","unescapedUrl":"https://worldsoccertalk.com/2015/02/05/preview-of-the-usa-vs-panama-international-friendly/","url":"https%3A%2F%2Fworldsoccertalk.com%2F2015%2F02%2F05%2Fpreview-of-the-usa-vs-panama-international-friendly%2F","title":"Preview of the USA vs. Panama international friendly","titleNoFormatting":"Preview of the USA vs. Panama international friendly","location":"","publisher":"World Soccer Talk","publishedDate":"Thu, 05 Feb 2015 19:22:30 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttps://worldsoccertalk.com/2015/02/05/preview-of-the-usa-vs-panama-international-friendly/\u0026cid\u003d52778732136432\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNFtwJ_YbxJI7vzY_rAnhLtTq8RSWw","language":"en","image":{"url":"http://worldsoccertalk.com/wp-content/uploads/2014/03/jurgen-klinsmann.jpg","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcQRwsG12fV0e4MRci0K76YrdrUsvf4YQQcEUkF5J1rFbwH2lbH_4R8UDz0","originalContextUrl":"https://worldsoccertalk.com/2015/02/05/preview-of-the-usa-vs-panama-international-friendly/","publisher":"World Soccer Talk","tbWidth":80,"tbHeight":53},"relatedStories":[{"unescapedUrl":"http://www.socceramerica.com/article/62526/usa-panama-three-storylines-to-follow.html","url":"http%3A%2F%2Fwww.socceramerica.com%2Farticle%2F62526%2Fusa-panama-three-storylines-to-follow.html","title":"USA-Panama: Three storylines to follow","titleNoFormatting":"USA-Panama: Three storylines to follow","location":"","publisher":"Soccer America","publishedDate":"Thu, 05 Feb 2015 19:33:45 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.socceramerica.com/article/62526/usa-panama-three-storylines-to-follow.html\u0026cid\u003d52778732136432\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNHMuC7nLU65D04LIHmp_FrmNcgrSg","language":"en"},{"unescapedUrl":"http://www.mlssoccer.com/news/article/2015/02/05/usa-vs-panama-international-friendly-match-preview","url":"http%3A%2F%2Fwww.mlssoccer.com%2Fnews%2Farticle%2F2015%2F02%2F05%2Fusa-vs-panama-international-friendly-match-preview","title":"USA vs. Panama | International Friendly Match Preview","titleNoFormatting":"USA vs. Panama | International Friendly Match Preview","location":"","publisher":"MLSsoccer.com","publishedDate":"Thu, 05 Feb 2015 16:56:15 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://www.mlssoccer.com/news/article/2015/02/05/usa-vs-panama-international-friendly-match-preview\u0026cid\u003d52778732136432\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNHpouJoXNsp3u1W-g6rt82ecYtjzA","language":"en"},{"unescapedUrl":"http://mlsgb.com/2015/02/05/international-preview-prediction-usa-vs-panama/","url":"http%3A%2F%2Fmlsgb.com%2F2015%2F02%2F05%2Finternational-preview-prediction-usa-vs-panama%2F","title":"International Preview and Prediction: USA vs Panama","titleNoFormatting":"International Preview and Prediction: USA vs Panama","location":"","publisher":"MLSGB (blog)","publishedDate":"Thu, 05 Feb 2015 11:14:32 -0800","signedRedirectUrl":"http://news.google.com/news/url?sa\u003dT\u0026ct2\u003dus\u0026fd\u003dS\u0026url\u003dhttp://mlsgb.com/2015/02/05/international-preview-prediction-usa-vs-panama/\u0026cid\u003d52778732136432\u0026ei\u003dfHLUVKDxOIiW4QbGpYCACQ\u0026usg\u003dAFQjCNFsVc5l2T2AqgeGNdyWVcyZ3kxrLA","language":"en"}]}];
  var publishers = results
    .map(function(result) {
      console.log(newspapers
        .filter(function(newspaper) {
          //console.log(newspaper.name);
          console.log(result.publisher);
          return newspaper.name.indexOf(result.publisher) == 0;}));
      return newspapers
        .filter(function(newspaper) {
          return newspaper.name.indexOf(result.publisher) == 0;
        })[0];
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

  console.log(entities);

  return [entities.concat(concepts).concat(scopes), relations];
};
