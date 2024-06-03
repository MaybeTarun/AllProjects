import './App.css';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
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
          {data.map((d, index) => (
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
    link: 'https://github.com/MaybeTarun/Concrete-Damage-Detector'
  },
  {
    heading: `Cognify`,
    desc: `Developed a cloud based learning platform using Kotlin and XML that automates learning methods making it easy for the user to learn and understand things. It uses OpenAI as its AI model.`,
    link: 'https://maybetarun.github.io/CognifyWebsite.github.io/'
  },
  {
    heading: `3`,
    desc: `Implemented a Deep Learning model using YOLO-v8 which can detect and segment damages on concrete surfaces in real-time and help maintain strength and integrity of buildings. The model is trained on a custom dataset made using Roboflow.`,
    link: 'https://github.com/MaybeTarun/Concrete-Damage-Detector'
  },
  {
    heading: `4`,
    desc: `Developed a cloud based learning platform using Kotlin and XML that automates learning methods making it easy for the user to learn and understand things. It uses OpenAI as its AI model.`,
    link: 'https://maybetarun.github.io/CognifyWebsite.github.io/'
  },
  {
    heading: `5`,
    desc: `Implemented a Deep Learning model using YOLO-v8 which can detect and segment damages on concrete surfaces in real-time and help maintain strength and integrity of buildings. The model is trained on a custom dataset made using Roboflow.`,
    link: 'https://github.com/MaybeTarun/Concrete-Damage-Detector'
  },
  {
    heading: `6`,
    desc: `Developed a cloud based learning platform using Kotlin and XML that automates learning methods making it easy for the user to learn and understand things. It uses OpenAI as its AI model.`,
    link: 'https://maybetarun.github.io/CognifyWebsite.github.io/'
  },
  {
    heading: `7`,
    desc: `Implemented a Deep Learning model using YOLO-v8 which can detect and segment damages on concrete surfaces in real-time and help maintain strength and integrity of buildings. The model is trained on a custom dataset made using Roboflow.`,
    link: 'https://github.com/MaybeTarun/Concrete-Damage-Detector'
  },
  {
    heading: `8`,
    desc: `Developed a cloud based learning platform using Kotlin and XML that automates learning methods making it easy for the user to learn and understand things. It uses OpenAI as its AI model.`,
    link: 'https://maybetarun.github.io/CognifyWebsite.github.io/'
  }
];

export default App;
