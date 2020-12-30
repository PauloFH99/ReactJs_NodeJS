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
<<<<<<< HEAD
        const { name, email, password } = request.body;
=======
        const {name, email, password } = request.body;
>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289
        console.log(request.body);

        const userExists = await repository.findOne({ where: { email } });


        if (userExists) {
            return response.status(400).json({
                message: 'Email já utilizado'
            })
        }

<<<<<<< HEAD
        const user = repository.create({ name, email, password });
=======
        const user = repository.create({ name,email, password });
>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289

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
<<<<<<< HEAD

=======
      
>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289
        const userRepository = getRepository(User);

        const user = await userRepository.find();

        return response.status(200).json(userView.renderMany(user));
    }

    async delete(request: Request, response: Response) {


        const { id } = request.params;

<<<<<<< HEAD
        const user = await getRepository(User).delete(id);

        if (user.affected === 1) {
            const userUpdated = await getRepository(User).findOne(id)
            return response.json({ message: 'Usuário removido!' })
        }

        return response.status(404).json({ message: 'Usuário não encontrado!' })


    }

    async update(request: Request, response: Response) {
        const { id } = request.params

        try {
            const user = await getRepository(User).update(id, request.body)

            if (user.affected === 1) {
                const userUpdated = await getRepository(User).findOne(id)
                return response.json(userUpdated)
            }

            return response.status(404).json({ message: 'Usuário não encontrado!' })
        } catch (error) {
            return response.status(500).json({ message: 'Error' })
        }


=======
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
>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289
    }
}

export default new UserController()