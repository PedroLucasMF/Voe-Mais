"use client";

import Pagina from "@/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa"

export default function Page() {

  const empresas = JSON.parse(localStorage.getItem('empresas')) || []

  return (
    <Pagina titulo="Empresas">
        <Link
            href="/empresas/create"
            className="btn btn-primary mb-3">
                <FaPlusCircle/> Novo
        </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map(item => (
            <tr>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td><a href={item.site}><img width={'50px'} src={item.logo}></img></a></td>
          </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
