import { Box, Button } from "@mui/material";
import SelectField from "../componets/SelectField";

const Settings = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SelectField label="Category" />
                <SelectField label="Difficulty" />
                <SelectField label="Type" />
                <Box mt={3} width="100%">
                  <Button fullWidth variant="contained" type="submit">
                    Get Started
                  </Button>  
                </Box>
            </form>
        </div>
    )
}

export default Settings;
