import { NextApiRequest, NextPageContext } from 'next';
import axios from 'axios';
import { parseCookies } from 'nookies';
/*import { parseCookies } from 'nookies';*/

export function getApi(
    ctx?:
        | Pick<NextPageContext, 'req'>
        | {
              req: NextApiRequest;
          }
        | {
              req: unknown;
          }
        | null
        | undefined
) {
    const { '@SGM:token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:8080/api',
    });

    if (token) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (api.defaults.headers as any).Authorization = `Bearer ${token}`;
    }

    return api;
}
