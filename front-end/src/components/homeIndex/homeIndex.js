import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderColor } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../images/homeArt.png";
import image2 from "../../images/homeReport.png";
import image3 from "../../images/homeVolunteer.png";
import image4 from "../../images/homeDonation.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HomeIndex = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const dropdownItems = [
    {
      title: "Penilaian Risiko dan Kesiapsiagaan",
      description: (
        <>
          <ul>
            <li>
              Melakukan penilaian risiko secara menyeluruh untuk
              mengidentifikasi bahaya potensial dan kerentanan di daerah
              tersebut.
            </li>
            <li>
              Mengembangkan dan melaksanakan rencana kesiapsiagaan bencana yang
              komprehensif, termasuk prosedur evakuasi, sistem komunikasi
              darurat, dan tempat perlindungan yang ditetapkan.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Sistem Peringatan Dini",
      description: (
        <>
          <ul>
            <li>
              Membangun sistem peringatan dini yang kuat yang menggunakan
              berbagai teknologi dan mekanisme pemantauan, seperti sensor gempa,
              ramalan cuaca, dan citra satelit.
            </li>
            <li>
              Memastikan penyebaran peringatan dan pemberitahuan tepat waktu
              kepada masyarakat melalui berbagai saluran, termasuk radio,
              televisi, aplikasi seluler, dan media sosial.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Keterlibatan dan Pendidikan Masyarakat",
      description: (
        <>
          <ul>
            <li>
              Mendorong partisipasi dan keterlibatan masyarakat dalam upaya
              pengurangan risiko bencana.
            </li>
            <li>
              Melakukan kampanye kesadaran dan program pendidikan untuk
              meningkatkan pemahaman masyarakat tentang bahaya alam, prosedur
              evakuasi, dan langkah-langkah keselamatan.
            </li>
            <li>
              Mendorong individu dan komunitas untuk memiliki perlengkapan
              kesiapsiagaan pribadi dan rencana tanggap darurat.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Infrastruktur dan Peningkatan Ketahanan Bangunan",
      description: (
        <>
          <ul>
            <li>
              Mengimplementasikan kode dan regulasi bangunan yang ketat untuk
              memastikan konstruksi bangunan yang tahan bencana.
            </li>
            <li>
              Melakukan retrofit infrastruktur yang ada untuk meningkatkan
              ketahanannya, terutama di daerah berisiko tinggi yang rentan
              terhadap gempa bumi, banjir, atau badai.
            </li>
            <li>
              Mengembangkan solusi infrastruktur hijau, seperti pengelolaan
              daerah aliran sungai dan perlindungan pantai, untuk mengurangi
              dampak bencana alam.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Tanggap Darurat yang Efektif",
      description: (
        <>
          <ul>
            <li>
              Membangun sistem tanggap darurat yang terkoordinasi dengan baik
              melibatkan otoritas setempat, petugas pertama, dan organisasi
              kemanusiaan.
            </li>
            <li>
              Melakukan latihan dan simulasi secara rutin untuk menguji
              efisiensi dan efektivitas rencana tanggap darurat.
            </li>
            <li>
              Meningkatkan komunikasi dan koordinasi antara berbagai lembaga dan
              pemangku kepentingan yang terlibat dalam tanggap bencana dan upaya
              pemulihan.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const cards = [
    {
      id: 1,
      image: image2,
      title: "Lapor Kerusakan",
      description:
        "Protecture adalah platform yang menyediakan laporan kerusakan alam di Indonesia. Dengan Protecture, Anda dapat memantau dan mengetahui kerusakan lingkungan yang terjadi di seluruh wilayah Indonesia.",
    },
    {
      id: 2,
      image: image3,
      title: "Volunteer",
      description:
        "Protecture juga menawarkan fitur Volunteer bagi mereka yang berminat untuk menjadi sukarelawan di platform ini.",
    },
    {
      id: 3,
      image: image4,
      title: "Donasi",
      description:
        "Tidak ikut serta ke lapangan secara langsung bukanlah sesuatu hal yang salah, kok! anda masih bisa mendonasikan untuk masyarakat yang terkena bencana alam melalui website Protecture.",
    },
  ];

  return (
    <div className="container homeContainer">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <h1
            className="fw-bold fs-3 mt-5 mb-3"
          >
            Bangkitkan Kesadaran Melalui Protecture <br/> 
            Satu Laporan pada Satu Waktu
          </h1>
          <p className="text-muted fs-5">
            Lindungi Alam supaya tetap bertumbuh. <br/> Laporkan segala kerusakan alam
            yang terjadi disekitarmu!
          </p>
          <a href="/map">
          <button
            className="btn btn-lg"
            style={{
              backgroundColor: "#3F7D20",
              boxShadow: "none",
              border: "none",
              color: "#fff",
            }}
          >
            Lapor Sekarang!
          </button>
          </a>
        </div>
        <div className="col-lg-6 d-flex justify-content-end mt-5">
          <img
            src={image1}
            className="img-fluid"
            alt="Gambar"
            width="400px"
            height="400px"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div
          style={{
            width: "300px",
            height: "5px",
            backgroundColor: "#3F7D20",
            margin: "0 auto",
          }}
        ></div>
      </div>
      <div
        className="mt-3"
        style={{
          fontSize: "25px",
          padding: "5px, 0, 0, 0",
          //   fontFamily: "Raleway",
          color: "#3F7D20",
          textAlign: "center",
        }}
      >
        Features
      </div>
      <div className="container">
        <div className="row mt-2">
          {cards.map((card) => (
            <div key={card.id} className="col-lg-4 mt-3">
              <div className="card border-0">
                <img
                  src={card.image}
                  className="card-img-top"
                  alt="Card"
                  style={{
                    borderRadius: "20px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center mt-3">{card.title}</h5>
                  <p className="card-text text-center mt-3">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="mt-5">
          <h2 className="text-center" style={{ paddingTop: "30px" }}>
            Artikel
          </h2>
          <div className="d-flex justify-content-center">
            <div
              style={{
                width: "300px",
                height: "3px",
                backgroundColor: "black",
                margin: "0 auto",
              }}
            ></div>
          </div>
        </div>
        <div className="mt-3 me-5 ms-5">
          {dropdownItems.map((item, index) => (
            <div key={index} className="mb-3" style={{ padding: "20px" }}>
              <div
                className="dropdown-item"
                onClick={() => handleItemClick(index)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid black",
                  paddingBottom: "4px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    marginRight: "8px",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    transform: index === selectedItem ? "rotate(180deg)" : "",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              {index === selectedItem && (
                <div className="mb-3 mt-3" style={{ paddingBottom: "4px" }}>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ height: "30px" }}></div>
      </div>
      <div
        style={{
          paddingTop: "100px",
        }}
      ></div>
    </div>
  );
};

export default HomeIndex;
