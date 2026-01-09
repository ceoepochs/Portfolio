import { useState } from 'react';

import Spline from '@splinetool/react-spline';

import contact from './assets/contact.png'
import resume_1 from './assets/resume_1.png'
import resume_2 from './assets/resume_2.png'

export default function App() {
  const [renderImage, setRenderImage] = useState();
  const [renderImageWidth, setRenderImageWidth] = useState("");

  function onSplineMouseDown(e) {
    console.log(`Target Name: ${e.target.name}`);

    if (e.target.name === "Return") {
      setRenderImage();
      setRenderImageWidth();
    }
    else if (e.target.name === "Resume Button") {
      setTimeout(() => {
        setRenderImage(resume_1);
        setRenderImageWidth("32.5%");
      }, 1000);
    }
    else if(e.target.name === "Resume Page 1") {
      setRenderImage(resume_1);
    }
    else if(e.target.name === "Resume Page 2") {
      setRenderImage(resume_2);
    }
    else if (e.target.name === "Contact Button") {
      setTimeout(() => {
        setRenderImage(contact);
        setRenderImageWidth("32.5%");
      }, 1000);
    }
  }

  return (
    <div className="container">
      <Spline
        scene="scene.splinecode"
        wasmPath="/"
        onSplineMouseDown={onSplineMouseDown}
      />
      {renderImage != null && renderImageWidth != null ? <img className="renderImage" src={renderImage} alt="" width={renderImageWidth} /> : <></>}
    </div>
  );
}