import db from '../config/Database.js';


async function userProfile(req,res) {
 
 try{

    const query = `SELECT id, userName, is_admin  FROM users WHERE id =?`;
                                                   //!Kinuha ko lang to sa may middleware
    const [result] = await db.query(query, [req.user.id]);
    console.log(result)
    if(result.length === 0) return res.json({message: "NO DATA FOUND"});
   
    req.io.emit()
    res.json({message:"OK", Data: result, status:200});

 }catch(error){
    console.log(error);
 }

    
};


export default userProfile;