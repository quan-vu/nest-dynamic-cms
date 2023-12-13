import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class NestDynamicCmsService {
  getSchemas(): object {
    return {
      message: 'Return all schemas',
      data: [
        {
          name: 'categories',
          description: 'The categories table',
          fields: [
            {
              name: 'title',
              type: 'string',
              description: 'Title',
            },
            {
              name: 'content',
              type: 'string',
              description: 'Content',
            },
          ],
        },
        {
          name: 'posts',
          description: 'The posts table',
          fields: [
            {
              name: 'title',
              type: 'string',
              description: 'Title',
            },
            {
              name: 'content',
              type: 'string',
              description: 'Content',
            },
          ],
        },
      ],
    };
  }
}
