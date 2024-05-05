// import React, { useState } from 'react'
import './About.css'
export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     borderColor: 'black'
    // })

    // const [btntext, setbtntext] = useState('Dark Mode')

    // const togglestyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             borderColor: 'black'
    //         })
    //         setbtntext("Dark Mode")
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: '#042743',
    //             borderColor: 'white'
    //         })
    //         setbtntext("Light Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'rgba(var(--bs-dark-rgb))':'white',
        // border: '2px solid',
        borderColor: props.mode ==='dark'?'white':'black'
    }

    return (
        <div className="container" >
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'black'}}>About US</h1>
            <div className="box" style={myStyle}>
                <div className="head1 heading" style={myStyle}>
                    <details>
                        <summary className='head'><strong>Analyze Your text</strong></summary>
                        <div className="para">
                            TextEditor gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </details>
                </div>
                <div className="head2 heading" style={myStyle}>
                    <details>
                        <summary className='head'><strong>Free to use</strong></summary>
                        <div className="para">
                            TextEditor is a free character counter tool that provides instant character count & word count statistics for a given text. TextEditor  reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </details>
                </div>
                <div className="head3 heading headin" style={myStyle}>
                    <details>
                        <summary className='head'><strong>Browser Compatible</strong></summary>
                        <div className="para">
                            This software works in any web browser such as chrome, firefox, internet explorer, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </details>
                </div>
            </div>
            {/* <div className="btno">
                <button onClick={togglestyle} className='btn btn-primary mt-3'>{btntext}</button>
            </div> */}
        </div>
    )
}
