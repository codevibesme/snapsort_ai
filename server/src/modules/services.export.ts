import { RepoHelpersService } from './helpers/repo.helpers.service';
import { MiscHelpersService } from './helpers/misc.helpers.service';
import { JwtHelpersService } from './helpers/jwt.helpers.service';
import { MailHelpersService } from './helpers/mail.helpers.service';
import { UsersService } from './users/users.service';

export const services = [
    RepoHelpersService,
    MiscHelpersService,
    JwtHelpersService,
    MailHelpersService,
    UsersService
];
