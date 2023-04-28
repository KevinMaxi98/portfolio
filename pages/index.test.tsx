import Home from "../pages/index";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'

describe("Home", () => {
    it("Should render home page", () => {
        render(
            <Home></Home>,
        );
        const main = screen.getByRole("main")
        const presentationBoard = screen.getByRole("heading", {
            name: "KEVIN"
        })
        expect(presentationBoard).toBeInTheDocument();
        expect(main).toBeInTheDocument();
    });

    it ("Should set opacity according scrolling", () => {

    })
});
