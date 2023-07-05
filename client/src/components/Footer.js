const Footer = () => {

    const footerStyle = {
        width: "100%",
        backgroundColor: "#fff",
        color: "#000"
    }

    return (
        <footer className="text-center p-3" style={footerStyle}>
            FitSquad© {new Date().getFullYear()} All rights reserved
        </footer>
    )
}

export default Footer;