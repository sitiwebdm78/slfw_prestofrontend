/* CUSTOMIZZAZIONE PROGETTO PRESTO_3 FRONTEND MODULO_7 JAVASCRIPT */

/* MODELLO DOM, CODICE POROGETTO PRESTO.IT_2_PAGINA ANNUNCI */        
    
    /* ASSEGNAZIONE VARIABILI E CATTURA DEGLI ELEMENTI DELLA PAGINA HTML */
        const navbardom = document.getElementById('navbardom');
        const linksnav = document.querySelectorAll('.nav-link');//Il selectoerAll inserisce tutto in una nodeliste che un arraylike (cioè come un Array) al quale non posso cambiare stile. Per questo per farlo dovremo utilizzare il forEach.
        const changeLogo = document.getElementById('changeLogo');
        const spadaLaser = document.getElementById('spadaLaser');
        const nvbrCollapse = document.getElementById('nvbrCollapse');
        const incrementPV = document.getElementById('incrementPV');// Variabile Per la Catturra del numero incrementale all'interno del tag <span> nel paragrafo Prodotti Venduti.
        const incrementCS = document.getElementById('incrementCS');// Variabile Per la Catturra del numero incrementale all'interno del tag <span> nel paragrafo Clienti Soddisfatti.
        const incrementCG = document.getElementById('incrementCG');// Variabile Per la Catturra del numero incrementale all'interno del tag <span> nel paragrafo Consegne Giornaliere.
        const swiperWrapper = document.querySelector('.swiper-wrapper');

    
    /* ----- VARIABILI E COSTANTI DI VERIFICA ----- */

        let verifica = false;
        let conferma = true; // Variabile per l'avvio del timeout.

    /*------- BOTTONE INFORMAZIONI MARCHIO --------*/

        const btn_1 = document.getElementById('btn_1');
        const marchioWrapper = document.querySelector('.marchioWrapper');
        const sparisci = document.querySelector('.sparisci');

            btn_1.addEventListener('click', ()=>{
                sparisci.style.display = 'none';
                const div = document.createElement('div');
                marchioWrapper.innerHTML = ``;
                div.classList.add('marchioinfo');
                div.innerHTML = `
                     <div class="interno">
                        <div class="frontinfo h1 fonth1 d-flex justify-content-center align-items-center"> PRESTO CUSTOM</div>
                        <div class="infoback d-flex justify-content-center text-center">
                            <p id="marchioDescription">
                                **Custom Presto** è un'azienda innovativa specializzata nella personalizzazione rapida di prodotti e servizi su misura. Con sede a Roma, fondata nel 2018, Custom Presto ha rivoluzionato il mercato italiano offrendo soluzioni tailor-made con tempi di consegna straordinariamente brevi.
                                L'azienda si distingue per la capacità di trasformare le esigenze dei clienti in prodotti finiti di alta qualità in tempi record. Che si tratti di articoli promozionali, abbigliamento personalizzato, gadget aziendali o packaging brandizzato, Custom Presto combina tecnologie all'avanguardia con un team di designer esperti per garantire risultati impeccabili.
                                La missione di Custom Presto è democratizzare l'accesso alla personalizzazione di qualità, permettendo alle piccole e medie imprese, così come ai privati, di avere prodotti unici e professionali senza compromessi su tempi e costi. Grazie a un sistema di produzione snello e un servizio clienti reattivo, Custom Presto è diventata il partner di fiducia per migliaia di aziende che cercano soluzioni veloci, affidabili e creative.
                                Con un team multidisciplinare e tecnologie digitali integrate, Custom Presto continua a crescere, portando l'eccellenza italiana della manifattura personalizzata a livello nazionale e internazionale.
                            </p>
                            <div>
                                <button id="chiudiBtn">Chiudi</button
                            </div>  
                        </div> 
                    </div>
                `;
                
                marchioWrapper.appendChild(div);
                const chiudiBtn = document.getElementById('chiudiBtn');
                chiudiBtn.addEventListener('click', ()=>{
                    marchioWrapper.innerHTML = ``;
                    sparisci.style.display = 'block';
            });
        });
       
        


    /* ----- CHIAMATE ASINCRONE ----- */

    function  incrementInterval(n, element, time){ //Ci sono almeno tre parametri da passare, che sono n, element, time.
        let counter = 0;
        let asyncroncall = setInterval(()=>{
            if(counter < n){// 1* Parametro) Il numero al quale vogliamo arrivare
                counter++
                element.innerHTML = counter;// 2° Parametro)L'elemento in cui deve apparire il numero che ci serve
            }else{
                console.log('Adesso mi fermo!');
                clearInterval(asyncroncall);

            };
        }, time);//3° Parametro) L'intervallo di tempo delle iterazioni.
            setTimeout(()=>{
            confirm = true;
        }, 10000);
    };

        let observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting && conferma){
                    incrementInterval(100, incrementPV, 100);
                    incrementInterval(200, incrementCS, 50);
                    incrementInterval(300, incrementCG, 20);
                    conferma = false;  
                };
            });
        });
    
    /*----- FUNZIONI SUL DOM. ----- */

        window.addEventListener('scroll', ()=>{
            let scrolled = window.scrollY;
                if(scrolled > 250){
                    navbardom.classList.remove('bg_blk');
                    navbardom.classList.add('bg_ylw');
                    nvbrCollapse.classList.remove('bg_blk');
                    nvbrCollapse.classList.add('bg_ylw');
                    navbardom.style.height = '80px';
                    linksnav.forEach((link) =>{
                        link.style.color = 'var(--blk)';
                    });
                    changeLogo.src= 'http://127.0.0.1:5500/materialemedia/Logo_Navicella_StarWars_nero.png';
                    spadaLaser.src = 'http://127.0.0.1:5500/materialemedia/spadalaser_starwars_blk.png';
                }else{
                    navbardom.classList.add('bg_blk');
                    navbardom.classList.remove('bg_blu');
                    nvbrCollapse.classList.add('bg_blk');
                    nvbrCollapse.classList.remove('bg_ylw');
                    nvbrCollapse.classList.add('bg_blk');
                    navbardom.style.height = '120px';
                    linksnav.forEach((link) =>{
                        link.style.color = 'var(--ylw)';
                });

                changeLogo.src = 'http://127.0.0.1:5500/materialemedia/Logo_Navicella_StarWars_Giallo.png';
                spadaLaser.src = 'http://127.0.0.1:5500/materialemedia/spadalaser_starwars_ylw.png';           
                 
                };

        });
        
        spadaLaser.addEventListener('click', ()=> {
            if(verifica == false){
                spadaLaser.style.transform = `rotate(-90deg)`;
                verifica = true;
            }else{
                spadaLaser.style.transform = `rotate(0deg)`;
                verifica = false;
            };           
        });

        observer.observe(incrementPV);

        

