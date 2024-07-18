import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div className="container">
          <div className="grid footer-grid">
            <div className="grid-item">
              <nav>
                <ul>
                  <li>
                    <a href="/">صفحه اول</a>
                  </li>
                  <li>
                    <a href="/">پیگیری سفارش</a>
                  </li>
                  <li>
                    <a href="/">نحوه استفاده از تخفیف</a>
                  </li>
                  <li>
                    <a href="/">شرایط استفاده</a>
                  </li>
                  <li>
                    <a href="/">درباره ما</a>
                  </li>
                  <li>
                    <a href="/">تماس با ما</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="grid-item">
              <nav>
                <ul>
                  <li>
                    <a href="/">داستان من چیست؟</a>
                  </li>
                  <li>
                    <a href="/">لالایی های برای کودک شما</a>
                  </li>
                  <li>
                    <a href="/"> کودکمان را چقدر دوست داریم</a>
                  </li>
                  <li>
                    <a href="/">در جستجوی راز ستاره ها</a>
                  </li>
                  <li>
                    <a href="/">داستان شگفت‌انگیز تولد</a>
                  </li>
                  <li>
                    <a href="/">همه کتابها</a>
                  </li>
                  <li>
                    <a href="/">داستان شکست کرونا</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="grid-item">
              <div className="buttons">
                <a href="/" className="btn btn-shadow btn-violet">
                  عضویت در سایت
                </a>
                <a href="/" className="btn btn-shadow btn-green">
                  ورود به سایت
                </a>
              </div>
              <div className="logos">
                <img src="/img/logo-samandehi.png" alt="" />
                <img src="/img/logo-enamad.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="logo-image">
          <img src="/img/logo-bg-white.svg" alt="" />
        </div>
        <div className="copyright">
          تمامی حقوق مادی و معنوی متعلق به شرکت راهکارهای خلاق کِلک خیال است.
          <br />
          تهران، خیابان مطهری، خیابان کوه نور، کوچه دوم پلاک ۱۹ واحد ۱
          <br />
          تلفن: ۰۲۱۹۱۰۱۰۲۸۲
          <br />
          ساخته شده با <i className="fa fa-heart"></i> در ایران
        </div>
      </div>
    </footer>
  )
}

export default Footer
