import "./Header.scss";

export default function Header() {
  return (
    <main className="main_header">
      <div>
        <div>
          <img
            src="https://umedcollege.ru/local/templates/umed/images/head-logo2.svg"
            alt=""
            className="image_Umed"
          />
        </div>
        <div>
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
        </div>
        <div className="icon">
          <img
            src="https://umedcollege.ru/local/templates/umed/images/search-icon.svg"
            alt=""
          />
          <img
            src="https://umedcollege.ru/local/templates/umed/images/view-icon.svg"
            alt=""
          />
          <img
            src="https://umedcollege.ru/local/templates/umed/images/user-icon.svg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
