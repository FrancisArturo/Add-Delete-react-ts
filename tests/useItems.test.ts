import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe("<useItems />", () => {
	test("should add and remove item", () => {
		const { result } = renderHook(() => useItems());

		expect(result.current.elements).toEqual([]);

		act(() => {
			result.current.setInputValue("frutas");
		});
		act(() => {
			result.current.onAddElement();
		});

		const addedElement = result.current.elements[0];

		expect(result.current.elements.length).toBe(1);

		act(() => {
			result.current.onDeleteElement(addedElement.id);
		});

		expect(result.current.elements).toEqual([]);
	});
});
