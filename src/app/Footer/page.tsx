import "./Footer.scss";

export default function Footer() {
  return (
    <main className="main_footer">
      <div className="bac_color_footer">
        <div className="row-colum1">
          <div className="footer_logo">
            <img
              src="https://storage.vscl.ru/logos/c3/ff/fe/c3fffe6b472766b607e5727ba0dda7981651b63b.png?s=400"
              alt=""
              className="logo_f"
            />
            <div>
              <p>&copy;2024</p>
              <p>Уральский медицинский колледж</p>
              <a href="https://umedcollege.ru/privacy-policy/">
                Политика конфиденциальности
              </a>
            </div>
          </div>

          <div className="text_p">
            <a href="https://umedcollege.ru/o-kolledze/">О колледже</a>
            <a href="https://umedcollege.ru/specialties/">Специальности</a>
            <a href="https://umedcollege.ru/specialties-usk/">
              Ускоренное обучение
            </a>
            <a href="https://umedcollege.ru/additional-education/">
              Дополнительное образование
            </a>
            <a href="https://umedcollege.ru/for-students/">Студентам</a>
            <a href="https://umedcollege.ru/for-prospective-students/">
              Поступающим
            </a>
            <a href="https://umedcollege.ru/about/">
              Сведения об образовательной организации
            </a>
            <a href="https://umedcollege.ru/sitemap">Карта сайта</a>
          </div>
        </div>
        <div className="row-colum2">
        <div className="cons_footer">
          <a href="tel:+73512020060" className="telefone">
            +7 351 202 00 60
          </a>
          <a href="" className="cons">
            <img
              src="https://umedcollege.ru/local/templates/umed/images/tel-icon.svg"
              alt=""
            />
            Получить консультацию
          </a>
          <div>
            <p>454092, г. Челябинск, ул. Курчатова, 9</p>
            <a href="">Как нас найти? </a>
          </div>
        </div>

        <div className="vopros">
          <button>
            <img
              src="https://umedcollege.ru/local/templates/umed/images/chat-icon.svg"
              alt=""
              className="img_button_footer"
            />
            Задать вопрос
          </button>
          <div className="icon_footer">
            <img
              src="https://img.icons8.com/?size=100&id=a3KJnDC3cquV&format=png&color=5E419D"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=100&id=F8Gx4aL9s9YZ&format=png&color=5E419D"
              alt=""
            />
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
