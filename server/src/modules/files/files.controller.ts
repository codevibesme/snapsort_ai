import { BadRequestException, Controller, Get, Param, Post, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiConsumes, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { MinioHelpersService } from '../helpers/minio.helpers.service';
import { Request, Response } from 'express';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadMultipleFilesDto } from './files.dto';

@Controller('files')
@ApiTags('files')
export default class FilesController {
    constructor(
        private readonly minioHelpersService: MinioHelpersService,
    ) { }

    @Get('/:name')
    @ApiOperation({ description: 'Gets the download link for a file' })
    @ApiParam({ name: 'name', type: String, description: 'The name of the file to download' })
    @ApiOkResponse({ description: 'Download url generated successfully' })
    @ApiNotFoundResponse({ description: 'File not found' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    async getFile(@Req() request: Request, @Res() response: Response, @Param('name') name: string) {
        if (!name) {
            throw new BadRequestException('File name is required');
        }

        try {
            const fileUrl = await this.minioHelpersService.getFileUrl(name);
            return response.status(200).send(fileUrl);
        } catch (error) {
            throw error;
        }
    }

    @Post()
    @ApiOperation({ description: 'Upload files' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: UploadMultipleFilesDto })
    @ApiOkResponse({ description: 'Files uploaded successfully' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    @UseInterceptors(FilesInterceptor('files'))
    async uploadFile(@Req() request: Request, @Res() response: Response, @UploadedFiles() files: Express.Multer.File[]) {
        if (!files?.length) {
            throw new BadRequestException('File is required');
        }

        try {
            await this.minioHelpersService.uploadManyFiles(files);
            return response.status(200).send('Files uploaded successfully');
        } catch (error) {
            throw error;
        }
    }
};
