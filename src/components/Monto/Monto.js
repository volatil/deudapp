import "./Monto.css";

function Monto( props ) {
	const { children } = props;

	return (
		<section id="monto">
			<p>Monto a dividir</p>
			<fieldset>
				{children}
			</fieldset>
		</section>
	);
}
export default Monto;
