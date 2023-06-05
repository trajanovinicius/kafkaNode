# kafkaNode
Desenvolvendo um micro-serviço com node e kafka.

- Utilizando Kafka;
- Utilizando Node;

## Aplicações

- API principal; 
- Geração de certificado;

## Fluxo 

- Api principal envia uma mensagem pro serviço de certificado para gerar certificado;
- Micro-serviço de certificado devolve uma resposta (síncrona/assíncrona);

Se conseguir síncrona/assíncrona: 

- Receber uma respota assíncrona de quando o e-mail com o certificado foi enviado;

## O que sabemos?

- REST (latência);
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, paypal, Netflix;