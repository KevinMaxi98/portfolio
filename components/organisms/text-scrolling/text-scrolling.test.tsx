import {cleanup, render, screen} from "@testing-library/react";
import TextScrolling from "./text-scrolling";
import '@testing-library/jest-dom';


describe("TextScrolling", () => {

    beforeEach(()=> {
        render(
            <TextScrolling></TextScrolling>
        );
    })
    afterEach(cleanup);

    it("Should render textScrolling component", () => {
        let boldText = screen.getAllByTestId("bold-div");
        expect(boldText.length).toBeGreaterThanOrEqual(10);
    });
})
