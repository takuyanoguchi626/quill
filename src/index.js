import * as quill from "./quill";
import $ from "jquery";

if ($("#editor").length != 0) {
    console.log("dd");
    quill.initialQuill();
}