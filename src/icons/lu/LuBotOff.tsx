

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBotOff = (props: IconProps) => {

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
          <Path  d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
          <Path  d="M2 14h2" />
          <Path  d="M20 14h2" />
          <Path  d="M22 22 2 2" />
          <Path  d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
          <Path  d="M9 13v2" />
          <Path  d="M9.67 4H12v2.33" />
        </G>
      </Svg>
    );
  }

