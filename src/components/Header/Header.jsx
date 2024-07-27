import { Container, Row } from "react-bootstrap"
import Navbar from "./Navbar/Navbar"
import Logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <>
            <Container fluid className="bg-warning">
                <Row className="align-items-center">
                    <div className="col-2">
                        <div className="logo">
                          <img src={Logo} alt={Logo}  className="img-fluid "/>
                        </div>
                    </div>
                    <div className="col-7 d-flex justify-content-center">
                        <Navbar />
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <div>
                            <button className="btn btn-primary">AddPost</button>
                        </div>
                    </div>
                </Row>
            </Container>

        </>
    )
}
export default Header

