import { Link } from "react-router-dom";

const Navbar = () => {

    const manus = [
        {
            name: "PostList",
            path: "/"
        },
        {
            name: "PostDetails",
            path: "/view"
        },
        {
            name: "PostForm",
            path: "/postform"
        }
    ];

    return (
        <>

            <nav>
                <ul className="d-flex m-0">
                    {
                        manus.map((nav) => {
                            return (
                                <li className="list-unstyled ms-3">
                                    <Link to={nav.path} className="text-dark text-decoration-none">
                                        {nav.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

        </>
    );
};

export default Navbar;
