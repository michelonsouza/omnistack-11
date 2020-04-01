/**
 * @swagger
 *  components:
 *    schemas:
 *      Auth:
 *        type: object
 *        required:
 *          - id
 *        properties:
 *          id:
 *            type: string
 *            description: Ong id necessary for auth
 *        example:
 *           id: ac536e1z
 */

const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this id' });
    }

    return res.json(ong);
  },
};
