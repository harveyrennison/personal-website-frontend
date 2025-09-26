import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import professionalPhoto from '../assets/HarveyRennison.png';

const ProfilePhoto = () => {
    const [isSpinning, setIsSpinning] = useState(false);

    const speedSpinning = () => {
        let theta = 0;
        const maxTheta = 360;
        let angularVelocity = 5;

        theta += angularVelocity;
        if (theta >= maxTheta) {
            theta -= maxTheta;
        }

        return theta;
    }

    useEffect(() => {

    })
    
    return (
        <Box
        sx={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            boxShadow: '0 8px 20px rgba(0,0,0,0.7)',
            transition: 'transform 1s ease-in-out',
        }}>
            <img
                src={professionalPhoto}
                style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid #fff',
                }}
                alt="Professional Photo of me on a white background"
            />
        </Box>
    );
};

export default ProfilePhoto;
