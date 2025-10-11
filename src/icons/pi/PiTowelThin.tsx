

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTowelThin = (props: IconProps) => {

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
          <Path  d="M200,28H72A20,20,0,0,0,52,48V216a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V48a12,12,0,0,1,24,0V152a4,4,0,0,0,8,0V48A20,20,0,0,0,200,28ZM72,36H184a19.86,19.86,0,0,0-4,12V188H60V48A12,12,0,0,1,72,36ZM176,220H64a4,4,0,0,1-4-4V196H180v20A4,4,0,0,1,176,220Z" />
        </G>
      </Svg>
    );
  }

