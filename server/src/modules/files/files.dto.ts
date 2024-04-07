import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { helper } from '../helpers/misc.helpers.service';

export class FilesDto { };

export class UploadMultipleFilesDto {
    @ApiProperty(helper.getApiProperty('files'))
    @IsArray()
    @IsNotEmpty()
    files: any[];
};