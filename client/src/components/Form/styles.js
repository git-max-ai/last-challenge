import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: 'blue',
    color: 'white',
    width: '170px',
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor: 'red',
    color: 'white',
    width: '150px',
  },
  fl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));