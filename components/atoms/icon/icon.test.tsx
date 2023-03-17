import renderer from "react-test-renderer";
import Icon from "./icon";
import {cleanup, render} from "@testing-library/react";

describe("Icon", () => {
    let component: any
    beforeEach(()=> {
        component = renderer.create(
            <Icon iconName={'test'}></Icon>,
        );
    })
    afterEach(cleanup);

    it("Should render icon component", () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("Should render with icon custom classes", () => {
        component = renderer.create(
            <Icon type={'round'} iconName={'test'}></Icon>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("Should set correct classes according to types", () => {
        const {container} =  render(
           <Icon type={'round'} iconName={'test'}></Icon>,
        );
        const iconsTypes = container.getElementsByClassName('icon--round')
        expect(iconsTypes.length).toBe(1);
    })

    it("Should set color if it is passed", () => {
         component =  renderer.create(
            <Icon color={'red'} type={'round'} iconName={'test'}></Icon>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

});
