import Nav from "../components/nav"

export default function Homepage() {
    const username = (localStorage.getItem('LoggedInUser'));
    const role = (localStorage.getItem('Role'));
    return(
        <>
            <div className="flex flex-row">
                <Nav/>
                <div className="flex-1 flex items-center text-4xl">
                    <h1 className="w-80 text-center">Welkom {role} {username} bij Veenhoop Cijferregistratie</h1>
                </div>
            </div>
        </>
    );
}
