import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Redirector(props) {

    const {key} = useParams();

    const getUrl  = async () => {
        const response = await axios.get('/' + key);
        if(response.data['success']){
            return response
        }
    }
    useEffect(() => {
        getUrl(key)
            .then(response => {
                window.location.href = response.data['urlMetadata']['url'];
            });

    }, []);
    return (
        <div>

        </div>
    );
}

export default Redirector;