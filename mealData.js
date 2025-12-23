// Indian Meal Database with nutritional information
const mealDatabase = {
    vegetarian: {
        breakfast: [
            { 
                name: "Poha", 
                description: "Flattened rice cooked with onions, peas, and peanuts",
                calories: 320, 
                protein: 8, 
                carbs: 60, 
                fats: 10, 
                time: "8:00 AM", 
                ingredients: ["Poha", "Onion", "Peas", "Peanuts", "Turmeric", "Mustard seeds", "Lemon"],
                healthTags: ["light", "gluten-free", "easy-digest"],
                prepTime: "15 mins"
            },
            { 
                name: "Idli with Sambar", 
                description: "Steamed rice cakes served with lentil soup",
                calories: 280, 
                protein: 12, 
                carbs: 55, 
                fats: 5, 
                time: "8:00 AM", 
                ingredients: ["Idli batter", "Toor dal", "Vegetables", "Tamarind", "Sambar powder"],
                healthTags: ["diabetes-friendly", "fermented", "probiotic"],
                prepTime: "25 mins"
            },
            { 
                name: "Upma", 
                description: "Semolina cooked with vegetables and spices",
                calories: 350, 
                protein: 10, 
                carbs: 65, 
                fats: 12, 
                time: "8:00 AM", 
                ingredients: ["Semolina", "Onion", "Carrot", "Peas", "Mustard seeds", "Curry leaves"],
                healthTags: ["quick", "filling"],
                prepTime: "20 mins"
            },
            { 
                name: "Besan Chilla", 
                calories: 300, 
                protein: 18, 
                carbs: 35, 
                fats: 15, 
                time: "8:00 AM", 
                description: "Gram flour pancakes with vegetables",
                ingredients: ["Besan (gram flour)", "Onion", "Tomato", "Spinach", "Spices"],
                healthTags: ["high-protein", "gluten-free", "low-carb"],
                prepTime: "15 mins"
            },
            { 
                name: "Masala Dosa", 
                description: "Fermented rice crepe with potato filling",
                calories: 380, 
                protein: 9, 
                carbs: 70, 
                fats: 12, 
                time: "8:00 AM", 
                ingredients: ["Dosa batter", "Potatoes", "Onion", "Mustard seeds", "Curry leaves"],
                healthTags: ["fermented", "probiotic"],
                prepTime: "30 mins"
            }
        ],
        lunch: [
            { 
                name: "Roti with Sabzi", 
                description: "Whole wheat flatbread with vegetable curry",
                calories: 450, 
                protein: 15, 
                carbs: 75, 
                fats: 12, 
                time: "1:00 PM", 
                ingredients: ["Whole wheat flour", "Mixed vegetables", "Onion", "Tomato", "Indian spices"],
                healthTags: ["balanced", "high-fiber", "traditional"],
                prepTime: "30 mins"
            },
            { 
                name: "Dal Rice with Salad", 
                description: "Lentil curry with rice and fresh salad",
                calories: 480, 
                protein: 22, 
                carbs: 85, 
                fats: 8, 
                time: "1:00 PM", 
                ingredients: ["Toor dal", "Rice", "Cucumber", "Tomato", "Onion", "Lemon"],
                healthTags: ["high-protein", "complete-protein", "comfort-food"],
                prepTime: "35 mins"
            },
            { 
                name: "Rajma Chawal", 
                description: "Kidney beans curry with rice",
                calories: 520, 
                protein: 25, 
                carbs: 90, 
                fats: 10, 
                time: "1:00 PM", 
                ingredients: ["Rajma (kidney beans)", "Rice", "Onion", "Tomato", "Ginger-garlic paste"],
                healthTags: ["high-protein", "high-fiber", "heart-healthy"],
                prepTime: "40 mins"
            },
            { 
                name: "Vegetable Pulao with Raita", 
                description: "Fragrant rice cooked with vegetables and yogurt side",
                calories: 460, 
                protein: 14, 
                carbs: 85, 
                fats: 12, 
                time: "1:00 PM", 
                ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Cumin", "Ghee"],
                healthTags: ["balanced", "digestive"],
                prepTime: "30 mins"
            }
        ],
        dinner: [
            { 
                name: "Khichdi with Kadhi", 
                description: "Rice and lentil porridge with yogurt curry",
                calories: 380, 
                protein: 20, 
                carbs: 65, 
                fats: 10, 
                time: "7:00 PM", 
                ingredients: ["Rice", "Moong dal", "Yogurt", "Besan", "Turmeric"],
                healthTags: ["light", "easy-digest", "ayurvedic"],
                prepTime: "25 mins"
            },
            { 
                name: "Chapati with Palak Paneer", 
                description: "Flatbread with spinach and cottage cheese curry",
                calories: 420, 
                protein: 25, 
                carbs: 45, 
                fats: 18, 
                time: "7:00 PM", 
                ingredients: ["Whole wheat flour", "Paneer", "Spinach", "Onion", "Tomato", "Cream"],
                healthTags: ["high-protein", "iron-rich", "calcium-rich"],
                prepTime: "30 mins"
            },
            { 
                name: "Vegetable Sambar with Rice", 
                calories: 400, 
                protein: 18, 
                carbs: 75, 
                fats: 8, 
                time: "7:00 PM", 
                description: "Lentil and vegetable stew with rice",
                ingredients: ["Toor dal", "Drumsticks", "Pumpkin", "Tamarind", "Sambar powder"],
                healthTags: ["high-protein", "antioxidant-rich"],
                prepTime: "35 mins"
            },
            { 
                name: "Methi Paratha with Dahi", 
                description: "Fenugreek flatbread with yogurt",
                calories: 380, 
                protein: 16, 
                carbs: 60, 
                fats: 15, 
                time: "7:00 PM", 
                ingredients: ["Whole wheat flour", "Fenugreek leaves", "Yogurt", "Spices"],
                healthTags: ["high-fiber", "diabetes-friendly", "probiotic"],
                prepTime: "25 mins"
            }
        ],
        snacks: [
            { 
                name: "Fruit Chaat", 
                description: "Seasonal fruits with chaat masala",
                calories: 150, 
                protein: 3, 
                carbs: 35, 
                fats: 2, 
                time: "4:00 PM", 
                ingredients: ["Apple", "Banana", "Pomegranate", "Chaat masala", "Lemon"],
                healthTags: ["vitamin-rich", "antioxidant", "refreshing"],
                prepTime: "10 mins"
            },
            { 
                name: "Roasted Makhana", 
                description: "Fox nuts roasted with ghee and spices",
                calories: 120, 
                protein: 6, 
                carbs: 20, 
                fats: 4, 
                time: "4:00 PM", 
                ingredients: ["Makhana (fox nuts)", "Ghee", "Black pepper", "Rock salt"],
                healthTags: ["low-calorie", "high-protein", "gluten-free"],
                prepTime: "15 mins"
            },
            { 
                name: "Masala Chai with Biscuits", 
                description: "Spiced tea with whole wheat biscuits",
                calories: 180, 
                protein: 4, 
                carbs: 25, 
                fats: 8, 
                time: "4:00 PM", 
                ingredients: ["Tea leaves", "Milk", "Ginger", "Cardamom", "Whole wheat biscuits"],
                healthTags: ["digestive", "energy-boost"],
                prepTime: "10 mins"
            },
            { 
                name: "Sprouts Chaat", 
                description: "Mixed sprouts with vegetables and spices",
                calories: 200, 
                protein: 15, 
                carbs: 25, 
                fats: 6, 
                time: "4:00 PM", 
                ingredients: ["Moong sprouts", "Onion", "Tomato", "Chaat masala", "Lemon"],
                healthTags: ["high-protein", "high-fiber", "raw"],
                prepTime: "10 mins"
            }
        ]
    },
    "non-vegetarian": {
        breakfast: [
            { 
                name: "Egg Bhurji", 
                description: "Indian style scrambled eggs with spices",
                calories: 320, 
                protein: 25, 
                carbs: 10, 
                fats: 22, 
                time: "8:00 AM", 
                ingredients: ["Eggs", "Onion", "Tomato", "Green chilies", "Turmeric", "Coriander"],
                healthTags: ["high-protein", "quick", "low-carb"],
                prepTime: "15 mins"
            },
            { 
                name: "Chicken Keema Paratha", 
                calories: 420, 
                protein: 30, 
                carbs: 45, 
                fats: 20, 
                time: "8:00 AM", 
                description: "Whole wheat flatbread stuffed with minced chicken",
                ingredients: ["Whole wheat flour", "Chicken mince", "Onion", "Spices", "Ghee"],
                healthTags: ["high-protein", "filling"],
                prepTime: "25 mins"
            },
            { 
                name: "Egg Toast", 
                description: "Whole wheat toast with boiled eggs",
                calories: 280, 
                protein: 18, 
                carbs: 25, 
                fats: 12, 
                time: "8:00 AM", 
                ingredients: ["Eggs", "Whole wheat bread", "Butter", "Pepper", "Salt"],
                healthTags: ["quick", "high-protein"],
                prepTime: "10 mins"
            }
        ],
        lunch: [
            { 
                name: "Chicken Curry with Rice", 
                description: "Spicy chicken curry served with steamed rice",
                calories: 520, 
                protein: 45, 
                carbs: 60, 
                fats: 18, 
                time: "1:00 PM", 
                ingredients: ["Chicken", "Onion", "Tomato", "Ginger-garlic paste", "Yogurt", "Rice"],
                healthTags: ["high-protein", "balanced"],
                prepTime: "40 mins"
            },
            { 
                name: "Fish Curry with Rice", 
                description: "Traditional fish curry with rice",
                calories: 480, 
                protein: 40, 
                carbs: 55, 
                fats: 16, 
                time: "1:00 PM", 
                ingredients: ["Fish (rohu/kingfish)", "Coconut", "Tamarind", "Rice", "Spices"],
                healthTags: ["omega-3", "heart-healthy"],
                prepTime: "35 mins"
            },
            { 
                name: "Mutton Biryani", 
                description: "Fragrant rice dish with mutton",
                calories: 580, 
                protein: 35, 
                carbs: 75, 
                fats: 22, 
                time: "1:00 PM", 
                ingredients: ["Basmati rice", "Mutton", "Yogurt", "Saffron", "Biryani masala"],
                healthTags: ["high-protein", "special"],
                prepTime: "60 mins"
            },
            { 
                name: "Chicken Tikka Masala with Naan", 
                description: "Grilled chicken in creamy tomato sauce with flatbread",
                calories: 550, 
                protein: 38, 
                carbs: 50, 
                fats: 25, 
                time: "1:00 PM", 
                ingredients: ["Chicken", "Cream", "Tomato", "Spices", "Naan"],
                healthTags: ["high-protein", "delicious"],
                prepTime: "45 mins"
            }
        ],
        dinner: [
            { 
                name: "Grilled Chicken with Salad", 
                description: "Tandoori chicken with fresh salad",
                calories: 420, 
                protein: 48, 
                carbs: 15, 
                fats: 20, 
                time: "7:00 PM", 
                ingredients: ["Chicken breast", "Yogurt", "Lemon", "Spices", "Onion", "Cucumber"],
                healthTags: ["high-protein", "low-carb", "lean"],
                prepTime: "30 mins"
            },
            { 
                name: "Egg Curry with Roti", 
                calories: 380, 
                protein: 28, 
                carbs: 35, 
                fats: 18, 
                time: "7:00 PM", 
                description: "Boiled eggs in gravy with flatbread",
                ingredients: ["Eggs", "Onion", "Tomato", "Spices", "Whole wheat flour"],
                healthTags: ["high-protein", "economical"],
                prepTime: "25 mins"
            },
            { 
                name: "Chicken Soup with Toast", 
                description: "Homemade chicken soup with whole wheat toast",
                calories: 320, 
                protein: 30, 
                carbs: 25, 
                fats: 12, 
                time: "7:00 PM", 
                ingredients: ["Chicken", "Carrots", "Celery", "Herbs", "Whole wheat bread"],
                healthTags: ["light", "healing", "low-fat"],
                prepTime: "40 mins"
            },
            { 
                name: "Fish Fry with Rice", 
                description: "Fried fish with steamed rice",
                calories: 450, 
                protein: 35, 
                carbs: 45, 
                fats: 18, 
                time: "7:00 PM", 
                ingredients: ["Fish", "Rice", "Spices", "Oil"],
                healthTags: ["high-protein", "omega-3"],
                prepTime: "30 mins"
            }
        ],
        snacks: [
            { 
                name: "Boiled Eggs", 
                calories: 140, 
                protein: 13, 
                carbs: 1, 
                fats: 10, 
                time: "4:00 PM", 
                description: "Hard boiled eggs with salt and pepper",
                ingredients: ["Eggs", "Black pepper", "Salt"],
                healthTags: ["high-protein", "quick", "low-carb"],
                prepTime: "10 mins"
            },
            { 
                name: "Chicken Tikka", 
                description: "Grilled chicken pieces with spices",
                calories: 180, 
                protein: 25, 
                carbs: 5, 
                fats: 8, 
                time: "4:00 PM", 
                ingredients: ["Chicken breast", "Yogurt", "Ginger-garlic paste", "Spices"],
                healthTags: ["high-protein", "grilled", "low-fat"],
                prepTime: "25 mins"
            },
            { 
                name: "Chicken Soup", 
                description: "Light chicken soup",
                calories: 120, 
                protein: 15, 
                carbs: 5, 
                fats: 4, 
                time: "4:00 PM", 
                ingredients: ["Chicken broth", "Vegetables", "Herbs"],
                healthTags: ["light", "low-calorie"],
                prepTime: "20 mins"
            }
        ]
    },
    vegan: {
        breakfast: [
            { 
                name: "Sabudana Khichdi", 
                description: "Tapioca pearls cooked with potatoes and peanuts",
                calories: 320, 
                protein: 6, 
                carbs: 65, 
                fats: 10, 
                time: "8:00 AM", 
                ingredients: ["Sabudana (tapioca)", "Potato", "Peanuts", "Cumin", "Lemon"],
                healthTags: ["vegan", "gluten-free", "fasting-food"],
                prepTime: "20 mins"
            },
            { 
                name: "Moong Dal Chilla", 
                description: "Lentil pancakes without eggs",
                calories: 280, 
                protein: 18, 
                carbs: 40, 
                fats: 8, 
                time: "8:00 AM", 
                ingredients: ["Moong dal", "Spinach", "Onion", "Spices", "Oil"],
                healthTags: ["vegan", "high-protein", "gluten-free"],
                prepTime: "20 mins"
            },
            { 
                name: "Oats Porridge", 
                description: "Oats cooked with plant milk and nuts",
                calories: 250, 
                protein: 8, 
                carbs: 45, 
                fats: 6, 
                time: "8:00 AM", 
                ingredients: ["Oats", "Almond milk", "Nuts", "Fruits", "Jaggery"],
                healthTags: ["vegan", "high-fiber", "heart-healthy"],
                prepTime: "15 mins"
            }
        ],
        lunch: [
            { 
                name: "Vegetable Khichdi", 
                description: "Rice and lentils with vegetables",
                calories: 380, 
                protein: 15, 
                carbs: 70, 
                fats: 8, 
                time: "1:00 PM", 
                ingredients: ["Rice", "Moong dal", "Mixed vegetables", "Turmeric", "Ghee (vegan oil)"],
                healthTags: ["vegan", "easy-digest", "balanced"],
                prepTime: "30 mins"
            },
            { 
                name: "Chana Masala with Rice", 
                description: "Chickpea curry with rice",
                calories: 420, 
                protein: 20, 
                carbs: 75, 
                fats: 10, 
                time: "1:00 PM", 
                ingredients: ["Chickpeas", "Onion", "Tomato", "Spices", "Rice"],
                healthTags: ["vegan", "high-protein", "high-fiber"],
                prepTime: "40 mins"
            },
            { 
                name: "Vegetable Biryani", 
                description: "Fragrant rice with mixed vegetables",
                calories: 400, 
                protein: 12, 
                carbs: 80, 
                fats: 8, 
                time: "1:00 PM", 
                ingredients: ["Basmati rice", "Mixed vegetables", "Spices", "Oil"],
                healthTags: ["vegan", "flavorful", "balanced"],
                prepTime: "35 mins"
            }
        ],
        dinner: [
            { 
                name: "Dal Tadka with Rice", 
                description: "Tempered lentils with rice",
                calories: 350, 
                protein: 18, 
                carbs: 60, 
                fats: 8, 
                time: "7:00 PM", 
                ingredients: ["Toor dal", "Rice", "Tadka (tempering)", "Spices"],
                healthTags: ["vegan", "high-protein", "comfort-food"],
                prepTime: "30 mins"
            },
            { 
                name: "Baingan Bharta with Roti", 
                description: "Smoked eggplant curry with flatbread",
                calories: 320, 
                protein: 10, 
                carbs: 55, 
                fats: 12, 
                time: "7:00 PM", 
                ingredients: ["Eggplant", "Onion", "Tomato", "Garlic", "Whole wheat flour"],
                healthTags: ["vegan", "low-calorie", "antioxidant"],
                prepTime: "35 mins"
            },
            { 
                name: "Vegan Kofta Curry", 
                description: "Vegetable balls in rich gravy",
                calories: 380, 
                protein: 15, 
                carbs: 50, 
                fats: 15, 
                time: "7:00 PM", 
                ingredients: ["Mixed vegetables", "Besan", "Cashew paste", "Spices"],
                healthTags: ["vegan", "rich", "festive"],
                prepTime: "45 mins"
            }
        ],
        snacks: [
            { 
                name: "Roasted Chana", 
                description: "Roasted chickpeas with spices",
                calories: 150, 
                protein: 12, 
                carbs: 20, 
                fats: 5, 
                time: "4:00 PM", 
                ingredients: ["Chickpeas", "Chaat masala", "Oil"],
                healthTags: ["vegan", "high-protein", "crunchy"],
                prepTime: "25 mins"
            },
            { 
                name: "Coconut Water", 
                description: "Fresh coconut water",
                calories: 80, 
                protein: 3, 
                carbs: 15, 
                fats: 2, 
                time: "4:00 PM", 
                ingredients: ["Coconut water"],
                healthTags: ["vegan", "electrolytes", "hydrating"],
                prepTime: "5 mins"
            },
            { 
                name: "Fruit Smoothie", 
                description: "Mixed fruit smoothie with plant milk",
                calories: 180, 
                protein: 5, 
                carbs: 35, 
                fats: 3, 
                time: "4:00 PM", 
                ingredients: ["Banana", "Berries", "Almond milk", "Dates"],
                healthTags: ["vegan", "vitamin-rich", "refreshing"],
                prepTime: "10 mins"
            }
        ]
    }
};

