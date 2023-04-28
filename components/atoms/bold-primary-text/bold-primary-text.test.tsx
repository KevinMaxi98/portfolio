import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import BoldPrimaryText from "./bold-primary-text";

describe("BoldPrimaryText", () => {
    beforeEach(()=> {
        render(
            <BoldPrimaryText>
                <span>This is a test</span>
            </BoldPrimaryText>,
        );
    })
    afterEach(cleanup);

    it("Should render textScrollingComponent component", () => {
        let boldText = screen.getByTestId("bold-div")
        let spanText = screen.getByText("This is a test")
        expect(boldText).toBeInTheDocument();
        expect(spanText).toBeInTheDocument();
    });
})
