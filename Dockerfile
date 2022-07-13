
FROM denoland/deno:latest

EXPOSE 5038

WORKDIR /app

USER deno

COPY . .

RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]