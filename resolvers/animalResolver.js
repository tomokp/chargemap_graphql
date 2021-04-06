import Animal from '../models/animal.js';

export default {
  Query: {
    animals: (parent, args) => {
      return Animal.find();
    },
    animal: (parent, args) => {
      return Animal.findById(args.id);
    }
  },
  Mutation: {
    addAnimal: (parent, args) => {
      console.log('animalResolver, addAnimal', args);
      const newAnimal = new Animal(args);
      return newAnimal.save();
    },
    modifyAnimal: (parent, args) => {
      console.log('animalResolver, modifyAnimal', args);
      return Animal.findByIdAndUpdate(args.id, args);
    },
  }
};
