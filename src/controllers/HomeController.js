import axios from 'axios';

function GetObjetoRastreioByHtml(element) {
  const itemArray = element.split('\n');
  const itemObjeto = {
    data: itemArray[0]
      .split('<br>')
      .join(' ')
      .trim(),
    local: itemArray[1]
      .substring(itemArray[1].indexOf('>') + 1, itemArray[1].indexOf('</'))
      .split('/')
      .join(' ')
      .trim(),
    status: itemArray[2]
      .substring(
        itemArray[2].indexOf('g>') + 2,
        itemArray[2].indexOf('</strong><br>'),
      )
      .trim(),
    registro: itemArray[4].substring(0, itemArray[4].indexOf('</td>')).trim(),
  };

  return itemObjeto;
}

//LL660974473CN
export default {
  GetRastreioCorreios: async codigoRastreio => {
    return await axios
      .get(`https://www.websro.com.br/detalhes.php?P_COD_UNI=${codigoRastreio}`)
      .then(function(response) {
        const indiceInicial = response.data.indexOf('<tbody>');
        const indiceFinal = response.data.indexOf('</tbody>');

        const tabela = response.data.substring(indiceInicial, indiceFinal);

        const tabelaArray = tabela.split("<tr><td valign='top'>");
        tabelaArray.shift();

        return tabelaArray.map(GetObjetoRastreioByHtml);
      })
      .then(data => {
        return data;
      });
  },
};
