import React from "react"
import ContactsList from "../ContactList/ContactList"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import BrandLogo from "../BrandLogo/BrandLogo"
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <div className="sidebar-brand">
                    <BrandLogo size={28} />
                    <span>Kukukiku Messages</span>
                </div>
                <ThemeToggle />
            </div>
            <ContactsList />
        </div>
    )
}