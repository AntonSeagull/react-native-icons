

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberNine = (props: IconProps) => {

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
          <Path  d="M128,40a56,56,0,1,0,15.62,109.77L113,204.07A8,8,0,1,0,127,211.92l49.55-88A56,56,0,0,0,128,40Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,136Z" />
        </G>
      </Svg>
    );
  }

