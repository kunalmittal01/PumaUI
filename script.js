const offer = document.getElementsByClassName("offer-stripe")[0];
const offerdisp = document.getElementById("offerdisp");

const nav = document.querySelector('nav');
const offAr = ['FREE RETURNS AND FREE EXCHANGE.','EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS.',"SOLVE YOUR QUERIES FASTER THAN EVER! SEND US A 'HI' ON WHATSAPP AT 6364929121",
];
let id = 0;
const handleScroll = ()=>{
    if(scrollY > 100) {
        nav.style.position = 'fixed';
    }
    else {
        nav.style.position = 'static';
    }
}

document.addEventListener('scroll', handleScroll)

setInterval(()=>{
    if(id == offAr.length) id = 0;
    offerdisp.textContent = offAr[id];
    id++;
},2000);