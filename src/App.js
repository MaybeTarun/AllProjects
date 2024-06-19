import './App.css';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
  const [shuffledData, setShuffledData] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const shuffleArray = (array) => {
      const newArr = [...array];
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    };

    setShuffledData(shuffleArray(data));
  }, []);

  return (
    <>
      <header>
        Projects Built by Tarun Gupta
      </header>
      <div className="carousel-container">
        <Carousel 
          responsive={responsive} 
          showDots={true} 
          autoPlay={true} 
          infinite={true}
          containerClass="carousel-wrapper"
          itemClass="carousel-item"
        >
          {shuffledData.map((d, index) => (
            <div key={index} className='card'>
              <p className='heading'>
                {d.heading}
              </p>
              <p className='desc'>
                {d.desc}
              </p>
              <a href={d.link} target="_blank" rel="noopener noreferrer">
                <button className="card-button">
                  Check it Out!
                </button>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

const data = [
  {
    heading: `Concrete Damage Detector`,
    desc: `Implemented a Deep Learning model using YOLO-v8 which can detect and segment damages on concrete surfaces in real-time and help maintain strength and integrity of buildings. The model is trained on a custom dataset made using Roboflow.`,
    link: `https://github.com/MaybeTarun/Concrete-Damage-Detector`
  },
  {
    heading: `Cognify`,
    desc: `Developed a cloud based learning platform using Kotlin and XML that automates learning methods making it easy for the user to learn and understand things. It uses OpenAI as its AI model.`,
    link: `https://github.com/MaybeTarun/Cognify`
  },
  {
    heading: `Foresty`,
    desc: `Created a user-friendly platform that helps users in finding vulnerabilities (such as open ports) in their websites which anyone could have used to hack them. It uses a shell script which automates the process of vulnerability assessment.`,
    link: `https://github.com/MaybeTarun/Foresty`
  },
  {
    heading: `Know-About`,
    desc: `Built an NPM Package that gives you info about people when you run the command "npx know-about [name]". Currently consists of only 2-3 people's info but I plan to add more, so if you want to add yours too just dm me on twitter ;)`,
    link: `https://www.npmjs.com/package/know-about`
  },
  {
    heading: `Image Colorizer`,
    desc: `This website is a photo colorizer. You can upload your black and white photos and it uses a machine learning model, created by Rich Zhang, to colorize the images for you!`,
    link: `https://github.com/MaybeTarun/ImageColorizer`
  },
  {
    heading: `Holostry`,
    desc: `Developed this project for a 24hr Hackathon - MOZOHACK with my friends. It consists of 3D holographic model of carbon compounds which students can use to visualize the compounds in 3 dimensions making it easier for them to understand.`,
    link: `https://github.com/MaybeTarun/Holostry`
  },
  {
    heading: `Payback-to-ya`,
    desc: `Created an NPM package which you can add to your website if your client doesn't pay you on time. It will slowly make the website disappear in 7 days and the client will be in ShIk sHaK ShOk.`,
    link: `https://www.npmjs.com/package/payback-to-ya`
  },
  {
    heading: `Sentiment Analyzer`,
    desc: `It is a Python application that utilizes the Boto3 library to interact with Amazon Comprehend's sentiment analysis service. The application is built with a graphical user interface (GUI) created using the Tkinter library.`,
    link: `https://github.com/MaybeTarun/SentimentAnalyzer`
  },
  {
    heading: `Spree`,
    desc: `Just a movie recommendation website that uses OMDb API.`,
    link: `https://github.com/MaybeTarun/Spree`
  },
  {
    heading: `Dad Jokes`,
    desc: `Built a chrome extension that displays random dad jokes whenever used. It uses an API called icanhazdadjoke. You can check it out by turning on developer mode in chrome extensions and loading my extension.`,
    link: `https://github.com/MaybeTarun/DadJokes-ChromeExt`
  },
  {
    heading: `Aint a Calculator`,
    desc: `I honestly don't know why I built this. But whats done is done. It is a calculator which only works when you switch its lever on (you have to solve a random math question in order to switch it on). It also displays some math puns (coz it's fun).`,
    link: `https://maybetarun.github.io/AintACalculator.github.io/`
  },
  {
    heading: `Bank Management System`,
    desc: `Built this with python as a school project. It is very basic but it is one of my first coding projects that worked just how I wanted it to be. So it is very close to my heart.`,
    link: `https://github.com/MaybeTarun/Bank-Management-Project`
  },
  {
    heading: `Dice Simulator`,
    desc: `A very normal dice simulator built with Python. Also one of my very old school project.`,
    link: `https://github.com/MaybeTarun/Dice-Simulator`
  },
  {
    heading: `Aaargh!`,
    desc: `Game inspired by Flappy Bird. The player is controlled by making weird noises like "aaaah" or "aargh".`,
    link: `https://aaargh.vercel.app/`
  }
  // {
  //   heading: ``,
  //   desc: ``,
  //   link: ``
  // }
];

export default App;
