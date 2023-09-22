import { useEffect } from "react";
export default function Footer(){
    useEffect(() => {
const links = document.getElementById("footerId");
links.onclick = function (event){
    switch (event.target.id) {
        case "linkedin":
            location.href = "https://www.linkedin.com/in/esben-lund-63061b289/";
            break;
        case "gmail":
            var userEmail = "esbenlund3@gmail.com";
            location.href = "mailto:" + userEmail;
            break;
        case "github":
            location.href = "https://github.com/EsbenLund"; 
            break;
        case "phone":
            location.href = "tel:+4520531929"; 

    }
}
}, []);
    return(
        <footer id="footerId">
            <h2>Kontakt mig her</h2>
            <section>
               <img className="contactImg" src="./linkedin.png" id="linkedin" alt="Linkedin logo, som linker til min profil"/>
            </section>
            <section>
               <img className="contactImg" src="./gmail.png" id="gmail" alt="Gmail logo, som linker til min profil"/>
            </section>
            <section>
               <img className="contactImg" src="./github.png" id="github" alt="Github logo, som linker til min profil"/>
            </section>
            <section>
               <img className="contactImg" src="./phone.png" id="phone" alt="Mobil telefon som indeholder mit telefon nummer"/>
            </section>
        </footer>

    )};
    