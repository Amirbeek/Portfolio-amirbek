import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Snackbar,
    Alert,
    Paper,
} from "@mui/material";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid ${props => props.theme.border}!important;
    background-color: ${props => props.theme.bgContact}!important;
`;
const CInput = styled(TextField)`
    background-color: ${props => props.theme.contactInput};
    border-radius: 5px;
    color: #0a58ca;
    .MuiInputBase-input {
        color: ${props => props.theme.text_second_color}; 
    }
    & .MuiInputLabel-root { 
        color: ${props => props.theme.text_second_color};
    }
    .MuiInputLabel-root {
        color: ${props => props.theme.text_second_color}!important; 
    }
    & .MuiOutlinedInput-root {
        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: #5a2de4;
        }
        &.Mui-focused {
            .MuiOutlinedInput-notchedOutline {
                border-color: #f2994a !important; 
            }
            .MuiInputLabel-root {
                color: #f2994a !important;
            }
            .•css-1134811-Mu1FormLabel-root-MusInputLabal-root:focus {
                outline: none; 
            }
        }
    }
`
const ContainerWrapper = styled(Container)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 500px) {
        height: 100%;
        
    }
`





const ContactPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject:"",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success"
    });

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            await axios.post('https://formcarry.com/s/IA6WaDrT7R2', formData, {
                headers: { 'Accept': 'application/json' }
            });
            setSnackbar({
                open: true,
                message: "Message sent successfully!",
                severity: "success"
            });
            setFormData({ name: "", email: "",subject:"", message: "" });
            // navigate('/')
        } catch (error) {
            setSnackbar({
                open: true,
                message: "Failed to send message.",
                severity: "error"
            });
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({
            ...snackbar,
            open: false
        });
    };

    return (
      <div style={{}}>
          <ContainerWrapper maxWidth="lg">

              <Grid container spacing={4} sx={{ mt: 4 }}>
                  <Grid item xs={12} md={5} >
                      <StyledPaper sx={{height:'100%', display:'flex',alignItems: 'center',justifyContent:'center',
                          backgroundImage: 'url(images/contact.jpg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                      }}>
                          <Typography variant="h4" gutterBottom sx={{ mb: 3 ,fontWeight:'bolder',color:'#fff'}}>
                              Contact Me
                          </Typography>
                      </StyledPaper>
                  </Grid>

                  <Grid item xs={12} md={7}>
                      <StyledPaper component="form" onSubmit={handleSubmit}>
                          <Grid container spacing={3}>
                              <Grid item xs={12}>
                                  <CInput
                                      fullWidth
                                      label="Name"
                                      name="name"
                                      value={formData.name}
                                      onChange={handleInputChange}
                                      error={!!errors.name}
                                      helperText={errors.name}
                                      required
                                  />
                              </Grid>

                              <Grid item xs={12}>
                                  <CInput
                                      fullWidth
                                      label="Email"
                                      name="email"
                                      type="email"
                                      value={formData.email}
                                      onChange={handleInputChange}
                                      error={!!errors.email}
                                      helperText={errors.email}
                                      required
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  <CInput
                                      fullWidth
                                      label="Subject"
                                      name="subject"
                                      type="subject"
                                      value={formData.subject}
                                      onChange={handleInputChange}
                                      error={!!errors.subject}
                                      helperText={errors.subject}
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  <CInput
                                      fullWidth
                                      label="Message"
                                      name="message"
                                      multiline
                                      rows={4}
                                      value={formData.message}
                                      onChange={handleInputChange}
                                      error={!!errors.message}
                                      helperText={errors.message}
                                      required
                                  />
                              </Grid>

                              <Grid item xs={12}>
                                  <Button
                                      type="submit"
                                      variant="contained"
                                      size="large"
                                      fullWidth
                                      sx={{ mt: 2 , backgroundColor: '#5a2de4', borderRadius:2, color: 'white' }}
                                  >
                                      Send Message
                                  </Button>
                              </Grid>
                          </Grid>
                      </StyledPaper>
                  </Grid>
              </Grid>

              <Snackbar
                  open={snackbar.open}
                  autoHideDuration={6000}
                  onClose={handleCloseSnackbar}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                  <Alert
                      onClose={handleCloseSnackbar}
                      severity={snackbar.severity}
                      sx={{ width: "100%" }}
                  >
                      {snackbar.message}
                  </Alert>
              </Snackbar>
          </ContainerWrapper>
      </div>
    );
};

export default ContactPage;
