import { useState } from "react";
import { useRouter } from "next/router";
import { Card, Form, Button } from "react-bootstrap";
import Pagina from "@/components/Pagina";

import loginStyles from "../styles/login.module.css"
import styles from "../styles/index.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push("/cursos");

      } else {
        const data = await response.json();
        setError(data.message);
      }
      
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Ocorreu um erro ao fazer login.");
    }
  };

  return (
    <div className={styles.cover}>
      <Pagina titulo="Login">
        <Card className={loginStyles.card}>
          <Card.Body>
            <Card.Title className={loginStyles.cardTitle}>Login</Card.Title>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="email" className={loginStyles.formGroup}>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password" className={loginStyles.formGroup}>
                <Form.Label>Senha:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              {error && <p>{error}</p>}
              <Button variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Pagina>
    </div>
  );
}
