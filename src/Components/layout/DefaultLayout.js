import React from 'react'
import { Fotter } from './partials/Fotter.comp'
import { Header } from './partials/Header.comp'

export const DefaultLayout = ({children}) => {
    return (
  
            <div className="default-layout">
                <header className="header mb-2">
                <Header/>
                </header>
            <main className="main">
            {children}
            </main>
            <footer className="footer"><Fotter/></footer>
            
        </div>
        
        
    )
}
