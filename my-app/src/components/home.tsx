import { Typography, Box } from '@mui/material';
import ProfilePhoto from './profilePhoto';

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 3}}> {/* Seperates greeting and features projects */}
        
        {/* Contains the greeting and image */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            {/* Left side */}
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
                    <Typography variant="h2" fontWeight={700}>Hello!</Typography>
                    <Typography variant="h2" fontWeight={700}>I'm Harvey Rennison</Typography>
                </Box>
                <Box>
                    <Typography variant="h6">A passionate full-stack developer from Christchurch, New Zealand</Typography>
                </Box>
            </Box>

            {/* Right side */}
            <Box>
                <ProfilePhoto />
            </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "column", alignItems: "center" }}>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
                <Typography variant="h3">Featured Projects!</Typography>
                <Typography variant="h3">insertProjects lorem lorem lorem lorem lorem lorem lorem</Typography> 
            </Box>
        </Box>
    </Box> // need to store project info in backend, then display featured projects here
  );
};


export default Home; 