//Banner
let heroContent = document.querySelector(".hero-content");
let heroBanner = document.querySelector(".hero-banner"); // Sélectionne le banner pour modifier l'image de fond
let heroTitle = document.querySelector(".hero-content h1"); 
let heroSubtitle = document.querySelector(".hero-content p"); 
let heroButton = document.querySelector(".hero-button");
//Testimonials
let tNames = document.querySelectorAll(".t-name");
let tMessages = document.querySelectorAll(".t-message");
let tRatings = document.querySelectorAll(".t-rating");
//Stats
let statsLabel = document.querySelectorAll(".stats h2")
let statsValue = document.querySelectorAll(".stats p")


fetch("luxdrive_site_data_full.json") // on va chercher notre fichier json
    .then(function(response) { //then s'execute quand le fichier est trouvé
      if (!response.ok) { // si la reponse n'est pas OK
        throw new Error("Erreur : pas de fichier JSON chargé"); // on affiche l'erreur
      }
      return response.json() // si c'est ok, on charge et on lit le fichier json 
    })

    .then (function(data) {
      console.log(data); // on check que data est là

        //pas de boucle car pas un tableau. Donc prends l'objet data...heroBanner on le stock dans banner
        let banner = data.pagesContent.Accueil.heroBanner; 
        //Pour les textes      
        heroTitle.innerText = banner.title;
        heroSubtitle.innerText = banner.subtitle;
        heroButton.innerText = banner.cta;   
        // Pour l'image
        heroBanner.style.backgroundImage = `url(https://cdn.pixabay.com/photo/2020/12/18/02/32/car-5841018_1280.jpg)`;
        heroBanner.style.backgroundSize = "cover";
        heroBanner.style.backgroundPosition = "center";

        //Stats 
        for (let j = 0; j < data.pagesContent.Accueil.stats.length; j++) {
          let homeStats = data.pagesContent.Accueil.stats[j];
          
          statsLabel[j].innerText = homeStats.label;
          statsValue[j].innerText = homeStats.value;


        //Avis
        // Boucle classique pour remplir les témoignages 
        for (let i = 0; i < data.testimonials.length; i++) {
          let testimonial = data.testimonials[i];
          
          tNames[i].innerText = testimonial.name;
          tMessages[i].innerText = testimonial.message;
          tRatings[i].innerHTML = testimonial.note +"⭐ sur 5";
      }
    }
  })

      
    //essayons avec des boutons : 
    // pour utiliser les boutons, il faut rafraichir les données filtrer, on a besoin de mettre toute l'itération dans une fonction, qu'on appelera après le click
    
       
    // resetBtn.addEventListener("click", function(){
    // ville = "";
    // starNbr = 0;
    // priceRange = [0, 10000];
    // refreshList(); 
    // })     

    // parisBtn.addEventListener("click", function(){
    //   reset();
    //   ville = "Paris";
    //   refreshList();
    // })

    // lyonBtn.addEventListener("click", function(){
    //   reset();
    //   ville = "Lyon";
    //   refreshList();
    // })

    // ratingFilter.addEventListener("click", function(){
    //   reset();
    //   starNbr = 4;
    //   refreshList();
    // })

    // cheapPrice.addEventListener("click", function(){
    //   reset();
    //   priceRange = [0, 80];
    //   refreshList();
    // })

    // middlePrice.addEventListener("click", function(){
    //   reset();
    //   priceRange = [80, 120];
    //   refreshList();
    // })

    // expPrice.addEventListener("click", function(){
    //   reset();
    //   priceRange = [120, 10000];
    //   refreshList();
    // })

    // refreshList();
