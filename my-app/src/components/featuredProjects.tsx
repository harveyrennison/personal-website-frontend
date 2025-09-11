import { Card, CardContent, CardMedia, Typography, Chip, Stack, Box } from "@mui/material";
import { projects } from '../data/projects';

const FeaturedProjects = () => {
    return (
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))" gap={4} p={1} mt={2}>
            {projects.map((project) => (
            <Card key={project.id} sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
                },
                display: "flex",
                flexDirection: "column",
            }}
            >
        {project.image && (
            <CardMedia
            component="img"
            height="180"
            image={project.image}
            alt={project.title}
            sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
        )}

        <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
            {project.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
            {project.shortDescription}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
            {project.tags?.map((tag) => (
            <Chip key={tag} label={tag} size="small" color="primary" />
            ))}
            {project.codingTags?.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
        </Stack>

        <Typography
            variant="caption"
            display="block"
            color="text.secondary"
            mt={2}
        >
                    {project.status} • {project.startDate}
                    {project.endDate ? ` → ${project.endDate}` : ""}
                </Typography>
            </CardContent>
        </Card>
        ))}
    </Box>
    )
};

export default FeaturedProjects;
