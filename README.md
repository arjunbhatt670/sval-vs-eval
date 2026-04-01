# sval-vs-eval

A small browser demo that runs the same snippets through **`eval`** and **[Sval](https://github.com/Siubaak/sval)** (a sandboxed JS interpreter) and compares results, errors, and timing.

## Setup

```bash
pnpm install
```

## Run

```bash
pnpm start
```

Opens the Parcel dev server; open the printed URL and check the **browser console** for output. Each test prints `eval` vs `sval` side by side.

## Build

```bash
pnpm build
```

## Tests

Cases live in [`src/cases.js`](src/cases.js). They currently focus on **strict vs sloppy mode** behavior (e.g. `this` in functions, accidental globals) so you can see how native `eval` and Sval differ in isolation and semantics.

## Stack

- [Parcel](https://parceljs.org/) — bundling and dev server
- [sval](https://www.npmjs.com/package/sval) — interpreter with `sandBox: true` in [`src/index.mjs`](src/index.mjs)
