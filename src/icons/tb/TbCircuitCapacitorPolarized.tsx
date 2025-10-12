

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitCapacitorPolarized = (props: IconProps) => {

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
          <Path  d="M22 12h-8" />
          <Path  d="M2 12h8" />
          <Path  d="M10 7v10" />
          <Path  d="M14 7v10" />
          <Path  d="M17 5h4" />
          <Path  d="M19 3v4" />
        </G>
      </Svg>
    );
  }

