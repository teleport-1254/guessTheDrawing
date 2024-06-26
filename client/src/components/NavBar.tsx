import { Link } from "react-router-dom";
import { BiLogoGithub } from "react-icons/bi";

const NavBar = () => {
    return (
        <nav className="absolute top-0 m-2 p-3 border-b-2 border-stone-400">
            <div className="container m-auto px-2 w-[1400px] flex justify-between items-center select-none">
                <Link to={"/"} className="flex justify-center items-center gap-1">
                    <span className="text-4xl font-sketchit">
                        guessTheDrawing
                    </span>
                    <img src="/icon.svg" alt="guessTheDrawing" className="size-[40px]" />
                </Link>
                <a href="https://github.com/teleport-1254/guessTheDrawing">
                    <BiLogoGithub size={40} />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
