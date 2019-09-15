import EncomendaService from '../services/EncomendaService';
import Utilidade from '../shared/service/Utilidade';
import EncomendaViewModel from '../models/Encomenda/EncomendaViewModel';
import EncomendaDetalhesViewModel from '../models/Encomenda/EncomendaDetalhesViewModel';

export default {
  GetObjetoRastreio: async (codigoRastreio, nomeEncomenda) => {
    const data = await EncomendaService.GetRastreioCorreios(codigoRastreio);

    const encomendaDetalhe = new EncomendaViewModel({
      Id: String(Utilidade.CreateGuid()),
      Name: String(nomeEncomenda),
      TrackingCode: String(codigoRastreio),
      Delivered: true,
      Detalhes: data.map(detalhe => {
        return new EncomendaDetalhesViewModel({
          Id: String(Utilidade.CreateGuid()),
          LastDate: new Date(),
          Local: String(detalhe.Local),
          Status: String(detalhe.Status),
          Register: String(detalhe.Register),
        });
      }),
    });

    return [
      {...encomendaDetalhe},
      {...encomendaDetalhe},
      {...encomendaDetalhe},
    ];
  },
};
