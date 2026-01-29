import './SearchPage.css'
import NavBar from '../components/NavBar'
import { WeatherSearch } from '../components/SearchBar'

export function SearchPage() {

    return (
        <div>
            <NavBar />
            <WeatherSearch />
        </div>
    )
}
