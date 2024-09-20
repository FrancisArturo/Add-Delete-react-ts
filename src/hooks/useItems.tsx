import { useState } from "react";
import type { Element, ItemId } from "../types";

export const useItems = () => {
	const [elements, setElements] = useState<Element[]>([]);

	const [inputValue, setInputValue] = useState<string>("");

	const onAddElement = () => {
		const newElement = {
			id: crypto.randomUUID(),
			name: inputValue,
		};
		setElements((prevElements) => {
			return [...prevElements, newElement];
		});
		setInputValue("");
	};

	const onDeleteElement = (id: ItemId) => {
		const newElements = elements.filter((element) => element.id !== id);
		setElements([...newElements]);
	};

	return {
		elements,
		inputValue,
		setInputValue,
		onAddElement,
		onDeleteElement,
	};
};
