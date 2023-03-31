import {ITextScrolling} from "./textScrolling.types";
import BoldPrimaryText from "../../atoms/bold-primary-text/boldPrimaryText";

export default function TextScrolling(props: ITextScrolling) {
    return(
        <div>
            <BoldPrimaryText>
                <span>This is a test</span>
            </BoldPrimaryText>
        </div>
    )
}
