

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGenderIntersexThin = (props: IconProps) => {

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
          <Path  d="M208,28H168a4,4,0,0,0,0,8h30.34L163.55,70.79A60,60,0,1,0,116,171.85V196H88a4,4,0,0,0,0,8h28v28a4,4,0,0,0,8,0V204h28a4,4,0,0,0,0-8H124V171.85A59.94,59.94,0,0,0,168.68,77L204,41.66V72a4,4,0,0,0,8,0V32A4,4,0,0,0,208,28ZM120,164a52,52,0,1,1,52-52A52.06,52.06,0,0,1,120,164Z" />
        </G>
      </Svg>
    );
  }

