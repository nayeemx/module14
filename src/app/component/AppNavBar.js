"use client";

const { useRouter } = require("next/router");
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

const AppNavBar = () => {
    const router = useRouter();
    const Logout = async () => {
        const response = await fetch("/api/login")
        const json = await response.json();
        if (json['status'] === true) {
            router.replace("/")
        }
    }
    return (
        <main>
            <Navbar>
                <div className="container">
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav navbarScroll>
                            <Link href="/">Home</Link>
                        </Nav>
                        <div>
                            <button onClick={Logout} >Logout</button>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </main>
    );
};