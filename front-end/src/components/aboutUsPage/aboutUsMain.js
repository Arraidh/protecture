import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import teamMember1 from '../../images/teamMember1.png';
import teamMember2 from '../../images/teamMember2.png';
import teamMember3 from '../../images/teamMember3.png';

const AboutUsPage = () => {
    return (
      <div className="container">
        <h1 className="text-center my-5">Tentang Kami</h1>
        <div className="row">
          <div className="col-md-12">
          <h2 className="text-center">Selamat datang di Protecture!</h2>
          <p className='text-justify'>
          Kami adalah sebuah tim yang berdedikasi untuk melindungi dan melestarikan keanekaragaman alam serta menjaga keindahan lingkungan. Di tengah perubahan iklim dan kerusakan lingkungan yang semakin parah, kami merasa penting untuk mengambil tindakan nyata dan mendorong kesadaran terhadap perlunya melindungi alam.
          </p>
          <p className='text-justify'>
          Dalam upaya kami untuk mencapai tujuan ini, kami telah merangkul teknologi dan inovasi sebagai alat untuk mengatasi tantangan lingkungan. Melalui website ini, kami berharap dapat mengedukasi dan menginspirasi orang-orang tentang pentingnya menjaga alam sekitar kita.
          </p>
          <p className='text-justify'>
          Misi kami adalah untuk memperkenalkan solusi praktis yang dapat diimplementasikan oleh individu, komunitas, dan bisnis untuk mengurangi dampak negatif terhadap lingkungan. Kami menyediakan informasi, saran, dan panduan mengenai praktik berkelanjutan, penghematan energi, daur ulang, pengurangan limbah, dan masih banyak lagi.
          </p>
          <p className='text-justify'>
          Kami percaya bahwa setiap tindakan, sekecil apapun, dapat memiliki dampak besar jika dilakukan secara kolektif. Oleh karena itu, kami mendorong semua orang untuk bergabung dengan kami dalam melindungi alam dan mewariskannya kepada generasi mendatang.
          </p>
          <p className='text-justify'>
          Kami mengundang Anda untuk menjelajahi website kami dan menemukan berbagai sumber daya yang bermanfaat. Bersama-sama, kita dapat menciptakan masa depan yang lebih baik dan memberikan warisan lingkungan yang lebih baik bagi generasi mendatang.
          </p>
          <p className='text-justify'>
          Terima kasih telah bergabung dengan kami di Protecture - Protect Nature. Mari kita berkolaborasi dan menjadi pelindung alam yang bertanggung jawab!
          </p>
          <p className='text-justify'>
          Salam hijau,
          </p>
          <p className='text-justify'>
          Tim Protecture
          </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className="mb-4">Developer Team</h2>
            <div className="row">
              <div className="col-md-3 mb-3">
                <img src={teamMember1} alt="Team Member 1" className="img-fluid rounded-circle" />
                <h4 className="mt-3 text-center" >Gusti Nanda</h4>
                <p className="text-center">Universitas Negeri Padang</p>
                <div className="social-media-icons text-center">
                    <a href="https://www.facebook.com/profile.php?id=100009413188533" className=" me-2"><FontAwesomeIcon icon={faFacebook} className="fs-3 text-success"/></a>
                    <a href="https://twitter.com/GustiNanda50623" className=" me-2"><FontAwesomeIcon icon={faTwitter} className="fs-3 text-success"/></a>
                    <a href="https://www.instagram.com/gustinanda1708" className=" me-2"><FontAwesomeIcon icon={faInstagram} className="fs-3 text-success"/></a>
                    <a href="https://www.linkedin.com/in/gusti-nanda-13b389271/" className=" me-2"><FontAwesomeIcon icon={faLinkedin} className="fs-3 text-success"/></a>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <img src={teamMember1} alt="Team Member 1" className="img-fluid rounded-circle" />
                <h4 className="mt-3 text-center" >Kadek Ari Dharmika</h4>
                <p className="text-center">Institut Teknologi Sepuluh Nopember</p>
                <div className="social-media-icons text-center">
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faFacebook} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faTwitter} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faInstagram} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faLinkedin} className="fs-3 text-success"/></a>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <img src={teamMember3} alt="Team Member 1" className="img-fluid rounded-circle" />
                <h4 className="mt-3 text-center" >Khairul Mustafa</h4>
                <p className="text-center" >Universitas Negeri Padang</p>
                <div className="social-media-icons text-center">
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faFacebook} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faTwitter} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faInstagram} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faLinkedin} className="fs-3 text-success"/></a>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <img src={teamMember1} alt="Team Member 1" className="img-fluid rounded-circle" />
                <h4 className="mt-3 text-center" >Zul Asfi Rayhan Arevi</h4>
                <p className="text-center">Politeknik Negeri Padang</p>
                <div className="social-media-icons text-center">
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faFacebook} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faTwitter} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faInstagram} className="fs-3 text-success"/></a>
                    <a href="#" className=" me-2"><FontAwesomeIcon icon={faLinkedin} className="fs-3 text-success"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AboutUsPage;