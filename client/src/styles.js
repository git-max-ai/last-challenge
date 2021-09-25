import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  heading: {
    color: '#2299FF',
  },
  image: {
    marginLeft: '15px',
    height: '100px',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection:"column-reverse"
    }
  }
}));