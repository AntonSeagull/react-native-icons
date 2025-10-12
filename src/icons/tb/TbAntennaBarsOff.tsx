

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAntennaBarsOff = (props: IconProps) => {

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
          <Path  d="M6 18v-3" />
          <Path  d="M10 18v-6" />
          <Path  d="M14 18v-4" />
          <Path  d="M14 10v-1" />
          <Path  d="M18 14v-8" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

