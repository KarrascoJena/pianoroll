import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControlFromTo: {
    margin: theme.spacing(1),
    minWidth: 10,
  }
}));

export default function GroupedSelect(props) {
  const classes = useStyles();

  return (
    <div style={{zIndex: '100001'}}>
      <div style={{backgroundColor: '#95c3f5'}}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="start-select">note start</InputLabel>
          <Select defaultValue="1" input={<Input id="start-select" />} onChange={props.ChangeStartNote}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControlFromTo}>
          <InputLabel> ~ </InputLabel>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="end-select">note end</InputLabel>
          <Select defaultValue="7" input={<Input id="end-select" />} onChange={props.ChangeEndNote}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="end-select">instrument</InputLabel>
        <Select defaultValue="piano" input={<Input id="end-select" />}>
          <MenuItem value={'piano'}>Piano</MenuItem>
          <MenuItem value={'dram'}>Drum</MenuItem>
          <MenuItem value={'guiter'}>Guiter</MenuItem>
          <MenuItem value={'trumbet'}>Trumbet</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className="text-center" style={{paddingLeft: '10px', paddingTop: '20px'}}>
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button onClick={props.play}><PlayArrowIcon/>Play</Button>
            <Button><PauseIcon/>Pause</Button>
            <Button><StopIcon/>Stop</Button>
          </ButtonGroup>
      </div>
    </div>
  );
}