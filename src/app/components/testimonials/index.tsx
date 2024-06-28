import React from "react";
import styles from "./testimonials.module.css";
import Image from "next/image";

const TESTIMONIALS_DATA = [
  {
    name: "Akshat Gupta",
    position: "Co-founder & CEO of COOX",
    image: "/Akshat.jpg",
    message: [
      "Atharva is one of the best developers I’ve worked with in my career. His level ownership, communication, preparedness for meetings and consistency makes him stand apart from the rest. Atharva worked on COOX Partner android mobile app and delivered key features crucial for the organisation’s growth within projected timelines. Everyone enjoyed working with him. I wish him a great career.",
    ],
  },
  {
    name: "Nikhilesh Thothara",
    position: "Technical Lead, Frejun Inc",
    image: "/Nikhilesh.jpg",
    message: [
      "Atharva is a gifted developer with a rare combination meticulousness, business oriented thinking and a strong appetite for knowledge. He worked on multiple products like Mobile app, Website, Admin dashboard and more. During this time he consistently developed high quality, scalable software solutions within stipulated timelines.",
      "In his core expertise in frontend development, there is little he does not know; and if he doesn’t, he finds out and adds it to his repertoire. Overall, I found him to be a highly-skilled, motivated, and helpful professional with a positive attitude.",
    ],
  },
  {
    name: "Anup Nimbalkar",
    position: "Sole Proprietor, Saikrupa Optical",
    image: "/Anup.jpg",
    message: [
      "I had the pleasure of working with Atharva on the development of a mobile application for our optical shop. He took strong efforts to understand my requirements as a business owner and provided invaluable advice for cost-effective decisions. The project was delivered on scheduled deadline, and his support for fixing post-deployment issues was outstanding.",
      "Atharva is a master of his craft and showed a high level of professionalism throughout the project. His excellent communication skills ensured that all conflicts were resolved smoothly. I look forward to working with his team again for any future development needs.",
    ],
  },
];

function Testimonials() {
  return (
    <div className={styles.wrapper}>
      {TESTIMONIALS_DATA.map((obj, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.message_wrapper}>
            {obj.message.map((line) => (
              <p>{line}</p>
            ))}
          </div>

          <div className={styles.author_details}>
            <Image
              className={styles.img}
              src={obj.image}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className={styles.author_name}>
              <h3>{obj.name}</h3>
              <h4>{obj.position}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
