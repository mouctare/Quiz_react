import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../componets/SelectField";
import TextFieldComponent from "../componets/TextFieldComponent";
import useAxios from "../service/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const {response, error, loading} = useAxios({url: "/api_category.php"})
    const navigate = useNavigate();
    
        // J'attend les data si loding = true
        if(loading){
            return (
                <Box mt={20}>
                <CircularProgress />
                </Box>
            );
        }

        if(error){
            return (
                <Typography variant="h6" mt={20} color="red">
                    Something went wrong!
                </Typography>
        );
    }

    const difficultOptions = [
        {id: "easy", name: "Easy"},
        {id: "medium", name: "Medium"},
        {id: "hard", name: "Hard"},
    ]

    const typeOptions = [
        {id: "multiple", name: "Multiple Choise"},
        {id: "boolean", name: "True/False"}
    ]
    
    const handleSubmit = e => {
        e.preventDefault();
        navigate("/questions");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SelectField options={response.trivia_categories} label="Category" />
                {/* Je passe les props à mon componet SelectField */}
                <SelectField options={difficultOptions} label="Difficulty" />
                <SelectField options={typeOptions} label="Type" />
                <TextFieldComponent />
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
