import './styles/styles.css';
import Skinview from './components/Skinview';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default function App() {
    window.onresize = () => {
        // let midCol = document.querySelector('.col-sm-3');
        let button = document.querySelector('#addSkin');
        if (window.innerWidth <= 384) {
            // eslint-disable-next-line no-undef
            button.style = 'margin-top:1em;margin-left:0em';
            // add canvas size change too
        } else {
            button.style = 'margin:none;';
        }
    };

    return (
        <div className="app">
            <Container>
                <div className="jumbotron">
                    <h1 className="display-3" style={{ textAlign: 'center' }}>
                        Skinpack Creator for Minecraft Education
                    </h1>
                    <hr className="my-2" />
                </div>
                <span>
                    <br></br>
                    <p>
                        Create a custom skin (in something like the Skindex),
                        fill out the name for your skin, name for the skin pack,
                        and a version number then upload your custom skin image
                        file as a ".png".{' '}
                    </p>
                    <p>
                        If you want to add more skins to your pack, select "add
                        skin", otherwise press "download" to download your pack.{' '}
                    </p>
                    <p>
                        Once downloaded you can double click the file and or
                        open it from Minecraft. You can edit Minecraft skins and
                        download the PNG files from
                        <a
                            href="https://www.minecraftskins.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {' '}
                            The Skindex{' '}
                        </a>
                        .
                    </p>
                    <br></br>
                </span>
                <Skinview></Skinview>
                <p>
                    *This web application is not endorsed by or affiliated with
                    Mojang, Microsoft or Minecraft
                </p>
            </Container>
        </div>
    );
}
