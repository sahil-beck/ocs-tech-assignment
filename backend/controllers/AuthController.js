import getPrismaInstance from "../utils/PrismaClient.js";

export const login = async (request, response, next) => {
    try {
        const { username: userId, password } = request.body;
        if (!userId || !password) return response.json({ status: false, message: "Username and password are required" });
        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({ where: { userId } });
        if (!user) return response.json({ status: false, message: "User not found" });
        const { password_hash, role } = user;
        if (password != password_hash) return response.json({ status: false, message: "Incorrect password" });
        return response.json({ status: true, role});
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}