import Icon from "./icon";
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Icon", () => {
    afterEach(cleanup);

    it("Should render icon component", () => {
        render(
            <Icon iconName={'test'}></Icon>,
        );
        const icon = screen.getByRole("icon")
        const iconName = screen.getByText("test")
        expect(icon).toBeInTheDocument();
        expect(iconName).toBeInTheDocument();
    });

    it("Should render with icon custom classes", () => {
        render(
            <Icon type={'round'} iconName={'test'}></Icon>,
        );
        const icon = screen.getByRole("icon").parentElement?.getElementsByClassName("icon--round");

        expect(icon?.length).toBe(1);
    })


    it("Should set color if it is passed", () => {
         render(
            <Icon color={'red'} type={'round'} iconName={'test'}></Icon>,
        );
        const icon = screen.getByRole("icon").parentElement?.getElementsByClassName("icon--round");
        // @ts-ignore
        expect(icon[0].getAttribute("style")).toBe("font-size: 14px; color: red;");
    })

});
