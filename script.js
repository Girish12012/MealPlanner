// Global variables
let currentUserData = null;
let currentMealPlan = null;
let currentTab = 0;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up event listeners');
    
    // Initialize form tabs
    initializeFormTabs();
    
    // Form submission
    const form = document.getElementById('mealPlanForm');
    if (form) {
        console.log('Form found, adding submit listener');
        form.addEventListener('submit', handleFormSubmit);
    } else {
        console.error('Form not found!');
    }
    
    // Goal selection
    const goalCards = document.querySelectorAll('.goal-card');
    console.log('Goal cards found:', goalCards.length);
    
    goalCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Goal card clicked:', this.dataset.goal);
            goalCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const goal = this.dataset.goal;
            document.getElementById('fitnessGoal').value = goal;
            console.log('Set fitness goal to:', goal);
        });
        
        // Select first goal by default
        if (card.dataset.goal === 'weight-loss') {
            card.click();
        }
    });
    
    // Goal buttons
    const goalButtons = document.querySelectorAll('.goal-btn');
    goalButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            goalButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('bodyType').value = this.dataset.value;
        });
        
        // Select first button by default
        if (btn.dataset.value === 'lean') {
            btn.click();
        }
    });
    
    // Download PDF button
    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', generatePDF);
    }
    
    // Download link in header
    const downloadLink = document.getElementById('download-link');
    if (downloadLink) {
        downloadLink.addEventListener('click', function(e) {
            e.preventDefault();
            generatePDF();
        });
    }
    
    // Handle "None" checkbox
    const noneCheckbox = document.querySelector('input[value="none"]');
    if (noneCheckbox) {
        noneCheckbox.addEventListener('change', function() {
            if (this.checked) {
                document.querySelectorAll('input[name="healthCondition"]:not([value="none"])').forEach(cb => {
                    cb.checked = false;
                });
            }
        });
        
        // Uncheck "None" if any other checkbox is checked
        document.querySelectorAll('input[name="healthCondition"]:not([value="none"])').forEach(cb => {
            cb.addEventListener('change', function() {
                if (this.checked) {
                    noneCheckbox.checked = false;
                }
            });
        });
    }
});

// Initialize form tabs
function initializeFormTabs() {
    const formTabs = document.querySelectorAll('.form-tab');
    const prevBtn = document.getElementById('prevTab');
    const nextBtn = document.getElementById('nextTab');
    
    // Tab click handlers
    formTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            showTab(index);
        });
    });
    
    // Next button handler
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (validateCurrentTab()) {
                currentTab++;
                showTab(currentTab);
            }
        });
    }
    
    // Previous button handler
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTab--;
            showTab(currentTab);
        });
    }
    
    // Show first tab
    showTab(0);
}

// Show specific tab
function showTab(tabIndex) {
    const tabContents = document.querySelectorAll('.form-tab-content');
    const formTabs = document.querySelectorAll('.form-tab');
    const prevBtn = document.getElementById('prevTab');
    const nextBtn = document.getElementById('nextTab');
    const submitBtn = document.getElementById('submitBtn');
    
    // Hide all tabs
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    formTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show current tab
    tabContents[tabIndex].classList.add('active');
    formTabs[tabIndex].classList.add('active');
    
    // Update progress indicator
    updateProgressIndicator(tabIndex);
    
    // Update button visibility
    if (tabIndex === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    } else if (tabIndex === tabContents.length - 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
    
    currentTab = tabIndex;
}

// Validate current tab
function validateCurrentTab() {
    const currentTabContent = document.querySelectorAll('.form-tab-content')[currentTab];
    let isValid = true;
    const errorFields = [];
    
    if (currentTab === 0) {
        // Validate personal details
        const requiredFields = currentTabContent.querySelectorAll('input[required], select[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                errorFields.push(field.id);
                field.style.borderColor = '#f44336';
                
                // Add shake animation
                field.classList.add('shake-animation');
                setTimeout(() => {
                    field.classList.remove('shake-animation');
                }, 500);
            } else {
                field.style.borderColor = '';
            }
        });
        
        if (!isValid) {
            alert('Please fill all required fields before proceeding.');
        }
    }
    
    return isValid;
}

