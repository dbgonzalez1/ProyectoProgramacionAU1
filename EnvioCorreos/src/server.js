const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { PORT } = require('./config');
const cors = require('cors');
const { sendEmail } = require('./CorreoScript');
const app = express();

// Configura CORS
app.use(cors());


// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'lab2',
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar con la base de datos MySQL:', error);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

app.use(bodyParser.json());

app.post('/api/saveFormData', (req, res) => {
  const formData = req.body;
  const sql = `
    INSERT INTO formulario
    (name, identification, date, email, country, gender, 
        bibliography, termns, captchaAnswer)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    formData.name,
    formData.identification,
    formData.date,
    formData.email,
    formData.country,
    formData.gender,
    formData.bibliography,
    formData.termns,
    formData.captchaAnswer,
  ];

  // Ejecuta la consulta SQL
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error al guardar el formulario en la base de datos:', error);
      res.status(500).send('Error al guardar el formulario en la base de datos');
    } else {
      res.status(200).json({ message: 'Formulario guardado con éxito', formulario: results });
    }
  });
});


/************************************************************************************** */
/************************************************************************************** */
/************************************************************************************** */
app.post('/api/email/confirm', async (req, res) => {

  try {
    await sendEmail('andrickmpl20@gmail.com', '✅ Correo de verificacion ✅', `

      <h1>¡Gracias por registrarte en nuestra pagina!</h1>
      <a href="https://www.google.com">Verifica tu correo</a>
    `);

    res.json({
      status: 'OK'
    })
  } catch (error) {
    console.error(error);
    res.json({
      status: 'ERROR'
    })
  }

});

/************************************************************************************** */
/************************************************************************************** */
/************************************************************************************** */
app.post('/api/email/reject', async (req, res) => {

  try {
    await sendEmail('andrickmpl20@gmail.com', 'Correo de verificacion', `

      <h1>¡Su formulario ha sido rechazado!</h1>
      <a href="https://www.google.com">Vuelve a intentarlo</a>
    `);

    res.json({
      status: 'OK'
    })
  } catch (error) {
    console.error(error);
    res.json({
      status: 'ERROR'
    })
  }

});





app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);

});