// Datos de ejemplo para subir a Firestore
// Este archivo contiene productos de muestra que puedes usar para poblar tu base de datos

export const sampleProducts = [
  // Suplementos
  {
    name: "Citrato de Magnesio Star Nutrition",
    description: "Suplemento de magnesio en cápsulas para mejorar la función muscular y nerviosa.",
    price: 35000,
    stock: 15,
    category: "Suplementos",
    image: "magnesio-star-nutrition.jpg"
  },
  {
    name: "Creatina Monohidratada",
    description: "Creatina monohidratada en polvo para aumentar la fuerza y el rendimiento en el entrenamiento.",
    price: 55000,
    stock: 18,
    category: "Suplementos",
    image: "creatine-monohydrate-star-nutrition.jpg"
  },
  {
    name: "Whey Protein Star Nutrition",
    description: "Proteína de suero en polvo para apoyar el crecimiento y la recuperación muscular.",
    price: 75000,
    stock: 12,
    category: "Suplementos",
    image: "whey-protein-star-nutrition.jpg"
  },
  {
    name: "Pre Entreno Star Nutrition",
    description: "Pre entreno en polvo con cafeína y aminoácidos para mejorar la energía y el enfoque.",
    price: 62000,
    stock: 16,
    category: "Suplementos",
    image: "pre-entreno-star-nutrition.jpg"
  },
  {
    name: "omega 3 Natier",
    description: "Suplemento de omega-3 en cápsulas para la salud cardiovascular y cerebral.",
    price: 40000,
    stock: 15,
    category: "Suplementos",
    image: "omega3-natier.jpg"
  },

  // Gym
  {
    name: "cinturón de levantamiento Rogue",
    description: "Cinturón de levantamiento de pesas Rogue para soporte lumbar durante entrenamientos intensos.",
    price: 215000,
    stock: 11,
    category: "Gym",
    image: "Rogue-Lifting-Belt.jpg"
  },
  {
    name: "strap Harbinger",
    description: "Strap de levantamiento Harbinger con acolchado y ajuste seguro para mayor comodidad.",
    price: 30000,
    stock: 30,
    category: "Gym",
    image: "Straps-Harbinger.jpg"
  },
  {
    name: "Rodilleras Rehband",
    description: "Rodilleras Rehband Strength para soporte y protección durante levantamientos pesados.",
    price: 135000,
    stock: 7,
    category: "Gym",
    image: "Rodilleras-Rehband-Strength.jpg"
  },
  {
    name: "Bandas de resistencia Rogue",
    description: "Bandas de resistencia Rogue Monster Bands para entrenamiento de fuerza y movilidad.",
    price: 97000,
    stock: 20,
    category: "Gym",
    image: "Rogue-MonsterBands.jpg"
  },
  {
    name: "rodillo de espuma TriggerPoint",
    description: "Rodillo de espuma TriggerPoint GRID para liberación miofascial y recuperación muscular.",
    price: 108000,
    stock: 9,
    category: "Gym",
    image: "TriggerPoint-FoamRoller.jpg"
  },

  // Boxeo
  {
    name: "Cabezal Everlast",
    description: "Cabezal de boxeo Everlast con protección completa y ajuste seguro.",
    price: 75000,
    stock: 13,
    category: "Boxeo",
    image: "Cabezal-Everlast.jpg"
  },
  {
    name: "zapatos de Boxeo Venum",
    description: "Zapatos de boxeo Venum con suela antideslizante y soporte para el tobillo.",
    price: 175000,
    stock: 10,
    category: "Boxeo",
    image: "Zapatos-de-boxeo-venum.jpg"
  },
  {
    name: "Guantes de Boxeo Venum",
    description: "Guantes de boxeo Venum con acolchado de alta densidad y diseño ergonómico.",
    price: 140000,
    stock: 12,
    category: "Boxeo",
    image: "Guantes-Boxeo-Venum.jpg"
  },
  {
    name: "Bucal Everlast",
    description: "Bucal protector Everlast simple para una protección óptima durante el combate.",
    price: 21000,
    stock: 18,
    category: "Boxeo",
    image: "Bucal-EVERLAST.jpg"
  },
  {
    name: "Vendas Venum",
    description: "Vendas de boxeo Venum elásticas para soporte y protección de las manos.",
    price: 25000,
    stock: 25,
    category: "Boxeo",
    image: "Vendas-Venum.jpg"
  },

]

export const uploadSampleData = async (db) => {
  try {
    const { collection, addDoc } = await import('firebase/firestore')
    
    for (const product of sampleProducts) {
      await addDoc(collection(db, 'products'), product)
      console.log(`Producto "${product.name}" agregado exitosamente`)
    }
    console.log('Todos los productos de ejemplo fueron agregados a Firestore')
  } catch (error) {
    console.error('Error subiendo productos:', error)
  }
}