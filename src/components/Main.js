import React from 'react';
import '../styles/main.css';
import skillsList from './skills-list';
import projectsList from './projects-list';
import Project from './Project';

const Main = () => {
  return (
    <main>
    <section id="about">
      <h1>About</h1>
      <p>
      I've always admired those who can invent something fresh, valuable, and appealing.
      That's probably why life brought me to web development.
      <br></br>Making things simpler and easier to reach goals is also encouraged by the UNIX philosophy: 
      </p>
      <figure>
        <blockquote cite="https://en.wikipedia.org/wiki/Unix_philosophy">
        <p>Do one thing and do it well.</p>
        </blockquote>
        <figcaption>—Peter H. Salus, <cite>A Quarter-Century of Unix</cite></figcaption>
      </figure>
      Although the quote is about programs, it also relates to everyday life.
      <section>
        <h2>Skills</h2>
        <div className="skills-container">
          {skillsList.map((el, i) => {
            return (
              <a href={el.url} title={el.name} className="skill" key={i}><img src={el.icon} alt={el.name} /></a>
            )
          })}
        </div>
      </section>

    </section>
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectsList.map((el, i) => {
          return (
            <Project key={i} project={el} />
          )
        })}
      </div>
    </section>
    </main>
  )
}

export default Main