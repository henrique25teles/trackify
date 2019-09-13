import axios from 'axios';

//LL660974473CN
export default class HomeController {
  static async GetRastreioCorreios(codigoRastreio) {
    let dadosRastreio;

    await axios
      .get(`https://www.websro.com.br/detalhes.php?P_COD_UNI=${codigoRastreio}`)
      .then(function(response) {
        const indiceInicial = response.data.indexOf('<tbody>');
        const indiceFinal = response.data.indexOf('</tbody>');

        const tabela = response.data.substring(indiceInicial, indiceFinal);

        const tabelaArray = tabela.split("<tr><td valign='top'>");
        tabelaArray.shift();

        let dataArray = [];

        tabelaArray.forEach(element => {
          const itemArray = element.split('\n');
          const itemObjeto = {
            data: itemArray[0]
              .split('<br>')
              .join(' ')
              .trim(),
            local: itemArray[1]
              .substring(
                itemArray[1].indexOf('>') + 1,
                itemArray[1].indexOf('</'),
              )
              .split('/')
              .join(' ')
              .trim(),
            status: itemArray[2]
              .substring(
                itemArray[2].indexOf('g>') + 2,
                itemArray[2].indexOf('</strong><br>'),
              )
              .trim(),
            registro: itemArray[4]
              .substring(0, itemArray[4].indexOf('</td>'))
              .trim(),
          };

          dataArray.push(itemObjeto);
        });

        dadosRastreio = dataArray;
      });

    return dadosRastreio;
  }
}
