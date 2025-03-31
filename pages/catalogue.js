
let cardsContainer = document.getElementById("cards");

fetch("../luxdrive_site_data_full.json") // on va chercher notre fichier json
    .then(function(response) { //then s'execute quand le fichier est trouvé
      if (!response.ok) { // si la reponse n'est pas OK
        throw new Error("Erreur : pas de fichier JSON chargé"); // on affiche l'erreur
      }
      return response.json() // si c'est ok, on charge et on lit le fichier json 
    })

    .then (function(data) {
      console.log(data); // on check que data est là

        for (let i = 0; i <data.cars.length ; i++){ 
          let carsData = data.cars[i];        
          
          let card = document.createElement("div");
          card.classList.add("car-card", `car-id-${carsData.id}`);

          let name = document.createElement("h2"); 
          name.innerText = carsData.name; 
          card.appendChild(name); 

          let price = document.createElement("h3");
          price.innerText = carsData.price;
          card.appendChild(price);

          let brandName = "Marque inconnue"; // Valeur par défaut si non trouvée

          // Boucle pour parcourir le tableau des marques
          for (let j = 0; j < data.brands.length; j++) {
              if (data.brands[j].id === carsData.brandId) {
                  brandName = data.brands[j].name; // On récupère le nom de la marque
                  break; // On sort de la boucle dès qu'on trouve la correspondance
              }
          }

          let button = document.createElement("button");
          button.innerText = "Voir les détails";
          button.classList.add()

          // Ajouter le nom de la marque à la carte
          let brandElement = document.createElement("h3");
          brandElement.innerText = brandName;
          card.appendChild(brandElement);

          let photo = document.createElement("img");
          photo.src = carsData.image;
          card.appendChild(photo);

          cardsContainer.appendChild(card);
        }
  })
