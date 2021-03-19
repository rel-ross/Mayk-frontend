import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './HeaderLogin.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function HeaderLogin() {
    const classes = useStyles();

    return (
        <div className="header-login">
            <div className={classes.root}>
                <Button variant="contained" color="primary">
                    Login
                </Button>
                <Button variant="contained" color="secondary">
                    Register
                </Button>
            </div>
        </div>
    )
}
