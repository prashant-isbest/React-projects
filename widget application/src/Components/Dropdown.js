import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const ref1 = useRef();

  useEffect(() => {
    document.body.addEventListener(
      'click',
      (event) => {
        console.log('body click');
        if (ref1.current && ref1.current.contains(event.target)) return;
        setOpen(false);
        console.log('body setOpen fired');
      },
      { capture: true }
    );
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
      <div className="field">
        <div className="label">Select something</div>
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
