import { Injectable } from '@nestjs/common';

@Injectable()
export class MiscHelpersService {
  constructor() { }

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

      name: {
        description: 'Name',
        example: 'Bipasha Roy',
      },

      username: {
        description: 'Username',
        example: 'beasroy',
      },

      email: {
        description: 'Email',
        example: 'bipasha1413@gmail.com',
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
        example: 'user',
      },

      isSubscribed: {
        description: 'Subscription Status',
        example: false,
      },

      isVerified: {
        description: 'Verification Status',
        example: false,
      },
    };

    return apiProperties[propertyName];
  }
}

export const helper = new MiscHelpersService();
