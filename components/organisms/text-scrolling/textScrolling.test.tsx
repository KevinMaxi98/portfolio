import renderer from "react-test-renderer";
import {cleanup} from "@testing-library/react";
import TextScrolling from "./textScrolling";

describe("TextScrolling", () => {
    let component: any
    beforeEach(()=> {
        component = renderer.create(
            <TextScrolling></TextScrolling>
        );
    })
    afterEach(cleanup);

    it("Should render textScrolling component", () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
