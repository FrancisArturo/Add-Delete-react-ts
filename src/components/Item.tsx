import type { Element, ItemId } from "../types";

interface Props {
	element: Element;
	onDeleteElement: (id: ItemId) => void;
}

export const Item: React.FC<Props> = ({ element, onDeleteElement }) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<li key={element.id} onClick={() => onDeleteElement(element.id)}>
			{element.name}
		</li>
	);
};
