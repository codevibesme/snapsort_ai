import RepoHelpersModule from './helpers/repo.helpers.module';
import MiscHelpersModule from './helpers/misc.helpers.module';
import JWTHelpersModule from './helpers/jwt.helpers.module';
import MailHelpersModule from './helpers/mail.helpers.module';
import UsersModule from './users/users.module';
import MinioHelpersModule from './helpers/minio.helpers.module';
import FilesModule from './files/files.module';

export const modules = [
    RepoHelpersModule,
    MiscHelpersModule,
    JWTHelpersModule,
    MailHelpersModule,
    MinioHelpersModule,
    FilesModule,
    UsersModule,
];
