import { Link } from "react-router-dom";
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Link to="" className="scroll_page_icon"> <img src={require('../Assets/Icons/arrow-icon.svg').default} alt="" /></Link>
            <div className="container">
                {/* footer navigation */}
                <nav className="footer_nav">
                    <ul className="footer_navlist">
                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            {/* footer Logo */}
                            <Link to="" className="footer_logo">
                                <img src={require('../Assets/Icons/logo.svg').default} alt="" />
                                <span>Gifting made easy.</span>
                            </Link>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem social_link">
                                    <Link to="" className="footer_nav_link"><img src={require('../Assets/Icons/twitter.svg').default} alt="" /></Link>
                                    <Link to="" className="footer_nav_link"><img src={require('../Assets/Icons/facebook.svg').default} alt="" /></Link>
                                    <Link to="" className="footer_nav_link"><img src={require('../Assets/Icons/tiktok.svg').default} alt="" /></Link>
                                    <Link to="" className="footer_nav_link"><img src={require('../Assets/Icons/instagram.svg').default} alt="" /></Link>

                                </li>
                                <li className="footer_sub_navitem">
                                    {/* footer bottom */}
                                    <div className="footer_bottom">
                                        <div className="footer_bottom_left">
                                            <p className="footer_info s-normal-color opacity-0-7">
                                                © 2022  GiftList. All rights Reserved
                                            </p>
                                        </div>

                                    </div>
                                </li>
                             
                            </ul>
                        </li>
                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading ">
                            About GiftList
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">How it works</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">About Us</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">Browser Extensions</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">Shop</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">Blog</Link>
                                </li>
                            </ul>
                        </li>

                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading">
                            Help
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">Disclaimer</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">Privacy policy</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">Terms of Use </Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">Contact Us</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="" className="footer_nav_link">FAQ</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Footer Nav Item */}
                        <li className="footer_navitem login_btn">
                            <Link to="">Log in</Link>
                            <Link to="">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
export default Footer;