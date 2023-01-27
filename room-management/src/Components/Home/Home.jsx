import React from 'react';
import { motion } from 'framer-motion';

import { images} from '../../Constant'
import './Home.scss';
import { Link } from 'react-router-dom';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};


const Home = () => (
  <div>

  <div className='hello'>
    <motion.div
  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
  transition={{ duration: 0.5 }}
  className="app__header-info"
>
  <div className="app__header-badge">
    <div className="badge-cmp app__flex">
      <span>👋</span>
      <div style={{ marginLeft: 20 }}>
        <p className="p-text">مرحبا اخي</p>
        <h1 className="head-text">كيف حالك</h1>
      </div>
    </div>

    <div className="tag-cmp app__flex">
      <p className="p-text">خوشامدی</p>
      
    </div>
  </div>
</motion.div></div>
  <div className="app__header app__flex">
    

    
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
        
      <img src={images.parvez_new_profile}alt="profile_bg" />
      
      
    </motion.div>
    <div>
      <span className='parvezName1'> محمد پرویز جہانگیردار</span>
      <span className='sd'>Software Developer   Engineer</span>
    </div>

    
   
    

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
        
      <img src={images.aliProfile}alt="profile_bg" />
      
      
    </motion.div>
    <div>
      <span className='parvezName'>پٹھان أبرار خان</span>
      <span className='sd'>DevOps Trainee Engineer</span>
    </div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
        
      <img src={images.BuilderProfile}alt="profile_bg" />
      
      
      
    </motion.div>
    <div>
      <span className='parvezName1'>عبد الاحد خان (حمزة)</span>
      <span className='sd1'>Information Technology Student</span>
    </div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
        
      <img src={images.Nihalprofile}alt="profile_bg" />
      
      
    </motion.div>
    <div>
      <span className='parvezName'> الشيخ محمد نحال</span>
      <span className='sd'>Big-Data Hadoop Administrator</span>
    </div>
    
  </div>

  
  <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Bait-ul-Takneek </h1>
        
    <h2>Sairam niwas </h2>
    
    <address>
      Behind PragatiPark, pokale mala, Kondhwa Khurd Pune 411048 <br/>
          
      
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Parvez jahagirdar</h2>

      <ul class="nav__ul">
        <li>
          <a href="https://www.linkedin.com/in/parvez-jahagirdar-b11493225/">Linkedin</a>
        </li>

        <li>
          <a href="https://wa.me/qr/X2JQOKRSA2BQC1">WhatsApp </a>
        </li>
            
        <li>
          <a href="https://www.instagram.com/parvez_jhagirdar_04/?utm_source=qr">Instagram </a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Abrar Khan </h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Linkedin</a>
        </li>
        
        <li>
          <a href="https://www.facebook.com/pathanabrar.alikhan.5?mibextid=ZbWKwL">Facebook</a>
        </li>
        
        <li>
          <a href="https://instagram.com/abrar_pathan_333?igshid=YmMyMTA2M2Y=">Instagram </a>
        </li>
        <h2 class="nav__title bui">Ahad Khan</h2>
        <li>
          <a href="#">Linkedin</a>
        </li>
        
        <li>
          <a href="https://wa.me/qr/MTMFE4EJ7H7CE1">WhatsApp </a>
        </li>
        
        <li>
          <a href="https://instagram.com/ahad_khan_official_?igshid=OGQ2MjdiOTE=">Instagram</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Nihal Shaikh</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="https://www.linkedin.com/in/nihal-j-s-8696a2148">LinkedIn</a>
        </li>
        
        <li>
          <a href="#">WhatsApp</a>
        </li>
        
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2023-January. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made by <span class="heart">♥</span> Parvez Jahagirdar</span>
    </div>
  </div>
</footer>

  </div>
);

export default Home
