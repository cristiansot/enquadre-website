import React, { useEffect } from 'react';
import gsap from 'gsap';
import { SocialIcon } from 'react-social-icons';
import Slider from '../components/Slider'; 
import Form from '../components/Form';
import Whatsapp from '../components/Whatsapp'
import Toggle from './Toggle';
import Buttons from '../components/Buttons'
import HomeButton from '../components/HomeButton'

import '../assets/css/slider.css';

import home from '../assets/img/home.jpg';
import nosotros from '../assets/img/nosotros.jpg';
import clientes from '../assets/img/clientes.jpg';
import contacto from '../assets/img/contacto.jpg';
import logo from '../assets/img/logotipo.png';
import spot from '../assets/img/spot_pulicitario.jpg'
import comunicacion from '../assets/img/comunicacion_interna.jpg'
import corporativo from '../assets/img/corporativo.jpg'
import automotriz from '../assets/img/automotriz.jpg'
import industrial from '../assets/img/industrial.jpg'
import motion from '../assets/img/motion_graphics.jpg'
import fotografia from '../assets/img/fotografia.jpg'
import streaming from '../assets/img/eventos_streaming.jpg'
import service from '../assets/img/service.jpg'

import homeMobile from '../assets/img/mobile/home_mobile.jpg'
import nosotrosMobile from '../assets/img/mobile/nosotros_mobile.jpg'
import clientesMobile from '../assets/img/mobile/clientes_mobile.jpg'
import contactoMobile from '../assets/img/mobile/contacto_mobile.jpg'

const slides = [
  { servicios: 'CORPORATIVO', img: corporativo },
  { servicios: 'SPOT PUBLICITARIO', img: spot,},
  { servicios: 'COMUNICACIÓN INTERNA', img: comunicacion, },
  { servicios: 'AUTOMOTRIZ', img: automotriz, },
  { servicios: 'INDUSTRIAL', img: industrial, },
  { servicios: 'FOTOGRAFÍA', img: fotografia, },
  { servicios: 'STREAMING', img: streaming, },
  { servicios: 'MOTION GRAPHICS', img: motion, },
  { servicios: 'SERVICE', img: service, },
];

function linkedIn() {
  window.open("https://www.linkedin.com/in/marcelo-gonz%C3%A1lez-l%C3%B3pez-009630105/", "_blank");
}

function instagram() {
  window.open("https://www.instagram.com/enquadre.cl/", "_blank");
}

function youtube() {
  window.open("https://www.youtube.com/@marcelo-Enquadre", "_blank");
}

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
      <img className='logo' src={logo} alt="logo" />
        <nav>
          <a href="#first">Inicio </a>
          <a href="#second">Servicios </a>
          <a href="#third">Nosotros </a>
          <a href="#fourth">Clientes </a>
          <a href="#fifth">Contacto</a>
          <SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={linkedIn} url="https://www.linkedin.com" />
          <SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={instagram} url="https://www.instagram.com/" />
          <SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={youtube} url="https://www.youtube.com/" />
        </nav>
      </header>

      <Whatsapp />
      <Toggle className="toggle" />

      <Section
        id="first"
        className="first"
        bgUrl={home}
      >
      <img className='homeMobile' src={homeMobile} alt="Home" />        
      
      <HomeButton className="homeButton"/>
      </Section>

      <Section
        id="second"
        className="second"  
      >
        <Slider className='slides' slides={slides} /> 
      </Section>
      
      <Section
        id="third"
        title="Nosotros"
        className="third"
        bgUrl={nosotros}
      >
        <img className='nosotrosMobile' src={nosotrosMobile} alt="Nosotros" />    
        <p className='texto'>
          "Creamos productos de calidad, de forma rápida y simple. Nuestra inspiración es ayudar a nuestros clientes a comunicar de manera eficiente, moderna, más amigable, cercana y apuntando hacia la sustentabilidad corporativa. Nos avala una amplia trayectoria en el rubro junto a un equipo humano que mezcla la experiencia y la innovación. Nuestra propuesta precio-calidad es de excelencia, equilibrada y adaptable."
        </p>
      </Section>
      
      <Section 
        id="fourth"
        // title="Clientes"
        className="fourth"
        bgUrl={clientes} 
      >
        <Buttons />
        <img className='clientesMobile' src={clientesMobile} alt="Clientes" />    
      </Section>

      <Section
        id="fifth"
        title="Contacto"
        className="fifth"
        bgUrl={contacto} 
      >
        <h3 className='email'>
          e-mail: marcelo@enquadre.cl
        </h3>
        <h3 className='movil' href="tel:+56993595606" >
          Móvil: +56 9 9359 5606
        </h3>
        <Form className='form'/> 
        <img className='contactoMobile' src={contactoMobile} alt="Contacto" />    
      </Section>
    </div>
  );
};

const Section = ({ id, title, className, bgUrl, children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrapper-outer">
        <div className="wrapper-inner">
         {children}
          <div className="background" style={{ backgroundImage: `url(${bgUrl})` }}>
          
            <h2 className="section-title">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Code;