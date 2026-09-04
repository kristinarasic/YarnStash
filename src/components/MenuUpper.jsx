import React from "react";



function MenuUpper() {
    return (
        <div className="bg-purple-600 w-full flex flex-row items-center justify-between px-4 py-3">
            {/* hamburger menu */}
            <img src="src/assets/menus.png" alt="hamburgermenu" className="w-7"></img>

            <p alt="this is a name of the project">
                Yarn stash
            </p>


            <img src="src/assets/yarn.png" alt="logo" className="w-8"></img>

        </div>
    )
};

export default MenuUpper;