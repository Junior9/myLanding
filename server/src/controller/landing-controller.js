const controller = {};

controller.list = (req,res)=>{
  req.getConnection((err, connection) => {
    const query = connection.query('SELECT * FROM landing', (err, landings) => {
      if(err){
        res.json({"mensage":err,"status":false});
      } 
      res.json(landings)
    })
  })  
}

controller.create = (req, res) => {
  var landing = req.body;  
  landing.url = "landing/"+landing.name+"/";
  landing.body = JSON.stringify(landing.body);
  req.getConnection((err, connection) => {
    var query = connection.query('INSERT INTO landing set ?', landing, (err, buy) => {
      if(err){
        res.json({"mensage":err,"status":false});
      } 
      res.json({"mensage":"Create Landing","status":true})
    })
  }) 
}

controller.delete = (req,res) =>{
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM landing WHERE id = ?', [id], (err, rows) => {
      if(err){
        res.json({"mensage":err,"status":false});
      } 
      res.json({"mensage":"Landing Deleted","status":true});
    });
  });
};

controller.page = (req,res)=>{

  const {name} = req.params;
  const {id} = req.params;

  console.log('SELECT * FROM landing WHERE name ="'+name+'" AND id='+id)


  req.getConnection((err, connection) => {
    const query = connection.query('SELECT * FROM landing WHERE name ="'+name+'" AND id='+id, (err, landing) => {
      if(err){
        res.json({"mensage":err,"status":false});
      } 
      res.json(landing)
    })
  })  
}



module.exports = controller;