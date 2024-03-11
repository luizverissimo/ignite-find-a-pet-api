import { OrganizationsRepository } from '@/repositories/organizations-repository'
import { Organization } from '@prisma/client'
import { hash } from 'bcryptjs'

interface CreateOrganizationUseCaseRequest {
  name: string
  email: string
  password: string
  cep: string | null
  address: string | null
  latitude: number
  longitude: number
  contact: string
}

interface CreateOrganizationUseCaseResponse {
  organization: Organization
}

export class CreateOrganizationUseCase {
  constructor(private organizationRepository: OrganizationsRepository) {}
  async execute({
    name,
    email,
    password,
    cep,
    address,
    latitude,
    longitude,
    contact,
  }: CreateOrganizationUseCaseRequest): Promise<CreateOrganizationUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const organization = await this.organizationRepository.create({
      name,
      email,
      password: password_hash,
      cep,
      address,
      latitude,
      longitude,
      contact,
    })

    return { organization }
  }
}
