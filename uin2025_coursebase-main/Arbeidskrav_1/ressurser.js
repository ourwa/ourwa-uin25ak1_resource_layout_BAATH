const resources = [
    {
    category: "HTML",
    text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
    sources: [
        { title: "W3Schools",
              url: "https://www.w3schools.com/html/" 
        },
        { 
            title: "HTML Living standard",
            url: "https://html.spec.whatwg.org/multipage/" 
        },
        { 
            title: "HTML.com Tutorials",
            url: "https://html.com/" 
            },
           ]
        },
    {
    category: "CSS",
    text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
    sources: [
        { 
            title: "W3Schools",
            url: "https://www.w3schools.com/css/" 
        },
        { 
            title: "W3C HTML & CSS Standards",
            url: "https://www.w3.org/standards/webdesign/htmlcss.html" 
        },
        { 
            title: "W3C CSS Validator",
            url: "https://jigsaw.w3.org/css-validator/" 
        },
        { 
            title: "CSS Tricks",
            url: "https://css-tricks.com/" 
            },

        ]
    },
    {
    category: "JavaScript",
    text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
    sources: [
        { 
            title: "W3Schools",
            url: "https://www.w3schools.com/js/" 
        },
        { 
            title: "MDN Web Docs",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
        },
        {
            title: "How to read JavaScript Documentation",
            url: "https://www.youtube.com/watch?v=O3iR-CIufKM" 
            },

        ]
    },
    {
    category: "React",
    text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
    sources: [
        { 
            title: "React documentation",
            url: "https://reactjs.org/docs/getting-started.html" 
        },
        { 
            title: "W3Schools",
            url: "https://www.w3schools.com/REACT/DEFAULT.ASP" 
        },
        { 
            title: "How to read JavaScript Documentation",
            url: "https://www.youtube.com/watch?v=O3iR-CIufKM" 
            },
        ]
    },
    {
    category: "Sanity and headless CMS",
    text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
    sources: [
        { 
            title: "Sanity documentation",
            url: "https://www.sanity.io/docs" 
        },
        { 
            title: "OnCrawl: a beginners guide to headless CMS",
            url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/" 
        },
        { 
            title: "Section.io: Getting started with Sanity CMS",
            url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/" 
            },

        ]
    }
];

function listCategories() {
    let categories = "";
    resources.map(resource => {
      categories += `
        <li><button onclick="getContent('${resource.category}')">${resource.category}</button></li>
      `;
    });
    document.getElementById("lest").innerHTML = categories;
  }
  
  function getContent(category) {
    let content = "";
    const filteredResource = resources.filter(resource => resource.category === category);
  
    filteredResource.map(resource => {
      let links = resource.sources.map(source => `
        <li><a target="_blank" href="${source.url}">${source.title}</a></li>
      `).join("");
  
      content += `
        <article>
          <h1>${resource.category}</h1>
          <p>${resource.text}</p>
          <ul>${links}</ul>
        </article>
      `;
    });
  
    document.querySelector("main").innerHTML = content;
  }
  
 
  document.addEventListener("DOMContentLoaded", function() {
    listCategories();
    getContent("HTML");
  });
  