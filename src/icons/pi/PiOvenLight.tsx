

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiOvenLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM74,76A10,10,0,1,1,84,86,10,10,0,0,1,74,76Zm44,0a10,10,0,1,1,10,10A10,10,0,0,1,118,76Zm44,0a10,10,0,1,1,10,10A10,10,0,0,1,162,76Zm22,30H72a6,6,0,0,0-6,6v72a6,6,0,0,0,6,6H184a6,6,0,0,0,6-6V112A6,6,0,0,0,184,106Zm-6,72H78V118H178Z" />
        </G>
      </Svg>
    );
  }

