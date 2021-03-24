
import * as React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './views/home';
import Compose from './views/compose';
import Details from './views/details';

const App: React.FC<AppProps> = props => {
    return (
        <BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/compose">
					<Compose />
				</Route>
				<Route exact path="/details/:blogid">
					<Details />
				</Route>
			</Switch>
		</BrowserRouter>
    )
}

interface AppProps { }

export default App;
