




let loadImages = (query) => {
    fetch("https://api.pexels.com/v1/search?query=" + query, {
      method: "GET",
      headers: {
        Authorization: "C3X2NG8D8ByEHJNabtosrkJjVcbztxcEFRmM3Qsfl1SLMcmjrJXd4EfM",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        let cards = document.getElementsByClassName("card");
  
        for (let i = 0; i < cards.length; i++) {
          cards[i].firstElementChild.remove(); 
          let img = document.createElement("img");
          img.src = body.photos[i].src.large;
          img.className = "bd-placeholder-img card-img-top";
          img.style = "height: 200px; object-fit: cover";
  
          cards[i].insertBefore(img, cards[i].firstChild); 
  
      
          cards[i].querySelector("small").innerText = "ID: " + body.photos[i].id;
        }
      });
  };
  
  let loadOtherImages = (query) => {
    let hasImage = document.querySelector(".card").querySelector("img");
  
  
    if (hasImage) {
      fetch("https://api.pexels.com/v1/search?query=" + query, {
        method: "GET",
        headers: {
          Authorization: "C3X2NG8D8ByEHJNabtosrkJjVcbztxcEFRmM3Qsfl1SLMcmjrJXd4EfM",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          let cards = document.getElementsByClassName("card");
          for (let i = 0; i < cards.length; i++) {
            cards[i].firstElementChild.src = body.photos[i].src.large; 
            cards[i].querySelector("small").innerText =
              "ID: " + body.photos[i].id;
          }
        });
    } else {
 
      loadImages("sea");
    }


    
};



function photoChange(){
//let btn = document.querySelectorAll(".btn.btn-outline-secondary:nth-child(2)");

const el = document.getElementByClassName("btn.btn-outline-secondary:nth-child(2)");
el.addEventListener("click", hide, true);

   
console.log(photoChange);
}

