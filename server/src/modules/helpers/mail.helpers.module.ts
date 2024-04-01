import { Module } from "@nestjs/common";
import { MailHelpersService } from "./mail.helpers.service";

@Module({
    providers: [MailHelpersService],
    exports: [MailHelpersService],
})

class MailHelpersModule { };
export default MailHelpersModule;