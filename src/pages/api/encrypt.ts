import { publicEncrypt } from 'crypto';

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAus5uZwjciomLuvoyqQ4D
i07st9ZiFXkw/fO+kZbQX77ix0fa+UVpfr8hhbLreXaaCgfbHaTN+3mmXVENS6Fa
k6S/UI8xGqEo8iKts6DwvfnG5EL1ITdoDZSJhTLT9qTrXDYLedZ3kg1PFwjrFSCg
nnmbKQogyXSHjba1YjYfULHaUotRhRMRgkuQ9bnuTJecQ3+JfkyQViK6bl0iP9JJ
Xp2iJ9YO171EDFuGpCWDFtQObGkFdkNiAEIb5fDI0AlZw+IFTQraJKc2dLgNFXBG
n6zHBIzjBweWHqp0UpoexWV56FfqvW1FNoBQD2MON9KDftB2nVNFQXzaSxGQ8gJJ
kwIDAQAB
-----END PUBLIC KEY-----`;

export default function handler(req: any, res: any) {
    try {
        const { data } = req.body;

        const buffer = Buffer.from(data);
        const encrypted = publicEncrypt(publicKey, buffer);

        res.status(200).json({ encrypted: encrypted.toString('base64') });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error encrypting data' });
    }
}
