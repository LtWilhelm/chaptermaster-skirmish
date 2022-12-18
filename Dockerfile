
FROM denoland/deno:1.29.1

EXPOSE 5038

WORKDIR /app

USER deno

COPY . .

RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]