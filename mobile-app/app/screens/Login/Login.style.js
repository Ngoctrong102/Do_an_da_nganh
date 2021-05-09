import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    ImageBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 300,
        resizeMode: 'cover'
    },
    ImageLogo: {
        height: 100,
        width: 100,
        marginBottom: 70,
        transform: [{ rotateZ: '-10deg' }]
    },
    form: {
        width: '100%',
        marginTop: -100,
        flex: 1,
        paddingHorizontal: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInput: {
        borderColor: '#DCE1E7',
        borderWidth: 1,
        borderRadius: 100,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 10,
        backgroundColor: '#fffa'
    },
    btnLogin: {
        width: '100%',
        backgroundColor: '#1666E1',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
        marginBottom: 10
    },
    signUpText: {
        fontSize: 12,
        textAlign: 'center',
        alignSelf: 'stretch',
        paddingBottom: 10,
    }
})