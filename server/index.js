import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, '../dist')));

// API Routes
app.get('/api/band-members', (req, res) => {
  const members = [
    {
      id: 1,
      name: "Carlos Rivera",
      role: "Vocalista Principal",
      image: "https://images.unsplash.com/photo-1549834146-0b6d6c360c84?auto=format&fit=crop&q=80",
      description: "Líder carismático con una voz única que transmite emociones profundas."
    },
    {
      id: 2,
      name: "Miguel Ángel",
      role: "Guitarrista",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
      description: "Maestro de las cuerdas que da vida a melodías inolvidables."
    },
    {
      id: 3,
      name: "Juan Pablo",
      role: "Bajista",
      image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80",
      description: "El ritmo y la base que mantiene unida nuestra música."
    }
  ];
  res.json(members);
});

app.get('/api/band-info', (req, res) => {
  const info = {
    mission: "En Davincci's Flow, creemos en el poder transformador de la música para unir culturas y corazones. Nuestra misión es crear experiencias musicales auténticas que inspiren, conecten y muevan el alma.",
    history: [
      {
        year: "2020",
        title: "Los Inicios",
        description: "Todo comenzó en las calles de nuestra ciudad, donde la pasión por la música nos unió..."
      },
      {
        year: "2021",
        title: "El Camino",
        description: "A través de los años, hemos evolucionado y crecido, manteniendo siempre nuestra esencia..."
      },
      {
        year: "2023",
        title: "Hoy",
        description: "Seguimos creando música que conecta con el corazón de nuestra gente..."
      }
    ],
    contact: {
      whatsapp: "+573107350919",
      instagram: "davinccisflow",
      spotify: "davinccisflow"
    }
  };
  res.json(info);
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});