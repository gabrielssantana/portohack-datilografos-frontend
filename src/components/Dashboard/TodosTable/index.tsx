import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IDados } from "@/models/IDados";

export interface TodosTableProps {
  title: string;
  description: string;
  data: IDados[];
}

function DadosTable({ title, description, data }: TodosTableProps) {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Viagem</TableHead>
              <TableHead className="hidden sm:table-cell">IMO DTE</TableHead>
              <TableHead className="hidden sm:table-cell">IMO APS</TableHead>
              <TableHead className="hidden md:table-cell">Navio DTE</TableHead>
              <TableHead className="hidden sm:table-cell">Navio APS</TableHead>
              <TableHead className="hidden sm:table-cell">ETA DTE</TableHead>
              <TableHead className="hidden md:table-cell">ETA APS</TableHead>
              <TableHead className="hidden sm:table-cell">
                ETA Hora DTE
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                ETA Hora APS
              </TableHead>
              <TableHead className="hidden md:table-cell">Operador</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((el) => (
              <>
                <TableRow className="bg-accent">
                  <TableCell>{el.id_viagem}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {el.id_lloyd_imo_dte}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {el.id_lloyd_imo_aps}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {el.nome_navio_dte}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {el.nome_navio_aps}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {el.data_aviso_chegada_dte}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {el.data_aviso_chegada_aps}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {el.hora_aviso_chegada_dte}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {el.hora_aviso_chegada_aps}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {el.nome_operador_dte}
                  </TableCell>
                  <TableCell className="text-right">{el.flag_status}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DadosTable;
