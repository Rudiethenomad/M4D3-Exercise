




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
          cards[i].firstElementChild.remove(); //removes svg
          let img = document.createElement("img");
          img.src = body.photos[i].src.large;
          img.className = "bd-placeholder-img card-img-top";
          img.style = "height: 200px; object-fit: cover";
  
          cards[i].insertBefore(img, cards[i].firstChild); //adds the new image before other content
  
          // EX5 replaces 9 min with img id
          cards[i].querySelector("small").innerText = "ID: " + body.photos[i].id;
        }
      });
  };
  
  let loadOtherImages = (query) => {
    let hasImage = document.querySelector(".card").querySelector("img");
  
    //we check for the existance of imgs instead of svgs because this function uses a different approach
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
            cards[i].firstElementChild.src = body.photos[i].src.large; //switching the pre-existing image with a new image source
            cards[i].querySelector("small").innerText =
              "ID: " + body.photos[i].id;
          }
        });
    } else {
      // if cards still have svg we need the first method to handle the change
      loadImages("sea"); // the parameter "sea" changes the default value of query
    }
  };