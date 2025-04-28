"use client";

import {Provider} from "react-redux";
import {AppStore, makeStore} from "./store";
import {ReactNode, useRef} from "react";

export default function Providers({children}: {children: ReactNode}) {
    // Use a ref to store the store instance to ensure it stays consistent
    // across renders and hot reloads
    const storeRef = useRef<AppStore>(makeStore());

    return <Provider store={storeRef.current}>{children}</Provider>;
}
