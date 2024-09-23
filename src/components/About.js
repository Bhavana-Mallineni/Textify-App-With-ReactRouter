// import React, {useState} from 'react'

// export default function About(props) {
//     // const [myStyle, setMyStyle] = useState({
//     //     color: "black",
//     //     backgroundColor: "white"
        
//     // })

//     let myStyle = {
//       color: props.mode==="dark"? 'white' : 'black',
//       backgroundColor: props.mode==="dark"? '#3b3b3b' : 'white',
//     }

  
//   return (
//     <div className="container" style={myStyle}>
//         <h1 className="my-3">About Us</h1>
//         <div className="accordion" id="accordionExample">
//     <div className="accordion-item">
//       <h2 className="accordion-header">
//         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
//           Accordion Item #1
//         </button>
//       </h2>
//       <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//         <div className="accordion-body" style={myStyle}>
//           <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//         </div>
//       </div>
//     </div>
//     <div className="accordion-item">
//       <h2 className="accordion-header">
//         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
//           Accordion Item #2
//         </button>
//       </h2>
//       <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//         <div className="accordion-body" style={myStyle}>
//           <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//         </div>
//       </div>
//     </div>
//     <div className="accordion-item">
//       <h2 className="accordion-header">
//         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
//           Accordion Item #3
//         </button>
//       </h2>
//       <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//         <div className="accordion-body" style={myStyle}>
//           <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//         </div>
//       </div>
//     </div>
//   </div>
  
//   </div>
//   )
// }

import React from 'react';

export default function About(props) {
  return (
    <div className="about-container" style={{color: props.mode==='dark' ? "white" : '#333', backgroundColor: props.mode==='dark'? '#333' : 'white'}}>
      <div className='about-header'>
        <h1>Welcome to Textform!</h1>
        <p style={{color: props.mode==='dark' ? "#d4d6d9" : '#333'}}>Your one-stop solution for transforming and analyzing text efficiently.</p>
      </div>
      <div className="about-content">
        <section className="about-features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
            <i className="fa fa-arrow-up"></i>
            <h3>Uppercase conversion</h3>
            <p>Convert your text to uppercase with a single click</p>
          </div>
          <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fa fa-arrow-down"></i>
                            <h3>Lowercase Conversion</h3>
                            <p>Easily switch your text to lowercase for readability.</p>
            </div>
            <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fa fa-exchange"></i>
                            <h3>Find & Replace</h3>
                            <p>Search for specific words and replace them instantly.</p>
                        </div>
                        <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fa fa-copy"></i>
                            <h3>Copy to Clipboard</h3>
                            <p>Copy your formatted text and use it wherever you like.</p>
                        </div>
                        <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fa fa-recycle"></i>
                            <h3>Text Reversal</h3>
                            <p>Reverse your text for creative applications and fun!</p>
                        </div>
                        <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fa fa-microphone"></i>
                            <h3>Text-to-Speech</h3>
                            <p>Let your text be read aloud with a click.</p>
                        </div>  
        </div>
        </section>
        
        <section className="about-purpose">
        <h2>Why Use TextForm?</h2>
                    <p>
                        TextForm is designed for everyone—students, professionals, writers, and even casual users.
                        Whether you're looking to quickly format text for an email, count words for an essay, or simply
                        have some fun with text manipulation, TextForm has you covered.
                    </p>
        </section>

        <section className="about-future" >
                    <h2>What's Next?</h2>
                    <p style={{color: props.mode==='dark' ? "#d4d6d9" : '#333'}}>
                        We are constantly working to improve TextForm by adding more text analysis tools, more themes,
                        and exciting new features such as file imports and multi-language support.
                    </p>
                </section>

                <div className="about-footer">
                <p>&copy; 2024 TextForm | Textify</p>
            </div>
      </div>
    </div>
  )
}