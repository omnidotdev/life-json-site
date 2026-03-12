<div align="center">

# life.json Site

Landing page for the life.json specification

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE.md)

</div>

## Overview

Marketing and documentation site for [life.json](https://life.omni.dev), the portable digital identity specification.

## Features

- **React 19** with TanStack Start/Router
- **Tailwind CSS v4** for styling
- **Nitro v2** for SSR
- **Vite 7** for builds

## Development

```bash
bun i
bun dev
```

## Docker

```bash
docker build -t life-json-site .
docker run -p 3000:3000 life-json-site
```

## License

The code in this repository is licensed under Apache 2.0, &copy; [Omni LLC](https://omni.dev). See [LICENSE.md](LICENSE.md) for more information.
