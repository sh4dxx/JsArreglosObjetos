const propiedadesAlquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        bano: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: 3,
        bano: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        bano: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Departamento de 1 dormitorio",
        src: "https://static.tokkobroker.com/water_pics/105300941041642957649551344145311935259064579006453278426481887284993255564099.jpg",
        descripcion: "Hermoso departamento a estrenar de 1 dormitorio",
        ubicacion: " Cipolletti, en la esquina de España y San Martin.",
        habitaciones: 1,
        bano: 1,
        costo: 900,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Departamento en planta baja en Gral. Roca",
        src: "https://static.tokkobroker.com/water_pics/102070826289498743525410992384973470632995891270057129950303267794689177670471.jpg",
        descripcion: "Departamento garantiza comodidad y accesibilidad a un precio inigualable.",
        ubicacion: "Calle Tucumán 2560",
        habitaciones: 2,
        bano: 2,
        costo: 2000,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Departamento de 3 dormitorios y 3 baños",
        src: "https://static.tokkobroker.com/water_pics/106976428796437666071319512908056842112809443349085132095497021023879360369221.jpg",
        descripcion: "El departamento es perfecto para una familia o para una persona que busca un espacio cómodo y funcional en una zona privilegiada.",
        ubicacion: "Centro de Cipolletti",
        habitaciones: 3,
        bano: 3,
        costo: 4000,
        smoke: true,
        pets: false,
    },
];

const propiedadesVentas = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        bano: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 3,
        bano: 3,
        costo: 4500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        bano: 3,
        costo: 1200,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Casa de 4 dormitorios en Gral. Roca",
        src: "https://static.tokkobroker.com/water_pics/541994176573528522635167891690868831595586244452106751058570644508500310795.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "General Roca, Argentina 56789",
        habitaciones: 4,
        bano: 2,
        costo: 1500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Venta dpto 2 dorm con cochera",
        src: "https://static.tokkobroker.com/water_pics/90223901240254327771350059287525850899193406849877337303775596942538089306485.jpg",
        descripcion: "Ubicado en la zona de Confluencia, este moderno dpto  dispuesto en el 1º piso al frente del edificio",
        ubicacion: "Neuquén, Argentina 56789",
        habitaciones: 2,
        bano: 1,
        costo: 1000,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Casa en venta Arevalo",
        src: "https://static.tokkobroker.com/w_pics/6297199_76793675415978277658249419721569320284756656343656531160358204149976272737092.jpg",
        descripcion: "Esta propiedad, completamente renovada, se presenta como una excelente opción para una familia en búsqueda de un hogar cómodo y funcional.",
        ubicacion: "barrio Arevalo en Cipolletti #1234",
        habitaciones: 3,
        bano: 3,
        costo: 2000,
        smoke: true,
        pets: false,
    },
];

const ventasSection = document.querySelector("#venta");
const alquilerSection = document.querySelector("#alquiler");

redenrizaPropiedades = (section, propiedadesList, isSlice = false) => {
    let template = "";
    template += `<h2>${getTitle(section.getAttribute("id"))}</h2>
              <div class="row">`;
    
    if(isSlice){
      //reducimos la lista los 3 primeros elementos
      propiedadesList = propiedadesList.slice(0, 3)
    }

    //iteramos lista de objetos
    for (propVenta of propiedadesList) {
        template += renderizaCard(propVenta);
    }

    template += `</div>`;

    // Obtenemos los botones del html
    let buttons = section.innerHTML;

    //añadimos el template creado + botones
    section.innerHTML = template + buttons;
};

renderizaCard = (propiedad) => {
    return `
      <div class="col-md-4 mb-4">
        <div class="card">
            <img src=${propiedad.src} class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | 
                  <i class="fas fa-bath"></i> ${propiedad.bano} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                ${getParSmoking(propiedad.smoke)}
                ${getParPets(propiedad.pets)}
            </div>
        </div>
      </div>
  `;
};

getParSmoking = (isSmoking) => {
    if (isSmoking) {
        return `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
    } else {
        return `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
    }
};

getParPets = (isPets) => {
    if (isPets) {
        return `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
    } else {
        return `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`;
    }
};

getTitle = (sectionId) => {
    return sectionId === "venta" ? "Propiedades en venta" : "Propiedades en alquiler";
};


// Si ambas secciones son undefine, significa que existen en el documento. (es el index.html)
if (ventasSection != undefined && alquilerSection != undefined) {
    redenrizaPropiedades(ventasSection, propiedadesVentas,true);
    redenrizaPropiedades(alquilerSection, propiedadesAlquiler, true);
}

//Si 'ventasSection' SI esta definido, estoy en venta.html
if (ventasSection != undefined && alquilerSection == undefined) {
  redenrizaPropiedades(ventasSection, propiedadesVentas);
}

//Si 'alquilerSection' SI esta definido, estoy en alquiler.html
if (ventasSection == undefined && alquilerSection != undefined) {
  redenrizaPropiedades(alquilerSection, propiedadesAlquiler);
}
