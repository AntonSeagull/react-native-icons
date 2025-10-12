

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuHaze = (props: IconProps) => {

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
          <Path  d="m5.2 6.2 1.4 1.4" />
          <Path  d="M2 13h2" />
          <Path  d="M20 13h2" />
          <Path  d="m17.4 7.6 1.4-1.4" />
          <Path  d="M22 17H2" />
          <Path  d="M22 21H2" />
          <Path  d="M16 13a4 4 0 0 0-8 0" />
          <Path  d="M12 5V2.5" />
        </G>
      </Svg>
    );
  }

