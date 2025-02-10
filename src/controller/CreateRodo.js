import db from '../config/Database.js';


async function CreateTodo(req,res){
     const id = req.user.id;
    
    const { Title,  Description,  Date } = req.body;
    const data = [Title,  Description,  Date, id ];

   try{
    const query = `INSERT INTO todo_create (title,description,date, user_id) VALUES (?,?,?,?)`;
    await db.query(query, data);

    if(data.length === 0) return res.json("Not Successfully insert");

    return res.json("Not Successfully insert");

   }catch(error){ console.log(error) }

};


async function getCreate(req,res) {
    
   const userId = req.user.id;
  
    try{

    const query = `SELECT * FROM todo_create WHERE user_id =?`;

    const [result] = await db.query(query, [userId]);

    return res.json({status:200, data: result})

    }catch(error) {console.log(error)}
}



export { CreateTodo, getCreate };