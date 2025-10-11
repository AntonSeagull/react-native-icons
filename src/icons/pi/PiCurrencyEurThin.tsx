

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyEurThin = (props: IconProps) => {

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
          <Path  d="M187,195a4,4,0,0,1-.31,5.65A76,76,0,0,1,60.11,148H40a4,4,0,0,1,0-8H60V116H40a4,4,0,0,1,0-8H60.11A76,76,0,0,1,186.67,55.35a4,4,0,1,1-5.34,6A68,68,0,0,0,68.13,108H136a4,4,0,0,1,0,8H68v24h52a4,4,0,0,1,0,8H68.13a68,68,0,0,0,113.2,46.69A4,4,0,0,1,187,195Z" />
        </G>
      </Svg>
    );
  }

