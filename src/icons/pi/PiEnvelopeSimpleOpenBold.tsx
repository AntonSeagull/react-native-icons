

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiEnvelopeSimpleOpenBold = (props: IconProps) => {

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
          <Path  d="M230.66,86l-96-64a12,12,0,0,0-13.32,0l-96,64A12,12,0,0,0,20,96V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V96A12,12,0,0,0,230.66,86ZM128,46.42l74.86,49.91L141.61,140H114.39L53.14,96.33ZM44,196V119.29l59.58,42.48a12,12,0,0,0,7,2.23h34.9a12,12,0,0,0,7-2.23L212,119.29V196Z" />
        </G>
      </Svg>
    );
  }

