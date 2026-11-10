"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { company, products } from "@/lib/site";

type Fields = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  product: string;
  quantity: string;
  measure: string;
  message: string;
  consent: boolean;
};

const empty: Fields = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  city: "",
  product: "",
  quantity: "",
  measure: "",
  message: "",
  consent: false,
};

const fieldClass = "h-11 w-full rounded-md bg-white px-3 text-base md:text-base";

export function QuoteForm({ initialProduct = "" }: { initialProduct?: string }) {
  const [fields, setFields] = useState<Fields>(() => ({ ...empty, product: initialProduct }));
  const [errors, setErrors] = useState<string[]>([]);
  const [draft, setDraft] = useState("");

  const options = useMemo(
    () => [
      ...products.map((product) => product.name),
      "Medida especial / otro",
    ],
    [],
  );

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function validate(current: Fields) {
    const next: string[] = [];
    if (current.name.trim().length < 3) next.push("Escribe tu nombre.");
    const digits = current.phone.replace(/\D/g, "");
    if (digits.length < 7) next.push("Escribe un teléfono o WhatsApp de contacto.");
    if (current.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) {
      next.push("El correo no tiene un formato válido.");
    }
    if (!current.product) next.push("Elige el tipo de sobre.");
    if (!current.consent) next.push("Autoriza el uso de los datos para responder la cotización.");
    return next;
  }

  function buildMessage(current: Fields) {
    return [
      "Hola SOBRYPAL, quiero cotizar un proyecto.",
      `Nombre: ${current.name.trim()}`,
      current.companyName.trim() ? `Empresa: ${current.companyName.trim()}` : "",
      `WhatsApp: ${current.phone.trim()}`,
      current.email.trim() ? `Correo: ${current.email.trim()}` : "",
      current.city.trim() ? `Ciudad: ${current.city.trim()}` : "",
      `Producto: ${current.product}`,
      current.quantity.trim() ? `Cantidad: ${current.quantity.trim()}` : "",
      current.measure.trim() ? `Medida: ${current.measure.trim()}` : "",
      current.message.trim() ? `Detalle: ${current.message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (nextErrors.length) {
      setDraft("");
      return;
    }
    const message = buildMessage(fields);
    setDraft(message);
    const url = `https://wa.me/${company.phoneE164}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {errors.length ? (
        <div role="alert" className="rounded-md border border-[#e7b4b4] bg-[#fff6f6] px-4 py-3 text-sm text-[#8d1d1d]">
          <p className="font-semibold">Revisa estos datos antes de enviar:</p>
          <ul className="mt-1 list-disc pl-5">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" htmlFor="nombre">
          <Input
            id="nombre"
            name="nombre"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClass}
            required
          />
        </Field>
        <Field label="Empresa" htmlFor="empresa" optional>
          <Input
            id="empresa"
            name="empresa"
            autoComplete="organization"
            value={fields.companyName}
            onChange={(event) => update("companyName", event.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="WhatsApp o teléfono" htmlFor="telefono">
          <Input
            id="telefono"
            name="telefono"
            inputMode="tel"
            autoComplete="tel"
            placeholder="300 123 4567"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass}
            required
          />
        </Field>
        <Field label="Correo" htmlFor="correo" optional>
          <Input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="Ciudad" htmlFor="ciudad" optional>
          <Input
            id="ciudad"
            name="ciudad"
            autoComplete="address-level2"
            value={fields.city}
            onChange={(event) => update("city", event.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="Producto" htmlFor="producto">
          <Select
            value={fields.product}
            onValueChange={(value) => update("product", value ?? "")}
          >
            <SelectTrigger id="producto" className="h-11 w-full rounded-md bg-white px-3 text-base">
              <SelectValue placeholder="Elige un tipo de sobre" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Cantidad aproximada" htmlFor="cantidad" optional>
          <Input
            id="cantidad"
            name="cantidad"
            value={fields.quantity}
            onChange={(event) => update("quantity", event.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="Medida, si ya la conoces" htmlFor="medida" optional>
          <Input
            id="medida"
            name="medida"
            placeholder="Ej. carta 22,5 × 29 cm"
            value={fields.measure}
            onChange={(event) => update("measure", event.target.value)}
            className={fieldClass}
          />
        </Field>
      </div>
      <Field label="Qué debe decir o proteger el sobre" htmlFor="mensaje" optional>
        <Textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          className="min-h-32 rounded-md bg-white px-3 py-2 text-base"
        />
      </Field>
      <div className="flex items-start gap-3">
        <Checkbox
          id="autorizacion"
          checked={fields.consent}
          onCheckedChange={(checked) => update("consent", checked === true)}
          className="mt-1"
        />
        <Label htmlFor="autorizacion" className="text-sm leading-snug font-normal">
          Autorizo a {company.legalName} a usar estos datos solo para responder esta cotización. Puedo
          conocer, actualizar o eliminar esa información según la{" "}
          <Link href="/politica-de-privacidad" className="text-brand underline-offset-2 hover:underline">
            política de privacidad
          </Link>
          .
        </Label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          className="h-12 rounded-full px-8 text-base font-semibold text-white"
        >
          Enviar cotización por WhatsApp
        </Button>
        <p className="max-w-sm text-sm text-[#5c6670]">
          Se abre un chat con el taller. Si el navegador bloquea la ventana, copia el mensaje de abajo.
        </p>
      </div>
      {draft ? (
        <div className="rounded-md border border-[#d9e3e9] bg-[#f7fafc] p-4">
          <p className="text-sm font-semibold text-brand">Mensaje listo</p>
          <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed">{draft}</pre>
          <a
            href={`https://wa.me/${company.phoneE164}?text=${encodeURIComponent(draft)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
          >
            Abrir WhatsApp de nuevo
          </a>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor} className="text-[0.95rem]">
        {label}
        {optional ? <span className="font-normal text-[#6b7280]"> · opcional</span> : null}
      </Label>
      {children}
    </div>
  );
}
