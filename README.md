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
  "price": 100.5,
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

## 6. Rota: Obter produto por ID

#### Endpoint

`GET /api/products/{product_id}`

#### Parâmetros

- `{product_id}`: ID do produto.

#### Exemplo de Resposta

```json
{
  "id": 1,
  "name": "Produto Exemplo",
  "price": 100.5,
  "description": "Descrição do produto",
  "image_url": "https://example.com/imagem.jpg"
}
```

## 7. Rota: Obter todos os produtos

#### Endpoint

`GET /api/products`

#### Exemplo de Resposta

```json
[
  {
    "id": 1,
    "name": "Produto Exemplo",
    "price": 100.5,
    "image_url": "https://example.com/imagem.jpg"
  },
  {
    "id": 2,
    "name": "Produto Exemplo 2",
    "price": 150.0,
    "image_url": "https://example.com/imagem2.jpg"
  }
]
```

## 8. Rota: Adicionar item ao carrinho

#### Endpoint

`POST /api/cart/add/{product_id}`

#### Parâmetros

- `{product_id}`: ID do produto a ser adicionado ao carrinho.

#### Exemplo de Resposta

```json
{
  "message": "Item added to the cart successfully"
}
```

## 9. Rota: Remover item do carrinho

#### Endpoint

`DELETE /api/cart/remove/{product_id}`

#### Parâmetros

- `{product_id}`: ID do produto a ser removido do carrinho.

#### Exemplo de Resposta

```json
{
  "message": "Item removed from the cart successfully"
}
```

## 10. Rota: Visualizar itens no carrinho

#### Endpoint

`GET /api/cart`

#### Exemplo de Resposta

```json
[
  {
    "id": 1,
    "user_id": 1,
    "product_id": 1,
    "product_name": "Produto Exemplo",
    "product_price": 100.5
  },
  {
    "id": 2,
    "user_id": 1,
    "product_id": 2,
    "product_name": "Produto Exemplo 2",
    "product_price": 150.0
  }
]
```

## 11. Rota: Finalizar a compra (Checkout)

#### Endpoint

`POST /api/cart/checkout`

#### Requisitos

- Requer que o usuário esteja autenticado.

#### Exemplo de Resposta

```json
{
  "message": "Checkout successful. Cart has been cleared"
}
```
