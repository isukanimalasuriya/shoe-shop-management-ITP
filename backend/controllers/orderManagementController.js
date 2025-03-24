import Orders from "../modeles/order.js";

export function addOrders(req,res){

    const data =req.body

    const newOrders =new Orders(data);

    newOrders.save().then(
        ()=>{
            res.json({
                message:"Order saved successfully"
            })
        }
    ).catch((error)=>{
        res.status(500).json({
            error:"Order addition failed",error
        })

    })
}



export async function displayOrders(req,res) {

    try {
        const { userId } = req.body; 

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const order = await Orders.findOne({ userId });

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json(order);
    } catch (error) {
        
        res.status(500).json({ message: "Internal Server Error" });
    }
}
