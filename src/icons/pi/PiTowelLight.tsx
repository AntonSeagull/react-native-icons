

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTowelLight = (props: IconProps) => {

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
          <Path  d="M200,26H72A22,22,0,0,0,50,48V216a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V48a10,10,0,0,1,20,0V152a6,6,0,0,0,12,0V48A22,22,0,0,0,200,26ZM72,38H180.41A21.84,21.84,0,0,0,178,48V186H62V48A10,10,0,0,1,72,38ZM176,218H64a2,2,0,0,1-2-2V198H178v18A2,2,0,0,1,176,218Z" />
        </G>
      </Svg>
    );
  }

