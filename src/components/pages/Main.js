import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Nav from "../includes/Nav";
import Contents1 from "../includes/Contents1";
import Contents2 from "../includes/Contents2";
import Contents3 from "../includes/Contents3";
import Contents4 from "../includes/Contents4";
import Footer from "../includes/Footer";

function Main(){
    return (
        <>
            <Header />
            <Contents>
                <Nav />
                <Contents1 />
                <Contents2 />
                <Contents3 />
                <Contents4 />
            </Contents>
            <Footer />
        </>
    )
}

export default Main;