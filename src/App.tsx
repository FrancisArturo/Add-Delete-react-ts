import "./App.css";
import { Item } from "./components/Item";
import { useItems } from "./hooks/useItems";
import { useSEO } from "./hooks/useSEO";

function App() {
	const { elements, inputValue, onDeleteElement, onAddElement, setInputValue } =
		useItems();

	useSEO({
		title: `(${elements.length}) Prueba técnica de React`,
		description: "Añadir y eliminar elementos!!!",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onAddElement();
	};

	return (
		<>
			<h1>Add and Delete</h1>
			<main>
				<section>
					<h2>Lista de Elementos</h2>
					{elements.length > 0 && (
						<ul>
							{elements.map((element) => (
								<Item
									key={element.id}
									element={element}
									onDeleteElement={onDeleteElement}
								/>
							))}
						</ul>
					)}
					{elements.length === 0 && (
						<p>
							<strong>No hay elementos para mostrar</strong>
						</p>
					)}
				</section>
				<aside>
					<h2>Añade un nuevo elemento</h2>
					<form onSubmit={handleSubmit} aria-label="element-form">
						<input
							name="elemento"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="Nuevo elemento"
						/>
						<button type="submit">Añadir</button>
					</form>
				</aside>
			</main>
		</>
	);
}

export default App;
