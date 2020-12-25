import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User';
import userView from '../../views/user_view';
class UserController {

    async index(request: Request, response: Response) {
        const repository = getRepository(User);

        const users = await repository.find()

        return response.json(users);
    }

    async store(request: Request, response: Response) {
        const repository = getRepository(User);
        const {name, email, password } = request.body;
        console.log(request.body);

        const userExists = await repository.findOne({ where: { email } });


        if (userExists) {
            return response.status(400).json({
                message: 'Email já utilizado'
            })
        }

        const user = repository.create({ name,email, password });

        await repository.save(user);

        return response.json({ message: 'Usuário criado' });
    }

    async get(request: Request, response: Response) {
        const { email } = request.params;
        console.log(email);
        const userRepository = getRepository(User);

        const user = await userRepository.findOneOrFail({
            where: { email }
        });

        if (!user) {
            return response.status(400).json({ error: 'Usuário não existe!' });
        }

        return response.status(200).json(userView.render(user));
    }

    async getAll(request: Request, response: Response) {
      
        const userRepository = getRepository(User);

        const user = await userRepository.find();

        return response.status(200).json(userView.renderMany(user));
    }

    async delete(request: Request, response: Response) {


        const { id } = request.params;

        const userRepository = getRepository(User);

        const user = await userRepository.findOneOrFail({
            where: { id }
        });

        if (!user) {
            return response.status(400).json({ error: 'Usuário não existe!' });
        }

        await userRepository.delete(user);

        return response.json({ message: 'Usuário excluído' });
    }

    async update(request: Request, response: Response) {


        const { id, name,email } = request.params;

        const userRepository = getRepository(User);

        const user = userRepository.create({ id,name, email });

        await userRepository.update({ id: id }, user);

        return response.json({ message: 'Usuário alterado' });
    }
}

export default new UserController()