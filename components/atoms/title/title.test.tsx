import renderer from "react-test-renderer";
import Title from "./title";
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


describe("Title", () => {
    afterEach(cleanup);
    it("Should render title component", () => {
        render(
            <Title title={'test'}></Title>,
        );
        let heading = screen.getByRole("heading");
        let title = screen.getByText("test")
        expect(heading).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });
});
