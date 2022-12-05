
# Table of contents

- [Overview](#overview)
- [Technologies](#technologies)
- [API Reference](#api-reference)
- [Run Locally](#run-locally)
- [Demo](#demo)

# Overview

Youtube clone consists of 5 components: Navbar, aside, body, search input, watch video.

# Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

# API Reference

#### Get home page videos

```http
  GET /search?maxResults=20&q=""&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `isNext`  | `string` | **Required**. isNext  |
| `pageToken` | `boolean`| **Required**. next Page Token |

#### Get recommended videos 

```http
  GET /activities?key=${API_KEY}&channelId=${channelId}&part=snippet,
  contentDetails&maxResults=20&type=video&videoId=${videoId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `channelId`| `number`| **Required**. channelId |
| `videoId`| `string`  | **Required**. videoId |

#### Get search page videos

```http
  GET videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`| `string`| **Required**. id |

#### Get channel

```http
  GET /channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `channelId`| `string`| **Required**. channelId |

# Run Locally

Clone the project

```bash
  git clone git@github.com:Rokiis1/Youtube-clone.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# Demo

[Host Link on vercel](https://youtube-clone-rokiis1.vercel.app/)

