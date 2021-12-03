import React from 'react'
import { Fotter } from './partials/Fotter.comp'
import { Header } from './partials/Header.comp'

export const DefaultLayout = () => {
    return (
  
            <div className="default-layout">
                <header className="header">
                <Header/>
                </header>
            <main className="main">
            main Page Content
            </main>
            <footer className="footer"><Fotter/></footer>
            
        </div>
        
        
    )
}
