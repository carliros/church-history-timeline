# Church timeline

Built for the Church History course

## Helps
https://visjs.github.io/vis-timeline/docs/timeline/

## Examples
https://visjs.github.io/vis-timeline/examples/timeline/styling/customCss.html

## How to start

```
yarn start
```

## How to build

```
yarn install
yarn build
```

And then copy all content from `dist/` into `docs/` 
and replace all paths that start with `"/` to `"./` to make it work in git pages.

## How to prepare images

```
mogrify -resize 32x32 henry.jpg
```