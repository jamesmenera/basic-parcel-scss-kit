# React Parcel Example

A minimum viable React app with [Parcel Bundler](https://parceljs.org)

**What's inside?**

* `parcel-bundler`
* `react`
* `react-dom`
* `babel-preset-react-app`
* `SCSS starter file`

> Also [checkout out the TypeScript branch](https://github.com/jaredpalmer/react-parcel-example/tree/typescript)

## Getting started

Clone and install deps

```
git clone git@github.com:jamesmenera/basic-parcel-scss-kit.git
cd react-parcel-example
yarn
yarn start
```

Then open `http://localhost:1234` and edit `index.js` and press save. Parcel
will automagically hot reload you files whenever you make changes.

## Building for Production

```
npm run build
```

This will compile your JS and copy your `index.html` to the `dist` folder which
you can deploy wherever as a good ol' webpage.

## Folder structure and relative paths

Keeping everything in the root directory obviously won't scale past a point.
Parcel is very flexible about folder structure, but there are a few gotchas.

### Moving JS entry

When you do move index.js just make sure to update the `<script>` tag in
`index.html` so that it points to the correct relative path.

For example, if you want to move `index.js` to `src/index.js`, you would need
make the following change to `index.html`:

```
<   <script src="./index.js"></script>
---
>   <script src="./src/index.js"></script>
```

### Moving `index.html`

If you want to move `index.html`, you will need to update your npm scripts in
`package.json` with the new relative path.

## Deployment

Refer to the deployment guide in `create-react-app`, just note that you will
need to account for the fact that Parcel builds out to a `dist` directory, while
CRA builds to a `build` directory. You can make it identical by adding
`--out-dir build` to both `start` and `build` npm tasks in `package.json`.
