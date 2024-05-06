import { connectMongoDB } from "@/libs/models/MongoConnect"
import Product from "@/libs/models/Product"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectMongoDB()

        const data = await Product.find()

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Something went wrong"
        },
            { status: 404 })
    }
}