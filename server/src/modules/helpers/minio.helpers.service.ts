import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import * as Minio from 'minio';

@Injectable()
export class MinioHelpersService {
    private minioClient: Minio.Client;
    private bucketName: string;

    constructor() {
        this.minioClient = new Minio.Client({
            endPoint: process.env.MINIO_ENDPOINT,
            port: parseInt(process.env.MINIO_PORT),
            useSSL: false,
            accessKey: process.env.MINIO_ACCESS_KEY,
            secretKey: process.env.MINIO_SECRET_KEY,
        });
        this.bucketName = process.env.MINIO_BUCKET_NAME;
    }

    async createBucketIfNotExists() {
        const bucketExists = await this.minioClient.bucketExists(this.bucketName);
        if (!bucketExists) {
            await this.minioClient.makeBucket(this.bucketName, 'us-east-1');
        }
    }

    async uploadFile(file: Express.Multer.File) {
        const fileName = `${file.originalname}`;

        await this.createBucketIfNotExists();

        const fileInfo = await this.minioClient.putObject(this.bucketName, fileName, file.buffer, file.size);
        if (!fileInfo) {
            throw new BadRequestException('Error uploading file');
        }
    }

    async uploadManyFiles(files: Express.Multer.File[]) {
        await this.createBucketIfNotExists();

        for (const file of files) {
            await this.uploadFile(file);
        }
    }

    async getFileUrl(fileName: string) {
        const downloadUrl = await this.minioClient.presignedUrl('GET', this.bucketName, fileName);
        if (!downloadUrl) {
            throw new NotFoundException('File not found');
        }

        return downloadUrl;
    }

    async deleteFile(fileName: string) {
        await this.minioClient.removeObject(this.bucketName, fileName);
    }
};