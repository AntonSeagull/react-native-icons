

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyRubLight = (props: IconProps) => {

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
          <Path  d="M148,150a58,58,0,0,0,0-116H88a6,6,0,0,0-6,6v98H56a6,6,0,0,0,0,12H82v20H56a6,6,0,0,0,0,12H82v34a6,6,0,0,0,12,0V182h50a6,6,0,0,0,0-12H94V150ZM94,46h54a46,46,0,0,1,0,92H94Z" />
        </G>
      </Svg>
    );
  }

