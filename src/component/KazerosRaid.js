import React, { useState, useEffect } from 'react';
import '../CSS/LegionRaid.css';
import ekiImg from '../image/baltan.jpg'; // Placeholder image, replace with actual

const KazerosRaid = () => {
  const [activeTab, setActiveTab] = useState('eki');
  const [selectedOptions, setSelectedOptions] = useState({
    battleLevel: [],
    characteristic: [],
    abilityStone: [],
    skillPoint: [],
    engraving: [],
    equipmentSetEffect: [],
    gem: [],
    card: [],
    elixir: [],
    transcendence: []
  });

  const [presetName, setPresetName] = useState('');
  const [showSavePresetModal, setShowSavePresetModal] = useState(false);
  const [showLoadPresetModal, setShowLoadPresetModal] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(null);

  const aliasMap = {
    battleLevel: '전투 레벨',
    characteristic: '특성합',
    abilityStone: '어빌리티 스톤',
    skillPoint: '스킬 포인트',
    engraving: '각인',
    equipmentSetEffect: '장비 세트 효과',
    gem: '보석',
    card: '카드',
    elixir: '엘릭서',
    transcendence: '초월'
  };

  const options = {
    battleLevel: ['50', '55', '60'],
    characteristic: ['2100 이상', '2200 이상', '2300 이상'],
    abilityStone: ['유물', '고대 I', '고대 II', '고대 III', '고대 IV'],
    skillPoint: ['390', '400', '410', '420'],
    engraving: ['3333', '33333', '333331', '333332'],
    equipmentSetEffect: ['1레벨', '2레벨', '3레벨'],
    gem: ['5', '7', '9', '10'],
    card: ['알고보면 12', '알고보면 18', '알고보면 30', '남바절 12', '세구빛 12', '세구빛 18', '세구빛 30', '암구빛 12', '암구빛 18', '암구빛 30'],
    elixir: ['엘릭서0', '엘릭서 35', '엘릭서 40'],
    transcendence: ['초월 x', '초월 25', '초월 50', '초월 75', '초월 100', '초월 125']
  };

  useEffect(() => {
    const savedOptions = JSON.parse(localStorage.getItem(activeTab));
    if (savedOptions) {
      setSelectedOptions(savedOptions);
    }
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleOptionClick = (category, option) => {
    setSelectedOptions(prevState => {
      const currentOptions = prevState[category];
      const isSelected = currentOptions.includes(option);
      let newOptions = [];

      if (isSelected) {
        newOptions = currentOptions.filter(item => item !== option);
      } else {
        newOptions = [option];
      }

      return { ...prevState, [category]: newOptions };
    });
  };

  const handleSave = () => {
    setShowSavePresetModal(true);
  };

  const savePreset = () => {
    if (presetName.trim() === '') {
      return;
    }
    localStorage.setItem(`${activeTab}-${presetName}`, JSON.stringify(selectedOptions));
    setShowSavePresetModal(false);
  };

  const handleReset = () => {
    setSelectedOptions({
      battleLevel: [],
      characteristic: [],
      abilityStone: [],
      skillPoint: [],
      engraving: [],
      equipmentSetEffect: [],
      gem: [],
      card: [],
      elixir: [],
      transcendence: []
    });
  };

  const handleLoadPreset = () => {
    if (selectedPreset) {
      const savedOptions = JSON.parse(localStorage.getItem(selectedPreset));
      if (savedOptions) {
        setSelectedOptions(savedOptions);
        setShowLoadPresetModal(false);
      }
    }
  };

  const deletePreset = () => {
    if (selectedPreset) {
      localStorage.removeItem(selectedPreset);
      setShowLoadPresetModal(false);
    }
  };

  const renderPresetList = () => {
    const presetKeys = Object.keys(localStorage).filter(key => key.startsWith(activeTab));
    return presetKeys.map(preset => (
      <div key={preset} className="preset-item" onClick={() => setSelectedPreset(preset)}>
        <span>{preset.replace(`${activeTab}-`, '')}</span>
      </div>
    ));
  };

  const renderTabContent = (tabId) => {
    const content = {
      eki: { title: '에키드나 스펙' }
    };

    const selectedContent = content[tabId];

    return (
      <div className="content active">
        <h2>{selectedContent.title}</h2>
        <div className="preset-menu">
          <button onClick={handleReset}>초기화</button>
          <div className="preset-dropdown">
            <button onClick={() => setShowLoadPresetModal(true)}>불러오기</button>
            <button onClick={handleSave}>저장하기</button>
          </div>
        </div>
        {showSavePresetModal && (
          <div className="modal-overlay-save">
            <div className="modal-content save-modal">
              <h2>프리셋 저장</h2>
              <input
                type="text"
                placeholder="프리셋 이름"
                value={presetName}
                onChange={(e) => setPresetName(e.target.value)}
              />
              <button onClick={savePreset}>저장</button>
              <button onClick={() => setShowSavePresetModal(false)}>취소</button>
            </div>
          </div>
        )}
        {showLoadPresetModal && (
          <div className="modal-overlay-reloading">
            <div className="modal-content load-modal">
              <h2>프리셋 불러오기</h2>
              <div className="preset-list">{renderPresetList()}</div>
              <div className="preset-actions">
                <button onClick={handleLoadPreset} disabled={!selectedPreset}>적용</button>
                <button onClick={deletePreset} disabled={!selectedPreset}>삭제</button>
                <button onClick={() => setShowLoadPresetModal(false)}>취소</button>
              </div>
            </div>
          </div>
        )}
        <div className="spec-card">
          {Object.keys(options).map(category => (
            <div key={category} className="spec-row">
              <label>{aliasMap[category]}</label>
              <div className="checkbox-wrapper">
                {options[category].map(option => (
                  <div key={option} className="checkbox-container">
                    <input
                      type="checkbox"
                      id={`${category}-${option}`}
                      checked={selectedOptions[category].includes(option)}
                      onChange={() => handleOptionClick(category, option)}
                    />
                    <label
                      htmlFor={`${category}-${option}`}
                      className={selectedOptions[category].includes(option) ? 'selected' : ''}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="tab-container">
      <div className="tab-menu">
        <button onClick={() => handleTabClick('eki')} className={activeTab === 'eki' ? 'active' : ''}>
          <img src={ekiImg} alt="에키드나" />
          에키드나
        </button>
      </div>

      <div className="tab-content">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default KazerosRaid;
