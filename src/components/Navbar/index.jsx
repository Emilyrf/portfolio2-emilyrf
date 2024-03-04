export default function Navbar() {
    return (
        <header>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}