export enum AnimalType {
  DOG = 'DOG',
  CAT = 'CAT'
}

export const AnimalTypeMap = {
  [AnimalType.DOG]: {
    key: AnimalType.DOG,
    name: '狗子'
  },
  [AnimalType.CAT]: {
    key: AnimalType.CAT,
    name: '猫'
  }
};
