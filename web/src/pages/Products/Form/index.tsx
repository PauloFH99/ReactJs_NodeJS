import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import api from '../../../services/api'
import { FiArrowLeft,FiCheck} from "react-icons/fi";
import Footer from "../../../components/footer";
import Sidebar from "../../../components/sidebar";
import './index.css'

interface Iid{
    id: string;
}
interface IProduct {
    description: string;
    quantity : string;
    price: string;
}

const Product: React.FC = () => {

    const history = useHistory()
    const {  id  } = useParams<Iid>()
 
    const [model, setModel] = useState<IProduct>({
        description: '',
        quantity:'',
        price:''
    })

    useEffect(() => {
       console.log(id);
        if (id !== undefined) {
            findProduct(id)
        }
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setModel({
            ...model,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            const response = await api.put(`/product/${id}`, model)
        } else {
            console.log(model)
            const response = await api.post('/product', model)
        }
        back()

    }

    async function findProduct(id: string) {
        const response = await api.get(`product/${id}`)
        setModel({
            description: response.data.description,
            quantity: response.data.quantity,
            price: response.data.price
        })
    }

    function back() {
        history.goBack()
    }

    return (
        <div className="container">
            <Sidebar/>
            <br />
            <div className="task-header">
                <h3>Novo Produto</h3>
                <Button variant="dark" size="sm" onClick={back}><FiArrowLeft size={20} color="#060b26" />Voltar</Button>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={model.description}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantity"
                            value={model.quantity}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                        <Form.Label>Preço</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={model.price}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        <FiCheck size={20} color="#060b26" />
                        Salvar
                    </Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
}

export default Product;