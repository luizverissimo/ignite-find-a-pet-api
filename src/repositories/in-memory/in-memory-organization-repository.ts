import { randomUUID } from 'node:crypto'
import { Organization, Prisma } from '@prisma/client'
import { OrganizationsRepository } from '../organizations-repository'

export class InMemoryOrganizationsRepository
  implements OrganizationsRepository
{
  public items: Organization[] = []

  async create(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    const organization = {
      id: data.id ?? randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      cep: data.cep,
      address: data.address,
      latitude: data.latitude ?? null,
      longitude: data.longitude ?? null,
      contact: data.contact ?? null,
    }

    this.items.push(organization)

    return organization
  }
}
