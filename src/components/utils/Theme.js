export const theme = {
    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: 'contained'},
                    style:{
                        padding:"10px",
                        width:"40vh",
                        borderRadius:25,
                        fontWeight:700,
                        color:"white",
                        backgroundColor: "primary",
                        '@media (max-width:850px)': {
                            padding:"5px",
                            width:"20vh",
                            fontSize: '0.6rem'
                        }
                    }
                },
                {
                    props: {variant: 'outlined'},
                    style:{
                        padding:"10px",
                        width:"50vh",
                        borderRadius:25,
                        fontWeight:700,
                        color:"#1662DD",
                        border: "solid 2px #1662DD",
                        "&:hover":{
                            border: "solid 2px #1662DD"
                        },
                        '@media (max-width:850px)': {
                            padding:"5px",
                            width:"30vh",
                            fontSize: '0.6rem'
                        }
                    }
                },
                {
                    props: {variant: 'sprintCard'},
                    style:{
                        padding:"5px",
                        width:"inherit",
                        borderRadius:5,
                        fontWeight:700,
                        color:"#1662DD",
                        border: "solid 2px #1662DD",
                        "&:hover":{
                            border: "solid 2px iherit"
                        },
                        '@media (max-width:850px)': {
                            padding:"5px",
                            width:"inherit",
                            fontSize: '0.6rem'
                        }
                    }
                }
            ]
        },
        MuiTextField:{
            variants: [
                {
                    props: {variant: "outlined"},
                    style:{
                        '& input::placeholder':{
                            fontWeight:600,
                            fontSize:"0.8rem"
                        }
                    }
                }
            ]
        }
    },
    typography: {
        "fontFamily": `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
        body1: {
            fontSize: '1rem', // Default font size
            '@media (max-width:850px)': {
                fontSize: '0.8rem',
            },
            '@media (max-width:600px)': {
                fontSize: '0.5rem',
            },
            '@media (min-width:1800px)': {
                fontSize: '1.5rem',
            },

        },
    },
    palette: {
        primary: {
            main: "#D4B27B"
        }
    }
}