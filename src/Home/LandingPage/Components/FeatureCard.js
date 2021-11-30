import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Features({ title, dis, svg })
{
    return (
        <Card sx={{ width: '100%' }} sm={12}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={svg}
                style={{ width: '100%', objectFit: 'contain' }}
            />
            <CardContent>

                <Typography gutterBottom variant="h5" component="div" style={{ padding: '3rem 0rem' }} style={{ textAlign: 'center', padding: '2rem 0rem', fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {dis}
                </Typography>
            </CardContent>

            <CardActions>

            </CardActions>
        </Card>
    );
}
