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
        <Input.Root>
          <label htmlFor="name">Nome</label>
          <Input.InputGroup>
            <Input.Icon>$</Input.Icon>
            <Input.InputElement
              {...register("name")}
              id="name"
              type="text"
              value={rg}
              onChange={({ target }) => setRg(cnpjMask(target.value))}
            />
          </Input.InputGroup>
          <Input.InputHelpText text={errors.name?.message} />
        </Input.Root>

        <Input.Root>
          <label htmlFor="email">E-mail</label>
          <Input.InputGroup>
            <Input.Icon>$</Input.Icon>
            <Input.InputElement {...register("email")} id="email" type="text" />
          </Input.InputGroup>
          <Input.InputHelpText text={errors.email?.message} />
        </Input.Root>

        <Button type="submit">Enviar</Button>
      </form>

      <p style={{ fontSize: "3rem" }}>{rg}</p>
    </S.Container>
  );
};
