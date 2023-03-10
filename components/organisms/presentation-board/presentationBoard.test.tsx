import renderer from "react-test-renderer";
import PresentationBoard from "../presentation-board/presentationBoard";

describe("Presentation board", () => {
    it("Should render presentation board component", () => {
        const component = renderer.create(
            <PresentationBoard></PresentationBoard>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
