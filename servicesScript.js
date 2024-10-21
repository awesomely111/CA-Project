

async function displaydata() {
    let x = await fetch('./Services.json');
    let servicesData = await x.json();
 
    const servicesContainer = document.getElementById("service-container");

Object.values(servicesData).forEach((service) => {
  const serviceDiv = document.createElement("div");
  serviceDiv.className = "col-md-6 d-flex align-items-stretch mt-4";
  serviceDiv.innerHTML = `<a href="service.html" onclick="setServiceId('${service.id}') ">
      <div class="icon-box" data-aos="zoom-in" data-aos-delay="100" >
        <div class="icon"><i class="bx bx-file"></i></div>
        <h4>${service.title}</h4>
        <p>${service.description}</p>
      </div>
      </a>
    `;
  servicesContainer.appendChild(serviceDiv);
});
}

displaydata();




function setServiceId(id) {
    sessionStorage.setItem('id', id);
    console.log('Service ID set in sessionStorage:', id);
}



