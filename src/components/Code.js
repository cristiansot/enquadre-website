import React, { useEffect } from 'react';
import gsap from 'gsap';
import home from '../assets/img/home.jpg'
import servicios from '../assets/img/service.jpg'
import nosotros from '../assets/img/nosotros.jpg'
import clientes from '../assets/img/clientes.jpg'
import contacto from '../assets/img/contacto.jpg'

const Code = () => {
  useEffect(() => {
    let sections = document.querySelectorAll('.section'),
      images = document.querySelectorAll('.background'),
      headings = document.querySelectorAll('.section-title'),
      outerWrappers = document.querySelectorAll('.wrapper-outer'),
      innerWrappers = document.querySelectorAll('.wrapper-inner'),
      currentIndex = -1,
      wrap = (index, max) => (index + max) % max,
      animating;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index, sections.length);
      animating = true;

      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => (animating = false),
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          headings[index],
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power2',
            stagger: { each: 0.02, from: 'random' },
          },
          0.2
        );

      currentIndex = index;
    }

    function navigateSectionById(id) {
      let index = Array.from(sections).findIndex(
        (section) => section.id === id
      );

      if (index !== -1 && index !== currentIndex) {
        gotoSection(index, index > currentIndex ? 1 : -1);
      }
    }

    let lastTap = 0;
    document.addEventListener('touchend', function (event) {
      let currentTime = new Date().getTime();
      let tapLength = currentTime - lastTap;
      if (tapLength < 500 && tapLength > 0) {
        gotoSection(currentIndex + 1, 1);
        event.preventDefault();
      }
      lastTap = currentTime;
    });

    window.addEventListener('wheel', (event) => {
      if (event.deltaY < 0 && !animating) {
        gotoSection(currentIndex - 1, -1);
      } else if (event.deltaY > 0 && !animating) {
        gotoSection(currentIndex + 1, 1);
      }
    });

    document.querySelectorAll('nav a').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        navigateSectionById(e.currentTarget.getAttribute('href').slice(1));
      });
    });

    gotoSection(0, 1);
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <nav>
          <a href="#first">Inicio </a>
          <a href="#second">Servicios </a>
          <a href="#third">Nosotros </a>
          <a href="#fourth">Clientes </a>
          <a href="#fifth">Contacto</a>
        </nav>
      </header>

      <Section
        id="first"
        title="Ver Reel"
        className="first"
        bgUrl={home}
      />
      <Section
        id="second"
        title="Servicios"
        className="second"
        bgUrl={servicios}      
      />
      <Section
        id="third"
        title="Nosotros"
        className="third"
        bgUrl={nosotros} 
      />
      <Section
        id="fourth"
        title="Clientes"
        className="fourth"
        bgUrl={clientes} 
      />
      <Section
        id="fifth"
        title="Contacto"
        className="fifth"
        bgUrl={contacto} 
      />
    </div>
  );
};

const Section = ({ id, title, className, bgUrl }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrapper-outer">
        <div className="wrapper-inner">
          <div className="background" style={{ backgroundImage: `url(${bgUrl})` }}>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Code;
