# NestJS Dynamic CMS

## Description

This is a NestJS module that provides a dynamic CMS for your application. It allows you to create and manage Schema, Content, and Content Type and data.

## Installation

```bash
$ npm install --save @ielts/nest-dynamic-cms
```

## Usage

### Import module

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// Import NestDynamicCmsModule
import { NestDynamicCmsModule } from 'nest-dynamic-cms';
import { NestDynamicCmsController } from 'nest-dynamic-cms';

@Module({
  imports: [
    NestDynamicCmsModule,
  ],
  controllers: [AppController, NestDynamicCmsController],
  providers: [AppService],
})
export class AppModule {}
```

## API

Create a schema

```bash
curl --location --request POST 'http://localhost:3000/cms/schema' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "User",
    "fields": [
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "age",
            "type": "number"
        },
        {
            "name": "address",
            "type": "string"
        }
    ]
}'

# Response
{
    "name": "User",
    "fields": [
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "age",
            "type": "number"
        },
        {
            "name": "address",
            "type": "string"
        }
    ]
}
```

Create a content type

```bash
curl --location --request POST 'http://localhost:3000/cms/content-type' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "User",
    "schema": "User"
}'

# Response
{
    "name": "User",
    "schema": "User"
}
```

Create a content

```bash
curl --location --request POST 'http://localhost:3000/cms/content' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "User",
    "data": {
        "name": "John",
        "age": 20,
        "address": "Hanoi"
    }
}'

# Response
{
    "type": "User",
    "data": {
        "name": "John",
        "age": 20,
        "address": "Hanoi"
    }
}
```

Get all content

```bash
curl --location --request GET 'http://localhost:3000/cms/content?resource=User&query={"name":"John", limit: 10, offset: 0}'

# Response
{
    "total": 1,
    "data": [
        {
            "type": "User",
            "data": {
                "name": "John",
                "age": 20,
                "address": "Hanoi"
            }
        }
    ]
}
```

Get content by id

```bash
curl --location --request GET 'http://localhost:3000/cms/content/?resource=User&id=1'

# Response
{
    "type": "User",
    "data": {
        "name": "John",
        "age": 20,
        "address": "Hanoi"
    }
}
```

Update content

```bash
curl --location --request PUT 'http://localhost:3000/cms/content?resource=User&id=1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "name": "John",
        "age": 20,
        "address": "Hanoi"
    }
}'
```

Delete content

```bash
curl --location --request DELETE 'http://localhost:3000/cms/content?resource=User&id=1'

# Response
{
    "type": "User",
    "data": {
        "name": "John",
        "age": 20,
        "address": "Hanoi"
    }
}
```

## License

Nest is [MIT licensed](LICENSE).
