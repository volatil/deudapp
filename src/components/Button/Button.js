// import { agregarPersona } from "../../helpers/Helpers";
import "./Button.css";

function Button({ mensaje, onclick }) {
	return (
		<button id="boton" type="button" onClick={onclick}>
			<p>{mensaje}</p>
		</button>
	);
}
export default Button;
