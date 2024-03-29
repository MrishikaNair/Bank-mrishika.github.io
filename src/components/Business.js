import Recat from "react";
import '../styles/Business.css';
import '../styles/navbarall.css';
import { Outlet, Link } from "react-router-dom";
import Back from '../assets/Busiback.png';
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';

import {useState} from 'react';
import {Button} from '@mui/material';
import { cyan } from '@mui/material/colors';

import BOB from '../assets/BOB.jpeg';
import BMA from '../assets/BMA.jpeg';
import CM from '../assets/CM.jpeg';
import BP from '../assets/BP.jpeg';
import BT from '../assets/BT.jpeg';



import { useEffect } from "react";

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: cyan['A100'],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#0e0707'
      },
    },
  });

const Business=({})=> {

    return(
        <>
        <ThemeProvider theme={theme}>
        <body>
    
        <div class="container">
        <section id="navbar">
          <div id='nav'>
            
            {/*<Link to="/Categories"></Link>*/}
            <br></br>
            <a><Button>Investing</Button></a>
            <a ><Link to="/commercial"><Button>Commercial</Button></Link></a>
            <a ><Link to="/business"><Button>Business</Button></Link></a>
            <a ><Link to="/personal"><Button>Personal</Button></Link></a>
            <a ><Link to="/alogin"><Button>About</Button></Link></a>
            
               
        
        </div>
        
        
        </section>
        <div class="text-img1">Simplify your business<br></br>finances</div>
        <p class="wwal">Get the products and services you need <br></br>to do business all in one place.</p>
        <img  src={Back} alt="Background" style={{ width: '100%', height: 550 }} />

        <section class="BA">
        
        <p class="wwa">Making Business Banking Simple</p>
        
        <div class="rowb">
                <div class="columnb">
                <div class="whitecardb">
                    <div class="container" >
                    <img  src={BOB} alt="icon" style={{ width: 70, height: 70 }} />
                        <p class="wwac" >BUSINESS ONLINE BANKING</p> 
                        <br></br>
                        <p class="wwat">Check balances, transfer funds, <br></br> make deposits, or view transaction  <br></br>histories at your own convenience.</p> 
                    </div>
                </div></div>
                <div class="columnb">
                <div class="whitecardb">
                    <div class="container">
                    <img  src={BMA} alt="icon" style={{ width: 70, height: 70 }} />
                        <p class="wwac" >USB BUSINESS MOBILE APP</p>
                        <br></br>
                        
                        <p class="wwat">View your account balances, check <br></br> recent activity, make bill payments, <br></br>transfer funds quickly and securely.</p> 
                    </div>
                </div></div>
                <div class="columnb">
                <div class="whitecardb">
                    <div class="container">
                    <img  src={BP} alt="icon" style={{ width: 70, height: 70 }} />
                        <p class="wwac" >BILL PAY</p> 
                        <br></br>
                        
                        <p class="wwat">Set up automatic payments and <br></br> transfers to get bills paid quickly.</p> 
                    </div>
                </div></div>
                <div class="columnb">
                <div class="whitecardb">
                    <div class="container">
                    <img  src={CM} alt="icon" style={{ width: 70, height: 70 }} />
                        <p class="wwac" >CASH MANAGEMENT</p> 
                        <br></br>
                        
                        <p class="wwat">Smart cash management is a key <br></br> success of your business.</p> 
                    </div>
                </div></div>

                <div class="columnb">
                <div class="whitecardb">
                    <div class="container">
                    <img  src={BMA} alt="icon" style={{ width: 70, height: 70 }} />
                        <p class="wwac" >REMOTE CHECK DEPOSIT</p> 
                        <br></br>
                        
                        
                        <p class="wwat">Get your deposits into the bank   <br></br> quickly, efficiently by scanning them.</p> 
                    </div>
                </div></div>

                <div class="columnb">
                <div class="whitecardb">
                    <div class="container">
                    <img  src={BT} alt="icon" style={{ width: 70, height: 70 }} />
                        <p class="wwac" >ACH BANK TRANSFER</p> 
                        <br></br>
                        
                        <p class="wwat">Streamline the transfer of funds   <br></br> between businesses and consumers.</p> 
                    </div>
                </div></div>
                
                </div>
      </section>

                
        
        </div>
        </body>
        </ThemeProvider>
        
        </>
    )

 }
 export default Business;
 
    
