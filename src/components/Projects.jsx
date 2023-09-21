export default function Projects(){
    return(
        <article id="projects" className="workText">
        <h1 className="mainHeaderWork">Projekter</h1>
        <p>Her er et lille udrag af nogle de projekter jeg har arbejdet på
        </p>
        <div className="workBox">
            <h1>Jensen Cykler</h1>
            <p className="yearP">1. Semester Eksamen</p>
            <section>
            <p>Her lavede jeg en hjemmeside som skulle oplyse om et produkt fra Jensen Cykler.
                Hensigten med denne opgave var at øge opmærksomheden på Jensen Cykler. Det gjorde jeg ved at en fiktiv konkurrence, 
                hvor man kunne vinde den perfekte cykel til studerende.
            </p>
            <img src="./jensen.png" className="projectImg" alt="Billede af Jensen Cykler eksamensprojekt"/>
            </section>
        </div>
        <div className="workBox">
            <h1>Nippon Måltidskasser</h1>
            <p className="yearP">2. Semester Gruppe Projekt</p>
            <section>
            <p>I dette projekt skulle vi lave en hjemmeside, til en fiktiv virksomhed som sælger måltidskasser.
                Hjemmesiden er beregnet til Ipad/tablet. Der er ikke så meget kode i dette projekt.
                Formålet var at vise brugerens vej fra startside til betaling af ordren.
            </p>
            <img src="./nippon.png" className="projectImg" alt="Billede der viser forsiden af projektet Nippon"/>
            </section>
        </div>
        <div className="workBox">
            <h1>Teaterkatten</h1>
            <p className="yearP">2. Semester Eksamen</p>
            <section>
            <p>En hjemmeside lavet til Teaterkatten, en bar/cafe centralt placeret i Aarhus. Vores hensigt med denne hjemmeside var, 
                at give dem en større online tilstedeværelse, hvor det var muligt at booke bord, se deres menukort og holde sig opdateret
                på deres kommende events. Alt sammen kunne gøre fra forsiden, da det skulle være nemt og ligetil.
            </p>
            <img src="./tk.png" className="projectImg" alt="Billede der viser et tidligere projekt"/>
            </section>
        </div>
       
    </article>
    )

};