import React from 'react';
import PropTypes from 'prop-types';

const colorCodes = [
    '#EFEFEF',
    '#E5E3E3',
    '#A8A7A7',
    '#727171',
    '#0F0F0F',
    '#F9F9CD',
    '#FFFF78',
    '#FFF800',
    '#FCD806',
    '#FFBC00',
    '#FCE55E',
    '#FFD93B',
    '#F9B862',
    '#EF7D00',
    '#EF5A0F',
    '#FC9688',
    '#FF5450',
    '#F41414',
    '#DD2A2A',
    '#AF0000',
    '#F291A6',
    '#CC4068',
    '#A82C65',
    '#821165',
    '#590951',
    '#F0BEF4',
    '#E46CEA',
    '#B07FEF',
    '#8633BC',
    '#5B0A4A',
    '#B09FD3',
    '#8E6CF4',
    '#793CEF',
    '#5627C9',
    '#361463',
    '#BAE2F4',
    '#4C8FF2',
    '#2053AF',
    '#073689',
    '#0E19E5',
    '#CEEEF4',
    '#62DFF4',
    '#297784',
    '#0E5A66',
    '#064B56',
    '#AFF2E9',
    '#35A8A8',
    '#1E9B89',
    '#106662',
    '#095B32',
    '#D3F4B8',
    '#7CC47F',
    '#488442',
    '#028912',
    '#1A3F02',
    '#A0C96B',
    '#557C52',
    '#495407',
    '#3B4406',
    '#2D3309',
    '#6D6767',
    '#A07C50',
    '#894C15',
    '#562E05',
    '#381405'
];

const colorPickerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    padding: '5px'
};

const ColorPickerComponent = ({onSelectColor}) => {
    return (
        <div style={colorPickerStyle}>
            {
                colorCodes.map(color => 
                    <span 
                        key={color} 
                        style={{
                            borderRadius: '50%',
                            height: '40px',
                            width: '40px',
                            cursor: 'pointer',
                            margin: '5px',
                            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.14)',
                            backgroundColor: color
                        }}
                        onClick={() => onSelectColor(color)}
                    >
                    &nbsp;
                    </span>
                )
            }
        </div>
    );
};

ColorPickerComponent.propTypes = {
    onSelectColor: PropTypes.func
};

ColorPickerComponent.defaultProps = {
    onSelectColor: () => {}
};

export default ColorPickerComponent;
