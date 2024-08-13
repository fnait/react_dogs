import ReactDOM from 'react-dom/client'
import logo from "./img/logo2.png";
import search from "./img/search.png";
import { dogs_info } from "./data.js"
import React, { useState } from 'react';

let iterator = 0;
export default function App() {

    // Состояние для хранения значения переменной
    // const [value, setValue] = useState(null);
    const [contentType, setContent] = useState(0);

    const handleClick = (type) => {
      setContent(type);
    }

  return (
    
    <div> 
      <header className='navbar'>
        <div className="navbar_logoplace">
          <img src={logo} alt="logo" className="the_logo" height="40px"/>
        </div>

        <div className="navbar__searchplace">
          <div className="search_mainplace">
            <button type="submit" className="search-header__button">
              <div className="picha">
                <img src={search} alt="Тут має бути картинка" height="15px"/>
              </div>
            </button>

            <input type="text" className="search-header__input" />

            <button type="submit" className="search-header__button2">
              <div className="picha2">
                <img src={search} alt="Тут має бути картинка" height="15px"/>
              </div>
            </button>
          </div>
        </div>

        <div className="navbar__buttons">
          <a href="#" className='active'>Головна</a>

          <li className="dropdown">
            <a href="#" className="dropbtn">Породи</a>
            <div className="dropdown-content">
              {/* Кнопки, которые устанавливают значение переменной */}
              <button onClick={() => handleClick(0)}>{dogs_info[0].dog_poroda}</button>
              {/* <br/> */}

              <button onClick={() => handleClick(1)}>{dogs_info[1].dog_poroda}</button>
              {/* <br/> */}

              <button onClick={() => handleClick(2)}>{dogs_info[2].dog_poroda}</button>
              {/* <br/> */}

              <button onClick={() => handleClick(3)}>{dogs_info[3].dog_poroda}</button>
            </div>
          </li>
          
          <a href="#" className="dropbtn">Зворотній зв'язок</a>
        </div>
      </header>

      <main>
        <aside className="main_aside">
          <h2>{dogs_info[contentType].dog_poroda}</h2>
          <h5>Фото породи :</h5>
          <div className="aside_image">
            <img
              src="#"
              alt="akita_main"
              height="270px"
            />
          </div>

          <br />
          <br />

          <h3>Основні риси</h3>
          <p>Подробніше...</p>
          <div className="fakts_about_dog" sx="min-height: 60px">
            <span className="fakts_bold">Зріст самців:</span> {dogs_info[contentType].info_height}
          </div>
          <br />
          <div className="fakts_about_dog" sx="min-height: 60px">
            <span className="fakts_bold">Вага самців:</span> {dogs_info[contentType].info_weight}
          </div>
          <br />
          <div className="fakts_about_dog" sx="min-height: 60px">
            <span className="fakts_bold">Тривалість життя:</span> {dogs_info[contentType].info_living}
          </div>
          <br />
          <div className="fakts_about_dog" sx="min-height: 60px">
            <span className="fakts_bold">Характер:</span> {dogs_info[contentType].info_character}
          </div>
          <br />
          <div className="fakts_about_dog" sx="min-height: 60px">
            <span className="fakts_bold">Походження:</span> {dogs_info[contentType].info_homeland}
          </div>
        </aside>

        <article className="main_article">
          <h2>Щодо породи</h2>
          <p>
            {dogs_info[contentType].text_about}
          </p>
          <br />

          <div className="gallery_photo">
            <img
              src="../img/dogs/akita/akita_image2.jpg"
              alt="akita_image2"
            />
            <img
              src="../img/dogs/akita/akita_image3.jpg"
              alt="akita_image3"
            />
          </div>

          <h2>Характеристика породи</h2>
          <p>
            {dogs_info[contentType].text_characteristic}
          </p>
          <br />

          <h2>Цікаві факти</h2>
          <p>
            {dogs_info[contentType].text_facts}
          </p>
          <br />

          <h2>Догляд</h2>
          <p>
            {dogs_info[contentType].text_care}
          </p>
          <br />

        </article>
      </main>

      <footer>
        <div className="footer_content">
          <h4>2024</h4>
          <h5>
            <a href="#" className="footer_inst_link">
              <span className="upper">@vladyslav_pjatnizki</span>
            </a>
          </h5>

          <button>
            <a href="#" className="footer_inst_link">
              пропозиції та зв'язок з автором
            </a>
          </button>
        </div>  
      </footer>
    </div>
  )
}