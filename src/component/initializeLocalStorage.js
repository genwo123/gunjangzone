// src/utils/initializeLocalStorage.js

export const initializeLocalStorage = () => {
    const legionRaidDefaults = {
      'baltan-default': {
      battleLevel: '50,55,60',
      characteristic: '2100 이상,2200 이상,2300 이상',
      abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
      skillPoint: '390,400,410,420',
      engraving: '3333,33333,333331,333332',
      equipmentSetEffect: '1LV,2LV,3LV',
      gem: '5LV,7LV,9LV,10LV',
      card: '알고보면 12,알고보면 18,알고보면 30,남바절 12,남바절 30,세구빛 12,세구빛 18,세구빛 30,암구빛 12,암구빛 18,암구빛 30,너다계 18,너다계 30,창달 30',
      elixir: '엘릭서 0,엘릭서 35,엘릭서 40,엘릭서 40+',
      transcendence: '초월 X,초월 25,초월 50,초월 75,초월 100,초월 125'
      },
    
      'biakis-default': {
      battleLevel: '50,55,60',
      characteristic: '2100 이상,2200 이상,2300 이상',
      abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
      skillPoint: '390,400,410,420',
      engraving: '3333,33333,333331,333332',
      equipmentSetEffect: '1LV,2LV,3LV',
      gem: '5LV,7LV,9LV,10LV',
      card: '알고보면 12,알고보면 18,알고보면 30,남바절 12,남바절 30,세구빛 12,세구빛 18,세구빛 30,암구빛 12,암구빛 18,암구빛 30,너다계 18,너다계 30,창달 30',
      elixir: '엘릭서 0,엘릭서 35,엘릭서 40,엘릭서 40+',
      transcendence: '초월 X,초월 25,초월 50,초월 75,초월 100,초월 125'
      },
    
      'kuxseiten-default': {
      battleLevel: '50,55,60',
      characteristic: '2100 이상,2200 이상,2300 이상',
      abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
      skillPoint: '410,420',
      engraving: '33333,333331,333332',
      equipmentSetEffect: '1LV,2LV,3LV',
      gem: '5LV,7LV,9LV,10LV',
      card: '알고보면 18,알고보면 30,남바절 30,세구빛 12,세구빛 18,세구빛 30,암구빛 12,암구빛 18,암구빛 30,너다계 18,너다계 30,창달 30',
      elixir: '엘릭서 0,엘릭서 35,엘릭서 40,엘릭서 40+',
      transcendence: '초월 X,초월 25,초월 50,초월 75,초월 100,초월 125'
      },
    
      'avrelshud-default': {
      battleLevel: '55,60',
      characteristic: '2200 이상,2300 이상',
      abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
      skillPoint: '410,420',
      engraving: '33333,333331,333332',
      equipmentSetEffect: '1LV,2LV,3LV',
      gem: '7LV,9LV,10LV',
      card: '알고보면 18,알고보면 30,남바절 30,세구빛 18,세구빛 30,너다계 18,너다계 30,창달 30',
      elixir: '엘릭서 0,엘릭서 35,엘릭서 40,엘릭서 40+',
      transcendence: '초월 X,초월 25,초월 50,초월 75,초월 100,초월 125' 
     },
    
      'ilyakan-default': {
      battleLevel: '55,60',
      characteristic: '2300 이상',
      abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
      skillPoint: '410,420',
      engraving: ',333331,333332',
      equipmentSetEffect: '3LV',
      gem: '7LV,9LV,10LV',
      card: '알고보면 30,남바절 30,세구빛 18,세구빛 30,너다계 18,너다계 30,',
      elixir: '엘릭서 0,엘릭서 35,엘릭서 40,엘릭서 40+',
      transcendence: '초월 X,초월 25,초월 50,초월 75,초월 100,초월 125' 
     },
    'kame-default': {
      battleLevel: '60',
      characteristic: '2300 이상',
      abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
      skillPoint: '410,420',
      engraving: '333331,333332',
      equipmentSetEffect: '3LV',
      gem: '7LV,9LV,10LV',
      card: '남바절 30,세구빛 18,세구빛 30',
      elixir: '엘릭서 40,엘릭서 40+',
      transcendence: '초월 X,초월 25,초월 50,초월 75,초월 100,초월 125'  
    },
  };

  const abyssRaidDefaults = {
    'kayangel-default': {
      battleLevel: '55,60',
      characteristic: '2200 이상,2300 이상',
      abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
      skillPoint: '410,420',
      engraving: '33333,333331,333332',
      equipmentSetEffect: '2LV,3LV',
      gem: '7LV,9LV,10LV',
      card: '알고보면 18,알고보면 30,남바절 30,암구빛 12,암구빛 18,암구빛 30,너다계 18,너다계 30,창달 30',
      elixir: '엘릭서 0,엘릭서 35,엘릭서 40,엘릭서 40+',
      transcendence: '초월 X,초월 25,초월 50,초월 75,초월 100,초월 125'  },
    
    'ivorytower-default': {
      battleLevel: '60',
      characteristic: '2300 이상',
      abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
      skillPoint: '420',
      engraving: '333331,333332',
      equipmentSetEffect: '3LV',
      gem: '7LV,9LV,10LV',
      card: '남바절 30,세구빛 18,세구빛 30,너다계 18,너다계 30',
      elixir: '엘릭서 0,엘릭서 35,엘릭서 40,엘릭서 40+',
      transcendence: '초월 X,초월 25,초월 50,초월 75,초월 100,초월 125' 
     }
  };
  
    const kazerosRaidDefaults = {
        'eki-default': {
        battleLevel: '60',
        characteristic: '2300 이상',
        abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
        skillPoint: '420',
        engraving: '333331,333332',
        equipmentSetEffect: '3LV',
        gem: '9LV,10LV',
        card: '세구빛 18,세구빛 30,남바절 30',
        elixir: '엘릭서 40,엘릭서 40+',
        transcendence: '초월 50,초월 75,초월 100,초월 125'
      }
    };
  
    const epicRaidDefaults = {
      'Behemoth-default': {
        battleLevel: '60',
        characteristic: '2300 이상',
        abilityStone: '유물,고대 I,고대 II,고대 III,고대 IV',
        skillPoint: '420',
        engraving: '333331,333332',
        equipmentSetEffect: '3LV',
        gem: '9LV,10LV',
        card: '세구빛18,세구빛30,남바절30',
        elixir: '엘릭서 40,엘릭서 40+',
        transcendence: '초월100,초월125'
      }
    };
  
    // 로컬 스토리지에 저장
    Object.keys(legionRaidDefaults).forEach(key => {
      localStorage.setItem(key, JSON.stringify(legionRaidDefaults[key]));
    });
  
    Object.keys(abyssRaidDefaults).forEach(key => {
      localStorage.setItem(key, JSON.stringify(abyssRaidDefaults[key]));
    });
  
    Object.keys(kazerosRaidDefaults).forEach(key => {
      localStorage.setItem(key, JSON.stringify(kazerosRaidDefaults[key]));
    });
  
    Object.keys(epicRaidDefaults).forEach(key => {
      localStorage.setItem(key, JSON.stringify(epicRaidDefaults[key]));
    });
  };
  