
function Header() {
    return <h1>Header</h1>;
}

function Body() {
    return <p>This is the body</p>;
}

export function Footer() {
    return <h4>Footer</h4>;
}

export const version = "1.0";

export default function App() {
    console.log("APP RENDERED");
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>  
    );
}