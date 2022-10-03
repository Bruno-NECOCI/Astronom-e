import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import fr from "date-fns/locale/fr";
import './Form_Home.css'

registerLocale("fr", fr)

const Form_Home = () => {

const [selectedDate, setSelectedDate] = useState(new Date())

const dispatch = useDispatch()

const newDate = () => {
    
    const dateToString = selectedDate.toLocaleDateString()
 
    const splitDate = dateToString.split('/')

    const formatDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`

    dispatch({
        type: 'CHANGE',
        payload: formatDate
    })
  
}

    return (
        <div className='form-date'>
            <h1>Choisissez une date !</h1>

            <DatePicker 
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            locale="fr"
            />

            <button onClick={newDate}>Envoyer !</button>
            
        </div>
    );
};

export default Form_Home;
