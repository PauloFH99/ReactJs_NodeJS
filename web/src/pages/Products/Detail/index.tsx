import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom' 
import { Button, Card, Badge } from 'react-bootstrap';
import api from '../../../services/api';
import Footer from "../../../components/footer";
import Sidebar from "../../../components/sidebar";
import { FiArrowLeft} from "react-icons/fi";
import moment from 'moment';

interface Iid{
    id: string;
}

interface IProd {
    id: number;
    description: string;
    quantity: number;
    price: number;
}

const Detail: React.FC = () => {

    const history = useHistory()
    const { id } = useParams<Iid>()
    const [product, setProduct] = useState<IProd>()

    useEffect(() => {
        findProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    function back() {
        history.goBack()
    }

    async function findProduct() {
        console.log(id);
        const response = await api.get<IProd>(`/product/${id}`)
        
        setProduct(response.data)

    }

 

    return(
        <div className="container">
            <Sidebar/>
            <br/>
            <div className="task-header">
                <h1>Detalhes Produto</h1>
                <Button variant="dark" size="sm" onClick={back}> <FiArrowLeft size={20} color="#060b26" />Voltar</Button>
            </div>
            <br/>

            <Card>
                <Card.Body>
                    
                <Card.Title>{ product?.description}</Card.Title>
                    <Card.Text>
                    {product?.price}
                    <br/>
                    {product?.quantity}
                    <br/>     
                    </Card.Text>
                </Card.Body>
            </Card>
            <Footer/>
        </div>
    );
}

export default Detail;