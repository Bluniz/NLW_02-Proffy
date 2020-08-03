import React from 'react';
import './styles.css';
import wppIcon from '../../assets/images/icons/whatsapp.svg'




function TeacherItem(){
  return(
    <article className="teacher-item">
         <header>
           <img src="https://pbs.twimg.com/profile_images/1263639597076144130/GrA8GPFc_400x400.jpg" alt="Lucas Rosda"/>
           <div>
             <strong>Lucas Rosa</strong>
             <span>Química</span>
           </div>
         </header>

         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           <br/><br/>
           Sequi odio architecto dignissimos nostrum nulla aperiam nobis. Maxime molestiae corporis incidunt non veniam porro vitae nulla? Totam, earum? Repellat, assumenda eos!
         </p>

         <footer>
           <p>
             Preço/Hora:
             <strong>R$ 100,00</strong>
           </p>
           <button type="button">
             <img src={wppIcon} alt="Whatsapp"/>
             Entrar em contato
           </button>
         </footer>
       </article>
  )
}


export default TeacherItem;