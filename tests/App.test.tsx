import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../src/App";

describe("<App />", () => {
	// test("should work", () => {
	// 	render(<App />);

	// 	expect(screen.getByText("Add and Delete")).toBeDefined();
	// });
	test("should add new item and remove the item", async () => {
		const user = userEvent.setup();

		render(<App />);
		const input = screen.getByRole("textbox");
		expect(input).toBeDefined();
		const form = screen.getByRole("form");
		const formButton = form.querySelector("button");
		expect(formButton).toBeDefined();

		const randomText = crypto.randomUUID();
		await user.type(input, randomText);
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		await user.click(formButton!);

		const list = screen.getByRole("list");
		expect(list).toBeDefined();

		expect(list.childNodes.length).toBe(1);
		expect(screen.getByText(randomText)).toBeDefined();

		const item = screen.getByText(randomText);
		await user.click(item);

		expect(screen.getByText("No hay elementos para mostrar")).toBeDefined();
	});
});
