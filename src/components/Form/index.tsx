import { z } from "zod";
import { Input } from "../Input";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styles";
import { cnpjMask, cpfMask, phoneMask, rgMask } from "@/helpers/masks";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(3, "Por favor, insira um nome válido!"),
  email: z.string().min(3, "Por favor, insira um e-mail válido!"),
});

type DataForm = z.infer<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const [rg, setRg] = useState("");

  return (
    <S.Container>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {/* <Input
          {...register("name")}
          label="Nome"
          maxWidth={400}
          helpText={errors.name?.message}
          value={rg}
          onChange={({ target }) => setRg(phoneMask(target.value))}
        />
        <Input
          {...register("email")}
          label="E-mail"
          maxWidth={400}
          helpText={errors.email?.message}
        /> */}

        <Input.Root>
          <label htmlFor="Nome">Nome</label>
          <Input.InputGroup>
            <Input.Icon>$</Input.Icon>
            <Input.InputElement id="Nome" type="text" />
            {/* <Input.Icon>$</Input.Icon> */}
          </Input.InputGroup>
          <Input.InputHelpText text="" />
        </Input.Root>

        <Input.Root>
          <label htmlFor="email">E-mail</label>
          <Input.InputGroup>
            <Input.Icon>$</Input.Icon>
            <Input.InputElement id="email" type="text" />
            {/* <Input.Icon>$</Input.Icon> */}
          </Input.InputGroup>
        </Input.Root>
        <Button type="submit">Enviar</Button>
      </form>

      <p style={{ fontSize: "3rem" }}>{rg}</p>
    </S.Container>
  );
};
