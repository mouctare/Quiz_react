import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleCategoryChange, handleDifficultYChange, handleTypeChange } from "../redux/actions";


const SelectField = (props) => {
    const { label, options } = props;
    const dispacth = useDispatch();
    const [value, setValue] = useState("");
    
    
    const handleChange = (e) => {
        setValue(e.target.value);
        switch(label){
            case "Category":
                dispacth(handleCategoryChange(e.target.value));
                break;
            case "Difficulty":
                dispacth(handleDifficultYChange(e.target.value));
                break;
            case "Type":
                dispacth(handleTypeChange(e.target.value));
                break;
            default:
                return;
        }
    }

    if (!options || options.length === 0) {
        // Gérer le cas où options est indéfini ou vide
        return null;
      }

    return (
        <Box mt={3} width="100%">
            <FormControl size="smal" fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                {options.map(({ id, name }) =>  (
                    <MenuItem value={id} key={id}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
            </FormControl>
        </Box>
    )

}

export default SelectField;
