import {cleanup, render, screen} from "@testing-library/react";
import InformativeIcon from "./informative-icon";
import '@testing-library/jest-dom';


describe("InformativeIcon", () => {
    afterEach(cleanup)
    beforeEach(()=> {
        render(
            <InformativeIcon></InformativeIcon>,
        );
    })
    afterEach(cleanup);

    it("Should render informativeIcon component", () => {
        let informativeIcon = screen.getByTestId("informative-icon");
        expect(informativeIcon).toBeInTheDocument();
    });

    it("Should render icon component inside", () => {
        let icon = screen.getByRole("icon");
        let iconText = screen.getByText("south");
        let scrollText = screen.getByText("Scroll");
        expect(icon).toBeInTheDocument();
        expect(iconText).toBeInTheDocument();
        expect(scrollText).toBeInTheDocument();
    });
})