// Update progress indicator
function updateProgressIndicator(tabIndex) {
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((step, index) => {
        step.classList.remove('active');
        if (index <= tabIndex) {
            step.classList.add('active');
        }
    });
}

// Handle form submission
function handleFormSubmit(e) {
    console.log('Form submitted');
    e.preventDefault();
    
    try {
        // Show loading state
        const submitBtn = document.getElementById('submitBtn');
        const loadingDots = submitBtn.querySelector('.loading-dots');
        submitBtn.disabled = true;
        loadingDots.style.display = 'inline-flex';
        
        // Get form values
        const userData = {
            name: document.getElementById('name').value.trim(),
            gender: document.getElementById('gender').value,
            age: parseInt(document.getElementById('age').value),
            height: parseInt(document.getElementById('height').value),
            weight: parseInt(document.getElementById('weight').value),
            bodyTypeGoal: document.getElementById('bodyType').value,
            dietaryPreference: document.getElementById('dietPreference').value,
            fitnessGoal: document.getElementById('fitnessGoal').value,
            activityLevel: document.getElementById('activityLevel').value,
            foodAllergies: document.getElementById('foodAllergies').value.trim(),
            healthConditions: Array.from(document.querySelectorAll('input[name="healthCondition"]:checked'))
                .map(cb => cb.value)
        };
        
        console.log('User data collected:', userData);
        
        // Validate form
        if (!validateForm(userData)) {
            console.log('Form validation failed');
            submitBtn.disabled = false;
            loadingDots.style.display = 'none';
            return;
        }
        
        // Calculate BMI
        const heightInM = userData.height / 100;
        userData.bmi = (userData.weight / (heightInM * heightInM)).toFixed(1);
        
        // Calculate calorie goal
        const bmr = calculateBMR(userData.gender, userData.weight, userData.height, userData.age);
        console.log('BMR:', bmr);
        
        const tdee = calculateTDEE(bmr, userData.activityLevel);
        console.log('TDEE:', tdee);
        
        userData.calorieGoal = calculateCalorieGoal(tdee, userData.fitnessGoal, userData.bodyTypeGoal);
        console.log('Calorie Goal:', userData.calorieGoal);
        
        // Generate meal plan
        currentUserData = userData;
        console.log('Generating meal plan...');
        currentMealPlan = generateMealPlan(userData);
        console.log('Meal plan generated:', currentMealPlan);
        
        // Display results
        displayUserSummary(userData);
        displayMealPlan(currentMealPlan);
        displayNutritionAnalysis(currentMealPlan, userData);
        
        // Show meal plan section
        document.getElementById('plan').style.display = 'block';
        document.getElementById('nutrition').style.display = 'block';
        
        // Show download link in header
        document.getElementById('download-link').style.display = 'flex';
        
        // Scroll to plan section
        setTimeout(() => {
            document.getElementById('plan').scrollIntoView({ behavior: 'smooth' });
            submitBtn.disabled = false;
            loadingDots.style.display = 'none';
        }, 500);
        
        console.log('Meal plan displayed successfully');
        
    } catch (error) {
        console.error('Error in form submission:', error);
        alert('An error occurred. Please check the console for details.');
        
        // Reset button state
        const submitBtn = document.getElementById('submitBtn');
        const loadingDots = submitBtn.querySelector('.loading-dots');
        submitBtn.disabled = false;
        loadingDots.style.display = 'none';
    }
}

