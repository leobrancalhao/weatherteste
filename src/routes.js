import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main'
import Detail from './pages/detail'

const stackNavigator = createStackNavigator( {
    Main,
    Detail
},
    {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#6095FF'
            }
        }
    },
);

export default App = createAppContainer( stackNavigator ); 