export default ({ env }) => {
  const accessKeyId = env('CLOUDFLARE_ACCESS_KEY_ID');
  const secretAccessKey = env('CLOUDFLARE_SECRET_KEY');
  const endpoint = env('NEXT_PUBLIC_CLOUDFLARE_ENDPOINT');
  const bucket = env('CLOUDFLARE_BUCKET_NAME');
  const publicAccessUrl = env('NEXT_PUBLIC_IMAGE_DOMAIN');

  console.log('=== R2 Configuration ===');
  console.log('Access Key ID:', accessKeyId ? `${accessKeyId.substring(0, 8)}...` : 'MISSING');
  console.log('Secret Key:', secretAccessKey ? `${secretAccessKey.substring(0, 8)}...` : 'MISSING');
  console.log('Endpoint:', endpoint || 'MISSING');
  console.log('Bucket:', bucket || 'MISSING');
  console.log('Public URL:', publicAccessUrl || 'MISSING');
  console.log('Full Public URL:', publicAccessUrl ? `${publicAccessUrl}/` : 'MISSING');
  console.log('========================');
  
  if (!publicAccessUrl) {
    console.warn('⚠️  WARNING: NEXT_PUBLIC_IMAGE_DOMAIN is missing! Files will use private endpoint.');
  }

  return {
    upload: {
      config: {
        provider: 'strapi-provider-cloudflare-r2',
        providerOptions: {
          accessKeyId,
          secretAccessKey,
          endpoint,
          params: {
            Bucket: bucket,
          },
          cloudflarePublicAccessUrl: publicAccessUrl,
          rootPath: 'Maintech',
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};