// Validate form data
function validateForm(userData) {
    console.log('Validating form data:', userData);
    
    let isValid = true;
    const errorMessages = [];
    
    if (!userData.name) {
        errorMessages.push('Please enter your name');
        isValid = false;
    }
    
    if (!userData.gender) {
        errorMessages.push('Please select your gender');
        isValid = false;
    }
    
    if (!userData.age || userData.age < 18 || userData.age > 80) {
        errorMessages.push('Age must be between 18 and 80');
        isValid = false;
    }
    
    if (!userData.height || userData.height < 100 || userData.height > 250) {
        errorMessages.push('Height must be between 100cm and 250cm');
        isValid = false;
    }
    
    if (!userData.weight || userData.weight < 30 || userData.weight > 200) {
        errorMessages.push('Weight must be between 30kg and 200kg');
        isValid = false;
    }
    
    if (!userData.bodyTypeGoal) {
        errorMessages.push('Please select your body type goal');
        isValid = false;
    }
    
    if (!userData.dietaryPreference) {
        errorMessages.push('Please select your dietary preference');
        isValid = false;
    }
    
    if (!userData.fitnessGoal) {
        errorMessages.push('Please select your fitness goal');
        isValid = false;
    }
    
    if (!userData.activityLevel) {
        errorMessages.push('Please select your activity level');
        isValid = false;
    }
    
    if (userData.healthConditions.length === 0) {
        errorMessages.push('Please select at least one health condition or choose "None"');
        isValid = false;
    }
    
    if (errorMessages.length > 0) {
        alert('Please fix the following errors:\n\n' + errorMessages.join('\n'));
        console.log('Validation errors:', errorMessages);
    }
    
    console.log('Form validation result:', isValid);
    return isValid;
}

// Display user summary
function displayUserSummary(userData) {
    console.log('Displaying user summary');
    const summaryContainer = document.getElementById('summaryGrid');
    
    const summaryHTML = `
        <div class="summary-item">
            <div class="summary-label">Name</div>
            <div class="summary-value">${userData.name}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Age / Gender</div>
            <div class="summary-value">${userData.age} / ${formatText(userData.gender)}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Height / Weight</div>
            <div class="summary-value">${userData.height}cm / ${userData.weight}kg</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">BMI</div>
            <div class="summary-value">${userData.bmi}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Fitness Goal</div>
            <div class="summary-value">${formatText(userData.fitnessGoal)}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Daily Calorie Goal</div>
            <div class="summary-value">${userData.calorieGoal} kcal</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Diet Type</div>
            <div class="summary-value">${formatText(userData.dietaryPreference)}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Health Considerations</div>
            <div class="summary-value">${userData.healthConditions.length > 0 ? 
                userData.healthConditions.map(hc => formatText(hc)).join(', ') : 'None'}</div>
        </div>
    `;
    
    summaryContainer.innerHTML = summaryHTML;
}

