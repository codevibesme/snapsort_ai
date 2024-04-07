import { Module } from "@nestjs/common";

import { MinioHelpersService } from "./minio.helpers.service";

@Module({
    providers: [MinioHelpersService],
    exports: [MinioHelpersService]
})
export default class MinioHelpersModule { };