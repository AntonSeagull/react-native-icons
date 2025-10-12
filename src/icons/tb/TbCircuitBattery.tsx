

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitBattery = (props: IconProps) => {

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
          <Path  d="M2 12h4" />
          <Path  d="M18 12h4" />
          <Path  d="M18 5v14" />
          <Path  d="M14 9v6" />
          <Path  d="M10 5v14" />
          <Path  d="M6 9v6" />
        </G>
      </Svg>
    );
  }

