import React, { useState, useEffect } from 'react'
import { Grid, makeStyles, InputLabel, MenuItem, Select, TextField, FormControl, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { revenueTypeFilter } from '../../../../store/action/revenueAction'


const styleClasses = makeStyles({
    root: {
        width: '100%',
        height: '10vh',
        background: '#0E86D4'
    },
    select: {
        '&:before': {
            borderColor: 'black',
        },
        '&:after': {
            borderColor: 'black',
        }
    },
    icon: {
        fill: 'black',
    },
    alignCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

});

function Header() {
    const classes = styleClasses();
    const dispatch = useDispatch();

    const { userName } = useSelector(state => state.user);

    const [selectRevenueType, setSelectRevenueType] = useState('')

    return (
        <Grid className={classes.root}>
            <Grid container>
                <Grid item xs={6} className={classes.alignCenter} style={{ height: '100%', marginTop: '1rem' }}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="demo-simple-select-label"
                                style={{ color: 'black' }}>
                                Revenue Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{ color: 'black' }}
                                className={classes.select}
                                value={selectRevenueType}
                                label="minutes"
                                required
                                name="minutes"
                                onChange={e => {
                                    setSelectRevenueType(e.target.value);
                                    dispatch(revenueTypeFilter(e.target.value))
                                }}
                                inputProps={{
                                    classes: {
                                        icon: classes.icon,
                                    },
                                }}>
                                <MenuItem value={'All Renenue Type'}>All Renenue Type</MenuItem>
                                <MenuItem value={'Revenue Type -1'}>Revenue Type -1</MenuItem>
                                <MenuItem value={'Revenue Type -4'}>Revenue Type -4</MenuItem>
                                <MenuItem value={'Revenue Type -5'}>Revenue Type -5</MenuItem>
                                <MenuItem value={'Revenue Type -6'}>Revenue Type -6</MenuItem>
                                <MenuItem value={'Revenue Type -7'}>Revenue Type -7</MenuItem>
                                <MenuItem value={'Revenue Type -11'}>Revenue Type -11</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' className={classes.alignCenter} style={{ height: '100%', marginTop: '0.5rem' }}>
                        Hi {userName} 🎉
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Header