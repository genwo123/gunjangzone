import React, { useState, useEffect } from 'react';
import { fetchPartyProfiles } from './apiService';
import '../CSS/Party.css';

const partyMembers = [
  "빛쟁인거니",
  "김실순",
  "YWKAS",
  "은빛물결호수",
  "뚜띠될거니",
  "남실순",
  "쁘허될거니",
  "우기시치",
];

const synergyData = {
  "치명타 적중률": ["배틀마스터", "건슬링어", "아르카나", "데빌헌터", "스트라이커", "기상술사"],
  "받는 피해 증가": ["소울이터", "소서리스", "버서커", "데모닉", "호크아이", "브레이커", "인파이터", "슬레이어"],
  "공격력 증가": ["기공사", "스카우터", "홀리나이트", "바드", "도화가"],
  "방어력 감소": ["워로드", "서머너", "블래스터", "디스트로이어", "리퍼"],
  "백헤드 피해 증가": ["워로드", "블레이드"],
  "치명타 피해량 증가": ["창술사"],
  "낙인":["바드","홀리나이트","도화가"],
};

const Party = ({ selectedOptions, apiMode }) => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const data = await fetchPartyProfiles(partyMembers);
        setProfiles(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadProfiles();
  }, [selectedOptions]);



  const renderRows = () => {
    return profiles.map((profile, index) => {
      const synergyList = Object.keys(synergyData).reduce((acc, key) => {
        if (synergyData[key].includes(profile.CharacterClassName)) {
          acc.push(key);
        }
        return acc;
      }, []).join(', ');
      const passStatus = index % 3 === 0 ? "O" : "X";
      //const passStatus = determinePassStatus(profile, selectedOptions);
      const position = isSupportClass(profile.CharacterClassName) ? "서포터" : "딜러";

      return (
        <tr key={index}>
          <td>{profile.CharacterName}</td>
          <td>{profile.CharacterClassName}</td>
          <td>{position}</td>
          <td>{passStatus}</td>
          <td>{synergyList}</td>
          <p>{determinePassStatus}</p>
        </tr>
        
      );
    });
  };

  return (
    <div className="party-container">
      <h2>군장 검사</h2>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>닉네임</th>
            <th>클래스</th>
            <th>포지션</th>
            <th>합/불 여부</th>
            <th>시너지</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Party;

const determinePassStatus = (profile, selectedOptions) => {
  if (!selectedOptions) {
    console.error('selectedOptions is undefined');
    return "X";
  }

  const {
    battleLevel = [],
    skillPoint = [],
    gem = [],
    characteristic = [],
    abilityStone = [],
    engraving = [],
    equipmentSetEffect = [],
    card = [],
    elixir = [],
    transcendence = []
  } = selectedOptions;

  const totalCharacteristic = profile.totalCharacteristic;
  const battleLevelCondition = battleLevel.some(level => profile.CharacterLevel >= parseInt(level));
  const skillPointCondition = skillPoint.some(point => profile.TotalSkillPoint >= parseInt(point));
  const gemCondition = gem.some(level => profile.Gem && profile.Gem.includes(level));
  const characteristicCondition = characteristic.some(value => totalCharacteristic >= parseInt(value.replace(' 이상', '')));
  const abilityStoneCondition = abilityStone.includes(profile.AbilityStone);
  const engravingCondition = engraving.some(engr => profile.Engraving && profile.Engraving.includes(engr));
  const equipmentSetEffectCondition = equipmentSetEffect.includes(profile.EquipmentSetEffect);
  const cardCondition = card.includes(profile.Card);
  const elixirCondition = elixir.includes(profile.Elixir);
  const transcendenceCondition = transcendence.includes(profile.Transcendence);

  return (
    battleLevelCondition &&
    skillPointCondition &&
    gemCondition &&
    characteristicCondition &&
    abilityStoneCondition &&
    engravingCondition &&
    equipmentSetEffectCondition &&
    cardCondition &&
    elixirCondition &&
    transcendenceCondition
  ) ? "O" : "X";
};

const isSupportClass = (characterClass) => {
  const supportClasses = ["홀리나이트", "바드", "도화가"];
  return supportClasses.includes(characterClass);
};
