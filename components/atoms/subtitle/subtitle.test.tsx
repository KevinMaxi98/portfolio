import Subtitle from "./subtitle";
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


describe("Subtitle", () => {
    afterEach(cleanup);
    it("Should render subtitle component", () => {
        render(
            <Subtitle subtitle={'test'}></Subtitle>,
        );
        let heading = screen.getByRole("heading");
        let text = screen.getByText("test");
        expect(heading).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });
});
