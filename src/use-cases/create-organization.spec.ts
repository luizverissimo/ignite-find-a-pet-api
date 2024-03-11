import { beforeEach, describe, expect, it } from 'vitest'
import { OrganizationsRepository } from '@/repositories/organizations-repository'
import { CreateOrganizationUseCase } from './create-organization'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organization-repository'

let organizationRepository: OrganizationsRepository
let sut: CreateOrganizationUseCase

describe('Create Organization Use Case', () => {
  beforeEach(() => {
    organizationRepository = new InMemoryOrganizationsRepository()
    sut = new CreateOrganizationUseCase(organizationRepository)
  })
  it('should organization a pet', async () => {
    const { organization } = await sut.execute({
      name: 'Amigo bicho',
      email: 'org@org.com',
      password: '123456',
      cep: '88820-000',
      address: 'R: X',
      latitude: -27.0610928,
      longitude: -49.5229501,
      contact: '48999461751',
    })

    expect(organization).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: 'Amigo bicho',
        email: 'org@org.com',
        password: expect.any(String),
        cep: '88820-000',
        address: 'R: X',
        latitude: -27.0610928,
        longitude: -49.5229501,
        contact: '48999461751',
      }),
    )
  })
})
