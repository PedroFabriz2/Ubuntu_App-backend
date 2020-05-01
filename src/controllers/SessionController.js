const connection = require('../database/connection');

module.exports = {
    async create( request, response) {
        const { IDCriada } = request.body;

        const ong = await connection('ongs')
        .where('IDCriada', IDCriada)
        .select('nome', 'id')
        .first();

        if (!ong) {
            return response.status(400).json({ error: "No Ong found with this ID." });
        }

        return response.json(ong)
    }
}