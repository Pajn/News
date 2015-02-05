var articles = [
  {
    "type": 'Article',
    "title": "Så opererar ryska nättroll i Sverige",
    "url": "http://www.dn.se/nyheter/sverige/sa-opererar-ryska-nattroll-i-sverige/",
    "imageUrl": "http://d2.dn-static.se/UploadedImages/2015/2/5/7721d597-0584-4e11-b9cb-2c1a1bc509d4/original.jpg",
    "preamble": "Översättningsprogram, kommentarer på nyhetssajter och byte av identiteter. Så opererar sannolikt ryska nättroll i Sverige med syfte att sprida Putinvänliga uppgifter. ”Det pågår ett propagandakrig”, säger Ulrik Franke på FOI.",
    "date": "2015-02-05T10:22+02:00"
  },
  {
    "type": 'Article',
    "title": "Pentagon: Putin har asperger",
    "url": "http://www.dn.se/nyheter/varlden/pentagon-putin-har-asperger/",
    "imageUrl": "http://d1.dn-static.se/UploadedImages/2015/2/5/f0ace1c6-0b9c-4398-9381-3a4c03dcf9d6/original.jpg",
    "preamble": "Rysslands president Vladimir Putin har Aspergers syndrom slår en grupp fast i det amerikanska försvarshögkvarteret Pentagon. Diagnosen är ”autistisk störning som påverkar alla hans beslut”, enligt dokument som bland andra USA Today kommit över.",
    "date": "2015-02-05T14:07+02:00"
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
  }
];

var concepts = [
  {
    "type": 'Concept',
    "name": "Ryssland",
  },
  {
    "type": 'Concept',
    "name": "Putin"
  }
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
    "start": articles[0],
    "end": authors[0],
    "label": "Author"
  },
  {
    "start": articles[1],
    "end": authors[1],
    "label": "Author"
  }
];

module.exports = {
  articles: articles,
  authors: authors,
  concepts: concepts,
  relations: relations
};
