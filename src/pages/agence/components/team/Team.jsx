import React from 'react'
import './team.css'
import { useState } from 'react';

import 'tippy.js/dist/tippy.css';
import wajdi from '../../../../images/wajdi.png';
import lobna from '../../../../images/lobna.png';
import elie from '../../../../images/elie.png';
import malak from '../../../../images/malak.png';
import juliette from '../../../../images/juliette.png';
import zeyneb from '../../../../images/zeyneb.png';
import go from '../../../../images/go.png';
import back from '../../../../images/back.png'


const Team = () => {
    const [showText, setShowText] = useState(false)
    const handleMouseEnter = e => {
        setShowText(true)
    }
    const handleMouseLeave = e => {
        setShowText(false)
    }


    const [value, setValue] = useState(0);
    const [clicked, setclicked] = useState(false);
    const goClickHandler = () => {
        setValue(value + 1)
        setclicked(!clicked);
    }

    const backClickHandler = () => {
        setValue(value - 1);
        setclicked(!clicked);
    }

    return (
        <div className='team'>
            <p className='special-title'>Équipe</p>
            <h1>Équipe Mad Impact</h1>

            <div className='slider-container'>
                {value === 0 &&
                    <div className='team-members'>
                        <div className='members'>
                            <div className='member' onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>

                                <img src={wajdi} className="member-avatar" alt="" />
                                <p className="name">WAJDI</p>
                                <p className="role">CEO</p>
                                {showText &&
                                    <div className='hoverable'>
                                        <h6>Compétences :</h6>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam iste eius <br /> reprehenderit ratione fuga consequuntur</p>
                                    </div>}
                            </div>
                            <div className='member'>
                                <img src={juliette} className="member-avatar" alt="" />
                                <p className="name">JULIETTE</p>
                                <p className="role">Business developper</p>
                            </div>
                            <div className='member'>
                                <img src={malak} className="member-avatar" alt="" />
                                <p className="name">MALAK</p>
                            </div>
                            <div className='member'>
                                <img src={elie} className="member-avatar" alt="" />
                                <p className="name">ELIE</p>
                                <p className="role">Business developper</p>
                            </div>
                            <div className='member'>
                                <img src={wajdi} className="member-avatar" alt="" />
                                <p className="name">RAMZY</p>
                                <p className="role">CTO</p>
                            </div>
                            <div className='member'>
                                <img src={lobna} className="member-avatar" alt="" />
                                <p className="name">ARIJ</p>

                            </div>
                            <div className='member'>
                                <img src={zeyneb} className="member-avatar" alt="" />
                                <p className="name">ZEINEB</p>
                                <p className="role">UX\UI</p>
                            </div>
                            <div className='member'>
                                <img src={elie} className="member-avatar" alt="" />
                                <p className="name">MIKHAEL</p>
                                <p className="role">Stagaire design</p>
                            </div>

                        </div>
                        <img src={go} alt="arrow" onClick={goClickHandler} className="arrow" />
                    </div>
                }


                {value === 1 &&

                    <div className='team-members'>
                        <img src={back} alt="back" className='arrow' onClick={backClickHandler} />
                        <div className='members'>
                            <div className='member'>
                                <img src={wajdi} className="member-avatar" alt="" />
                                <p className="name">SAIF</p>
                            </div>
                            <div className='member'>
                                <img src={lobna} className="member-avatar" alt="" />
                                <p className="name">LOBNA</p>
                                <p className="role">Prestashop developper</p>
                            </div>
                            <div className='member' on>
                                <img src={juliette} className="member-avatar" alt="" />
                                <p className="name">ANNA</p>
                                <p className="role">Stagaire UX\UI</p>
                            </div>
                        </div>
                    </div>


                }



            </div>

        </div>
    )
}

export default Team