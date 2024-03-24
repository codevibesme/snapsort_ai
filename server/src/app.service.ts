import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcomeMsg(): string {
    return `
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Snapsort AI - Company Server</title>
          <style>
            body {
              display: flex;
              align-items: center;
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f8f8f8;
            }
      
            .container {
              max-width: 800px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
              color: #333;
              text-align: center;
            }
    
            p {
              color: #666;
              line-height: 1.6;
            }
    
            .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #007bff;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
            }
    
            .button:hover {
              background-color: #0056b3;
            }
          </style>
      </head>
      
      <body>
        <div class="container">
          <h1>Welcome to Snapsort AI Company Server</h1>
          <p>Snapsort AI provides a custom bucket for developers to store images, retrieve links, and utilize AI-generated content for images, such as descriptions.</p>
          <p>You can start by accessing the following features:</p>
          <ul>
            <li>Upload images to your custom bucket</li>
            <li>Retrieve links to the stored images</li>
            <li>Request AI-generated descriptions for images</li>
          </ul>
        </div>
      </body>
    </html>
    `;
  }
}
