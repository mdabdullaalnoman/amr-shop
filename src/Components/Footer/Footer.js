import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-warper" id="contract">
                    <div className="widget twitter-widget">
                        <h1> TEXT WIDGET</h1> <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic rem unde illo repudiandae, ab error
                            temporibus labore odit impedit enim eius accusamus iusto debitis aspernatur aliquam magni natus
                            provident officia!</p>
                    </div>
                    <div className="widget">
                        <h1> TWITTER WIDGET</h1><br />
                        <p><span>Lorem ipsum dolor sit</span>, amet consectetur adipisicing elit. Perspiciatis dolorem ab
                            laboriosam, vitae error non mollitia beatae quas minima possimus.</p><br />
                        <p>21 days ago</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Officia minima fugiat eum beatae
                            consectetur</span> esse nesciunt accusantium, nisi repellat</p><br />
                        <p>Contract: +880 1797701600</p>
                    </div>
                    <div className="widget">
                        <h1>OUR SPONSORS</h1><br />
                        <div className="flicker-widget-img">
                            <img src="../../media/player-1.png" alt="" />
                            <img src="../../media/player-1.png" alt="" />
                            <img src="../../media/player-1.png" alt="" />
                            <img src="../../media/player-1.png" alt="" />
                            <img src="../../media/player-1.png" alt="" />    
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>copyright @ 2021 by noman </p>
                </div>

                <hr/>
            </footer>
        </div>
    );
};

export default Footer;