// Indian health condition adaptations
const healthAdaptations = {
    diabetes: {
        adjustments: ["Low glycemic index foods", "High fiber", "Small frequent meals"],
        avoid: ["White rice", "Sugar", "Maida products", "Sweet fruits"],
        focus: ["Whole grains", "Green vegetables", "Sprouts", "Bitter gourd"],
        indianRecommendations: [
            "• Include methi (fenugreek) seeds in meals",
            "• Drink bitter gourd juice in morning",
            "• Use cinnamon in tea",
            "• Choose brown rice over white rice"
        ]
    },
    hypertension: {
        adjustments: ["Low sodium", "High potassium", "Less oil"],
        avoid: ["Pickles", "Papad", "Processed foods", "Canned items"],
        focus: ["Garlic", "Celery", "Bananas", "Watermelon"],
        indianRecommendations: [
            "• Use lemon juice instead of salt",
            "• Include garlic in cooking",
            "• Drink coconut water regularly",
            "• Avoid ready-made masalas"
        ]
    },
    cholesterol: {
        adjustments: ["Low saturated fat", "High fiber", "Healthy fats"],
        avoid: ["Butter", "Ghee in excess", "Fried foods", "Red meat"],
        focus: ["Oats", "Flax seeds", "Walnuts", "Garlic"],
        indianRecommendations: [
            "• Use mustard oil or olive oil",
            "• Include flax seeds in diet",
            "• Drink coriander seed water",
            "• Eat soaked almonds daily"
        ]
    },
    thyroid: {
        adjustments: ["Iodine-rich foods", "Selenium sources", "Cooked vegetables"],
        avoid: ["Raw cabbage", "Raw cauliflower", "Soy products", "Processed foods"],
        focus: ["Fish", "Eggs", "Dairy", "Brazil nuts"],
        indianRecommendations: [
            "• Use iodized salt",
            "• Include fish in diet",
            "• Eat cooked vegetables",
            "• Avoid excess soy products"
        ]
    },
    pcos: {
        adjustments: ["Low glycemic index", "Anti-inflammatory", "Hormone balancing"],
        avoid: ["Sugar", "Processed foods", "Dairy (for some)", "Fried foods"],
        focus: ["Fenugreek", "Cinnamon", "Flax seeds", "Green vegetables"],
        indianRecommendations: [
            "• Drink fenugreek seed water",
            "• Include cinnamon in diet",
            "• Eat more fiber-rich foods",
            "• Regular exercise is important"
        ]
    },
    heart: {
        adjustments: ["Low fat", "High fiber", "Antioxidant-rich"],
        avoid: ["Fried foods", "Excess salt", "Processed meats", "Butter"],
        focus: ["Oats", "Berries", "Nuts", "Green tea"],
        indianRecommendations: [
            "• Use olive oil for cooking",
            "• Include walnuts in diet",
            "• Drink green tea",
            "• Eat more fruits and vegetables"
        ]
    }
};

