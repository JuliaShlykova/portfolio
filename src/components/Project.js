import React, { useLayoutEffect } from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = ({project}) => {
  const {name, description, screenshot, githubUrl, url, languages} = project;
  
  const projectRef = useRef(null);
  
  useLayoutEffect(() => {

    const el = projectRef.current;
    let ctx = gsap.context(() => {

      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=200px",
          scrub: true,
          pin: true
        }
      })
      .to(el, { backgroundColor: "black" }, '<')
      .from(el.querySelector('.project-img'), {scale: 1.2}, '<')
      .from(el.querySelector('.project-info'), {opacity: 0}, '<');

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className='project' ref={projectRef}>
      <img src={screenshot} alt={name} className='project-img' />
      <div className="project-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="languages">
          {languages.map((el, i) => {
            return <img src={el} alt='' className="icon-language" key={i} />
          })}
        </div>
        <div className="links-container">
          <a href={url}>Visit site</a>
          <a href={githubUrl}>GitHub page</a>
        </div>
      </div>
    </section>
  )
}

export default Project