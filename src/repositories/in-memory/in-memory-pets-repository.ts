import { randomUUID } from 'node:crypto'
import { Pet, Prisma } from '@prisma/client'
import { PestsRepository } from '../pets-repository'

export class InMemoryPetsRepository implements PestsRepository {
  public items: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      about: data.about ?? null,
      age: data.age ?? null,
      size: data.size ?? null,
      energy: data.energy ?? null,
      independence: data.independence ?? null,
      environment: data.environment ?? null,
      image: data.image,
      requirement: data.requirement ?? null,
      created_at: new Date(),
      updated_at: null,
      organization_id: data.organization_id,
    }

    this.items.push(pet)

    return pet
  }
}
