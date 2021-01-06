import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ text, label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const ref1 = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      console.log('body click');
      if (ref1.current && ref1.current.contains(event.target)) return;
      setOpen(false);
      console.log('body setOpen fired');
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          console.log('Item clicked');
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref1} className="ui form">
      <h1
        style={{
          textAlign: 'center',
          color: `${selected.value}`,
        }}
      >
        {text}
      </h1>
      <div className="field">
        <div className="label">{label}</div>
        <div
          onClick={() => {
            console.log('Dropdown clicked');
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
