import { lazy, JSX, LazyExoticComponent } from "react";

type JSXElement = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXElement> | JSXElement;
    name: string
}

const lazy1 = lazy(() => import(/* LazyPage1*/'../01-lazyload/components/pages/LazyPage1'));
const lazy2 = lazy(() => import(/* LazyPage2*/'../01-lazyload/components/pages/LazyPage2'));
const lazy3 = lazy(() => import(/* LazyPage3*/'../01-lazyload/components/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: "/lazy1",
        path: "lazy1",
        Component: lazy1,
        name: 'Lazy-1'
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: lazy2,
        name: "Lazy-2"
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: lazy3,
        name: "Lazy-3"
    }
]