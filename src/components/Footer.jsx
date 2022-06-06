function Footer() {
    return (
        <footer className="page-footer light-blue darken-3">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/IgorKudlo/showcase">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer