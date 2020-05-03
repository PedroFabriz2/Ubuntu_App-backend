const connection = require('../database/connection');//para conectar os dados às rotas
const crypto = require('crypto');//isso daqui foi para gerar um id aleatorio para a ong

module.exports = {
    async index(request, response) { //esse metodo get serve para listar todas as ongs
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },


    async create(request, response){
        const { nome, IDCriada, email, whatsapp, insta, picpay, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({ //aqui o connection está inserindo tais dados descritos em uma knex.table chamada ongs.
            id,
            nome,
            IDCriada,
            email,
            whatsapp,
            insta,
            picpay,
            city,
            uf,
        })
        
        return response.json({ id });
        },

        async delete(request, response) {
            //const { id } = request.params;
            const ong_id = request.headers.authorization;
    
            const ong = await connection('ongs')
            .where('id', ong_id)
            .first();
            
            if (ong.id != ong_id) {
                return response.status(401).json({ error: 'Operation not permitted.' });
            };
    
            await connection('incidents').where('ong_id', ong_id).delete();
            
            await connection('ongs').where('id', ong_id).delete();

            return response.status(204).send();
        }
};