// Display meal plan
function displayMealPlan(mealPlan) {
    console.log('Displaying meal plan');
    const planContainer = document.getElementById('weeklyPlan');
    let planHTML = '';
    
    mealPlan.days.forEach(day => {
        const dayHTML = `
            <div class="day-card">
                <div class="day-header">
                    <h3>${day.dayName}</h3>
                </div>
                <div class="day-meals">
                    <!-- Breakfast -->
                    <div class="meal">
                        <div class="meal-header">
                            <span class="meal-title">Breakfast</span>
                            <span class="meal-time">${day.breakfast.time}</span>
                        </div>
                        <div class="meal-description">${day.breakfast.name}: ${day.breakfast.description}</div>
                        <div class="meal-ingredients">
                            <strong>Ingredients:</strong> ${day.breakfast.ingredients.join(', ')}
                        </div>
                        <div class="meal-nutrition">
                            <div class="nutrition-item">
                                <i class="fas fa-fire"></i>
                                <span>${day.breakfast.calories} kcal</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-drumstick-bite"></i>
                                <span>${day.breakfast.protein}g protein</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-bread-slice"></i>
                                <span>${day.breakfast.carbs}g carbs</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-oil-can"></i>
                                <span>${day.breakfast.fats}g fats</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-clock"></i>
                                <span>${day.breakfast.prepTime}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Lunch -->
                    <div class="meal">
                        <div class="meal-header">
                            <span class="meal-title">Lunch</span>
                            <span class="meal-time">${day.lunch.time}</span>
                        </div>
                        <div class="meal-description">${day.lunch.name}: ${day.lunch.description}</div>
                        <div class="meal-ingredients">
                            <strong>Ingredients:</strong> ${day.lunch.ingredients.join(', ')}
                        </div>
                        <div class="meal-nutrition">
                            <div class="nutrition-item">
                                <i class="fas fa-fire"></i>
                                <span>${day.lunch.calories} kcal</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-drumstick-bite"></i>
                                <span>${day.lunch.protein}g protein</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-bread-slice"></i>
                                <span>${day.lunch.carbs}g carbs</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-oil-can"></i>
                                <span>${day.lunch.fats}g fats</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-clock"></i>
                                <span>${day.lunch.prepTime}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Dinner -->
                    <div class="meal">
                        <div class="meal-header">
                            <span class="meal-title">Dinner</span>
                            <span class="meal-time">${day.dinner.time}</span>
                        </div>
                        <div class="meal-description">${day.dinner.name}: ${day.dinner.description}</div>
                        <div class="meal-ingredients">
                            <strong>Ingredients:</strong> ${day.dinner.ingredients.join(', ')}
                        </div>
                        <div class="meal-nutrition">
                            <div class="nutrition-item">
                                <i class="fas fa-fire"></i>
                                <span>${day.dinner.calories} kcal</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-drumstick-bite"></i>
                                <span>${day.dinner.protein}g protein</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-bread-slice"></i>
                                <span>${day.dinner.carbs}g carbs</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-oil-can"></i>
                                <span>${day.dinner.fats}g fats</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-clock"></i>
                                <span>${day.dinner.prepTime}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Snack -->
                    <div class="meal">
                        <div class="meal-header">
                            <span class="meal-title">Snack</span>
                            <span class="meal-time">${day.snack.time}</span>
                        </div>
                        <div class="meal-description">${day.snack.name}: ${day.snack.description}</div>
                        <div class="meal-ingredients">
                            <strong>Ingredients:</strong> ${day.snack.ingredients.join(', ')}
                        </div>
                        <div class="meal-nutrition">
                            <div class="nutrition-item">
                                <i class="fas fa-fire"></i>
                                <span>${day.snack.calories} kcal</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-drumstick-bite"></i>
                                <span>${day.snack.protein}g protein</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-bread-slice"></i>
                                <span>${day.snack.carbs}g carbs</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-oil-can"></i>
                                <span>${day.snack.fats}g fats</span>
                            </div>
                            <div class="nutrition-item">
                                <i class="fas fa-clock"></i>
                                <span>${day.snack.prepTime}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Day Totals -->
                    <div class="day-totals">
                        <h4>Daily Total: ${day.totals.calories} kcal</h4>
                        <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 10px;">
                            <span>Protein: ${day.totals.protein}g</span>
                            <span>Carbs: ${day.totals.carbs}g</span>
                            <span>Fats: ${day.totals.fats}g</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        planHTML += dayHTML;
    });
    
    planContainer.innerHTML = planHTML;
}

// Display nutrition analysis
function displayNutritionAnalysis(mealPlan, userData) {
    console.log('Displaying nutrition analysis');
    const nutritionContainer = document.getElementById('nutritionSummary');
    const average = mealPlan.summary.dailyAverage;
    
    // Update nutrition cards
    const nutritionHTML = `
        <div class="nutrition-card">
            <i class="fas fa-fire"></i>
            <h3>Daily Calories</h3>
            <div class="value">${average.calories}</div>
            <div class="unit">kcal</div>
            <div class="progress-text">Goal: ${userData.calorieGoal} kcal</div>
        </div>
        <div class="nutrition-card">
            <i class="fas fa-drumstick-bite"></i>
            <h3>Protein</h3>
            <div class="value">${average.protein}</div>
            <div class="unit">grams</div>
            <div class="progress-text">${Math.round((average.protein * 4 / average.calories) * 100)}% of calories</div>
        </div>
        <div class="nutrition-card">
            <i class="fas fa-bread-slice"></i>
            <h3>Carbohydrates</h3>
            <div class="value">${average.carbs}</div>
            <div class="unit">grams</div>
            <div class="progress-text">${Math.round((average.carbs * 4 / average.calories) * 100)}% of calories</div>
        </div>
        <div class="nutrition-card">
            <i class="fas fa-oil-can"></i>
            <h3>Fats</h3>
            <div class="value">${average.fats}</div>
            <div class="unit">grams</div>
            <div class="progress-text">${Math.round((average.fats * 9 / average.calories) * 100)}% of calories</div>
        </div>
    `;
    
    nutritionContainer.innerHTML = nutritionHTML;
    
    // Update calorie progress circle
    const calorieGoal = userData.calorieGoal;
    const currentCalories = average.calories;
    const progressPercent = Math.min((currentCalories / calorieGoal) * 100, 100);
    const progressFill = document.querySelector('.progress-ring-fill');
    const circumference = 2 * Math.PI * 95;
    const offset = circumference - (progressPercent / 100) * circumference;
    
    if (progressFill) {
        progressFill.style.strokeDashoffset = offset;
    }
    
    // Update calorie values
    document.getElementById('calorieValue').textContent = currentCalories;
    document.getElementById('calorieGoalDisplay').textContent = calorieGoal;
    document.getElementById('calorieConsumed').textContent = currentCalories;
    document.getElementById('calorieRemaining').textContent = Math.max(0, calorieGoal - currentCalories);
    
    // Update macro values
    const proteinPercent = Math.round((average.protein * 4 / currentCalories) * 100);
    const carbsPercent = Math.round((average.carbs * 4 / currentCalories) * 100);
    const fatsPercent = Math.round((average.fats * 9 / currentCalories) * 100);
    
    document.getElementById('proteinValue').textContent = `${average.protein}g`;
    document.getElementById('proteinPercent').textContent = `(${proteinPercent}%)`;
    document.getElementById('carbsValue').textContent = `${average.carbs}g`;
    document.getElementById('carbsPercent').textContent = `(${carbsPercent}%)`;
    document.getElementById('fatsValue').textContent = `${average.fats}g`;
    document.getElementById('fatsPercent').textContent = `(${fatsPercent}%)`;
    
    // Update chart
    updateNutritionChart(average);
}

// Update nutrition chart
function updateNutritionChart(average) {
    const ctx = document.getElementById('macrosChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (window.nutritionChart) {
        window.nutritionChart.destroy();
    }
    
    const totalCalories = average.calories;
    const proteinCalories = average.protein * 4;
    const carbsCalories = average.carbs * 4;
    const fatsCalories = average.fats * 9;
    
    window.nutritionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Protein', 'Carbs', 'Fats'],
            datasets: [{
                data: [proteinCalories, carbsCalories, fatsCalories],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.8)',
                    'rgba(255, 183, 77, 0.8)',
                    'rgba(141, 110, 99, 0.8)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(255, 183, 77, 1)',
                    'rgba(141, 110, 99, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const percentage = Math.round((value / totalCalories) * 100);
                            return `${label}: ${percentage}% (${Math.round(value)} kcal)`;
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });
}

// Generate PDF report
function generatePDF() {
    if (!currentUserData || !currentMealPlan) {
        alert('Please generate a meal plan first!');
        return;
    }
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Add logo and title
        doc.setFontSize(24);
        doc.setTextColor(76, 175, 80);
        doc.text('NutriPlan Meal Report', 105, 20, null, null, 'center');
        
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text('Personalized 7-Day Indian Meal Plan', 105, 30, null, null, 'center');
        
        // Add date
        const today = new Date();
        doc.text(`Generated on: ${today.toLocaleDateString()}`, 105, 40, null, null, 'center');
        
        let yPosition = 50;
        
        // User Profile Section
        doc.setFontSize(16);
        doc.setTextColor(33, 33, 33);
        doc.text('User Profile', 20, yPosition);
        yPosition += 10;
        
        doc.setFontSize(11);
        doc.setTextColor(80, 80, 80);
        
        const userInfo = [
            `Name: ${currentUserData.name}`,
            `Age: ${currentUserData.age} | Gender: ${formatText(currentUserData.gender)}`,
            `Height: ${currentUserData.height} cm | Weight: ${currentUserData.weight} kg`,
            `BMI: ${currentUserData.bmi}`,
            `Fitness Goal: ${formatText(currentUserData.fitnessGoal)}`,
            `Dietary Preference: ${formatText(currentUserData.dietaryPreference)}`,
            `Daily Calorie Goal: ${currentUserData.calorieGoal} kcal`,
            `Health Conditions: ${currentUserData.healthConditions.length > 0 ? 
                currentUserData.healthConditions.map(hc => formatText(hc)).join(', ') : 'None'}`
        ];
        
        userInfo.forEach(info => {
            doc.text(info, 20, yPosition);
            yPosition += 7;
        });
        
        yPosition += 5;
        
        // Weekly Summary
        doc.setFontSize(16);
        doc.setTextColor(33, 33, 33);
        doc.text('Weekly Nutrition Summary', 20, yPosition);
        yPosition += 10;
        
        doc.setFontSize(11);
        const summary = currentMealPlan.summary.dailyAverage;
        const summaryText = [
            `Average Daily Calories: ${summary.calories} kcal`,
            `Average Daily Protein: ${summary.protein} g`,
            `Average Daily Carbohydrates: ${summary.carbs} g`,
            `Average Daily Fats: ${summary.fats} g`
        ];
        
        summaryText.forEach(text => {
            doc.text(text, 20, yPosition);
            yPosition += 7;
        });
        
        yPosition += 10;
        
        // Start new page for meal plan
        doc.addPage();
        yPosition = 20;
        
        doc.setFontSize(18);
        doc.setTextColor(76, 175, 80);
        doc.text('7-Day Indian Meal Plan', 105, yPosition, null, null, 'center');
        yPosition += 15;
        
        // Add each day
        currentMealPlan.days.forEach((day, index) => {
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
            
            doc.setFontSize(14);
            doc.setTextColor(33, 33, 33);
            doc.text(day.dayName, 20, yPosition);
            yPosition += 8;
            
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            
            const meals = [
                { name: 'Breakfast', meal: day.breakfast },
                { name: 'Lunch', meal: day.lunch },
                { name: 'Dinner', meal: day.dinner },
                { name: 'Snack', meal: day.snack }
            ];
            
            meals.forEach(mealItem => {
                if (yPosition > 270) {
                    doc.addPage();
                    yPosition = 20;
                }
                
                doc.setFontSize(11);
                doc.setTextColor(33, 33, 33);
                doc.text(`${mealItem.name}: ${mealItem.meal.name}`, 25, yPosition);
                yPosition += 5;
                
                doc.setFontSize(9);
                doc.setTextColor(100, 100, 100);
                
                // Description
                const desc = doc.splitTextToSize(mealItem.meal.description, 150);
                doc.text(desc, 30, yPosition);
                yPosition += desc.length * 5;
                
                // Nutrition info
                doc.text(`Calories: ${mealItem.meal.calories} | Protein: ${mealItem.meal.protein}g | Carbs: ${mealItem.meal.carbs}g | Fats: ${mealItem.meal.fats}g`, 30, yPosition);
                yPosition += 5;
                
                // Ingredients
                const ingredients = `Ingredients: ${mealItem.meal.ingredients.join(', ')}`;
                const ingredientLines = doc.splitTextToSize(ingredients, 150);
                doc.text(ingredientLines, 30, yPosition);
                yPosition += ingredientLines.length * 4;
                
                yPosition += 5;
            });
            
            // Day total
            doc.setFontSize(10);
            doc.setTextColor(76, 175, 80);
            doc.text(`Day Total: ${day.totals.calories} kcal | Protein: ${day.totals.protein}g | Carbs: ${day.totals.carbs}g | Fats: ${day.totals.fats}g`, 20, yPosition);
            yPosition += 10;
            
            // Add separator
            doc.setDrawColor(200, 200, 200);
            doc.line(20, yPosition, 190, yPosition);
            yPosition += 10;
        });
        
        // Final page with tips
        doc.addPage();
        yPosition = 20;
        
        doc.setFontSize(16);
        doc.setTextColor(33, 33, 33);
        doc.text('Healthy Eating Tips', 20, yPosition);
        yPosition += 15;
        
        doc.setFontSize(10);
        const tips = getIndianCookingTips(currentUserData.healthConditions);
        
        tips.forEach(tip => {
            const tipLines = doc.splitTextToSize(tip, 170);
            tipLines.forEach(line => {
                doc.text(line, 20, yPosition);
                yPosition += 7;
            });
            yPosition += 3;
        });
        
        yPosition += 10;
        
        // Disclaimer
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        const disclaimer = 'Disclaimer: This meal plan is generated based on the information provided and should not replace professional medical advice. Consult with a healthcare professional before making significant dietary changes.';
        const disclaimerLines = doc.splitTextToSize(disclaimer, 170);
        doc.text(disclaimerLines, 20, yPosition);
        
        // Save the PDF
        const fileName = `NutriPlan_${currentUserData.name.replace(/\s+/g, '_')}_${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}.pdf`;
        doc.save(fileName);
        
        // Show success message
        alert('PDF report downloaded successfully!');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please check if jsPDF is loaded correctly.');
    }
}

// Helper function to format text (capitalize, replace hyphens)
function formatText(text) {
    if (!text) return '';
    return text
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .shake-animation {
        animation: shake 0.3s ease-in-out;
    }
    
    .form-tab-content {
        display: none;
        opacity: 0;
        transform: translateX(20px);
        transition: opacity 0.4s ease, transform 0.4s ease;
    }
    
    .form-tab-content.active {
        display: block;
        opacity: 1;
        transform: translateX(0);
    }
    
    .form-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid var(--glass-border);
    }
    
    .form-actions button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 120px;
    }
    
    @media (max-width: 768px) {
        .form-grid {
            gap: 20px;
        }
        
        .form-wrapper {
            padding: 20px;
        }
        
        .form-actions {
            flex-direction: column;
            gap: 15px;
        }
        
        .form-actions button {
            width: 100%;
        }
    }
    
    .nutrition-card {
        text-align: center;
        padding: 20px;
        background: var(--cream);
        border-radius: var(--radius-soft);
        border: 1px solid var(--glass-border);
        transition: var(--transition-normal);
    }
    
    .nutrition-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-organic);
    }
    
    .nutrition-card i {
        font-size: 2rem;
        color: var(--primary-green);
        margin-bottom: 15px;
    }
    
    .nutrition-card h3 {
        font-size: 1rem;
        color: var(--text-dark);
        margin-bottom: 10px;
    }
    
    .nutrition-card .value {
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary-green);
    }
    
    .nutrition-card .unit {
        font-size: 0.9rem;
        color: var(--brown-light);
        margin-bottom: 10px;
    }
    
    .nutrition-card .progress-text {
        font-size: 0.8rem;
        color: var(--gray-600);
    }
    
    .nutrition-summary {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
    }
`;
document.head.appendChild(style);