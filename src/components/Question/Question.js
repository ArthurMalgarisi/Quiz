import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './Question.css';

const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (i) => {
        if(selected===i && selected===correct ) {
            return "select";
        } else if(selected===i && selected !== correct) {
            return "wrong";
        } else if(i===correct) {
            return "select";
        }
    };

    const HandleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
    };

    const navigate = useNavigate();

    const handleNext = () => {
        if (currQues === questions.length - 1) {
            navigate('/result')
        }
        else if(selected) {
            setCurrQues(currQues+1)
            setSelected()
        } else {
            setError("Por favor selecione alguma opção");
        }
    };

    const handleQuit = () => {
    
    };

    return (
    <div className="question">
        <h1>Question {currQues + 1} :</h1>

        <div className="singleQuestion">
            <h2>{questions[currQues].question}</h2>

            <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                    options &&
                    options.map(i=>(
                        <button 
                            onClick={ () => HandleCheck(i) } 
                            className={`singleOption ${selected && handleSelect(i)}`}
                            key={i} 
                            disabled={selected}
                        >
                            {i}
                        </button>
                    ))}              
            </div>

            <div className='controls'>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{ width: 185 }}
                        href="/"
                        onClick={handleQuit}
                    >
                        Sair
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: 185 }}
                        onClick={handleNext}
                    >
                        Proxima Pergunta
                    </Button>
            </div>
        </div>
    </div>
    );
};

export default Question
