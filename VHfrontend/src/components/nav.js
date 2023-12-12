
function Nav (){
    return(
        <>

            <aside className="bg-gray-800 text-white w-1/5 p-4">
                <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
                <ul>
                    <li className="mb-2"><a href="VHfrontend/src/components/nav#" className="hover:text-gray-300">Item 1</a></li>
                    <li className="mb-2"><a href="VHfrontend/src/components/nav#" className="hover:text-gray-300">Item 2</a></li>
                    <li className="mb-2"><a href="VHfrontend/src/components/nav#" className="hover:text-gray-300">Item 3</a></li>
                    {/* Voeg hier meer items toe zoals nodig */}
                </ul>
            </aside></>

    )
}

export default Nav;