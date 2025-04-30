
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

const gerencias = [
  "Departamento de Despacho de Gas",
  "Gerencia de Protección del Usuario",
  "Gerencia de Distribución",
  "Gerencia de Gas Natural Vehicular",
  "Gerencia de Innovación y Normalización",
  "Gerencia de Transmisión",
  "Gerencia de Desempeño y Economía",
  "Gerencia de Control Económico Regulatorio",
  "Gerencia de Asuntos Legales",
  "Intervención"
];

export default function AgendaNormativa2025() {
  const [nombre, setNombre] = useState("");
  const [avance, setAvance] = useState({ porcentaje: "" });
  const [hito, setHito] = useState("");
  const [finalizado, setFinalizado] = useState(false);
  const [gerenciasInterv, setGerenciasInterv] = useState([]);

  const toggleGerencia = (g) => {
    setGerenciasInterv((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardContent className="space-y-4">
          <Label>Nombre del Proyecto</Label>
          <Input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ejemplo: Plan de revisión de Normas técnicas obsoletas"
          />

          <Label>% de Avance</Label>
          <div className="flex items-center space-x-2">
            <Input
              className="w-20"
              type="number"
              value={avance.porcentaje}
              onChange={(e) =>
                setAvance({ ...avance, porcentaje: e.target.value })
              }
              placeholder="%"
            />
            <span>% completado</span>
          </div>

          <Label>Hito asociado al avance</Label>
          <Textarea
            value={hito}
            onChange={(e) => setHito(e.target.value)}
            placeholder="Ejemplo: Se avanzó con la revisión de la NAG-601..."
          />
          <p className="text-sm text-muted-foreground">
            Breve descripción del hito que fundamenta el avance informado.
          </p>

          <div className="flex items-center space-x-2">
            <Checkbox
              checked={finalizado}
              onCheckedChange={(v) => setFinalizado(v)}
            />
            <Label>Terminado</Label>
          </div>

          <Label>Gerencias Intervinientes</Label>
          <div className="grid grid-cols-2 gap-2">
            {gerencias.map((g) => (
              <div key={g} className="flex items-center space-x-2">
                <Checkbox
                  checked={gerenciasInterv.includes(g)}
                  onCheckedChange={() => toggleGerencia(g)}
                />
                <span>{g}</span>
              </div>
            ))}
          </div>

          <Button className="mt-4">Guardar Proyecto</Button>
        </CardContent>
      </Card>
    </div>
  );
}
