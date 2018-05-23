import * as React from 'react';
import { RouteComponentProps } from 'react-router';
//import 'isomorphic-fetch';


interface Producten {
    producten: Product[];
}



export class Products extends React.Component<RouteComponentProps<{}>, Producten> {
    constructor() {
        super();
    }

    producten = [{ productnummer: 0, naam: "product 0" }, { productnummer: 1, naam: "product 1" }, { productnummer: 2, naam: "product 2" }, { productnummer: 3, naam: "product 3" }];


    public render() {
        var urlString = window.location.href;
        var url = new URL(urlString);
        var urlproduct = url.searchParams.get("product");
        var product = this.producten.filter(p => p.productnummer.toString() === urlproduct);

        return (<div>
            {product.map((p) => {
                return (<div><h1>Naam: {p.naam}</h1>
                    <h2>Productnummer: {p.productnummer}</h2></div>
                );
            })}

        </div>);

    }


}

interface Product {
    productnummer: number;
    naam: string;
}