// Get random meal based on dietary preference and health conditions
function getRandomMeal(mealType, dietaryPreference, healthConditions = []) {
    const meals = mealDatabase[dietaryPreference]?.[mealType] || mealDatabase.vegetarian[mealType];
    
    // Filter meals based on health conditions
    let filteredMeals = [...meals];
    
    healthConditions.forEach(condition => {
        if (condition !== 'none') {
            filteredMeals = filteredMeals.filter(meal => 
                !meal.healthTags || 
                (meal.healthTags && (
                    (condition === 'diabetes' && meal.healthTags.includes('diabetes-friendly')) ||
                    (condition === 'hypertension' && !meal.healthTags.includes('high-sodium')) ||
                    (condition === 'cholesterol' && meal.healthTags.includes('heart-healthy')) ||
                    (condition === 'thyroid' && meal.healthTags.includes('iodine-rich')) ||
                    (condition === 'pcos' && meal.healthTags.includes('low-glycemic')) ||
                    (condition === 'heart' && meal.healthTags.includes('heart-healthy')) ||
                    true // Default to include if no specific tags
                ))
            );
        }
    });
    
    // If no meals match the criteria, return a random one
    if (filteredMeals.length === 0) {
        filteredMeals = meals;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredMeals.length);
    return { ...filteredMeals[randomIndex] };
}

