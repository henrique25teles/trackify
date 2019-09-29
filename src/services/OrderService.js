import axios from 'axios';
import Utilidade from '../shared/service/Utilidade';
import Order from '../models/Order/Order';
import OrderDetail from '../models/Order/OrderDetail';

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

const MontaDetalhesObjetoRastreio = detalhe => {
  return new OrderDetail({
    Id: String(Utilidade.CreateGuid()),
    LastDate: new Date(),
    Local: String(detalhe.Local),
    Status: String(detalhe.Status),
    Register: String(detalhe.Register),
  });
};

const validaCodigoRastreio = codigoRastreio => {
  var regexTeste = new RegExp(/[A-Z][A-Z]\d\d\d\d\d\d\d\d\d[A-Z][A-Z]$/);
  var result = regexTeste.test(codigoRastreio);
  return result;
};

//LL660974473CN
export default {
  GetRastreioCorreios: async (codigoRastreio, nomeEncomenda) => {
    try {
      if (!validaCodigoRastreio(codigoRastreio)) {
        throw new Error('Código de rastreamento inválido');
      }

      const response = await axios.get(
        `https://www.websro.com.br/detalhes.php?P_COD_UNI=${codigoRastreio}`,
      );

      const detalhesRastreio = MontaObjetoRastreio(response);

      const encomenda = new Order({
        Id: String(Utilidade.CreateGuid()),
        Name: String(nomeEncomenda),
        TrackingCode: String(codigoRastreio),
        Delivered: true,
        Detalhes: detalhesRastreio.map(MontaDetalhesObjetoRastreio),
      });

      return {result: true, encomenda};
    } catch (error) {
      return {result: false, message: error.message};
    }
  },
};
