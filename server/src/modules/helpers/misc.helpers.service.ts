import { Injectable } from '@nestjs/common';

@Injectable()
export class MiscHelpersService {
  constructor() {}

  getApiProperty(propertyName: string): Object {
    interface ApiProperties {
      [key: string]: Object;
    }

    const apiProperties: ApiProperties = {
      // Users
      userId: {
        description: 'User Id',
        example: '1',
      },

      userName: {
        description: 'Name',
        example: 'Bipasha Roy',
      },

      username: {
        description: 'Username',
        example: 'beasroy',
      },

      email: {
        description: 'Email',
        example: 'bipasha@codevibes.com',
      },

      password: {
        description: 'Password',
        example: '#B@taSha20O2',
      },

      phone: {
        description: 'Phone no.',
        example: '9123784891',
      },

      role: {
        description: 'Role',
        example: 'admin / user',
      },

      subscribed: {
        description: 'Subscription Status',
        example: true,
      },

      verified: {
        description: 'Verification Status',
        example: true,
      },
    };

    return apiProperties[propertyName];
  }
}

export const helper = new MiscHelpersService();
