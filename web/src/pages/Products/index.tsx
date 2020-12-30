import React, { useState, useEffect } from 'react';
import { Table, Badge, Button, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { FiPlus,FiSettings, FiEdit,FiEye,FiTrash2 } from "react-icons/fi";
import moment from 'moment'
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import './index.css'

interface IProduct {
    id: string;
    description: string;
    quantity: number;
    price: number;
}

const Product: React.FC = () => {

    const [product, setProduct] = useState<IProduct[]>([])
    const history = useHistory()

    useEffect(() => {
        loadProduct()
    }, [])

    async function loadProduct() {

        const response = await api.get('/product')
        console.log(response)
        setProduct(response.data)
    }

    async function finishedProduct(id: string) {
        await api.patch(`/product/${id}`)
        loadProduct()
    }

    async function deleteProduct(id: string) {
        await api.delete(`/product/${id}`)
        loadProduct()
    }

    function formateDate(date: Date) {
        return moment(date).format("DD/MM/YYYY")
    }

    function newProduct() {
        history.push('/product_cadastro')
    }

    function editProduct(id: string) {
        history.push(`/product_cadastro/${id}`)
    }

    function viewProduct(id: string) {
        history.push(`/product/${id}`)
    }

    return (
        <div className="container">
              <Sidebar />
            <br />
            <div className="task-header">
                <h1> Produtos</h1>
                <Button className="plus" size="sm" onClick={newProduct}>
                    <FiPlus size={20} color="#060b26" />
                    Novo Produto
                </Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        product.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle className="drop">
                                         <FiSettings size={20} color="#060b26" />
                                        Ações
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu className="drop">
                                            <Dropdown.Item  href="#/action-1">
                                                <Button className="dropItem" size="sm" onClick={() => editProduct(product.id)}>
                                                    <FiEdit size={20} color="#060b26" />
                                                    Editar
                                                </Button>{' '}
                                            </Dropdown.Item>
                                            <Dropdown.Item  href="#/action-2">
                                                <Button className="dropItem" size="sm" onClick={() => viewProduct(product.id)}>
                                                    <FiEye size={20} color="#060b26" />
                                                    Visualizar  
                                                </Button>{' '}
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">
                                                <Button className="dropItem"  size="sm" onClick={() => deleteProduct(product.id)}>
                                                    <FiTrash2 size={20} color="#060b26" />
                                                    Remover
                                                </Button>{' '}
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Footer />
        </div>
    );
}

export default Product;