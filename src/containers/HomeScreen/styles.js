import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 6,
    fontSize: 20,
    marginLeft: 22,
  },
  bground: {
    position: "absolute",
    left: -50,
    top: -300,
    width: 644,
    height: 644,
    borderRadius: 644/2,
    backgroundColor: 'red'
  },
  profileImage: {
    height: 184,
    width:184,
    borderRadius: 184/2,
    zIndex: 2,
    left: 185,
    top: 120
  }
});
