import ReactDOM from 'react-dom'
import { applyMiddleware,createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import reducers from 'react-redux'

const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('root')
)