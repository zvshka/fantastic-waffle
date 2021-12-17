// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.body.email === "admin@admin.ru") {
        res.status(200).json({
            firstName: "Andrey",
            lastName: "Pushpurs",
            role: "ADMIN",
            avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128"
        })
    } else {
        res.status(200).json({
            firstName: "Andrey",
            lastName: "Pushpurs",
            role: "USER",
            avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128"
        })
    }
}
