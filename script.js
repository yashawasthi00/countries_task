const APIURL =
    "https://restcountries.com/v2/all";
const countryBox = document.querySelector("#country-box")

const getCountries = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showCountries(data)
    console.log(data)
}
getCountries(APIURL);

const showCountries = (data) => {
    countryBox.innerHTML = "";
    data.forEach(
        (result) => {
            const imagePath = result.flag;

            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                    <h2>${result.name}  </h2>
                    </div>
                        <h6> Population: <span class="grey">${result.population}</span>  </h6>
                        <h6> Region: <span class="grey">${result.region} </span><h6>
                        <h6> Capital: <span class="grey">${result.capital}</span> <h6>
                 </div>
            `
            countryBox.appendChild(box)
        }
    )
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

   
  const clickedAsc=async ()=>
  {
    const response = await fetch("https://restcountries.com/v2/all")
    const data = await response.json()  
      data.sort( compare );

      function compare( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name){
          return 1;
        }
        return 0;
      }
      console.log(data)
      showCountries(data);
  }

  const clickedDsc=async()=>
  {
    const response = await fetch("https://restcountries.com/v2/all")
    const data = await response.json()  
      data.sort( compare );

    function compare( a, b ) {
        if ( a.name > b.name ){
          return -1;
        }
        if ( a.name < b.name){
          return 1;
        }
        return 0;
      }

    //   data.sort( compare );
    showCountries(data);
    console.log(data);
  }


  