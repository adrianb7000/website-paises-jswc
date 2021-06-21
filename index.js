class PaisesComponent extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        fetch('https://restcountries.eu/rest/v2/lang/es')
            .then(response => {
                return response.json();
            })
            .then(json => {
                let nPaises = 12;
                let sPaises = document.querySelector(".sPaises");
                let objFragment = document.createDocumentFragment();
                let objContainer = document.querySelector(".box-modal");

                for (let i = 0; i < nPaises; i++) {
                    let divPais = document.createElement("div");
                    divPais.classList.add(`box1-${i}`, 'box1');

                    divPais.innerHTML = `
                    <h4 class="box1-main" id="getcontinente" onclick="callContinente(this);">${json[i].name}</h4>
                      <p class="box1-detail">
                          <b>Region:</b> ${json[i].region} <br>
                          <b>Sub-Region:</b> ${json[i].subregion} <br>
                          <b>Capital:</b> ${json[i].capital} <br>
                          <b>Población actual:</b> ${new Intl.NumberFormat().format(json[i].population)}
                      </p>                
                      <img class='box-img' src="${json[i].flag}" />
                      `;

                    objFragment.appendChild(divPais);
                    sPaises.appendChild(objFragment);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }
}

window.customElements.define('paises-component', PaisesComponent)