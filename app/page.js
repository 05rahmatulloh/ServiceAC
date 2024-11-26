import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const index = [1, 2, 3, 4, 5, 6, 7, 8];
function Home() {
  return (
    <>
      <div className="fixed-bottom">
        <div className="position-fixed" style={{ zIndex: 999 }}>
          <div className="position-fixed bottom-0 end-0">
            <Link href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda.">
              <img
                src="images/wa.png"
                style={{ width: "150px" }}
                id="waa"
                alt="WhatsApp"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero_area">
        {/* Header Section */}
        <header className="header_section">
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <div
                  className="img"
                  style={{
                    borderRadius: "50px",
                    backgroundSize: "96px",
                    backgroundRepeat: "no-repeat",
                    width: "100px",
                    height: "100px",
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundImage: "url('images/logoo.png')",
                  }}
                ></div>
                <Link className="navbar-brand" href="/">
                  <span style={{ fontSize: "29px" }}>Cipta Teknik AC</span>
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span> </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" href="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="#about">
                        Tentang
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="#service">
                        Layanan
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="#galeri">
                        Galeri
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="#alamat">
                        Alamat
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Slider Section */}
        <section className="slider_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <h1 style={{ fontSize: "46px" }}>
                    Service AC Terpercaya di Batam
                  </h1>
                  <p>Spesialis Perbaikan Ac Dan Service Mesin Cuci.</p>
                  <Link href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda.">
                    Hubungi
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="images/slider-img.png" alt="Slider" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className="about_section layout_padding-bottom"
        style={{ marginTop: "40px" }}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="detail-box">
                <h2>
                  <b>CV CIPTA TEKNIK AC</b>
                </h2>
                <p>
                  Master Pendingin AC - Melayani jasa service maupun
                  pemasangan/instalasi AC diwilayah Batam indonesia, Layanan
                  jasa service elektronik di Batam dan sekitarnya.
                  <br />
                  Dengan didukung oleh para tenaga kerja/Teknisi yg
                  berpengalaman puluhan tahun di bidangnya, sehingga bisa
                  menghasilkan sebuah akhir pekerjaan yang rapih dan
                  berkualitas.
                  <br />
                  Layanan kami ada jaminan bergaransi dalam jasa service yang
                  sudah ditentukan, lama jangka waktu garansi bisa disesuaikan
                  dengan apa yg telah dikerjakan.
                  <br />
                  Harga jasa relatif murah dan harga bisa negotiable sebelum
                  pekerjaan dimulai, ada paket harga yang menarik dari kami
                  dalam service maupun intalasi/pemasangan baru or second.
                </p>
                <Link
                  href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi kami
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="About Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding" id="service">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Layanan Kami</h2>
          </div>
          <div className="row" style={{ height: "600px", overflow: "auto" }}>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/cuci copy.png"
                    alt=""
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Cuci AC</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/freonn.png"
                    alt=""
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Isi Freon</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/bongkar.png"
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                    alt=""
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Bongkar Pasang</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/pasang.png"
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                    alt=""
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Pemasangan Baru</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/maintenace asli.png"
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                    alt=""
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Maintenance</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/isi.png"
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                    alt=""
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Perbaikan</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/spre.png"
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                    alt=""
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Ganti Spare Part</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/mesin_cuci.png"
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                    alt=""
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Service Mesin Cuci</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/jual.png"
                    alt=""
                    style={{ maxWidth: "202%", maxHeight: "200%" }}
                  />
                </div>
                <div className="detail-box" style={{ marginTop: "20px" }}>
                  <h5>Jual Beli dan Tukar Tambah AC</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <Link
              href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda."
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi kami
            </Link>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding" id="galeri">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Galeri</h2>
          </div>
          <div className="row" style={{ height: "600px", overflow: "auto" }}>
            {index.map((i) => (
              <div
                key={Math.random() * i}
                className="col-sm-6 col-md-4 mx-auto"
              >
                <figure className="figure" key={i}>
                  <img
                    key={i}
                    src={`images/gambar (${i}).jpg`}
                    className="figure-img img-fluid rounded"
                    alt="Gallery Image"
                  />
                </figure>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <Link
              href="https://wa.me/+6281261771623?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda."
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi kami
            </Link>
          </div>
        </div>
      </section>

      <section className="contact_section layout_padding" id="alamat">
        <div className="container">
          <div className="heading_container">
            <h2>Alamat</h2>
          </div>
          <div className="row">
            <div className="container my-5">
              <footer
                className="text-white text-center text-lg-start bg-grey"
                style={{ backgroundColor: "rgb(87, 87, 87)" }}
              >
                <div className="container p-4">
                  <div className="row mt-4">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                      <h5 className="text-uppercase mb-4">About company</h5>
                      <p>
                        JASA LAYANAN KAMI
                        <br />
                        -Cuci AC
                        <br />
                        -Isi Freon
                        <br />
                        -Bongkar Pasang
                        <br />
                        -Pemasangan Baru
                        <br />
                        -Maintenance
                        <br />
                        -Perawatan
                        <br />
                        -Perbaikan
                        <br />
                        -Ganti Spare Part
                        <br />
                        -Jual Beli dan Tukar Tambah AC
                        <br />
                        JANGKAWAN KERJA KAMI:
                        <br />
                        Perkantoran
                        <br />
                        Rumah sakit
                        <br />
                        Sekolah
                        <br />
                        Kampus
                        <br />
                        Mall
                        <br />
                        Rumah pribadi
                        <br />
                        Tempat umum lainnya
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                      <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                        <li className="mb-3">
                          <span className="fa-li">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-geo-alt-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                          </span>
                          <span className="ms-2">
                            Komplek Ruko Taman Niaga,Batam
                          </span>
                        </li>
                        <li className="mb-3">
                          <span className="fa-li">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-envelope-at-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                            </svg>
                          </span>
                          <span className="ms-2">ronaldosefri22@gmail.com</span>
                        </li>
                        <li className="mb-3">
                          <span className="fa-li" style={{ color: "white" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-telephone-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                              />
                            </svg>
                          </span>
                          <span className="ms-2">081261771623</span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 mb-4 mb-md-0"
                      style={{ overflow: "auto" }}
                    >
                      <div className="map_container">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4282.376139639353!2d104.09126016338207!3d1.1182508750885487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d988a224147be3%3A0x80b4fba053354a61!2sRuko%20Niaga%20Taras%20Batam%20Centre!5e0!3m2!1sen!2sid!4v1732144579549!5m2!1sen!2sid"
                          width="300"
                          height="350"
                          style={{ border: "0" }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <section className="info_section" id="footer">
        <div className="container">
          <h4>Kontak</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <Link href="https://www.google.com/maps/place/Ruko+Niaga+Taras+Batam+Centre/@1.118242,104.093884,16z/data=!4m6!3m5!1s0x31d988a224147be3:0x80b4fba053354a61!8m2!3d1.1182422!4d104.093884!16s%2Fg%2F11hc_dpwb1?hl=en&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D">
                      <div className="item">
                        <div className="img-box">
                          <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <p>Lokasi</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link href="tel:081261771623">
                      <div className="item">
                        <div className="img-box">
                          <i className="bi bi-telephone-fill"></i>
                        </div>
                        <p>Telp: 081261771623</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link href="mailto:ronaldosefri22@gmail.com">
                      <div className="item">
                        <div className="img-box">
                          <i className="bi bi-envelope-fill"></i>
                        </div>
                        <p>Email: ronaldosefri22@gmail.com</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
