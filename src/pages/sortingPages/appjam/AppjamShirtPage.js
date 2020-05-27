import React from 'react'

import SideNavBar from '../../../components/sidebar/SideNavBar';
import SortingPagesNavbar from '../../../components/sortingPagesComponents/SortingPagesNavbar'
import TitleToolbar from '../../.././components/sortingPagesComponents/TitleToolbar';
import { useHistory } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

import fire from '../../.././config/fire';

export default function AppjamSortedRosterPage() {

    const [user, setUser] = useState(null);
    const [sizes, setSizes] = useState({})

    let history = useHistory();

    //checks if user is currently logged in
    useEffect(() => {
        fire.auth().onAuthStateChanged(user => {
            if (user){
                setUser(user);
            }else{
                history.push('/');
            }
            
          })
      });

    const sortedRosterCollection = useRef(fire.database().ref().child('shirts'))
    useEffect(() => {
        sortedRosterCollection.current.once('value', (snap) => {
            const shirtSizes = {}
            // const roster = []
            snap.forEach((doc) =>{
                shirtSizes[doc.key] = doc.val();
            });
            setSizes(shirtSizes);
        });
    },[]);
    console.log(sizes);

    return (
        <div>
            <TitleToolbar program="appjam+" season="Spring" year="2020" urlPath="appjam"/>

            <div className="programPageContainer">
                <div style={tableContainer}>
                    <div style={sizeCountPair}>
                        <h3 style={size1}>S</h3>
                        <h3 style={count}>{sizes.S}</h3>
                    </div>

                    <div style={sizeCountPair}>
                        <h3 style={size}>M</h3>
                        <h3 style={count}>{sizes.M}</h3>
                    </div>

                    <div style={sizeCountPair}>
                        <h3 style={size}>L</h3>
                        <h3 style={count}>{sizes.L}</h3>
                    </div>

                    <div style={sizeCountPair}>
                        <h3 style={size}>XL</h3>
                        <h3 style={count}>{sizes.XL}</h3>
                    </div>

                    <div style={sizeCountPair}>
                        <h3 style={size5}>XXL</h3>
                        <h3 style={count}>{sizes.XXL}</h3>
                    </div>
                </div>
            </div> 

        </div>
    )
}

const tableContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
}

const sizeCountPair = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: "-1px"
}

const size = {
    width: "150px",
    height: "80px",
    backgroundColor: "#7FC9FF",
    paddingTop: "18%",
    border: "0.5px solid #0099FF",
    fontSize: "20px",
    fontWeight: "500",
    color: "white"
}

const size1 = {
    width: "150px",
    height: "80px",
    backgroundColor: "#7FC9FF",
    paddingTop: "18%",
    border: "0.5px solid #0099FF",
    borderTopLeftRadius: "20px",
    fontSize: "20px",
    fontWeight: "500",
    color: "white"
}

const size5 = {
    width: "150px",
    height: "80px",
    backgroundColor: "#7FC9FF",
    paddingTop: "18%",
    border: "0.5px solid #0099FF",
    borderTopRightRadius: "20px",
    fontSize: "20px",
    fontWeight: "500",
    color: "white"
}

const count = {
    width: "150px",
    height: "80px",
    backgroundColor: "white",
    paddingTop: "18%",
    border: "0.5px solid #0099FF",
    marginTop: "-1px",
    fontSize: "18px",
    fontWeight: "400",
    color: "#202E47"
}