const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/log-pledge', (req, res) => {
    const { name, amount, date } = req.body;
    const logEntry = `${date} | PLEDGE: $${amount} | From: ${name}\n`;
    
    // This creates/updates the text file in your folder
    fs.appendFile('pledge_ledger.txt', logEntry, (err) => {
        if (err) return res.status(500).send("Error");
        res.status(200).send("Logged");
    });
});

app.listen(process.env.PORT || 3000);
