import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    alertMainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    alertView: {
        backgroundColor: '#f76f6a',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
    },

    alertHeading: {  
        fontSize: 25,  
        textAlign: 'center', 
        alignItems: 'center',
        padding: 10,
        color: 'white',
        textAlign: 'left',
        borderRadius : 7,
        overflow: 'hidden',
    }, 

    alertMessage: {  
        fontSize: 18,  
        textAlign: 'center', 
        alignItems: 'center',
        padding: 10,
        color: 'white',
        borderRadius : 7,
        overflow: 'hidden',
    },  
});
