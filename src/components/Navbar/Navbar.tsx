"use client"
import IconNavBar from './IconNavbar';

export default function Navbar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-navbarBgColor text-white h-85 p-4 shadow-lg z-50"
            style={{ borderTop: '1px solid rgba(80, 85, 92, 0.15)' }}
    >
        <div className="container mx-auto flex justify-around items-center pb-2">
            <IconNavBar href="/" iconName='home' hoverText='Home'></IconNavBar>
            <IconNavBar href="/wallet" iconName='wallet' hoverText='Carteira'></IconNavBar>
            <IconNavBar href="/game" iconName='joystick' hoverText='Jogo'></IconNavBar>
            <IconNavBar href="/wpp" iconName='wpp' hoverText='Chat' customBorderColor='rgba(36, 149, 23, 1)'></IconNavBar>
            <IconNavBar href="/menu" iconName='menu' hoverText='Menu'></IconNavBar>
        </div>
    </footer>
  )
}