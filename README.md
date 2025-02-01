# API Ecommerce Flask Documentation

## 1. Rota: Login do usuário

#### Endpoint
`POST /login`

#### Parâmetros
- `username`: Nome de usuário.
- `password`: Senha do usuário.

#### Exemplo de Requisição
```json
{
  "username": "usuario",
  "password": "senha123"
}
```

#### Exemplo de Resposta
```json
{
  "message": "Logged in successfully"
}
```

## 2. Rota: Logout do usuário

#### Endpoint
`POST /logout`

#### Requisitos
- Requer que o usuário esteja autenticado.


#### Exemplo de Resposta
```json
{
  "message": "Logout successfully"
}
```

## 3. Rota: Adicionar produto

#### Endpoint
`POST /api/products/add`

#### Parâmetros
- `name`: Nome do Produto.
- `price`: Preço do Produto.
- `description` `Opcional`: Descrição do Produto.
- `image_url` `Opcional`: Imagem do Produto.
  
#### Exemplo de Requisição
```json
{
  "name": "Produto Exemplo",
  "price": 100.50,
  "description": "Descrição do produto",
  "image_url": "https://example.com/imagem.jpg"
}
```

#### Exemplo de Resposta
```json
{
  "message": "Product added successfully"
}
```

## 4. Rota: Deletar produto

#### Endpoint
`DELETE /api/products/delete/{product_id}`

#### Parâmetros
- `{product_id}`: Nome do Produto.
  
#### Exemplo de Resposta
```json
{
  "message": "Product deleted successfully"
}
```

## 5. Rota: Atualizar produto

#### Endpoint
`PUT /api/products/update/{product_id}`

#### Parâmetros
- `{product_id}`: ID do produto a ser atualizado.
- `{name}` `{Opcional}`: Novo nome do produto.
- `{price}` `{Opcional}`: Novo preço do produto.
- `{description}` `{Opcional}`: Novo descrição do produto.
- `{image_url}` `{Opcional}`: Novo URL da imagem do produto.

#### Exemplo de Requisição
```json
{
  "name": "Produto Atualizado",
  "price": 120.75
}
```
    
#### Exemplo de Resposta
```json
{
  "message": "Product updated successfully"
}
```






