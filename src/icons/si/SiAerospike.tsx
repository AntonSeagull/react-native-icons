

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiAerospike = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M14.347 15.375 7.45 12.283l6.897-3.072v6.164zM24 0v24H0V0h24zm-4.705 5.386L5.672 11.548l-1.607.743 1.607.688 13.623 6.163v-1.565l-3.576-1.602V8.612l3.576-1.586v-1.64z" />
        </G>
      </Svg>
    );
  }

