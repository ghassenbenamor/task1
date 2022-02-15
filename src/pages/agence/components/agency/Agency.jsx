import React from 'react'
import { useState } from 'react'
import "./agency.css"
import b1 from '../../../../images/b1.png'
import b2 from '../../../../images/b2.png'
import b3 from '../../../../images/b3.png'
import b4 from '../../../../images/b4.png'
import checkImg from '../../../../images/check.png';
import missionImg from '../../../../images/missionimg.png';
import dude from '../../../../images/man.png';
import bg from '../../../../images/bg.png';
import tree from '../../../../images/tree.png';
import lamp from '../../../../images/lamp.png';
import fleche from '../../../../images/fleche.png';

const Agency = () => {
    const [clicked, setClicked] = useState("mission")
    return (
        <div className='agency'>
            <div className='partOne'>
                <div className="agencyText">
                    <p className="special-title">L'agence</p>
                    <h4>
                        Nous aimons créer <br />
                        & propulser des <br /> marques qui se démarquent.
                    </h4>
                    <p>
                        La technologie ne doit jamais étre une <br /> contrainte. Nous l'envisageons comme le <br />
                        catalyseur de vos résultats.
                    </p>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>Stratégie</p>
                    </div>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>UX Design</p>
                    </div>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>SEO</p>
                    </div>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>Analyse</p>
                    </div>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>Production</p>
                    </div>
                </div>


                <div className="agencyMenu">
                    <div className="menuBar">
                        
                        
                         <button className="menuBtn" onClick={() => setClicked("mission")} tabIndex={0}>Mission</button>
                            
                        
                     
                         <button className="menuBtn" onClick={() => setClicked("vision")} tabIndex={1}>Vision</button>
                            
                      
                    
                         <button className="menuBtn" onClick={() => setClicked("histoire")} tabIndex={2}>Histoire</button>
                        
                    </div>
                    <div className='containerPlace'>
                        {clicked === "mission" &&
                            <div className="inner">
                                <p className='innerP'>Chez Mad impact, nous sommes d'avis que <br />
                                    les défis du web se relèvent  collecteivement. <br />
                                    Une force sur laquelle nous comptons pour <br />
                                    établir des stratégies puissantes et concevoir <br />
                                    des outils performants.</p>
                                <img src={missionImg} alt="" />
                            </div>
                        }
                        {clicked === "vision" &&
                            <div className="inner">
                                <p className='innerP'>Partenariat pour cela, nous abordons les <br /> relation-clients commme un partenariat à long
                                    <br />terme.
                                </p>

                                <img src={dude} alt="" className='dude'/>
                            </div>
                        }
                        {clicked === "histoire" &&
                            <div className="inner">
                                <p className='innerP'>Depuis 10 ans, Mad impact essaye de se <br />
                                    positonner comme un leader dans  <br />le développement
                                    de sites web et d'applications <br />mobiles en ligne en Québec. Notre experience <br />
                                    et la constate évolution de l'environnement <br />
                                    technologique dans lesquelles oeuvre notre <br />agence nous ont menés à la maitrise de <br />
                                    nombresues technologies et d'une <br /> méthdologie de travail rigoureuse.
                                </p>
                                <img src={bg} alt="" id='bg'/>
                            </div>
                        }
                    </div>

                </div>

            </div>


            <div className='partTwo'>
                <div className="box">
                    <h2>350</h2>
                    <p>PROJETS</p>
                    <img src={b1} alt="" />
                </div>
                <div className="box">
                    <h2>300</h2>
                    <p>CLIENTS ACTIFS</p>
                    <img src={b2} alt="" />
                </div>
                <div className="box">
                    <h2>400</h2>
                    <p>TASSES DE CAFÉ</p>
                    <img src={b3} alt="" />
                </div>
                <div className="box">
                    <h2>350</h2>
                    <p>CLIENTS SATISFAITS</p>
                    <img src={b4} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Agency