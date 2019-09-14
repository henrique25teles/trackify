import axios from 'axios';
import EncomendaViewModel from '../models/EncomendaViewModel';
import EncomendaDetalhesViewModel from '../models/EncomendaDetalhesViewModel';
import Utilidade from '../shared/service/Utilidade';

const GetObjetoRastreioByHtml = element => {
  const itemArray = element.split('\n');
  const itemObjeto = {
    LastDate: itemArray[0]
      .split('<br>')
      .join(' ')
      .trim(),
    Local: itemArray[1]
      .substring(itemArray[1].indexOf('>') + 1, itemArray[1].indexOf('</'))
      .split('/')
      .join(' ')
      .trim(),
    Status: itemArray[2]
      .substring(
        itemArray[2].indexOf('g>') + 2,
        itemArray[2].indexOf('</strong><br>'),
      )
      .trim(),
    Register: itemArray[4].substring(0, itemArray[4].indexOf('</td>')).trim(),
  };

  return itemObjeto;
};

const MontaObjetoRastreio = response => {
  const indiceInicial = response.data.indexOf('<tbody>');
  const indiceFinal = response.data.indexOf('</tbody>');

  const tabela = response.data.substring(indiceInicial, indiceFinal);

  const tabelaArray = tabela.split("<tr><td valign='top'>");
  tabelaArray.shift();

  const detalhesRastreio = tabelaArray.map(GetObjetoRastreioByHtml);

  return detalhesRastreio;
};

//LL660974473CN
export default {
  GetRastreioCorreios: async codigoRastreio => {
    return await axios
      .get(`https://www.websro.com.br/detalhes.php?P_COD_UNI=${codigoRastreio}`)
      .then(MontaObjetoRastreio)
      .then(data => {
        return data;
      });
  },
};
