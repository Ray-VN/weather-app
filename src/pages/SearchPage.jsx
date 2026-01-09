import './SearchPage.css'

export function SearchPage() {

    return (
        <div className="topnav">
            <a className="active" href="#home">
                Home
            </a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <input type="text" placeholder="Search.." />
            <button type="submit"><i className="fa fa-search"></i></button>
        </div>
    )
}
