import axios from 'axios';
const urlAPI = 'https://produto-cartesiano.herokuapp.com/calculate/';

const API = async (expression, sets) => {
   
    if (expression.conjunto_a !== undefined && expression.conjunto_b !== undefined) {
        let req = {
            conjunto_a: sets.filter(set => set.name === expression.conjunto_a).map(set => set.values)[0],
            conjunto_b: sets.filter(set => set.name === expression.conjunto_b).map(set => set.values)[0],
            operacao: expression.operacao,
            logica: expression.logica
        }
        
        let res = await axios.post(urlAPI, req).then(response => {
            console.log(response)
            console.log(response.data)   
            return response.data
        }).catch(err => {
            return err
        })
       
        return res
    }
}

export default API;