import { PestsRepository } from '@/repositories/pets-repository'
import { DogEnvironment, DogLevel, DogSize, Pet } from '@prisma/client'

interface PetsUseCaseRequest {
  name: string
  about: string | null
  age: number | null
  size: DogSize | null
  energy: DogLevel | null
  independence: DogLevel | null
  environment: DogEnvironment | null
  image: string
  requirement: string | null
  organization_id: string
}

interface PetsUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private petRepository: PestsRepository) {}

  async execute({
    name,
    about,
    age,
    size,
    energy,
    independence,
    environment,
    image,
    requirement,
    organization_id,
  }: PetsUseCaseRequest): Promise<PetsUseCaseResponse> {
    const pet = await this.petRepository.create({
      name,
      about,
      age,
      size,
      energy,
      independence,
      environment,
      image,
      requirement,
      organization_id,
    })

    return { pet }
  }
}
