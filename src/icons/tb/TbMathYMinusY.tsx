

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathYMinusY = (props: IconProps) => {

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
          <Path  d="M2 9l3 5.063" />
          <Path  d="M8 9l-4.8 9" />
          <Path  d="M16 9l3 5.063" />
          <Path  d="M22 9l-4.8 9" />
          <Path  d="M10 12h4" />
        </G>
      </Svg>
    );
  }

