/* Stage 24 — Resolver example for GQL op: ClientNotes
import { Resolver, Query } from '@nestjs/graphql';
@Resolver()
export class ClientNotesResolver {
  @Query(()=>String, { name: 'ClientNotes' })
  ClientNotes(): string { return 'parity'; }
}
*/
