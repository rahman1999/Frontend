import Routemodule from 'Routes/Routemodule';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import storeSlice from 'Reducer/statevalue'

const store=configureStore({
  reducer:{
    tokenvalue:storeSlice.reducer
  }
})

function App() {
  return (
    <Provider store={store}>
    <Routemodule />
    </Provider>
  );
}

export default App;
