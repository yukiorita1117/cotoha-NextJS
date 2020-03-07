# Custom Express Server

Most of the times the default Next server will be enough but sometimes you want to run your own server to customize routes or other kind of the app behavior. Next provides a [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) so you can customize as much as you want.

Because the Next.js server is just a node.js module you can combine it with any other part of the node.js ecosystem. in this case we are using express to build a custom router on top of Next.

初期設定では、ルート「/ b」がリクエストされたときに「pages / a.js」に存在するコンポーネントを提供し、ルート「/ a」がアクセスされたときに「pages / b.js」を提供するサーバーを示しています。これは明らかに非標準のルーティング方法です。このカスタムルーティングが `server.js`内でどのように作成されているかを確認できます。

## How to use

### Using `create-next-app`

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

### server.js について

ここが express のエントリーポイントになります。
`cotoha API` と `青空文庫API` は nextJS の middleware を読み込む前に行うこと。
