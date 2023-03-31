import renderer from "react-test-renderer";
import {cleanup} from "@testing-library/react";
import InformativeIcon from "./informativeIcon";

describe("InformativeIcon", () => {
    let component: any
    beforeEach(()=> {
        component = renderer.create(
            <InformativeIcon></InformativeIcon>,
        );
    })
    afterEach(cleanup);

    it("Should render icon component", () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
