import RepoHelpersModule from './helpers/repo.helpers.module';
import MiscHelpersModule from './helpers/misc.helpers.module';
import JWTHelpersModule from './helpers/jwt.helpers.module';
import MailHelpersModule from './helpers/mail.helpers.module';
import UsersModule from './users/users.module';

export const modules = [
    RepoHelpersModule,
    MiscHelpersModule,
    JWTHelpersModule,
    MailHelpersModule,
    UsersModule,
];
