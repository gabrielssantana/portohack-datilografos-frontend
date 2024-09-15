import DadosTable from "@/components/Dashboard/TodosTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IDados } from "@/models/IDados";
import { useEffect, useState } from "react";

import useWebSocket from "react-use-websocket";

function Dashboard() {
  const { lastMessage } = useWebSocket("ws://localhost:5108/api/Websocket");
  const [dados, setDados] = useState({
    todos: [],
    conformes: [],
    irregulares: [],
    inexistentes: [],
  } as Record<string, IDados[]>);

  useEffect(() => {
    if (!lastMessage?.data) {
      return;
    }

    const dadosWebsocket = JSON.parse(JSON.parse(lastMessage.data));
    setDados({
      todos: dadosWebsocket,
      conformes:
        (dadosWebsocket as IDados[]).filter(
          (el) => el.flag_status === "Correto"
        ) || [],
      irregulares:
        (dadosWebsocket as IDados[]).filter(
          (el) => el.flag_status === "Incorreto"
        ) || [],
      inexistentes:
        (dadosWebsocket as IDados[])
          .filter(
            (el) =>
              !el.id_lloyd_imo_dte &&
              !el.nome_navio_dte &&
              !el.data_aviso_chegada_dte &&
              !el.hora_aviso_chegada_dte &&
              !el.nome_operador_dte
          )
          ?.map((el) => ({ ...el, flag_status: "Inexistente no DTE" })) || [],
    });
  }, [lastMessage]);
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
        <Tabs defaultValue="todos">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="conformer">Conformes</TabsTrigger>
              <TabsTrigger value="irregulares">Irregulares</TabsTrigger>
              <TabsTrigger value="inexistentes">Inexistentes</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="todos">
            <DadosTable
              title="Todos"
              description="Exibe todos os avisos de chegada"
              data={dados.todos}
            />
          </TabsContent>
          <TabsContent value="conformer">
            <DadosTable
              title="Conformes"
              description="Exibe somente os avisos de chegada conformes"
              data={dados.conformes}
            />
          </TabsContent>
          <TabsContent value="irregulares">
            <DadosTable
              title="Irregulares"
              description="Exibe somente os avisos de chegada irregulares"
              data={dados.irregulares}
            />
          </TabsContent>
          <TabsContent value="inexistentes">
            <DadosTable
              title="Inexistentes"
              description="Exibe somente os avisos de chegada inexistentes"
              data={dados.inexistentes}
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default Dashboard;
