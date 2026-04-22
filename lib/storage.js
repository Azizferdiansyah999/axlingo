import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';

const R2_ENDPOINT = process.env.R2_ENDPOINT;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const s3Client = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

/**
 * Cek apakah file sudah ada di R2
 */
export async function getCachedAudioUrl(fileName) {
  if (!R2_BUCKET_NAME) return null;
  
  try {
    const command = new HeadObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: `${fileName}.mp3`,
    });
    await s3Client.send(command);
    return `${R2_PUBLIC_URL}/${fileName}.mp3`;
  } catch (error) {
    return null;
  }
}

/**
 * Upload buffer audio ke R2
 */
export async function uploadAudioToR2(fileName, buffer) {
  if (!R2_BUCKET_NAME) return null;

  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: `${fileName}.mp3`,
    Body: buffer,
    ContentType: 'audio/mpeg',
  });

  try {
    await s3Client.send(command);
    return `${R2_PUBLIC_URL}/${fileName}.mp3`;
  } catch (error) {
    console.error('Error uploading to R2:', error);
    return null;
  }
}

