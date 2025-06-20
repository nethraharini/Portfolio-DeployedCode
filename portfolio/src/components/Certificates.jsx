import React from "react";
import "./Certificates.css";
import { motion } from "framer-motion";

const certificates = [
  { title: "HackerRank Python Basic Certificate", img: "HackerRank_python_basic certificate.jpg", pdf: "HackerRank_python_basic certificate.pdf" },
  { title: "HackerRank SQL Basic Certificate", img: "HackerRank_sql_basic certificate.jpg", pdf: "HackerRank_sql_basic certificate.pdf" },
  { title: "50 Days Leetcode Badge", img: "50days_leetcode.png", pdf: "50days_leetcode.pdf" },
  { title: "100 Days Leetcode Badge", img: "100days_leetcode.jpg", pdf: "100days_leetcode.pdf" },
  { title: "Oracle Cloud DataBase Management Associate", img: "Oracle Cloud Database Management Associate Certificate.jpg", pdf: "Oracle Cloud Database Management Associate Certificate.pdf" },
  { title: "Tata DataVisualization Insights", img: "TataVisualization powerBI.jpg", pdf: "TataVisualization powerBI.pdf" },
  { title: "Computer Graphics & Multimedia", img: "Computer graphics and multimedia certificate.jpg", pdf: "Computer graphics and multimedia certificate .pdf" },
  { title: "Google Digital Marketing", img: "Google Digital marketing ceritificate.jpg", pdf: "Google Digital marketing ceritificate  .pdf" },
  { title: "Cryptera Coding_Contest Hackthon", img: "Cryptera Coding Contest Hackthon 2025.jpg", pdf: "Cryptera Coding Contest Hackthon 2025.pdf" },
  { title: "Cryptera Coding_Contest Hackthon_1", img: "Cryptera_Coding Contest Hackthon 2025.jpg", pdf: "Cryptera_Coding Contest Hackthon 2025.pdf" },
  { title: "Start Up Ideathon", img: "Startup_Ideathon Participation.jpg", pdf: "Startup_Ideathon Participation.pdf" },

];
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h2 className="certificates-title"> My Certifications & Participations</h2>

      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <motion.a
            href={cert.pdf}
            download
            key={index}
            className="cert-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <img src={cert.img} alt={cert.title} />
            <div className="cert-label">{cert.title}</div>
          </motion.a>
        ))}
      </div>

      <a
        href="https://drive.google.com/drive/folders/1m5Y5BqXZ4UnQtbSeChV1uReat7F4AM0L?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="view-all-btn">View All on Drive</button>
      </a>
    </section>
  );
};

export default Certificates;
