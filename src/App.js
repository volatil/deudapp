import { useEffect, useState } from "react";

import { puntearMonto } from "./helpers/Helpers";

import Barrasuperior from "./components/Barrasuperior/Barrasuperior";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

function Monto() {
	const [monto, setmonto] = useState();

	return (
		<section id="monto">
			<p>Monto a dividir</p>
			<input
				type="number"
				value={monto || ""}
				onChange={(e) => {
					const estadomonto = e.target.value;
					const retorno = puntearMonto( estadomonto );
					setmonto( retorno );
				}}
			/>
			<h1>{monto}</h1>
		</section>
	);
}

function App() {
	return (
		<>
			<Barrasuperior />
			<Header />
			<main>
				<Monto />
				{/*
					<section id="personas">
						<p>Numero de personas: <span>0</span></p>
						<ul />
						<Button mensaje="Añadir Persona" />
						<div className="agregar">
							<input placeholder="Persona" type="text" />
							<Button mensaje="Añadir" />
						</div>
					</section>
					<section id="total">
						<p>Cada persona paga <span>$ 12.980</span></p>
						<Button mensaje="Reset" />
					</section>
				*/}
			</main>
		</>
	);
}

export default App;
