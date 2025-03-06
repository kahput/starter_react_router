import mongoose from "mongoose";

interface Van {
    id: string, name: string, price: number, description: string, imageUrl: string, type: string
}

const vanSchema = new mongoose.Schema<Van>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    type: { type: String, required: true },
})

const VanModel = mongoose.model<Van>("Vans", vanSchema);

export default VanModel;
