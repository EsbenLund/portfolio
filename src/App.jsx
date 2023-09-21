import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Footer from './components/Footer';
import WorkExperience from './components/Workexperience';
import Skills from './components/Skils';
import Projects from './components/Projects';
import Edu from './components/Education';
import Menu from './components/Menu';
import ProfilImg from './components/ProfilImg';
import './App.css';
import AboutMe from './components/Aboutme';


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData(){
      const response = await fetch ("https://wp.lundp97.dk/wp-json/wp/v2/posts?categories=7");
      const data = await response.json();
      setPosts(data);
    }
    getData();

    

  }, []); //denne post bliver kun rendered 1 gang
  
  return (
    <Loading>
      <main className="container">
        <section className="left-section">
          <article>
            {posts.map(post => (
            <AboutMe key={post.id} post={post}/>
            
            ))}
            <ProfilImg />
          </article>
          <Menu />
          <Footer />
        </section>
        <section className="right-section">
          <Projects />
          <Skills />
          <WorkExperience />
          <Edu />
        </section>
      </main>
    </Loading>
  );
}
export default App;