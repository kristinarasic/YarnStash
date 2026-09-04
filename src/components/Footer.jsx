

function Footer() {
    return (
        <div className=" fixed left-0 bottom-0 backdrop-blur-lg  shadow-lg bg-purple-600  w-full flex flex-row items-center justify-between px-4 py-3 ">

            <p alt="this is a name of the project">
                Yarn stash
            </p>
            <p>@copyright reserved</p>

            <img src="src/assets/yarn.png" alt="logo" className="w-8"></img>

        </div>
    )
};

export default Footer;