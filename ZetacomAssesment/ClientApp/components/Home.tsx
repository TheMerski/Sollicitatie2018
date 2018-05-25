import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Sollicitatie Zetacom 2018</h1>
            <p>In het menu bij klanten is er de mogelijkheid om de huidige klanten te bekijken en door op een product te klikken kan je de verdere productgegevens bekijken</p>
        </div>;
    }
}
