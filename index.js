const fastify = require('fastify')();


fastify.get('/g', async (req, res) => {
    res.redirect('https://www.google.com');
  });
  

// Run the server!

fastify.listen(3000, function(err, address){
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on port 3000....");
    }
});

  