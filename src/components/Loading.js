import React from "react";
import {Spinner} from "reactstrap";

export default function Loading({text}) {
    return <>
        <Spinner type="grow" color="light"/>
        <p className="text-white">{text}</p>
    </>
}
