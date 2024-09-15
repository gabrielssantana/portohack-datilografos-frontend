export interface IDados {
  id_viagem: number;
  id_lloyd_imo_dte: number | null;
  id_lloyd_imo_aps: number | null;
  nome_navio_dte: string | null;
  nome_navio_aps: string | null;
  data_aviso_chegada_dte: string | null;
  data_aviso_chegada_aps: string | null;
  hora_aviso_chegada_dte: string | null;
  hora_aviso_chegada_aps: string | null;
  nome_operador_dte: string | null;
  flag_status: "Correto" | "Incorreto" | string;
  lista_corrigir: string[];
}
