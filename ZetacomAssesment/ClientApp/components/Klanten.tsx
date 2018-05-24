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
        this.handleforminput = this.handleforminput.bind(this);
    }

    producten = [{ productnummer: 0, naam: "product 0" }, { productnummer: 1, naam: "product 1" }, { productnummer: 2, naam: "product 2" }, { productnummer: 3, naam: "product 3" }];

    customers = [
        {
            klantnummer: 1,
            naam: "Zetacom",
            subKlant: [
                { klantnummer: 2, naam: "SIM", subKlant: null, producten: [{ productnummer: 2, naam: "product2" }] }
            ],
            producten: [{ productnummer: 1, naam: "product1" }]
        },
        {
            klantnummer: 3,
            naam: "klant3",
            subKlant: null,
            producten: [{ productnummer: 0, naam: "product 0" }, { productnummer: 1, naam: "product1" }]
        },
        { klantnummer: 4, naam: "klant4", subKlant: null, producten: [] },
        { klantnummer: 5, naam: "klant5", subKlant: null, producten: null }
    ];

    handleforminput(event) {
        const target = event.target;

        this.customers.push()
    }

    public render() {
        return (<div>
            <ul>
                {this.customers.map((customer) => {
                    return (<li key={customer.klantnummer}>
                        <b>
                            {customer.klantnummer} | {customer.naam}
                        </b>
                        <ul>
                            {customer.producten !== null &&
                                customer.producten.map((pn) => {
                                    return (<li key={pn.productnummer}><a href={'/Product?product=' + pn.productnummer}>{pn.naam} | {pn.productnummer}</a></li>);
                                })}
                        </ul>
                        <ul>
                            {customer.subKlant !== null &&
                                customer.subKlant.map((sk) => {
                                    return (<li key={sk.klantnummer}>
                                        <b>{sk.klantnummer} | {sk.naam}</b>
                                        <ul>
                                            {sk.producten !== null &&
                                                sk.producten.map((pn) => {
                                                    return (<li key={pn.productnummer}><a href={'/Product?product=' + pn.productnummer}>{pn.naam} | {pn.productnummer}</a></li>);
                                                }
                                                )
                                            }
                                        </ul>
                                    </li>);
                                })
                            }
                        </ul>
                    </li>
                    );
                })}
            </ul>
            <form onSubmit={this.handleforminput(this)}>
                Naam Klant:<br />
                <input type="text" name="naam klant" />
                <p>Producten:</p>
                {this.producten.map((p) => {
                    return (<p><input type="checkbox" name={p.naam} value={p.productnummer} /> {p.naam}</p>);
                })}
                <input type="submit" value="Voeg toe"/>
            </form>
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