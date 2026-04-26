# Personal Management System (Backend)

Backend **em desenvolvimento** para um sistema de gestão pessoal (tarefas e finanças), criado para ajudar a organizar **prazos** e **finanças pessoais**.

> Status: 🚧 Em desenvolvimento (primeiras entidades, migrations e estrutura inicial do servidor).

## Stack atual

- **Node.js + TypeScript**
- **Express** (API HTTP)
- **Prisma ORM**
- **PostgreSQL** (datasource configurado no Prisma)
- **Zod** (validação de payload)

## Estrutura (visão geral)

- `src/server.ts` — bootstrap do servidor Express
- `src/routes.ts` — roteador (ainda sem rotas registradas)
- `src/schemas/` — schemas Zod (ex.: criação de usuário)
- `src/middlewares/` — middlewares (ex.: validação com Zod)
- `prisma/schema.prisma` — modelagem do banco (fonte da verdade)
- `prisma/migrations/` — migrations geradas pelo Prisma

## Modelagem do banco (atual)

A modelagem atual está em `prisma/schema.prisma` e contém:

- **User**
  - `id`, `name`, `email`, `password`, `createdAt`
- **Task**
  - `id`, `title`, `description?`, `status`, `priority`, `deadLine?`, `user_id`, `createdAt`, `updatedAt`
- **Expense**
  - `id`, `description`, `amount`, `date`, `categoty`, `user_id`

Enums:

- `TaskStatus`: `PEDDING | ACTIVE | DONE`
- `Priority`: `LOW | MEDIUM | HIGH`

> Observação: existem alguns campos/nomes que ainda devem ser revisados (ex.: `PEDDING`, `categoty`) — faz parte do processo de evolução do projeto.

## Como rodar (dev)

### Pré-requisitos

- Node.js (recomendado: LTS)
- Banco PostgreSQL disponível

### 1) Instalar dependências

```bash
npm install
```

### 2) Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
PORT=3333
```

### 3) Gerar client e aplicar migrations

```bash
npx prisma generate
npx prisma migrate dev
```

### 4) Rodar o servidor

```bash
npm run dev
```

O servidor inicia em `http://localhost:3333` (ou na porta definida em `PORT`).

## Endpoints

Ainda **não há endpoints expostos** (rotas estão sendo implementadas).

## Próximos passos (roadmap)

- [ ] CRUD de Usuários
- [ ] Autenticação (hash de senha + JWT)
- [ ] CRUD de Tarefas
- [ ] CRUD de Despesas
- [ ] Categorias de despesas (normalização)
- [ ] Melhorias no modelo para valores monetários (ex.: `Decimal` no Prisma)
- [ ] Documentação de API (Swagger/OpenAPI)
- [ ] Testes (unitários e integração)
- [ ] Front-end (React) — etapa futura

## Contribuição

Como o projeto está no início, sugestões são bem-vindas. Abra uma issue com ideias/bugs.

## Licença

Ainda não definida.
