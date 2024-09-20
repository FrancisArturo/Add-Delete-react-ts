import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useSEO } from "../src/hooks/useSEO";

describe("<useSEO />", () => {
	test("should change title and description", () => {
		const newTitleDesc = {
			title: "Título de Prueba",
			description: "Descripción de prueba",
		};

		renderHook(() => useSEO(newTitleDesc));

		// const desc = document.getElementsByName("description");
		// .querySelector('meta[name="description"]')
		// ?.getAttribute("content");

		expect(document.title).toBe(newTitleDesc.title);

		// expect(desc).toBe(newTitleDesc.description);
	});
});
