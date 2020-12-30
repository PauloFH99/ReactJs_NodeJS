import React, { useState, FormEvent, useEffect } from 'react'
import './style.css';
import Sidebar from "../../components/sidebar";
function Home() {
    return (

        <div  id="page-home">
           
            <main>
            <Sidebar />
                <div id="content">
                    Bem Vindo
                </div>
            
            </main>
           
        </div>
    );

}
export default Home;