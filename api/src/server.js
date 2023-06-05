require('dotenv').config();
import express from 'express';

const app = express();

app.post('/certifications', (req, res) => {
    //chamar micro serviço
    return res.json({
        ok: true
    })
})

app.listen(3333, () => {
    console.log(`Hello! Server started on port ${process.env.PORT}`);
  });
  
