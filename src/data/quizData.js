// Import season images
import seasonFall from '../assets/images/season-fall.jpg'
import seasonWinter from '../assets/images/season-winter.jpg'
import seasonSpring from '../assets/images/season-spring.jpg'
import seasonSummer from '../assets/images/season-summer.jpg'

// Import location images
import locationOffice from '../assets/images/location-office.jpg'
import locationClub from '../assets/images/location-club.jpg'
import locationEveryday from '../assets/images/location-everyday.jpg'
import locationVacation from '../assets/images/location-vacation.jpg'

// Import place images
import placeCabin from '../assets/images/place-cabin.jpg'
import placeBeach from '../assets/images/place-beach.jpg'
import placeCity from '../assets/images/place-city.jpg'
import placeMuseum from '../assets/images/place-museum.jpg'

// Import scent type images
import typeFruity from '../assets/images/type-fruity.jpg'
import typeFloral from '../assets/images/type-floral.jpg'
import typeWoody from '../assets/images/type-woody.jpg'
import typeAmber from '../assets/images/type-amber.jpg'
import typeFresh from '../assets/images/type-fresh.jpg'
import typeSpicy from '../assets/images/type-spicy.jpg'

// Import fragrance images
import woodCardamom from '../assets/images/wood-cardamom.jpg'
import zestVetiver from '../assets/images/zest-vetiver.jpg'
import gingerMist from '../assets/images/ginger-mist.jpg'
import amberSmoke from '../assets/images/amber-smoke.jpg'
import roseHoney from '../assets/images/rose-honey.jpg'
import latteNectar from '../assets/images/latte-nectar.jpg'
import sangriaSaffron from '../assets/images/sangria-saffron.jpg'
import vanillaCreme from '../assets/images/vanilla-creme.jpg'

// Quiz questions and fragrance associations
export const quizData = [
  {
    id: 1,
    question: "What kind of fragrance are you looking for?",
    answers: [
      {
        text: "Feminine",
        fragrances: ["Latte + Nectar", "Rose + Honey", "Sangria + Saffron", "Vanilla + Crème"]
      },
      {
        text: "Masculine",
        fragrances: ["Amber + Smoke", "Wood + Cardamom", "Zest + Vetiver", "Ginger + Mist"]
      },
      {
        text: "Unisex",
        fragrances: ["Latte + Nectar", "Rose + Honey", "Sangria + Saffron", "Vanilla + Crème", "Amber + Smoke", "Wood + Cardamom", "Zest + Vetiver", "Ginger + Mist"]
      }
    ]
  },
  {
    id: 2,
    question: "What is your favorite season?",
    answers: [
      {
        text: "Fall",
        image: seasonFall,
        fragrances: ["Latte + Nectar", "Amber + Smoke"]
      },
      {
        text: "Winter",
        image: seasonWinter,
        fragrances: ["Vanilla + Crème", "Wood + Cardamom"]
      },
      {
        text: "Spring",
        image: seasonSpring,
        fragrances: ["Rose + Honey", "Zest + Vetiver"]
      },
      {
        text: "Summer",
        image: seasonSummer,
        fragrances: ["Sangria + Saffron", "Ginger + Mist"]
      }
    ]
  },
  {
    id: 3,
    question: "When will you wear this scent?",
    answers: [
      {
        text: "At the office",
        image: locationOffice,
        fragrances: ["Vanilla + Crème", "Zest + Vetiver"]
      },
      {
        text: "As my everyday signature scent",
        image: locationEveryday,
        fragrances: ["Latte + Nectar", "Amber + Smoke"]
      },
      {
        text: "For a night out",
        image: locationClub,
        fragrances: ["Sangria + Saffron", "Wood + Cardamom"]
      },
      {
        text: "On vacation",
        image: locationVacation,
        fragrances: ["Rose + Honey", "Ginger + Mist"]
      }
    ]
  },
  {
    id: 4,
    question: "If you could go anywhere right now, where would you go?",
    answers: [
      {
        text: "Cabin in the mountains",
        image: placeCabin,
        fragrances: ["Amber + Smoke", "Wood + Cardamom", "Vanilla + Crème", "Latte + Nectar"]
      },
      {
        text: "Cabana by the beach",
        image: placeBeach,
        fragrances: ["Sangria + Saffron", "Rose + Honey", "Ginger + Mist", "Zest + Vetiver"]
      },
      {
        text: "A new city",
        image: placeCity,
        fragrances: ["Amber + Smoke", "Wood + Cardamom", "Sangria + Saffron", "Latte + Nectar"]
      },
      {
        text: "Art museum",
        image: placeMuseum,
        fragrances: ["Vanilla + Crème", "Rose + Honey", "Ginger + Mist", "Wood + Cardamom"]
      }
    ]
  },
  {
    id: 5,
    question: "What type of scent are you most drawn to?",
    answers: [
      {
        text: "Fruity",
        image: typeFruity,
        fragrances: ["Sangria + Saffron", "Ginger + Mist"]
      },
      {
        text: "Floral",
        image: typeFloral,
        fragrances: ["Vanilla + Crème", "Rose + Honey"]
      },
      {
        text: "Woody",
        image: typeWoody,
        fragrances: ["Amber + Smoke", "Wood + Cardamom"]
      },
      {
        text: "Amber",
        image: typeAmber,
        fragrances: ["Latte + Nectar", "Amber + Smoke"]
      },
      {
        text: "Fresh",
        image: typeFresh,
        fragrances: ["Ginger + Mist", "Zest + Vetiver"]
      },
      {
        text: "Spicy",
        image: typeSpicy,
        fragrances: ["Sangria + Saffron", "Wood + Cardamom"]
      }
    ]
  }
]

// Fragrance options with descriptions
export const fragranceData = {
  "Wood + Cardamom": {
    description: "A sophisticated blend with warm, spicy cardamom notes",
    image: woodCardamom
  },
  "Zest + Vetiver": {
    description: "Fresh citrus zest combined with earthy vetiver roots",
    image: zestVetiver
  },
  "Ginger + Mist": {
    description: "Spicy ginger with cool, misty undertones",
    image: gingerMist
  },
  "Amber + Smoke": {
    description: "Rich amber warmth with mysterious smoky notes",
    image: amberSmoke
  },
  "Rose + Honey": {
    description: "Delicate rose petals with sweet, golden honey",
    image: roseHoney
  },
  "Latte + Nectar": {
    description: "Creamy latte with floral nectar sweetness",
    image: latteNectar
  },
  "Sangria + Saffron": {
    description: "Fruity sangria notes with luxurious saffron spice",
    image: sangriaSaffron
  },
  "Vanilla + Crème": {
    description: "Smooth vanilla with rich, creamy notes",
    image: vanillaCreme
  }
}

// Calculate top fragrances based on answers
export const calculateTopFragrances = (selectedAnswers) => {
  const fragranceCounts = {}
  
  selectedAnswers.forEach(answerId => {
    let selectedQuestion = null
    let selectedAnswer = null
    
    for (const question of quizData) {
      const answer = question.answers.find(a => a.text === answerId)
      if (answer) {
        selectedQuestion = question
        selectedAnswer = answer
        break
      }
    }
    
    if (selectedAnswer) {
      selectedAnswer.fragrances.forEach(fragrance => {
        fragranceCounts[fragrance] = (fragranceCounts[fragrance] || 0) + 1
      })
    }
  })
  
  // Sort by count and return top 2
  return Object.entries(fragranceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([fragrance]) => fragrance)
}
