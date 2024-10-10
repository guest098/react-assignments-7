import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import photo1 from '../assests/images/image2.jpg';
import photo2 from '../assests/images/image1.png';

interface CardData {
  id: number;
  name: string;
  role: string;
  rate: string;
  location: string;
  lastSeen: string;
  description: string;
  image: string;
}

const cardData: CardData[] = [
  { id: 1, name: "Jeffrey Abrams", role: "Film Director, Producer", rate: "€14/hour", location: "New York, United States", lastSeen: "Online", description: "Director of Star Wars", image: photo1 },
  { id: 2, name: "Baltasar Kormákur", role: "Actor, Film Director", rate: "€9/hour", location: "Reykjavik, Iceland", lastSeen: "Last seen: 17 minutes ago", description: "Icelandic actor and director", image: photo2 }
];

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<CardData | null>(null);

  useEffect(() => {
    const foundCard = cardData.find(card => card.id === parseInt(id!, 10));
    setCard(foundCard || null);
  }, [id]);

  if (!card) {
    return <Typography sx={{ textAlign: 'center', marginTop: 5 }}>Card not found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto', padding: '20px', borderRadius: 4, backgroundColor: '#FDFEFE', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Avatar alt={card.name} src={card.image} sx={{ width: 150, height: 150, margin: '0 auto' }} />
      </Box>
      <CardContent>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 1, fontWeight: 'bold', color: '#2C3E50' }}>{card.name}</Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center', color: '#7F8C8D' }}>{card.role}</Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold', margin: '10px 0', color: '#16A085' }}>{card.rate}</Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#7F8C8D' }}>{card.location}</Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2, color: '#2C3E50' }}>{card.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardDetail;
