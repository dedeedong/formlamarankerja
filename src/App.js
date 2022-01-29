// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      bidang: '',
      join: '',
      agama: '',
      nama: '',
      tempatlahir: '',
      tanggallahir: '',
      alamat: '',
      pekerjaan: '',
      ketersediaan: '',
      agamalain: '',
      warganegara: '',
      selectwarganegara: '',
      open: false,
      opendanger: false,
    };
    this.handleAgamaChange = this.handleAgamaChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleJobChange = this.handleJobChange.bind(this)
    this.handleJoinChange = this.handleJoinChange.bind(this)
    this.handleNamaChange = this.handleNamaChange.bind(this)
    this.handleAgamaLainChange = this.handleAgamaLainChange.bind(this)
    this.handleTempatLahirChange = this.handleTempatLahirChange.bind(this)
    this.handleTanggalLahirChange = this.handleTanggalLahirChange.bind(this)
    this.handleAlamatChange = this.handleAlamatChange.bind(this)
    this.handlePekerjaanChange = this.handlePekerjaanChange.bind(this)
    this.handleKetersediaanChange = this.handleKetersediaanChange.bind(this)
    this.handleWargaNegaraChange = this.handleWargaNegaraChange.bind(this)
    this.handleSelectWargaNegaraChange = this.handleSelectWargaNegaraChange.bind(this)
  }

  handleChange = (event) => {
    // console.log(event.target)
    this.setState({gender: event.target.value});
  };

  handleJobChange = (event) => {
    this.setState({bidang: event.target.value});
  };

  handleJoinChange = (event) => {
    this.setState({join: event.target.value});
  };

  handleAgamaChange = (event) => {
    this.setState({agama: event.target.value});
  };

  handleNamaChange = (event) => {
    this.setState({nama: event.target.value});
  };

  handleAgamaLainChange = (event) => {
    this.setState({agamalain: event.target.value});
  };

  handleTempatLahirChange = (event) => {
    this.setState({tempatlahir: event.target.value});
  };

  handleTanggalLahirChange = (event) => {
    this.setState({tanggallahir: event.target.value});
  };

  handleAlamatChange = (event) => {
    this.setState({alamat: event.target.value});
  };

  handlePekerjaanChange = (event) => {
    this.setState({pekerjaan: event.target.value});
  };

  handleKetersediaanChange = (event) => {
    this.setState({ketersediaan: event.target.value});
  };

  handleWargaNegaraChange = (event) => {
    this.setState({warganegara: event.target.value});
  };

  handleSelectWargaNegaraChange = (event) => {
    this.setState({selectwarganegara: event.target.value});
  };

  openSnackBar = () => {
    if(this.state.nama !== '' &&
    this.state.gender !== '' &&
    this.state.agama !== '' &&
    this.state.tempatlahir !== '' &&
    this.state.tanggallahir !== '' &&
    this.state.alamat !== '' &&
    this.state.bidang !== '' &&
    this.state.join !== ''){
      this.setState({open: true});
    }else{
      this.setState({opendanger: true});
    }
    
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleCloseDanger = () => {
    this.setState({opendanger: false});
  }

  render(){
    return (
      <div className="App">
        <Box sx={{ flexGrow: 1 }} mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="h4">Form Isian Pelamar</Typography>
            </Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} xs={8} md={4}>
              <TextField fullWidth id="standard-basic" value={this.state.nama} onChange={this.handleNamaChange} label="Nama Lengkap" variant="standard" />
            </Grid>
            <Grid item xs={2} md={4}></Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} xs={8} md={4}>
              <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">Jenis Kelamin</FormLabel>
                <RadioGroup
                  row
                  mt={2}
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={this.state.gender}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Laki - Laki" />
                  <FormControlLabel value="female" control={<Radio />} label="Perempuan" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2} md={4}></Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} xs={8} md={4}>
              <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">Agama</FormLabel>
                <RadioGroup
                  mt={2}
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={this.state.agama}
                  onChange={this.handleAgamaChange}
                >
                  <FormControlLabel value="Islam" control={
                    <Radio />
                  } label="Islam" />
                  <FormControlLabel value="Kristen" control={
                    <Radio />
                  } label="Kristen" />
                  <FormControlLabel value="Khatolik" control={
                    <Radio />
                  } label="Khatolik" />
                  <FormControlLabel value="Hindu" control={
                    <Radio />
                  } label="Hindu" />
                  <FormControlLabel value="Budha" control={
                    <Radio />
                  } label="Budha" />
                  <FormControlLabel value="Lainnya" control={
                    <Radio />
                  } label={<TextField id="standard-basic" label="Lainnya" value={this.state.agamalain} onChange={this.handleAgamaLainChange} variant="standard" />} />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2} md={4}></Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} xs={8} md={4}>
              <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">Warga Negara</FormLabel>
                <RadioGroup
                  mt={2}
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={this.state.warganegara}
                  onChange={this.handleWargaNegaraChange}
                >
                  <FormControlLabel value="Indonesia" control={
                    <Radio />
                  } label="Indonesia" />
                  <FormControlLabel value="Malaysia" control={
                    <Radio />
                  } label="Malaysia" />
                  <FormControlLabel value="Singapore" control={
                    <Radio />
                  } label="Singapore" />
                  <FormControlLabel value="Lainnya" control={
                    <Radio />
                  } label={
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.selectwarganegara}
                      label="Warga Negara"
                      style={{ width: 200 }}
                      onChange={this.handleSelectWargaNegaraChange}
                    >
                      <MenuItem value={'Thailand'}>Thailand</MenuItem>
                      <MenuItem value={'Filipina'}>Filipina</MenuItem>
                      <MenuItem value={'Myanmar'}>Myanmar</MenuItem>
                      <MenuItem value={'Vietnam'}>Vietnam</MenuItem>
                    </Select>
                  } />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2} md={4}></Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} xs={8} md={4}>
              <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">Tempat Tanggal Lahir</FormLabel>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} mt={2}>
                    <TextField fullWidth id="standard-basic" value={this.state.tempatlahir} onChange={this.handleTempatLahirChange} label="Tempat Lahir" variant="standard" />
                  </Grid>
                  <Grid item xs={6} md={6} mt={2}>
                    <TextField
                      fullWidth
                      id="date"
                      label="Tanggal Lahir"
                      type="date"
                      value={this.state.tanggallahir}
                      onChange={this.handleTanggalLahirChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={2} md={4}></Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} xs={8} md={4}>
              <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">Alamat</FormLabel>
                <TextareaAutosize
                  aria-label="Alamat"
                  minRows={3}
                  placeholder=""
                  style={{ width: 250 }}
                  value={this.state.alamat}
                  onChange={this.handleAlamatChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2} md={4}></Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} xs={8} md={4}>
              <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">Pekerjaan Yang Dilamar</FormLabel>
                <RadioGroup
                  mt={2}
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={this.state.bidang}
                  onChange={this.handleJobChange}
                >
                  <FormControlLabel value="Digital Marketing" control={
                    <Radio />
                  } label="Digital Marketing" />
                  <FormControlLabel value="SEO Engineer" control={
                    <Radio />
                  } label="SEO Engineer" />
                  <FormControlLabel value="Lainnya" control={
                    <Radio />
                  } label={<TextField id="standard-basic" label="Lainnya" value={this.state.pekerjaan} onChange={this.handlePekerjaanChange} variant="standard" />} />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2} md={4}></Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} xs={8} md={4}>
              <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">Ketersediaan Bergabung</FormLabel>
                <RadioGroup
                  mt={2}
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={this.state.join}
                  onChange={this.handleJoinChange}
                >
                  <FormControlLabel value="1 Minggu" control={
                    <Radio />
                  } label="1 Minggu" />
                  <FormControlLabel value="2 Minggu" control={
                    <Radio />
                  } label="2 Minggu" />
                  <FormControlLabel value="Lainnya" control={
                    <Radio />
                  } label={<TextField id="standard-basic" fullWidth type="date" label="Lainnya" value={this.state.ketersediaan} onChange={this.handleKetersediaanChange} variant="standard" InputLabelProps={{
                    shrink: true,
                  }} />} />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2} md={4}></Grid>

            <Grid item xs={2} md={4}></Grid>
            <Grid item mt={2} mb={8} xs={8} md={4}>
              <Button onClick={this.openSnackBar} variant="contained">Submit</Button>
            </Grid>
            <Grid item xs={2} md={4}></Grid>
          </Grid>
          <Snackbar
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
              Form Telah Tersubmit
            </Alert>
          </Snackbar>

          <Snackbar
            open={this.state.opendanger}
            autoHideDuration={6000}
            onClose={this.handleCloseDanger}
          >
            <Alert onClose={this.handleCloseDanger} severity="error" sx={{ width: '100%' }}>
              Lengkapi Form
            </Alert>
          </Snackbar>
        </Box>
        
      </div>
    );
  }
  
}

export default App;
