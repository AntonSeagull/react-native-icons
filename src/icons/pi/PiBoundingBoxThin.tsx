

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBoundingBoxThin = (props: IconProps) => {

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
          <Path  d="M208,92a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H176a12,12,0,0,0-12,12V60H92V48A12,12,0,0,0,80,36H48A12,12,0,0,0,36,48V80A12,12,0,0,0,48,92H60v72H48a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V196h72v12a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H196V92ZM172,48a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V80a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4ZM44,80V48a4,4,0,0,1,4-4H80a4,4,0,0,1,4,4V80a4,4,0,0,1-4,4H48A4,4,0,0,1,44,80ZM84,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4H80a4,4,0,0,1,4,4Zm128-32v32a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4h32A4,4,0,0,1,212,176Zm-24-12H176a12,12,0,0,0-12,12v12H92V176a12,12,0,0,0-12-12H68V92H80A12,12,0,0,0,92,80V68h72V80a12,12,0,0,0,12,12h12Z" />
        </G>
      </Svg>
    );
  }

