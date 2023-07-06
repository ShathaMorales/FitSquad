import React from "react";
import { Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const BackgroundVideo = () => {
    const ContentContainer = styled(Container)(({ theme }) => ({
        marginTop: theme.spacing(7),
        color: "#fff",
        padding: "40px",
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "999",
    }))

    return (
        <>
            <Navbar />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "90vh",
                    position: "relative",
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
                >
                    <source
                        src="https://ik.imagekit.io/shadid/main.mp4?updatedAt=1688440998638"
                        type="video/mp4"
                    />
                </video>
                <ContentContainer>
                    <Button variant="contained" style={{ backgroundColor: "#ff8f00", color: "#fff" }}
                        size="large">
                        <Link to="/register">Join Now!</Link>
                    </Button>
                </ContentContainer>
            </div>
        </>
    )
}

const Main = () => {
    const zoomInStyle = {
        transition: "transform 0.2s ease",
    };

    const zoomInOnHover = {
        transform: "scale(1.1)",
    };

    const imageStyle = {
        width: "50%",
        ...zoomInStyle,
    }

    return (
        <>
            <BackgroundVideo />
            <Container className="mt-5 mb-5 text-center justify-content-center">
                <Row className="d-flex">
                    <Col md={3}>
                        <img
                            src="https://ik.imagekit.io/shadid/screaming-sportsman-holding-dumbbell.jpg?updatedAt=1688510117379"
                            alt="Example Image 1"
                            className="img-fluid"
                            style={{
                                ...zoomInStyle,
                                height: "200px", // Set a fixed height for all images
                            }}
                            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                        />
                    </Col>
                    <Col md={3}>
                        <img
                            src="https://ik.imagekit.io/shadid/8458756_3801483.jpg?updatedAt=1688501128846"
                            alt="Example Image 2"
                            className="img-fluid"
                            style={{
                                ...zoomInStyle,
                                height: "200px", // Set a fixed height for all images
                            }}
                            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                        />
                    </Col>
                    <Col md={3}>
                        <img
                            src="https://ik.imagekit.io/shadid/smiling-young-handsome-sporty-man-wearing-headband-wristbands-holding-dumbbell-isolated-blue-space.jpg?updatedAt=1688510642786"
                            alt="Example Image 3"
                            className="img-fluid"
                            style={{
                                ...zoomInStyle,
                                height: "200px", // Set a fixed height for all images
                            }}
                            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                        />
                    </Col>
                    <Col md={3}>
                        <img
                            src="https://ik.imagekit.io/shadid/8458756_3801488.jpg?updatedAt=1688501129022"
                            alt="Example Image 4"
                            className="img-fluid"
                            style={{
                                ...zoomInStyle,
                                height: "200px", // Set a fixed height for all images
                            }}
                            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                        />
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 mb-5 text-center ">
                <Row>
                    <Col md={6}>
                        {" "}
                        {/* Column for the image on the left */}
                        <img
                            src="https://ik.imagekit.io/shadid/fitness-smiling-woman-pink-sports-clothing-young-beautiful-model-with-perfect-bodyfemale-posing-near-blue-wall-studiocheerful-happy-listening-music-wireless-headphones-doing-squats.jpg?updatedAt=1688509138959"
                            alt="Example Image"
                            className="img-fluid h-30"
                            style={{ ...zoomInStyle }}
                            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                        />
                    </Col>
                    <Col md={6}>
                        {" "}
                        {/* Column for the paragraph on the right */}
                        <p className="text-justify">
                            Welcome to FitSquad!
                            We are thrilled to have you on board as a fitness coach. Our app provides you with a seamless platform
                            to manage your workout routines and deliver exceptional training to your clients. Whether you're a seasoned
                            coach or just starting out, our app is designed to streamline your workflow and enhance your coaching experience.
                            With our app, you have the power to create, update, read, and delete workouts with ease. You can conveniently
                            upload your workout plans, customize them according to your clients' needs, and keep track of their progress over
                            time. The app allows you to stay organized and efficient, ensuring that you can focus on what you do best -
                            helping your clients achieve their fitness goals. We are committed to supporting you every step of the way in
                            your coaching journey. FitSquad empowers you to deliver exceptional training programs, inspire your clients, and
                            make a positive impact on their fitness and well-being. Thank you for choosing FitSquad. Let's embark on this
                            fitness journey together and make a difference!
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 mb-5 text-center">
                <Row>
                    <Col md={6}>
                        {/* Column for the paragraph on the left */}
                        <p className="d-">
                            Here's what you can expect from FitSquad:
                            Workout Management, Easily create and manage your workout routines. You can add new workouts, update existing ones,
                            view detailed information, and delete workouts when needed. Customization, Tailor your workouts to meet the unique
                            requirements of each client. Personalize exercises, sets, repetitions, and rest intervals to optimize their training
                            experience. Progress Tracking, Keep track of your clients' progress and monitor their performance. Record their achievements,
                            track their improvements, and provide valuable feedback to drive their success. User-Friendly Interface, Our app
                            features a user-friendly interface that makes navigation and workout management a breeze. You'll find it intuitive
                            and straightforward, allowing you to focus on delivering top-notch coaching. Secure and Reliable, We prioritize the
                            security and privacy of your data. Rest assured that your workout plans and client information are protected with
                            advanced security measures.
                        </p>
                    </Col>
                    <Col md={6}>
                        {/* Column for the image on the right */}
                        <img
                            src="https://ik.imagekit.io/shadid/man.jpg?updatedAt=1688501129131"
                            alt="Example Image"
                            className="img-fluid h-30"
                            style={{ ...zoomInStyle }}
                            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Main;