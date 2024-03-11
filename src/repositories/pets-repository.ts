import { Pet, Prisma } from '@prisma/client'

export interface PestsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
}
