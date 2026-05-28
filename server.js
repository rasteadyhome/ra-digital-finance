// This is your "Database" - a simple list you control directly in your code
const authorizedContractors = ['12345', '67890', 'ABCDE']; 

app.use(express.json()); // Ensure your app can read JSON data

app.post('/login', (req, res) => {
    const { contractorId } = req.body;
    
    // Check if the ID entered by the user exists in your list
    if (authorizedContractors.includes(contractorId)) {
        res.send("Access Granted");
    } else {
        res.status(401).send("Access Denied");
    }
});
