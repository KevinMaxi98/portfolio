import renderer from "react-test-renderer";
import Subtitle from "./subtitle";

describe("Subtitle", () => {
    it("Should render subtitle component", () => {
        const component = renderer.create(
            <Subtitle subtitle={'test'}></Subtitle>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
