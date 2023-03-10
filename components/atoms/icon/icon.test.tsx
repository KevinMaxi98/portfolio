import renderer from "react-test-renderer";
import Icon from "./icon";

describe("Icon", () => {
    let component: any
    beforeEach(()=> {
        component = renderer.create(
            <Icon iconName={'test'}></Icon>,
        );
    })
    it("Should render icon component", () => {

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("Should get icon classes", () => {
        
    })
});
