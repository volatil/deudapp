import logo from "../../assets/svg/logo.svg";
import "./Header.css";

function Header() {
	return (
		<header>
			<img src={logo} alt="DEUDApp" />
		</header>
	);
}
export default Header;
