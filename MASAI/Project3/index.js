
import navbar from "./components/navbar.js"
// import {getdata} from "./scripts/utils"

let navbarcontainer = document.getElementById("navbar-container");
navbarcontainer.innerHTML = navbar();
let profileImgElement = document.getElementById("profile-img")
   let searchInputElement = document.getElementById("search-input");
   let repositery = document.getElementById("repositery");

   searchInputElement.addEventListener("keypress", fetchAndUpdateData);
   

    const getdata = async (url) =>{
      try {
         let searchParam = document.getElementById("search-input").value;
        let res = await fetch(url);
         let data = await res.json()
         // console.log(data)
         return data;
      } catch (error) {
         console.log(error)
      }
   }
   
   async function fetchAndUpdateData(e){
      try {
         // console.log("user pressed", e.key, "key")
         if(e.key === "Enter"){
            let value = searchInputElement.value;
            let resp = await getdata(`https://api.github.com/users/${value}`)

            profileImgElement.src = resp.avatar_url;

            let repoDetails = await getdata(resp.repos_url) 
            // console.log(repoDetails)
            displayRepos(repoDetails)
            // console.log(resp)
         }
         
      } catch (error) {
         console.log(error)
      }
     }

     function displayRepos(data){

      data.forEach(repo => {
         let card = document.createElement("div")

         let idElement = document.createElement("p");
         idElement.textContent = repo.id;

         let nameElement = document.createElement("p");
         nameElement.textContent = repo.name

         card.append(idElement, nameElement)
         repositery.append(card)
      });
     }