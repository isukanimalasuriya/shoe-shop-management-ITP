import Shoes from "../modeles/shoe.js";

export function addProduct(req,res){

    const data =req.body

    const newShoe =new Shoes(data);

    newShoe.save().then(
        ()=>{
            res.json({
                message:"Product added sucessfully"
            })
        }
    ).catch((error)=>{
        res.status(500).json({
            error:"Product addition failed"
        })

    })
}


export async function getShoes(req,res) {

    try{
            const shoes = await Shoes.find({availability:true});
            res.json(shoes);
            return;

    }catch(e){
        res.status(500).json({
            message:"Failed to get products"
        })
    }
}
