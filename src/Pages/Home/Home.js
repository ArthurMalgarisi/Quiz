import { Button, MenuItem, TextField } from '@material-ui/core';
import Categories from '../../Data/Categories';
import './Home.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if(!category|| !name) {
            setError(true)
            return;
        }
        else {
            setError(false);
            fetchQuestions(category);
            navigate("/quiz");
        }
    };

    return <div className='content'>
        <div className='settings'>
            <span style={{ fontSize: 30 }}>Modo de Jogo</span>

            <div className='settings__select'>
                {error && <ErrorMessage>Por favor preencha tudo.</ErrorMessage>}

                <TextField 
                    style={{ marginBottom: 25 }} 
                    label="Coloque seu nome" 
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField 
                    select 
                    label="Categorias"
                    variant="outlined" 
                    style={{ marginBottom: 30 }}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    {
                        Categories.map((cat) => (
                            
                            <MenuItem key={cat.category} value={cat.value} >
                               {cat.category} 
                            </MenuItem>

                        ))}
                </TextField>

                <Button variant='contained' color="primary" size='large'
                onClick={handleSubmit}
                >
                    Começar Quiz
                </Button>

            </div>

        </div>

        </div>;
};

export default Home;