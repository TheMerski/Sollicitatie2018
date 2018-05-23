import * as React from 'react';
import { RouteComponentProps } from 'react-router';
//import 'isomorphic-fetch';


interface Customers {
    customers: Customer[];
}

interface Producten {
    producten: Product[];
}

export class Klanten extends React.Component<RouteComponentProps<{}>, Customers> {
    constructor() {
        super();

    }

    //producten = [
    //    { productnummer: 1, naam: "product1" }
    //];
    customers = [
        { klantnummer: 1, naam: "Zetacom", subKlant: { klantnummer: 2, naam: "SIM" }, producten: [{ productnummer: 1, naam: "product1" }] },
        { klantnummer: 3, naam: "klant3", subKlant: null, producten: [{ productnummer: 10, naam: "product1" },{ productnummer: 1, naam: "product2" }]  },
        { klantnummer: 4, naam: "klant4", subKlant: null, producten: [] },
        { klantnummer: 5, naam: "klant5", subKlant: null, producten: null }
    ];
    
    public render() {
       return (<div>

                  <ul>
                      {this.customers.map((customer) => {
                            return (<li key={customer.klantnummer}> {customer.klantnummer} | {customer.naam}
                            <ul>
                            {customer.producten !== null && customer.producten.map((pn) => {
                                        return (<li key={pn.productnummer}>{pn.naam} | {pn.productnummer} </li>);
                            })}
                            </ul>
                   </li>);
                })}

                  </ul>
              </div>);
    }



}


interface Customer {
    klantnummer: number;
    naam: string;
    subKlant: Customers | null;
    producten: Producten | null;
}

interface Product {
    productnummer: number;
    naam: string;
}