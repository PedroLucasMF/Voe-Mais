"use client";

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function Page() {
  const route = useRouter()

  function salvar(dados) {
    const empresas = JSON.parse(localStorage.getItem('empresas')) || []
    empresas.push(dados)
    localStorage.setItem('empresas', JSON.stringify(empresas))
    return route.push('/empresas')
  }

  return (
    <Pagina titulo="Empresas">
      <Formik
        initialValues={{ nome: "", logo: "", site: ""}}
        onSubmit={(values) => salvar(values)}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="logo">
              <Form.Label>Logo</Form.Label>
              <Form.Control
                type="text"
                name="logo"
                value={values.logo}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="site">
              <Form.Label>site</Form.Label>
              <Form.Control
                type="text"
                name="site"
                value={values.site}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                Salvar <FaCheck />
              </Button>
              <Link href="/empresas" className="btn btn-primary ms-3">
                Voltar <RiArrowGoBackLine />
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
