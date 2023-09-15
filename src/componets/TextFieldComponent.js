import { Box, FormControl, TextField } from "@mui/material";


const TextFieldComponent = () => {

    return (
        <Box mt={3} width="100%">
          <FormControl>
            <TextField
                onChange={handleChange}
            />
          </FormControl>
        </Box>
    )

}

export default TextFieldComponent;