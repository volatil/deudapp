import { useState } from "react";

import { puntearMonto } from "./helpers/Helpers";

import Barrasuperior from "./components/Barrasuperior/Barrasuperior";
import Header from "./components/Header/Header";
import Monto from "./components/Monto/Monto";
import Button from "./components/Button/Button";

function App() {
	const [monto, setmonto] = useState("");
	return (
		<>
			<Barrasuperior />
			<Header />
			<main>
				<Monto>
					<input
						type="text"
						placeholder="0"
						value={monto}
						onChange={(e) => { setmonto( puntearMonto(e.target.value) ); }}
					/>
				</Monto>
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
