# Typescript
tsc 터미널에 치게 되면 tsconfig.json을 읽어서 컴파일 해준다.
index.js와 index.js.map이 생성된다.

package.json에서 명령어로 등록해서 사용하는 방법이다.
```json
{
    "start": "node index.js",
    "prestart": "tsc"
}
```

## ts-watch 사용해보기
```terminal
yarn add -D ts-watch
```

```json
{
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
}
```
