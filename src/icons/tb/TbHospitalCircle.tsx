

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHospitalCircle = (props: IconProps) => {

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
          <Path  d="M10 16v-8" />
          <Path  d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <Path  d="M14 16v-8" />
          <Path  d="M10 12h4" />
        </G>
      </Svg>
    );
  }

