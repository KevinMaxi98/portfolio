import renderer from "react-test-renderer";
import {cleanup} from "@testing-library/react";
import BoldPrimaryText from "./boldPrimaryText";

describe("BoldPrimaryText", () => {
    let component: any
    beforeEach(()=> {
        component = renderer.create(
            <BoldPrimaryText>
                <span>This is a test</span>
            </BoldPrimaryText>,
        );
    })
    afterEach(cleanup);

    it("Should render textScrollingComponent component", () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
