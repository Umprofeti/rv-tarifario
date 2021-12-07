const btn1:HTMLElement = document.getElementById("btn1");
const btn2: HTMLElement = document.getElementById("btn2");
const btn3: HTMLElement = document.getElementById("btn3");
const rvT:HTMLElement = document.querySelector('.rvTarjeta')

btn1.addEventListener('click', () => {
rvT.style.position="absolute";
rvT.innerHTML = `<div class="rv-tarifarioTrajeta fixed-bottom  mt-3">
            <div class="rv-contenido shadow-lg sticky-top" id="rvContenido">
               <div class="row">
                   <figure>
                    <img src="./Asset-6.png" class="img-tarjetaBeneficio" alt="">
                   </figure>
                    <div class="col" id="contenidoMain">
                        <div class="row">
                            <span class="tarjetaTitulo">Beneficios</span>
                        </div>
                        <div class="row">
                            <span class="tarjeta-TituloPaquete">
                                PÁGINA COMPLETA
                            </span>
                            <p class="tarjeta-ContenidoPaquete">
                                Un mes de publicidad en nuestra página web.<br> <br>
                                Envió de Publicidad a 533,000 empresarios, emprendedores, micro, pequeña, mediana empresas dentro de Panamá, influencers, organizaciones y empresas públicas y diplomáticos. <br> <br>
                                Entrevista a propietario o representante que sea asignado por dicha empresa para las próximas entrevistas de Rendez-Vous Magazine ‘’El genio detrás de la Mar <br> <br>
                                Tendrá conexión directa desde sus anuncios por 30 días (WhatsApp, Instagram, Twitter, Facebook y Página Web). <br> <br>
                                Los Artes, diseños y fotografías deben ser suministradas por el cliente, si el cliente no cuenta con lo solicitado, debe comunicarlo a info@rendezvouscorp.com para asistirle con lo requerido, en este caso tendría un costo adicional. <br> <br>
                            </p>
                            <span class="tarjeta-TituloPaquete"> ¿Deseas agregar más impacto a tu pauta? </span>
                            <p class="tarjeta-ContenidoPaquete">
                                Agrega esto a tu paquete: Producción de 60 segundos, donde humanizaremos tu marca, 
                                documentamos la historia de su creación y el éxito que tienen. <br> <br>
                                Esta producción tiene un costo adicional de $300.00 dólares en promoción.</p>
                        </div>
                        <div class="row mb-2">
                            <button class="tarjetaContacto">Contactanos</button>
                            <button class="tarjetaContacto" id="Cerrar">Cerrar</button>
                        </div>
                    </div>
               </div>
            </div>
        </div>`;
   
    
        const cerrar: HTMLElement = document.getElementById('Cerrar');
        cerrar.addEventListener('click', () =>{
            rvT.innerHTML = ``;
            rvT.style.position="static";
        })
});

btn2.addEventListener('click', ():void =>{

    rvT.style.position="absolute";
    rvT.innerHTML = `<div class="rv-tarifarioTrajeta fixed-bottom  mt-3">
                <div class="rv-contenido shadow-lg sticky-top" id="rvContenido">
                   <div class="row">
                       <figure>
                        <img src="./Asset-6.png" class="img-tarjetaBeneficio" alt="">
                       </figure>
                        <div class="col" id="contenidoMain">
                            <div class="row">
                                <span class="tarjetaTitulo">Beneficios</span>
                            </div>
                            <div class="row">
                                <span class="tarjeta-TituloPaquete">
                                    MEDIA PÁGINA
                                </span>
                                <p class="tarjeta-ContenidoPaquete mt-2">
                                    15 días en nuestro espacio de publicidad de nuestra página web en todas las categorías <br> <br>
                                    Envió de Publicidad a 533,000 empresarios, emprendedores, micro, pequeña, mediana empresas dentro de Panamá, influencers, organizaciones y empresas públicas y diplomáticos. <br> <br>
                                    Tendrá conexión directa desde sus anuncios por 15 días (WhatsApp, Instagram). <br> <br>
                                    Los Artes, diseños y fotografías deben ser suministradas por el cliente, si el cliente no cuenta con lo solicitado, debe comunicarlo a info@rendezvouscorp.com para asistirle con lo requerido, en este caso tendría un costo adicional. <br> <br>
                                </p>
                                <span class="tarjeta-TituloPaquete"> ¿Deseas agregar más impacto a tu pauta? </span>
                                <p class="tarjeta-ContenidoPaquete mt-2">
                                    Agrega esto a tu paquete: Producción de 60 segundos, donde humanizaremos tu marca, 
                                    documentamos la historia de su creación y el éxito que tienen. <br> <br>
                                    Esta producción tiene un costo adicional de $300.00 dólares en promoción.</p>
                            </div>
                            <div class="row mb-5 mt-2">
                                <button class="tarjetaContacto">Contactanos</button>
                                <button class="tarjetaContacto" id="Cerrar">Cerrar</button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>`;
       
        
            const cerrar: HTMLElement = document.getElementById('Cerrar');
            cerrar.addEventListener('click', () =>{
                rvT.innerHTML = ``;
                rvT.style.position="static";
            })

});

btn3.addEventListener('click', ():void =>{

    rvT.style.position="absolute";
    rvT.innerHTML = `<div class="rv-tarifarioTrajeta fixed-bottom  mt-3">
                <div class="rv-contenido shadow-lg sticky-top" id="rvContenido">
                   <div class="row">
                       <figure>
                        <img src="./Asset-6.png" class="img-tarjetaBeneficio" alt="">
                       </figure>
                        <div class="col" id="contenidoMain">
                            <div class="row">
                                <span class="tarjetaTitulo">Beneficios</span>
                            </div>
                            <div class="row">
                                <span class="tarjeta-TituloPaquete">
                                    CINTILLO PARA EMPRENDEDORES
                                </span>
                                <p class="tarjeta-ContenidoPaquete mt-2">
                                    Cintillo en nuestra edición de Revista <br> <br>
                                    7 días en nuestro espacio de publicidad de nuestra página web en todas las categorías <br> <br>
                                    Tendrá conexión directa desde sus anuncios por 7 días (Instagram)<br> <br>
                                    Los Artes, diseños y fotografías deben ser suministradas por el cliente, si el cliente no cuenta con lo solicitado, debe comunicarlo a info@rendezvouscorp.com para asistirle con lo requerido, en este caso tendría un costo adicional. <br> <br>
                                </p>
                                <span class="tarjeta-TituloPaquete"> ¿Deseas agregar más impacto a tu pauta? </span>
                                <p class="tarjeta-ContenidoPaquete mt-2">
                                    Agrega esto a tu paquete: Producción de 60 segundos, donde humanizaremos tu marca, 
                                    documentamos la historia de su creación y el éxito que tienen. <br> <br>
                                    Esta producción tiene un costo adicional de $300.00 dólares en promoción.</p>
                            </div>
                            <div class="row mb-5 mt-2">
                                <button class="tarjetaContacto">Contactanos</button>
                                <button class="tarjetaContacto" id="Cerrar">Cerrar</button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>`;
       
        
            const cerrar: HTMLElement = document.getElementById('Cerrar');
            cerrar.addEventListener('click', () =>{
                rvT.innerHTML = ``;
                rvT.style.position="static";
            })

});