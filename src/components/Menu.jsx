import React, { useEffect } from 'react';

function Menu() {
  useEffect(() => {
    // Hent alle dine links
    const links = document.querySelectorAll('.menu a');

    // Lyt efter klik på hvert link
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        // Fjern 'active' klassen fra alle links
        links.forEach((otherLink) => {
          otherLink.classList.remove('active');
        });

        // Tilføj 'active' klassen til det klikkede link
        link.classList.add('active');
      });
    });
  }, []); 

  return (
    <nav className="menu">
      <a href="#projects">Projekter</a>
      <a href="#skills">Færdigheder</a>
      <a href="#workExperience">Erhvervserfaring</a>
      <a href="#education">Uddannelse</a>
    </nav>
  );
}

export default Menu;