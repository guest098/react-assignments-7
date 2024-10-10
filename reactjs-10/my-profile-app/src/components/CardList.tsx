import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, Box, Avatar } from '@mui/material';
import photo1 from '../assests/images/image2.jpg';
import photo2 from '../assests/images/image1.png';

interface CardData {
  id: number;
  name: string;
  role: string;
  rate: string;
  location: string;
  lastSeen: string;
  image: string;
}

const cardData: CardData[] = [
  { id: 1, name: "Jeffrey Abrams", role: "Film Director", rate: "€14/hour", location: "New York, United States", lastSeen: "Online", image: photo1 },
  { id: 2, name: "Baltasar Kormákur", role: "Actor", rate: "€9/hour", location: "Reykjavik, Iceland", lastSeen: "Last seen: 17 minutes ago", image: photo2 }
];

const CardList: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ justifyContent: 'center', padding: '20px' }}>
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Card sx={{ maxWidth: 345, borderRadius: 4, backgroundColor: '#ECF0F1', padding: 3, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
              <Avatar alt={card.name} src={card.image} sx={{ width: 80, height: 80, margin: '0 auto' }} />
            </Box>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 1, fontWeight: 'bold', color: '#2C3E50' }}>
                <Link to={`/cards/${card.id}`} style={{ textDecoration: 'none', color: '#2980B9' }}>{card.name}</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', color: '#7F8C8D' }}>{card.role}</Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold', color: '#16A085' }}>{card.rate}</Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', color: '#7F8C8D', marginTop: '10px' }}>{card.location}</Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: '20px' }}>
                <Button variant="outlined" sx={{ borderRadius: '20px', padding: '5px 20px', borderColor: '#2980B9', color: '#2980B9' }}>View CV</Button>
                <Button variant="contained" sx={{ borderRadius: '20px', padding: '5px 20px', backgroundColor: '#2980B9', color: '#fff' }}>Make Offer</Button>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', marginTop: '15px', fontSize: '0.8rem', color: '#7F8C8D' }}>{card.lastSeen}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
