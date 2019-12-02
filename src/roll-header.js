import React, {Component} from 'react';
import Constants from './sub/Constants';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default class SimpleSelect extends Component {

  handleChange = (event) => {
    this.setState({age: event.target.value});
  }
  inputLabel = () => {

  }
  constructor(props) {
    super(props);
    this.state = {
      rolls: ['C0', 'D0', 'E0', 'F0', 'G0', 'A0', 'B0', 'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6', 'C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'B7', 'C8', 'D8', 'E8', 'F8', 'G8', 'A8', 'B8', 'C9', 'D9', 'E9', 'F9', 'G9']    ,
      labelWidth: 80,
      setLabelWidth: 80,
      age: 0
    }
  }
  render(){
    return (
      <div>
        <FormControl variant="outlined" className="formControl">
          <InputLabel ref={this.inputLabel} id="demo-simple-select-outlined-label">
            note start
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={this.state.age}
            onChange={this.handleChange}
            labelWidth={this.state.labelWidth}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="formControl">
          <InputLabel ref={this.inputLabel} id="demo-simple-select-outlined-label">
            note end
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={this.state.age}
            onChange={this.handleChange}
            labelWidth={this.state.labelWidth}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="formControl">
          <InputLabel ref={this.inputLabel} id="demo-simple-select-outlined-label">
              instrument
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={this.state.age}
            onChange={this.handleChange}
            labelWidth={this.state.labelWidth}
          >
            <MenuItem value={10}>Piano</MenuItem>
            <MenuItem value={20}>Drum</MenuItem>
            <MenuItem value={30}>Guiter</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={1} direction="column" alignItems="center">
            <Grid item>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button>Play</Button>
                <Button>Stop</Button>
            </ButtonGroup>
            </Grid>
        </Grid>
      </div>
    );
  }
}