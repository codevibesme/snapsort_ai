import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { RepoHelpersService } from "./repo.helpers.service";

@Module({
    imports: [
        JwtModule,
    ],
    providers: [RepoHelpersService],
    exports: [RepoHelpersService],
})
class RepoHelpersModule { };

export default RepoHelpersModule;