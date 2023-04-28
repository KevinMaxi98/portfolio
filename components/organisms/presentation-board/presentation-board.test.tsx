import PresentationBoard from "./presentation-board";
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


describe("Presentation board", () => {
    afterEach(cleanup);

    it("Should render presentation board component", () => {
        render(
            <PresentationBoard></PresentationBoard>,
        );
        let principalTitle1 = screen.getByRole("heading", {
            name: "SOFTWARE"
        });
        let principalTitle2 = screen.getByRole("heading", {
            name: "DEVELOPER"
        });
        expect(principalTitle1).toBeInTheDocument();
        expect(principalTitle2).toBeInTheDocument();
    });

    it("Should render image", () => {
        render(
            <PresentationBoard></PresentationBoard>,
        );
        let image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    })

    it("Should render two remove icons", () => {
        render(
            <PresentationBoard></PresentationBoard>,
        );
        let icon = screen.getAllByRole("icon", {
            name: "remove"
        });
        let iconName = screen.getAllByText("remove");
        expect(icon.length).toBe(2);
        expect(iconName.length).toBe(2);
    })
});
