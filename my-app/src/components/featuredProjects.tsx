import { Box, Typography } from '@mui/material';
import { projects } from '../data/projects';

const FeaturedProjects = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
            <Typography variant="h3">Featured Projects!</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {projects.map(project => (
                    <Box key={project.id} sx={{ width: 300, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                        <Typography variant="h5">{project.title}</Typography>
                    </Box>
                ))}
            </Box> 
        </Box>
    )
};

export default FeaturedProjects;
