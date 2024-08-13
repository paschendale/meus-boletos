CREATE TABLE conta (
    id_conta SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    valor_inicial NUMERIC NOT NULL
);

CREATE TABLE registro (
    id_registro SERIAL PRIMARY KEY,
    id_conta INTEGER REFERENCES conta(id_conta),
    descricao VARCHAR(255),
    valor NUMERIC NOT NULL,
    data TIMESTAMP NOT NULL
);

CREATE TABLE categoria (
    id_categoria SERIAL PRIMARY KEY,
    id_categoria_pai INTEGER REFERENCES categoria(id_categoria),
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE desdobro (
    id_desdobro SERIAL PRIMARY KEY,
    id_registro INTEGER REFERENCES registro(id_registro),
    descricao VARCHAR(255),
    id_categoria INTEGER REFERENCES categoria(id_categoria),
    valor NUMERIC NOT NULL,
    CHECK (valor >= 0),
    CHECK (valor <= (SELECT valor FROM registro WHERE id_registro = desdobro.id_registro))
);
