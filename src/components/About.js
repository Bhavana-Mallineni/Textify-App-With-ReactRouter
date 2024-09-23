import React from 'react';

export default function About(props) {
  return (
    <div className="about-container" style={{color: props.mode==='dark' ? "white" : '#333', backgroundColor: props.mode==='dark'? '#333' : 'white'}}>
      <div className='about-header'>
        <h1>Welcome to Textify!</h1>
        <p style={{color: props.mode==='dark' ? "#d4d6d9" : '#333'}}>Your one-stop solution for transforming and analyzing text efficiently.</p>
      </div>
      <div className="about-content">
        <section className="about-features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
            <i className="fas fa-arrow-up"></i>
            <h3>Uppercase conversion</h3>
            <p>Convert your text to uppercase with a single click</p>
          </div>
          <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fas fa-arrow-down"></i>
                            <h3>Lowercase Conversion</h3>
                            <p>Easily switch your text to lowercase for readability.</p>
            </div>
            <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fas fa-exchange"></i>
                            <h3>Find & Replace</h3>
                            <p>Search for specific words and replace them instantly.</p>
                        </div>
                        <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fas fa-copy"></i>
                            <h3>Copy to Clipboard</h3>
                            <p>Copy your formatted text and use it wherever you like.</p>
                        </div>
                        <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fas fa-recycle"></i>
                            <h3>Text Reversal</h3>
                            <p>Reverse your text for creative applications and fun!</p>
                        </div>
                        <div className="feature-item" style={{color: props.mode==='dark' ? "black" : '#333'}}>
                            <i className="fas fa-microphone"></i>
                            <h3>Text-to-Speech</h3>
                            <p>Let your text be read aloud with a click.</p>
                        </div>  
        </div>
        </section>
        
        <section className="about-purpose">
        <h2>Why Use Textify?</h2>
                    <p>
                        Textify is designed for everyone—students, professionals, writers, and even casual users.
                        Whether you're looking to quickly format text for an email, count words for an essay, or simply
                        have some fun with text manipulation, Textify has you covered.
                    </p>
        </section>

        <section className="about-future" >
                    <h2>What's Next?</h2>
                    <p style={{color: props.mode==='dark' ? "#d4d6d9" : '#333'}}>
                        We are constantly working to improve Textify by adding more text analysis tools, more themes,
                        and exciting new features such as file imports and multi-language support.
                    </p>
                </section>

                <div className="about-footer">
                <p>&copy; 2024 Textify | Text Modifier and Analyzer</p>
            </div>
      </div>
    </div>
  )
}