import Home from "../pages/index";
import renderer from 'react-test-renderer';

describe("Home", () => {
    it("Should render home page", () => {
        const component = renderer.create(
            <Home></Home>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it ("Should set opacity according scrolling", () => {

    })
});
