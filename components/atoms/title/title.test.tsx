import renderer from "react-test-renderer";
import Title from "./title";

describe("Title", () => {
    it("Should render title component", () => {
        const component = renderer.create(
            <Title title={'test'}></Title>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
