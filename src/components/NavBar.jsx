import './NavBar.css'

export function NavBar() {
    return (
        <div className="topnav">
            <a className="active" href="#home">
                Home
            </a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div class="search-container">
                <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}