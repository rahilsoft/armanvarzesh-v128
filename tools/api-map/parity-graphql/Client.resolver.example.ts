/* Stage 24 — Resolver example for GQL op: Client
import { Resolver, Query } from '@nestjs/graphql';
@Resolver()
export class ClientResolver {
  @Query(()=>String, { name: 'Client' })
  Client(): string { return 'parity'; }
}
*/
