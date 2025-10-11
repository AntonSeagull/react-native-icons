

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAngle = (props: IconProps) => {

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
          <Path  d="M21 19h-18l9 -15" />
          <Path  d="M20.615 15.171h.015" />
          <Path  d="M19.515 11.771h.015" />
          <Path  d="M17.715 8.671h.015" />
          <Path  d="M15.415 5.971h.015" />
        </G>
      </Svg>
    );
  }

