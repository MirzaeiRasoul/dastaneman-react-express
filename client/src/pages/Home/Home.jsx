import "./Home.css"
import RootLayout from "../../layouts/RootLayout"

function Home() {
  return (
    <RootLayout>
      <main>
        <section className="banner-section">
          <img src="/img/desktop1.jpg" alt="Hero Banner" />
          <div className="container">
            <div className="banner-content">
              <div className="banner-text">کتابهای اختصاصی با قهرمانی کودک شما</div>
              <h1>ارسال رایگان به همه جا!</h1>
              <div className="banner-text">برای مدت محدود</div>
            </div>
            <div className="banner-picture">
              <img src="/img/D-book2.jpg" alt="Book 1" />
            </div>
          </div>
        </section>

        <section className="categories-section">
          <div className="container">
            <div className="category-list">
              <div className="category-item">
                <a href="/">
                  <img src="/img/item-best.jpg" alt="" />
                  <div className="category-content">
                    <div className="category-text">
                      <h3>محبوبترین کتاب های اختصاصی</h3>
                      <p>به انتخاب کاربران سایت</p>
                    </div>
                    <div className="category-btn">مشاهده محبوبترین کتابها</div>
                  </div>
                </a>
              </div>
              <div className="category-item">
                <a href="/">
                  <img src="/img/item-birthday-3.jpg" alt="" />
                  <div className="category-content">
                    <div className="category-text">
                      <h3>بهترین هدیه جشن تولد</h3>
                      <p>کتاب های اختصاصی با موضوع تولد</p>
                    </div>
                    <div className="category-btn">مشاهده محبوبترین کتابها</div>
                  </div>
                </a>
              </div>
              <div className="category-item">
                <a href="/">
                  <img src="/img/item-notebook2.jpg" alt="" />
                  <div className="category-content">
                    <div className="category-text">
                      <h3>دفتر مشق اختصاصی</h3>
                      <p>با اسم و عکس کودک</p>
                    </div>
                    <div className="category-btn">مشاهده دفترها</div>
                  </div>
                </a>
              </div>
              <div className="category-item">
                <a href="/">
                  <img src="/img/item-cal-1403.jpg" alt="" />
                  <div className="category-content">
                    <div className="category-text">
                      <h3>تخفیف تقویم با مناسبتهای شما</h3>
                      <p>تقویم اختصاصی سال 1403 با امکان درج مناسبت های شخصی شما</p>
                    </div>
                    <div className="category-btn">مشاهده تقویم ها</div>
                  </div>
                </a>
              </div>
              <div className="category-item">
                <a href="/">
                  <img src="/img/item-adv-3.jpg" alt="" />
                  <div className="category-content">
                    <div className="category-text">
                      <h3>کتاب‌های ماجراجویانه</h3>
                      <p>کتاب های اختصاصی ماجراجویانه با قهرمانی کودک</p>
                    </div>
                    <div className="category-btn">مشاهده کتابهای ماجراجویانه</div>
                  </div>
                </a>
              </div>
              <div className="category-item">
                <a href="/">
                  <img src="/img/item-nini-3.jpg" alt="" />
                  <div className="category-content">
                    <div className="category-text">
                      <h3>کتابهایی مخصوص نی‌نی‌ها</h3>
                      <p>اولین کتابی که هر نوزاد باید داشته باشد</p>
                    </div>
                    <div className="category-btn">مشاهده کتابهای نوزاد</div>
                  </div>
                </a>
              </div>
              <div className="category-item">
                <a href="/">
                  <img src="/img/item-adult-1.jpg" alt="" />
                  <div className="category-content">
                    <div className="category-text">
                      <h3>کتابهایی مخصوص بزرگترها</h3>
                      <p>کتاب های مخصوص مامان باباها و بزرگترها</p>
                    </div>
                    <div className="category-btn">مشاهده کتابهای بزرگسال</div>
                  </div>
                </a>
              </div>
              <div className="category-item">
                <a href="/">
                  <img src="/img/item-family.jpg" alt="" />
                  <div className="category-content">
                    <div className="category-text">
                      <h3>کتاب‌هایی با حضور اعضای خانواده</h3>
                      <p>کتابی با قهرمانی کودک و امکان حضور اعضای خانواده</p>
                    </div>
                    <div className="category-btn">مشاهده کتابهای خانوادگی</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="esmeman-section">
          <div className="container">
            <div className="esmeman-content">
              <img src="/img/esmeman-logo.png" alt="" width="140" />
              <h2>محصول جدیدی از داستان من</h2>
              <p>پوشاک، کوله پشتی، کالای حمام و سیسمونی با گلدوزی نام کودک</p>
            </div>
            <div className="esmeman-list">
              <div className="esmeman-item">
                <a href="/">
                  <img src="/img/0007658_بنر-مربعی-اسم-من-در-داستان-من5.webp" alt="" />
                </a>
              </div>
              <div className="esmeman-item">
                <a href="/">
                  <img src="/img/0005412_square-banner1.webp" alt="" />
                </a>
              </div>
              <div className="esmeman-item">
                <a href="/">
                  <img src="/img/0004704_square-banner-33.webp" alt="" />
                </a>
              </div>
              <div className="esmeman-item">
                <a href="/">
                  <img src="/img/0007659_بنر-مربعی-اسم-من-در-داستان-من.webp" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="workshop-banner-section">
          <div className="container">
            <img src="/img/academy-3.jpg" alt="" />
          </div>
        </section>

        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title">داستان خوشبخت‌ترین کتاب‌های دنیا</h2>
            <div className="gallery-list dragable">
              <div className="gallery-item">
                <img src="/img/28.jpg" alt="" />
              </div>
              <div className="gallery-item">
                <img src="/img/21.jpg" alt="" />
              </div>
              <div className="gallery-item">
                <img src="/img/20.jpg" alt="" />
              </div>
              <div className="gallery-item">
                <img src="/img/17.jpg" alt="" />
              </div>
              <div className="gallery-item">
                <img src="/img/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="images-section">
          <div className="container">
            <div className="image-list">
              <div className="image-item">
                <img src="/img/hero-icon-8.png" alt="" />
                <h3>کتابی با قهرمانی کودک شما</h3>
              </div>
              <div className="image-item">
                <img src="/img/love-icon-8.png" alt="" />
                <h3>هدیه‌ای ماندگار و عاشقانه</h3>
              </div>
              <div className="image-item">
                <img src="/img/delivery-icon-8.png" alt="" />
                <h3>ارسال به سراسر جهان</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="honors-section">
          <div className="container">
            <h2 className="section-title">افتخارات داستان من</h2>
            <div className="honors-list">
              <div className="honors-item">
                <img src="/img/shekat-haye-khalagh-400x300.jpg" alt="" height="150" />
                <h3>شرکت برگزیده زیست بوم شرکتهای خلاق</h3>
              </div>
              <div className="honors-item">
                <img src="/img/seedstars.jpg" alt="" height="150" />
                <h3>استارتاپ برتر ایران در رقابت جهانی سیداستارز</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container">
            <h2 className="section-title">«داستانِ من» چیست؟</h2>
            <p className="description">
              «داستان من» محصولی نوآورانه است که با پیوند قصه گویی، هنر و تکنولوژی این امکان را برای شما فراهم می‌کند تا در تجربه خلق یک کتاب داستان اختصاصی برای کودک خود مشارکت کنید و او را قهرمان
              کتاب اختصاصی خودش کنید. داستانِ من به شما کمک می‌کند تا کتاب خواندن را برای کودکتان به تجربه‌ای فوق‌العاده تبدیل کنید. کتاب های اختصاصی داستانِ من که کودک شما خودش قهرمان آن است، علاوه
              براینکه یک هدیه ارزشمند و ماندگار است، او را به کتاب، علاقه مند کرده و باعث افزایش اعتماد به نفس او می شود.
            </p>
          </div>
        </section>

        <section className="news-section">
          <div className="container">
            <h2 className="section-title">داستانِ من در رسانه‌ها</h2>
            <div className="news-list">
              <div className="news-item">
                <a href="/">
                  <img src="/img/peivast.jpg" alt="" />
                </a>
              </div>
              <div className="news-item">
                <a href="/">
                  <img src="/img/ion-media.jpg" alt="" />
                </a>
              </div>
              <div className="news-item">
                <a href="/">
                  <img src="/img/itmen-media.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </RootLayout>
  )
}

export default Home
