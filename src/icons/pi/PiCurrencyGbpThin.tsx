

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyGbpThin = (props: IconProps) => {

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
          <Path  d="M188,208a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8h4a32,32,0,0,0,32-32V132H56a4,4,0,0,1,0-8H92V84a48,48,0,0,1,78.53-37,4,4,0,1,1-5.09,6.17A40,40,0,0,0,100,84v40h36a4,4,0,0,1,0,8H100v40a40,40,0,0,1-16,32H184A4,4,0,0,1,188,208Z" />
        </G>
      </Svg>
    );
  }

