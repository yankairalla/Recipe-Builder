import type { NextPage } from 'next'
import { Button, Container, Block, Navbar } from "react-bulma-components"



export default function Header() {

    return (
        <header >
            <Navbar color='cadet-blue' >
                <Container>
                    <Navbar.Brand>
                        <Navbar.Item>
                            <h1>Recipe Builder</h1>
                        </Navbar.Item>
                    </Navbar.Brand>

                    <Navbar.Container align='right'>
                        <Navbar.Item>
                            <Button color="primary">Sign Up</Button>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button>Login</Button>
                        </Navbar.Item>
                    </Navbar.Container>
                </Container>

            </Navbar>
        </header >
    )
}