// Calculate BMR (Basal Metabolic Rate) for Indian bodies
function calculateBMR(gender, weight, height, age) {
    // Using Mifflin-St Jeor Equation adjusted for Indian population
    if (gender === 'male') {
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

// Calculate TDEE (Total Daily Energy Expenditure) for Indian lifestyle
function calculateTDEE(bmr, activityLevel) {
    const multipliers = {
        sedentary: 1.2,     // Mostly sitting (office work)
        light: 1.375,       // Light exercise 1-3 days/week
        moderate: 1.55,     // Moderate exercise 3-5 days/week
        very: 1.725,        // Hard exercise 6-7 days/week
        extra: 1.9          // Very hard exercise & physical job
    };
    return bmr * (multipliers[activityLevel] || 1.55);
}

// Calculate calorie goal based on fitness goal (adjusted for Indian diet)
function calculateCalorieGoal(tdee, fitnessGoal, bodyTypeGoal) {
    let calorieGoal = tdee;
    
    // Adjust based on fitness goal
    switch (fitnessGoal) {
        case 'weight-loss':
            calorieGoal *= 0.80; // 20% deficit for weight loss
            break;
        case 'bulking':
            calorieGoal *= 1.20; // 20% surplus for bulking
            break;
        default: // Maintenance
            calorieGoal = tdee;
    }
    
    // Additional adjustment for body type goal
    switch (bodyTypeGoal) {
        case 'fat-loss':
            calorieGoal *= 0.85; // Additional 15% deficit
            break;
        case 'muscular':
            calorieGoal *= 1.15; // Additional 15% surplus
            break;
        case 'lean':
            calorieGoal *= 0.90; // 10% deficit for lean look
            break;
        case 'athletic':
            calorieGoal *= 1.10; // 10% surplus for athletic performance
            break;
    }
    
    return Math.round(calorieGoal);
}

// Calculate macros based on fitness goal (Indian diet focus)
function calculateMacros(calorieGoal, fitnessGoal) {
    let proteinRatio, carbRatio, fatRatio;
    
    switch (fitnessGoal) {
        case 'weight-loss':
            proteinRatio = 0.35; // Higher protein for Indian vegetarians
            carbRatio = 0.45;
            fatRatio = 0.20;
            break;
        case 'bulking':
            proteinRatio = 0.30;
            carbRatio = 0.55; // Higher carbs for energy (rice, roti based)
            fatRatio = 0.15;
            break;
        default: // Maintenance
            proteinRatio = 0.25;
            carbRatio = 0.60; // Traditional Indian diet is carb-heavy
            fatRatio = 0.15;
    }
    
    return {
        protein: Math.round((calorieGoal * proteinRatio) / 4), // 4 cal/g
        carbs: Math.round((calorieGoal * carbRatio) / 4), // 4 cal/g
        fats: Math.round((calorieGoal * fatRatio) / 9) // 9 cal/g
    };
}

// Generate a 7-day meal plan with Indian food
function generateMealPlan(userData) {
    const { dietaryPreference, healthConditions, fitnessGoal } = userData;
    
    // Calculate calorie requirements
    const bmr = calculateBMR(userData.gender, userData.weight, userData.height, userData.age);
    const tdee = calculateTDEE(bmr, userData.activityLevel);
    const calorieGoal = calculateCalorieGoal(tdee, fitnessGoal, userData.bodyTypeGoal);
    const macros = calculateMacros(calorieGoal, fitnessGoal);
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const plan = {
        days: [],
        summary: {
            calorieGoal,
            macros,
            weeklyCalories: 0,
            weeklyProtein: 0,
            weeklyCarbs: 0,
            weeklyFats: 0
        }
    };
    
    // Generate meals for each day
    days.forEach(day => {
        const breakfast = getRandomMeal('breakfast', dietaryPreference, healthConditions);
        const lunch = getRandomMeal('lunch', dietaryPreference, healthConditions);
        const dinner = getRandomMeal('dinner', dietaryPreference, healthConditions);
        const snack = getRandomMeal('snacks', dietaryPreference, healthConditions);
        
        // Adjust portion sizes to meet calorie goal
        const totalDayCalories = breakfast.calories + lunch.calories + dinner.calories + snack.calories;
        const adjustmentFactor = calorieGoal / totalDayCalories;
        
        const adjustMeal = (meal) => ({
            ...meal,
            calories: Math.round(meal.calories * adjustmentFactor),
            protein: Math.round(meal.protein * adjustmentFactor),
            carbs: Math.round(meal.carbs * adjustmentFactor),
            fats: Math.round(meal.fats * adjustmentFactor)
        });
        
        const adjustedBreakfast = adjustMeal(breakfast);
        const adjustedLunch = adjustMeal(lunch);
        const adjustedDinner = adjustMeal(dinner);
        const adjustedSnack = adjustMeal(snack);
        
        const dayTotals = {
            calories: adjustedBreakfast.calories + adjustedLunch.calories + adjustedDinner.calories + adjustedSnack.calories,
            protein: adjustedBreakfast.protein + adjustedLunch.protein + adjustedDinner.protein + adjustedSnack.protein,
            carbs: adjustedBreakfast.carbs + adjustedLunch.carbs + adjustedDinner.carbs + adjustedSnack.carbs,
            fats: adjustedBreakfast.fats + adjustedLunch.fats + adjustedDinner.fats + adjustedSnack.fats
        };
        
        plan.days.push({
            dayName: day,
            breakfast: adjustedBreakfast,
            lunch: adjustedLunch,
            dinner: adjustedDinner,
            snack: adjustedSnack,
            totals: dayTotals
        });
        
        plan.summary.weeklyCalories += dayTotals.calories;
        plan.summary.weeklyProtein += dayTotals.protein;
        plan.summary.weeklyCarbs += dayTotals.carbs;
        plan.summary.weeklyFats += dayTotals.fats;
    });
    
    // Calculate averages
    plan.summary.dailyAverage = {
        calories: Math.round(plan.summary.weeklyCalories / 7),
        protein: Math.round(plan.summary.weeklyProtein / 7),
        carbs: Math.round(plan.summary.weeklyCarbs / 7),
        fats: Math.round(plan.summary.weeklyFats / 7)
    };
    
    return plan;
}

// Get Indian cooking tips based on health conditions
function getIndianCookingTips(healthConditions) {
    const tips = [];
    
    healthConditions.forEach(condition => {
        if (condition !== 'none' && healthAdaptations[condition]) {
            tips.push(...healthAdaptations[condition].indianRecommendations);
        }
    });
    
    // Add general Indian cooking tips
    const generalTips = [
        "• Use pressure cooker for faster cooking",
        "• Soak lentils overnight for better digestion",
        "• Use fresh spices instead of packaged masalas",
        "• Include seasonal vegetables in your diet",
        "• Drink buttermilk after meals for better digestion"
    ];
    
    return [...tips, ...generalTips];
}