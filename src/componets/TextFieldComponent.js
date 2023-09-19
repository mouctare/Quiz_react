import { Box, FormControl, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";


const TextFieldComponent = () => {
  const dispacth = useDispatch();

  const handleChange = (e) => {
        dispacth(handleAmountChange(e.target.value))
  }

    return (
        <Box mt={3} width="100%">
          <FormControl fullWidth size="small">
            <TextField
                onChange={handleChange}
                variant="outlined"
                label="Amput of Questions"
                type="number"
                size="small"
            />
          </FormControl>
        </Box>
    )

}

export default TextFieldComponent;