/*------- OGGETTO ARRAY RECENSIONI -------*/

    let recensioni = [
        /*  Oggetto*/ { utente : `Vincenzo Mauro`, descrizione : `Non è soddisfaciente come mi aspettavo`, valutazione : 2},
        { utente : `Pasquale Iovine`, descrizione : `Bello e si può fare di più`, valutazione : 4},
        { utente : `Gianni Petti`, descrizione : `Da migliorare`, valutazione : 3},
        { utente : `Annamaria Marullo`, descrizione : `Bruttissimo`, valutazione : 1},
        { utente : `Banana Mandarino`, descrizione : `Fantastico`, valutazione : 5},
            ]

    recensioni.forEach((recensione) =>{
        let div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
            <div class="card_recensione">
                <p class="text-center"> ${recensione.descrizione}</p>
                <p class="h4 text-center">
                    ${recensione.utente}
                </p>
                <div class="d-flex justify-content-center star">
                  
                </div>
            </div>`;

            swiperWrapper.appendChild(div);
    });

        let stars = document.querySelectorAll('.star');

            stars.forEach((star, index)=>{
                /* Devi per ogni valore della proprietà valutazione (esempio 5) utilizzando l'indice della NodeList e attraverso il ciclo for appendere i rispettivi div star */
                for(let i = 1; i <= recensioni[index].valutazione; i++){     // Per poter arrivare a verificare il valore della proprietà valutazione attraverso il ciclo (for) sto dicendo parti da 1 e i deve eesere minore o uguale a recensioni(cioè l'array) in posizione dell'index(la stessa del div.valutazione.).

                    let iconstar = document.createElement('i');// la 'i' si riferisce al tag <i> dell'icona di fontawesome ed è l'elelemnto che devo creare nel DOM per aggiungerlo nei div in cui verranno inseriti i valori della propriertà valutazione dell'oggetto recensioni.

                    iconstar.classList.add('fa-solid', 'fa-star');
                    star.appendChild(iconstar);

                }// Fino a qui abbiamo inserito valutazione in stelle ma, non vediamo le stelle vuote per chi ha inserito una valutazione inferiore a 5 quindi, per ovviare possiamo:

                let starvuote = 5 - recensioni[index].valutazione;
                    for(let i = 1; i <= starvuote; i++){
                        let iconstar = document.createElement('i');
                        iconstar.classList.add('fa-regular', 'fa-star');
                        star.appendChild(iconstar);
            };
            });

/* SEZIONE INIZIALIZZAZIONE SWIPERJS */
            const swiper = new Swiper('.swiper', {/* NELL'OGGETTO SWIPER, NON C'E' ALTRO CHE IL QUERYSELECTOR CHE SELEZIONA LA CLASSE.swiper */
    // Optional parameters
            // direction: 'vertical',
            effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 1000,
        stretch: 0,
        depth: 1000,
        modifier: 1,
        slideShadows: true,
      },

            loop: true,

    // If we need pagination
        //     pagination: {
        //     el: '.swiper-pagination',
        // },

    // Navigation arrows
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    // And if we need scrollbar
        //     scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
        