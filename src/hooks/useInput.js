import {useState, useEffect} from 'react';
import axios from 'axios';
import url from '../constants';

const useInput = (defaultValue) => {
    const [disabled,setDisabled]=useState(true);
    const [text, setText] = useState(defaultValue);
    useEffect(() => {
        const someFunc = async() => {
            const response = await axios.get(url);
        setText(response.data.initialText)
        }
        someFunc();
        setDisabled(false);
    },[]);
    return [text,setText,disabled];
}
export default useInput;