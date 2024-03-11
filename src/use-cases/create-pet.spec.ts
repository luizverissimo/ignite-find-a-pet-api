import { beforeEach, describe, expect, it } from 'vitest'
import { CreatePetUseCase } from './create-pet'
import { PestsRepository } from '@/repositories/pets-repository'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'

let petsRepository: PestsRepository
let sut: CreatePetUseCase

describe('Create Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new CreatePetUseCase(petsRepository)
  })
  it('should create a pet', async () => {
    const { pet } = await sut.execute({
      name: 'Rodolfinho',
      about: 'alegre e esperto',
      age: 8,
      size: 'SMALL',
      energy: 'LOW',
      independence: 'MEDIUM',
      environment: 'SMALL',
      image: 'https://s3.com/asdasd',
      requirement: 'ração premium',
      organization_id: 'org-1',
    })

    expect(pet).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: 'Rodolfinho',
        about: 'alegre e esperto',
        age: 8,
        size: 'SMALL',
        energy: 'LOW',
        independence: 'MEDIUM',
        environment: 'SMALL',
        image: 'https://s3.com/asdasd',
        requirement: 'ração premium',
        organization_id: 'org-1',
      }),
    )
  })
})
