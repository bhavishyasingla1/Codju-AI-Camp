/**
 * Codju Academy — Central Projects & Curriculum Registry
 * 
 * Reusable data structure and modal controller for student projects across all tracks:
 * - Scratch Junior (Grades 1–2)
 * - MIT Scratch (Grades 3–5)
 * - Python Programming (Grades 6–10)
 * - HTML & CSS Web Development (Grades 6–10)
 * 
 * Each record adheres strictly to the verified curriculum scope and clearly distinguishes
 * Core Curriculum projects from Proposed Curriculum Extensions.
 */

(function () {
  'use strict';

  const CODJU_PROJECTS = [
    // ==========================================
    // SCRATCH JUNIOR (Grades 1–2, Ages 6–8)
    // ==========================================
    {
      id: 'sjr-jungle',
      title: 'The Enchanted Jungle',
      course: 'Scratch Junior',
      courseSlug: 'scratch-junior',
      category: 'Interactive Storytelling',
      difficulty: 'Beginner (Ages 6–8)',
      gradeRange: 'Grades 1–2',
      summary: 'A 3-scene interactive storybook where a baby panda navigates rain showers and speaks recorded animal dialogue.',
      studentOutcome: 'Students independently design a multi-scene digital story with personal voiceovers, character animation, and scene transitions.',
      skills: ['Multi-Scene Navigation', 'Voice Recording', 'Motion Sequencing'],
      learningConcepts: ['Algorithmic Sequencing', 'Event Triggers (Tap & Green Flag)', 'Parallel Character Actions'],
      customizationChallenge: 'Make it your own: Paint a new animal character that hides behind the tree and pops out with a custom recorded greeting when tapped!',
      curriculumModule: 'Module 1 & 2: First Blocks & Custom Characters',
      sessions: 'Sessions 2–4',
      tool: 'ScratchJr (Tablet / Chromebook)',
      previewImage: 'assets/Panda.png',
      demoUrl: 'Scratch Junior.dc.html#simulator',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'sjr-reef',
      title: 'Coral Reef Animal Race',
      course: 'Scratch Junior',
      courseSlug: 'scratch-junior',
      category: 'Mini-Game & Race',
      difficulty: 'Beginner (Ages 6–8)',
      gradeRange: 'Grades 1–2',
      summary: 'A two-player undersea dash where sea turtles and clownfish swim across the screen at variable speeds with bubble sound effects.',
      studentOutcome: 'Students program a multi-character race comparing different speed blocks and repeat loops to determine who reaches the coral reef first.',
      skills: ['Speed Modifiers', 'Repeat Loops', 'Touch Triggers'],
      learningConcepts: ['Relative Speed & Rate', 'Fixed Iteration Loops', 'Simultaneous Execution'],
      customizationChallenge: 'Make it your own: Add a friendly starfish obstacle that temporarily slows down whichever swimmer touches it!',
      curriculumModule: 'Module 4: Collisions & Interactive Mini Games',
      sessions: 'Session 7',
      tool: 'ScratchJr',
      previewImage: 'assets/day1.png',
      demoUrl: 'Scratch Junior.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'sjr-birthday',
      title: 'Musical Birthday Card',
      course: 'Scratch Junior',
      courseSlug: 'scratch-junior',
      category: 'Celebration Animation',
      difficulty: 'Beginner (Ages 6–8)',
      gradeRange: 'Grades 1–2',
      summary: 'An interactive celebration card where tapping birthday candles blows out the flame and plays a personal recorded celebration song.',
      studentOutcome: 'Students create a personalized greeting card using costume paint tools, sound recording blocks, and visibility toggle triggers.',
      skills: ['Hide / Show Blocks', 'Costume Paint Editor', 'Audio Playback'],
      learningConcepts: ['State Toggle (Visible/Hidden)', 'Sound Synchronization', 'User Touch Sensing'],
      customizationChallenge: 'Make it your own: Add confetti sprites that grow 3 sizes larger and spin when the final candle disappears!',
      curriculumModule: 'Module 2: Custom Characters & Voice Recording',
      sessions: 'Sessions 3–4',
      tool: 'ScratchJr',
      previewImage: 'assets/day1.png',
      demoUrl: 'Scratch Junior.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'sjr-rocket',
      title: 'Cosmic Rocket Blast Off',
      course: 'Scratch Junior',
      courseSlug: 'scratch-junior',
      category: 'Space Simulation',
      difficulty: 'Beginner (Ages 6–8)',
      gradeRange: 'Grades 1–2',
      summary: 'A space launch sequence featuring countdown timing, rocket scale growth, and a smooth flight transition into a moon landing.',
      studentOutcome: 'Students combine timing delay blocks with scale modifier blocks to simulate a realistic space rocket ignition and planetary journey.',
      skills: ['Scale Growth Blocks', 'Timing Delays', 'Scene Transition'],
      learningConcepts: ['Sequential Delays (Wait Blocks)', 'Proportional Sizing', 'Event-Driven Transitions'],
      customizationChallenge: 'Make it your own: Program a spinning alien satellite on Page 2 that beeps when the rocket approaches it!',
      curriculumModule: 'Module 3: Loops, Speed & Scene Transitions',
      sessions: 'Sessions 5–6',
      tool: 'ScratchJr',
      previewImage: 'assets/day1.png',
      demoUrl: 'Scratch Junior.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'sjr-orchestra',
      title: 'Animated Farmyard Orchestra',
      course: 'Scratch Junior',
      courseSlug: 'scratch-junior',
      category: 'Music & Soundboard',
      difficulty: 'Beginner (Ages 6–8)',
      gradeRange: 'Grades 1–2',
      summary: 'A musical interactive farm where tapping cows, ducks, and sheep plays rhythmic beats and animal sounds in harmony.',
      studentOutcome: 'Explore sound design by recording multiple audio tracks and synchronizing rhythmic movement with character hops.',
      skills: ['Audio Mixing', 'Multi-Character Tap', 'Rhythm Timing'],
      learningConcepts: ['Event-Driven Audio', 'Concurrent Playback', 'Cause & Effect'],
      customizationChallenge: 'Make it your own: Add a conductor dog sprite that starts everyone singing together when the green flag is pressed!',
      curriculumModule: 'Module 2 Extension: Audio & Character Events',
      sessions: 'Lab Practice',
      tool: 'ScratchJr',
      previewImage: 'assets/day1.png',
      demoUrl: 'Scratch Junior.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'sjr-alien-tag',
      title: 'Space Alien Tag Game',
      course: 'Scratch Junior',
      courseSlug: 'scratch-junior',
      category: 'Mini-Game & Collision',
      difficulty: 'Beginner (Ages 6–8)',
      gradeRange: 'Grades 1–2',
      summary: 'A lively game of cosmic tag where an astronaut chases a mischievous alien that bounces off the edges of the tablet screen.',
      studentOutcome: 'Students code autonomous bounce movement using repeat loops and program bump triggers that activate cheerful celebration sounds.',
      skills: ['Start-on-Bump Blocks', 'Infinite Repeat', 'Edge Bouncing'],
      learningConcepts: ['Collision Sensing', 'Continuous Motion', 'Reaction Feedback'],
      customizationChallenge: 'Make it your own: Program the alien to shrink smaller each time it gets tagged to make the game progressively harder!',
      curriculumModule: 'Module 4 Extension: Advanced Bump Triggers',
      sessions: 'Lab Practice',
      tool: 'ScratchJr',
      previewImage: 'assets/day1.png',
      demoUrl: 'Scratch Junior.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },

    // ==========================================
    // MIT SCRATCH (Grades 3–5, Ages 8–11)
    // ==========================================
    {
      id: 'scratch-galaxy',
      title: 'Cosmic Galaxy Defender',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Arcade Space Shooter',
      difficulty: 'Intermediate (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'Control a starship defending Earth from falling asteroid waves with laser cloning, energy shield power-ups, and live high-score counters.',
      studentOutcome: 'Students build a complete top-down arcade game utilizing sprite cloning for laser projectiles and broadcast signals for game-over states.',
      skills: ['Sprite Cloning', 'Broadcast Signals', 'Coordinate Math'],
      learningConcepts: ['Object Instantiation (Clones)', 'Global & Local Variables', 'Hitbox Bounding Math'],
      customizationChallenge: 'Make it your own: Add a rare golden asteroid that splits into three mini-asteroids and grants a temporary 2x score multiplier!',
      curriculumModule: 'Module 3: Advanced Game Mechanics & Cloning',
      sessions: 'Sessions 5 & 6',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#arcade',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'scratch-pharaoh',
      title: 'Maze Runner: Pharaoh\'s Tomb',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Adventure & Maze',
      difficulty: 'Intermediate (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'Navigate ancient pyramid corridors while dodging mummy patrol loops, collecting hieroglyph keys, and unlocking hidden treasure chambers.',
      studentOutcome: 'Students implement coordinate wall collision detection (touching color) and inventory tracking variables to control doors and levels.',
      skills: ['Wall Collision Detection', 'Inventory Variables', 'Patrol Pathfinding'],
      learningConcepts: ['Boundary Detection (Color Sensing)', 'Conditional Logic (If-Then)', 'State Transitions'],
      customizationChallenge: 'Make it your own: Add a torchlight mechanic where the screen is dark and only a radius around the player is visible!',
      curriculumModule: 'Module 2: Motion, Coordinates & Collisions',
      sessions: 'Sessions 3 & 4',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'scratch-flappy',
      title: 'Flappy Bird Remastered',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Physics Arcade',
      difficulty: 'Intermediate (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'A faithful recreation of the classic arcade hit featuring gravity acceleration, impulse jumps, moving pipe obstacles, and persistent high scores.',
      studentOutcome: 'Students program realistic downward gravity acceleration using a vertical velocity variable (y-vel) and dynamic pipe cloning.',
      skills: ['Gravity Physics', 'Vertical Velocity Math', 'High Score Tracking'],
      learningConcepts: ['Simulated Physics (Velocity & Acceleration)', 'Game Loop Timing', 'Cloud Variables'],
      customizationChallenge: 'Make it your own: Add a day-to-night background cycle that changes every 10 points and speeds up pipe movement!',
      curriculumModule: 'Module 4: Physics, Gravity & High Scores',
      sessions: 'Sessions 7 & 8',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'scratch-dragon',
      title: 'Virtual Pet Dragon',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Simulation & AI Logic',
      difficulty: 'Intermediate (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'Nurture an animated companion baby dragon while balancing dynamic hunger, sleep energy, and happiness gauges through interactive mini-games.',
      studentOutcome: 'Students implement a multi-variable state machine where periodic timer ticks decrease pet stats and trigger costume state changes.',
      skills: ['Multi-Variable Balancing', 'State Machine Logic', 'Interactive UI'],
      learningConcepts: ['Finite State Machines', 'Timer Loops & Decay Rates', 'Costume Animation States'],
      customizationChallenge: 'Make it your own: Add a training minigame where catching fireflies earns coins to buy custom dragon hats and accessories!',
      curriculumModule: 'Module 2 & 3: Variables, Broadcasts & State',
      sessions: 'Sessions 4–6',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'scratch-catcher',
      title: 'Fruit Catcher Arcade',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Catch-and-Score Arcade',
      difficulty: 'Beginner-Intermediate (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'Catch falling fruits in a basket while avoiding rotten items and bombs, featuring increasing drop speeds and combo multipliers.',
      studentOutcome: 'Practice random coordinate spawning (pick random x), falling velocity, and conditional score accumulation.',
      skills: ['Random Spawning', 'Conditional Scoring', 'Mouse-Following Motion'],
      learningConcepts: ['Random Number Generation', 'Variables (Score & Speed)', 'Edge Detection'],
      customizationChallenge: 'Make it your own: Add a rare golden watermelon that activates a 5-second frenzy where all falling items give double points!',
      curriculumModule: 'Module 2 Extension: Coordinates & Variables',
      sessions: 'Lab Practice',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'scratch-dj-beatmaker',
      title: 'DJ Beatmaker Synth Studio',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Music & Audio Animation',
      difficulty: 'Beginner (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'An interactive soundboard where keyboard keys trigger drum beats, synth loops, and visual equalizer bars that dance to the rhythm.',
      studentOutcome: 'Explore the Scratch Music Extension, tempo variables, and graphical soundwave visualizations.',
      skills: ['Music Extension', 'Keyboard Event Listeners', 'Graphic Equalizer FX'],
      learningConcepts: ['Event-Driven Programming', 'Audio Pitch & Tempo Variables', 'Costume Size Modulation'],
      customizationChallenge: 'Make it your own: Add a recording loop function that records a sequence of 8 beats and plays it back continuously!',
      curriculumModule: 'Module 1 Extension: Sprites, Sound & Key Events',
      sessions: 'Lab Practice',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'scratch-festive-card',
      title: 'Interactive Celebration Greeting Card',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Personalised Greeting & Story',
      difficulty: 'Beginner (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'A personalized animated card with clickable gift boxes, fireworks particle effects, and customized festive text greetings.',
      studentOutcome: 'Learn particle effects using clone fading, costume transitions, and prompt input for the recipient\'s name.',
      skills: ['Particle Cloning', 'Ask & Answer Input', 'Costume Animation'],
      learningConcepts: ['User String Inputs', 'Clone Graphic Effects (Ghost & Color)', 'Broadcast Cascades'],
      customizationChallenge: 'Make it your own: Add a sound synthesizer that plays a custom 8-note celebration chime whenever a gift box is opened!',
      curriculumModule: 'Module 1 Extension: Interactive Cards & Broadcasting',
      sessions: 'Lab Practice',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'scratch-spirograph',
      title: 'Geometric Spirograph Pen Studio',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Drawing & Mathematical Art',
      difficulty: 'Intermediate (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'Harness mathematical angles and the Scratch Pen tool to draw mesmerizing geometric mandalas and colorful spiral patterns.',
      studentOutcome: 'Students apply mathematical concepts of exterior angles (360° / sides) to generate intricate generative artwork with code.',
      skills: ['Pen Extension', 'Angle Mathematics', 'Nested Loops'],
      learningConcepts: ['Computational Geometry', 'Nested Iterations', 'Dynamic Color Shifting'],
      customizationChallenge: 'Make it your own: Add slider variables for sides, turn angle, and pen thickness so the player can design patterns live!',
      curriculumModule: 'Module 2 Extension: Loops & Pen Geometry',
      sessions: 'Lab Practice',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'scratch-brainiac-quiz',
      title: 'Brainiac Timed Trivia Quiz',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Interactive Quiz Game',
      difficulty: 'Intermediate (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'A multiplayer or solo trivia game featuring multiple-choice questions, a 15-second countdown timer, and dynamic sound feedback.',
      studentOutcome: 'Understand list data structures in Scratch to store question banks, correct answer keys, and player answer validation.',
      skills: ['List Data Structures', 'Timer Variables', 'Conditional Validation'],
      learningConcepts: ['Array/List Indexing', 'String Comparison', 'Timer Interrupts'],
      customizationChallenge: 'Make it your own: Implement a 50/50 lifeline button that hides two incorrect answer options for one round!',
      curriculumModule: 'Module 3 Extension: Lists & Data Arrays',
      sessions: 'Lab Practice',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'scratch-solar-sim',
      title: 'Solar System Orbit Simulator',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Science Simulation',
      difficulty: 'Intermediate (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'An accurate astronomical simulation where planets orbit the Sun at relative orbital speeds, with clickable planetary fact cards.',
      studentOutcome: 'Apply rotational trigonometry and custom variables to model orbital periods and interactive informational overlays.',
      skills: ['Point in Direction & Turn', 'Relative Speeds', 'UI Overlay Panels'],
      learningConcepts: ['Rotational Motion', 'Scale Factor Variables', 'Broadcast UI Popups'],
      customizationChallenge: 'Make it your own: Add a comet sprite with an eccentric elliptical orbit and a fading particle trail!',
      curriculumModule: 'Module 1 & 2 Extension: Astronomy & Motion',
      sessions: 'Lab Practice',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'scratch-brick-breaker',
      title: 'Retro Neon Brick Breaker',
      course: 'MIT Scratch',
      courseSlug: 'scratch',
      category: 'Paddle Arcade',
      difficulty: 'Intermediate-Advanced (Ages 8–11)',
      gradeRange: 'Grades 3–5',
      summary: 'Bounce a laser ball off a player paddle to destroy rows of colored bricks, featuring ball angle deflection and multi-ball powerups.',
      studentOutcome: 'Master angle reflection physics (direction = 180 - direction) and grid cloning to instantiate brick layouts.',
      skills: ['Reflection Physics', 'Grid Cloning', 'Lives & Level Progression'],
      learningConcepts: ['Trigonometric Bounce Reflection', '2D Grid Iteration', 'Win/Loss Detection'],
      customizationChallenge: 'Make it your own: Add laser power-ups dropping from broken bricks that let the paddle shoot rockets directly!',
      curriculumModule: 'Module 4 Extension: Arcade Physics & Grid Math',
      sessions: 'Lab Practice',
      tool: 'MIT Scratch 3.0',
      previewImage: 'assets/day2.png',
      demoUrl: 'Scratch.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },

    // ==========================================
    // PYTHON PROGRAMMING (Grades 6–10, Ages 11–16)
    // ==========================================
    {
      id: 'python-rpg',
      title: 'CyberQuest: Text RPG',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Terminal Adventure Game',
      difficulty: 'Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A modular command-line RPG featuring player health stats, inventory dictionaries, random monster encounters, and battle calculation loops.',
      studentOutcome: 'Students write structured modular Python code using while loops, dictionary state trackers, and randomized combat algorithms.',
      skills: ['Dictionaries & Lists', 'While Loops', 'Modular Functions'],
      learningConcepts: ['State Management', 'Boolean Game Loops', 'Randomization & Probability'],
      customizationChallenge: 'Make it your own: Add an equipment inventory system where swords give +5 attack and potions restore 25 HP during combat!',
      curriculumModule: 'Module 3 & 4: Data Structures & Game Logic',
      sessions: 'Sessions 6–8',
      tool: 'Python 3.11 / VS Code',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#sandbox',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'python-cipher',
      title: 'Caesar Cipher Messenger',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Cybersecurity & Cryptography',
      difficulty: 'Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'Encrypt and decrypt secret messages using mathematical ASCII character shifting algorithms, secret keys, and input sanitization.',
      studentOutcome: 'Understand character encoding, ordinal conversion (ord() / chr()), modular arithmetic, and string iteration.',
      skills: ['String Manipulation', 'ASCII Math', 'Functions with Parameters'],
      learningConcepts: ['Character Encoding (ASCII)', 'Modulo Operator (%)', 'Input Sanitization'],
      customizationChallenge: 'Make it your own: Add a brute-force decryption mode that tests all 25 possible shift keys and prints every possible variation!',
      curriculumModule: 'Module 2: Functions, Strings & Algorithms',
      sessions: 'Sessions 3 & 4',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'python-flashcard',
      title: 'Study Flashcard Bot',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Productivity & CLI Tool',
      difficulty: 'Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'An interactive timed study quiz engine that tracks question accuracy, calculates percentage scores, and logs study sessions to text files.',
      studentOutcome: 'Students practice file reading and writing (open(), with), timer tracking using the time module, and percentage score math.',
      skills: ['File I/O (Read/Write)', 'Time Module', 'Data Lists'],
      learningConcepts: ['Persistent Storage', 'Performance Metrics', 'Exception Handling (try/except)'],
      customizationChallenge: 'Make it your own: Automatically save missed questions to a separate review_later.txt file for targeted practice!',
      curriculumModule: 'Module 3: Lists, Tuples & File Logging',
      sessions: 'Sessions 5 & 6',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'python-weather',
      title: 'Weather Data Analyzer',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Data Utility & Analytics',
      difficulty: 'Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A command-line tool that parses multi-city temperature logs, converts Fahrenheit to Celsius, and calculates minimum, maximum, and average temps.',
      studentOutcome: 'Students learn data processing pipelines: parsing lists of numbers, typecasting inputs, and generating formatted console summary reports.',
      skills: ['Math Algorithms', 'Typecasting (int/float)', 'Formatted Strings (f-strings)'],
      learningConcepts: ['Statistical Aggregations (Min/Max/Mean)', 'List Comprehensions', 'Formatted Console Reporting'],
      customizationChallenge: 'Make it your own: Add a text-based ASCII bar chart to visualize temperature variations across 7 days!',
      curriculumModule: 'Module 4 & 5: Data Analysis & Capstone',
      sessions: 'Sessions 9 & 10',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'python-calc',
      title: 'Smart Command-Line Calculator',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Starter Utility',
      difficulty: 'Beginner (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A robust console calculator supporting addition, subtraction, multiplication, division, exponents, and division-by-zero protection.',
      studentOutcome: 'Master user input handling (input()), floating-point conversions, conditional branching, and error handling.',
      skills: ['Arithmetic Operators', 'Conditional Branches (if/elif/else)', 'Input Validation'],
      learningConcepts: ['Data Types & Typecasting', 'Input Validation', 'ZeroDivisionError Prevention'],
      customizationChallenge: 'Make it your own: Add a memory feature (M+ and MR) allowing the user to store and recall the previous calculation!',
      curriculumModule: 'Module 1 Extension: Variables, Input & Arithmetic',
      sessions: 'Lab Practice',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'python-guessing',
      title: 'Number Guessing AI with Binary Hints',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Algorithm Game',
      difficulty: 'Beginner (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A secret number guessing game where the computer gives "Too High" / "Too Low" clues and tracks the optimal binary search guess count.',
      studentOutcome: 'Understand while loops, comparison operators, and how algorithmic binary search finds numbers in log2(N) steps.',
      skills: ['While Loops', 'Random Module', 'Counter Variables'],
      learningConcepts: ['Binary Search Logic', 'Loop Termination Conditions', 'Score Rating Systems'],
      customizationChallenge: 'Make it your own: Reverse the roles! Let the player pick a secret number and write an algorithm where Python guesses it in 7 turns!',
      curriculumModule: 'Module 1 & 2 Extension: Loops & Comparison Logic',
      sessions: 'Lab Practice',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'python-quiz-engine',
      title: 'Timed Trivia Quiz Engine',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Interactive Quiz',
      difficulty: 'Beginner-Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A command-line trivia game with multiple-choice questions, randomized question order, answer validation, and final letter grades.',
      studentOutcome: 'Structure data using lists of dictionaries, loop through questions, and calculate percentage performance.',
      skills: ['List of Dictionaries', 'For Loops', 'String Methods (.lower/.strip)'],
      learningConcepts: ['Data Collection Traversal', 'String Normalization', 'Grade Threshold Logic'],
      customizationChallenge: 'Make it your own: Add a timer using time.time() that deducts points if a question takes longer than 10 seconds to answer!',
      curriculumModule: 'Module 2 Extension: Loops & Collections',
      sessions: 'Lab Practice',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'python-rps',
      title: 'Rock-Paper-Scissors AI Challenger',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Logic Game',
      difficulty: 'Beginner (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A classic decision game against the computer featuring round counters, match history, and a basic pattern-learning computer opponent.',
      studentOutcome: 'Build complex conditional decision matrices, implement the random.choice() method, and track win-streak records.',
      skills: ['Compound Conditionals (and/or)', 'Random Module', 'Win-Streak State'],
      learningConcepts: ['Decision Tree Architecture', 'Input Validation Loops', 'Stateful Counters'],
      customizationChallenge: 'Make it your own: Add "Rock-Paper-Scissors-Lizard-Spock" with expanded 5-way conditional rules!',
      curriculumModule: 'Module 2 Extension: Conditionals & Randomization',
      sessions: 'Lab Practice',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'python-todo',
      title: 'CLI Daily Task Manager',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Productivity Tool',
      difficulty: 'Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A clean command-line task organizer to add, view, mark complete, and remove daily homework tasks and coding milestones.',
      studentOutcome: 'Implement full CRUD (Create, Read, Update, Delete) list operations with index management and formatted menu navigation.',
      skills: ['List Methods (.append, .pop)', 'While Loop Menus', 'Index Boundary Checks'],
      learningConcepts: ['CRUD Architecture', 'Zero-Indexed Data', 'User Experience in Terminal'],
      customizationChallenge: 'Make it your own: Add priority tags ([HIGH], [MED], [LOW]) and sort tasks by urgency before printing!',
      curriculumModule: 'Module 3 Extension: Data Structures & Lists',
      sessions: 'Lab Practice',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'python-timer',
      title: 'Live Terminal Pomodoro Timer',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Console Utility',
      difficulty: 'Beginner-Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A 25-minute study timer with dynamic terminal countdowns (04:59), sound bell alerts, and short break notifications.',
      studentOutcome: 'Learn time arithmetic (divmod for minutes and seconds), time.sleep(), and cursor carriage return (\\r) terminal animation.',
      skills: ['Time Module', 'Divmod Math', 'Terminal Overwrite (\\r)'],
      learningConcepts: ['Time Delta Calculations', 'Non-Buffering Output', 'Focus Routine Automation'],
      customizationChallenge: 'Make it your own: Add a text-based ASCII progress bar [██████░░░░] 60% that fills smoothly as the timer runs!',
      curriculumModule: 'Module 2 Extension: Time & Loops',
      sessions: 'Lab Practice',
      tool: 'Python 3.11',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },
    {
      id: 'python-turtle',
      title: 'Turtle Geometric Mandala Art Generator',
      course: 'Python Programming',
      courseSlug: 'python',
      category: 'Creative Art & Graphics',
      difficulty: 'Beginner (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'Draw colorful algorithmic spirographs, geometric mandalas, and fractal trees using Python\'s built-in standard turtle graphics library.',
      studentOutcome: 'Apply Cartesian coordinate geometry, RGB color generation, and nested loops to create generative computational artwork.',
      skills: ['Turtle Module', 'RGB Color Maps', 'Nested For Loops'],
      learningConcepts: ['Coordinate Geometry (X/Y)', 'Algorithmic Symmetry', 'Procedural Generation'],
      customizationChallenge: 'Make it your own: Program a recursive tree function where branches sprout smaller twigs at 30-degree angles!',
      curriculumModule: 'Module 1 Extension: Loops & Turtle Graphics',
      sessions: 'Lab Practice',
      tool: 'Python 3.11 (Turtle)',
      previewImage: 'assets/day3.png',
      demoUrl: 'Python.dc.html#projects',
      verificationStatus: 'Curriculum Extension Idea (Proposed)'
    },

    // ==========================================
    // HTML & CSS (Grades 6–10, Ages 11–16)
    // ==========================================
    {
      id: 'web-portfolio',
      title: 'Personal Creator Portfolio',
      course: 'HTML & CSS',
      courseSlug: 'html-css',
      category: 'Bio & Portfolio Site',
      difficulty: 'Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A modern personal website introducing hobbies, projects, skills, and contact links with sleek typography and card layouts.',
      studentOutcome: 'Code semantic HTML5 markup, link external Google Fonts, and design clean CSS card components using the box model.',
      skills: ['HTML5 Semantic Tags', 'CSS Box Model', 'Google Fonts'],
      learningConcepts: ['Document Object Hierarchy', 'Margin & Padding Geometry', 'CSS Variables'],
      customizationChallenge: 'Make it your own: Add an interactive CSS theme switcher that toggles between Dark Mode and Light Mode!',
      curriculumModule: 'Module 1 & 2: HTML5 Foundations & Modern Styling',
      sessions: 'Sessions 2–4',
      tool: 'HTML5, CSS3 & GitHub Pages',
      previewImage: 'assets/day4.png',
      demoUrl: 'HTML and CSS.dc.html#browser',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'web-fanpage',
      title: 'Athlete / Celebrity Fan Tribute Page',
      course: 'HTML & CSS',
      courseSlug: 'html-css',
      category: 'Multimedia Tribute Page',
      difficulty: 'Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A multimedia tribute site featuring embedded video highlights, career stat tables, and an interactive hover image gallery.',
      studentOutcome: 'Embed responsive iframes, style multi-column HTML tables, and build smooth CSS hover effects on image galleries.',
      skills: ['Media Embedding (iframe)', 'HTML Tables', 'CSS Hover Transforms'],
      learningConcepts: ['External Asset Integration', 'Tabular Data Architecture', 'Micro-Interactions (Transitions)'],
      customizationChallenge: 'Make it your own: Create an interactive timeline section showing career milestones with glowing CSS badges!',
      curriculumModule: 'Module 2 & 3: Media, Tables & Card Grids',
      sessions: 'Sessions 4–6',
      tool: 'HTML5 & CSS3',
      previewImage: 'assets/day4.png',
      demoUrl: 'HTML and CSS.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'web-ecoplanet',
      title: 'EcoPlanet Campaign Landing Page',
      course: 'HTML & CSS',
      courseSlug: 'html-css',
      category: 'Cause Campaign Site',
      difficulty: 'Intermediate (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A high-impact environmental cause landing page with hero banners, statistics cards, and an interactive petition form layout.',
      studentOutcome: 'Master CSS Flexbox alignment, accessible HTML form controls (input, select, button), and hero section design.',
      skills: ['Flexbox Alignment', 'HTML5 Forms', 'Gradient Backgrounds'],
      learningConcepts: ['1D Flexible Layouts (Flexbox)', 'Form Accessibility & Input Types', 'Visual Hierarchy'],
      customizationChallenge: 'Make it your own: Add a simulated counter element that updates the number of petition signatures collected!',
      curriculumModule: 'Module 3 & 4: Flexbox Layouts & Responsive Design',
      sessions: 'Sessions 6–8',
      tool: 'HTML5 & CSS3',
      previewImage: 'assets/day4.png',
      demoUrl: 'HTML and CSS.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    },
    {
      id: 'web-arcade-hub',
      title: 'Retro 90s Arcade Gaming Portal',
      course: 'HTML & CSS',
      courseSlug: 'html-css',
      category: 'Multi-Page Capstone Portal',
      difficulty: 'Advanced (Grades 6–10)',
      gradeRange: 'Grades 6–10',
      summary: 'A multi-page gaming portal showcasing games, descriptions, leaderboard grids, and responsive desktop/mobile navigation.',
      studentOutcome: 'Build a multi-page website architecture with consistent navigation bars, CSS Grid game cards, and media queries for mobile.',
      skills: ['CSS Grid', 'Media Queries (@media)', 'Multi-Page Linking'],
      learningConcepts: ['2D Grid Systems', 'Responsive Mobile Breakpoints', 'Deployment & Hosting'],
      customizationChallenge: 'Make it your own: Embed your actual Scratch games right into the portal using Scratch iframe embeds so visitors can play directly!',
      curriculumModule: 'Module 4 & 5: CSS Grid, Mobile Responsive & Live Deployment',
      sessions: 'Sessions 8–10',
      tool: 'HTML5, CSS3 & GitHub Pages',
      previewImage: 'assets/day4.png',
      demoUrl: 'HTML and CSS.dc.html#projects',
      verificationStatus: 'Core Curriculum'
    }
  ];

  // Expose to window
  window.CODJU_PROJECTS = CODJU_PROJECTS;

  // Helper function to find project by ID
  window.getCodjuProjectById = function (id) {
    return CODJU_PROJECTS.find(p => p.id === id);
  };

  // Helper function to filter projects by course or category
  window.filterCodjuProjects = function (filterObj) {
    return CODJU_PROJECTS.filter(p => {
      if (filterObj.course && filterObj.course !== 'all' && p.courseSlug !== filterObj.course) {
        return false;
      }
      if (filterObj.category && filterObj.category !== 'all') {
        const cat = p.category.toLowerCase();
        if (filterObj.category === 'games' && !cat.includes('game') && !cat.includes('arcade')) return false;
        if (filterObj.category === 'stories' && !cat.includes('story') && !cat.includes('animation') && !cat.includes('celebration')) return false;
        if (filterObj.category === 'apps' && !cat.includes('cli') && !cat.includes('terminal') && !cat.includes('tool') && !cat.includes('utility') && !cat.includes('quiz') && !cat.includes('cryptography')) return false;
        if (filterObj.category === 'web' && !cat.includes('site') && !cat.includes('page') && !cat.includes('portal')) return false;
      }
      if (filterObj.status && filterObj.status !== 'all') {
        if (filterObj.status === 'core' && !p.verificationStatus.includes('Core')) return false;
        if (filterObj.status === 'extension' && !p.verificationStatus.includes('Extension')) return false;
      }
      return true;
    });
  };

  /**
   * Project Details Modal Controller
   */
  window.openCodjuProjectModal = function (projectId) {
    const project = window.getCodjuProjectById(projectId);
    if (!project) return;

    let modal = document.getElementById('project-detail-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'project-detail-modal';
      modal.className = 'p-modal-overlay';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'p-modal-title');
      modal.innerHTML = `
        <div class="p-modal-backdrop" id="p-modal-backdrop"></div>
        <div class="p-modal-container">
          <button type="button" class="p-modal-close" id="p-modal-close" aria-label="Close Project Details">&times;</button>
          <div class="p-modal-body" id="p-modal-body"></div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('p-modal-close').addEventListener('click', window.closeCodjuProjectModal);
      document.getElementById('p-modal-backdrop').addEventListener('click', window.closeCodjuProjectModal);
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') window.closeCodjuProjectModal();
      });
    }

    const isCore = project.verificationStatus.includes('Core');
    const statusBadge = isCore 
      ? `<span class="badge-status badge-status--core">✓ Verified Core Curriculum</span>`
      : `<span class="badge-status badge-status--proposed">💡 Curriculum Extension Idea (Proposed)</span>`;

    const bodyEl = document.getElementById('p-modal-body');
    bodyEl.innerHTML = `
      <div class="p-modal-header">
        <div class="p-modal-meta">
          <span class="p-modal-track">${project.course}</span>
          <span class="p-modal-dot">·</span>
          <span class="p-modal-grade">${project.gradeRange}</span>
          <span class="p-modal-dot">·</span>
          <span class="p-modal-cat">${project.category}</span>
        </div>
        <h2 class="p-modal-title" id="p-modal-title">${project.title}</h2>
        <div style="margin-top: 8px;">${statusBadge}</div>
      </div>

      <div class="p-modal-summary">
        <p>${project.summary}</p>
      </div>

      <div class="p-modal-grid">
        <!-- Section 1: The Result (Outcome) -->
        <div class="p-modal-block">
          <div class="p-modal-block__header">
            <span class="p-modal-icon">🎯</span>
            <h3 class="p-modal-block__title">What The Student Creates (Outcome)</h3>
          </div>
          <p class="p-modal-text">${project.studentOutcome}</p>
        </div>

        <!-- Section 2: How It Works (Computational Concepts) -->
        <div class="p-modal-block">
          <div class="p-modal-block__header">
            <span class="p-modal-icon">⚙️</span>
            <h3 class="p-modal-block__title">Core Concepts &amp; Computational Thinking</h3>
          </div>
          <div class="p-modal-concepts">
            ${project.learningConcepts.map(c => `<span class="concept-chip">${c}</span>`).join('')}
          </div>
        </div>

        <!-- Section 3: Make It Your Own (Challenge) -->
        <div class="p-modal-block p-modal-block--highlight">
          <div class="p-modal-block__header">
            <span class="p-modal-icon">💡</span>
            <h3 class="p-modal-block__title">"Make It Your Own" Extension Challenge</h3>
          </div>
          <p class="p-modal-text">${project.customizationChallenge}</p>
        </div>

        <!-- Section 4: Curriculum Link & Tools -->
        <div class="p-modal-block">
          <div class="p-modal-block__header">
            <span class="p-modal-icon">📚</span>
            <h3 class="p-modal-block__title">Curriculum Module &amp; Tools</h3>
          </div>
          <div class="p-modal-curr-info">
            <div><strong>Taught in:</strong> ${project.curriculumModule}</div>
            <div><strong>Session Scope:</strong> ${project.sessions || 'Standard Cohort'}</div>
            <div><strong>Coding Tool:</strong> ${project.tool}</div>
          </div>
        </div>
      </div>

      <div class="p-modal-footer">
        <a href="${project.demoUrl}" class="p-modal-action-btn" onclick="window.closeCodjuProjectModal()">
          <span>Explore Track on ${project.course}</span> &rarr;
        </a>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeCodjuProjectModal = function () {
    const modal = document.getElementById('project-detail-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

})();
