

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTentThin = (props: IconProps) => {

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
          <Path  d="M251.66,190.38l-64-144A4,4,0,0,0,184,44H72a4,4,0,0,0-3.63,2.35s0,0,0,0l0,.06h0l-64,143.93A4,4,0,0,0,8,196H248a4,4,0,0,0,3.66-5.62ZM68,66.85V188H14.16ZM76,188V66.85L129.84,188Zm62.6,0L78.16,52H181.4l60.44,136Z" />
        </G>
      </Svg>
    );
  }

