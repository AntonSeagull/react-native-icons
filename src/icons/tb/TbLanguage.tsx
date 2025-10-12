

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLanguage = (props: IconProps) => {

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
          <Path  d="M4 5h7" />
          <Path  d="M9 3v2c0 4.418 -2.239 8 -5 8" />
          <Path  d="M5 9c0 2.144 2.952 3.908 6.7 4" />
          <Path  d="M12 20l4 -9l4 9" />
          <Path  d="M19.1 18h-6.2" />
        </G>
      </Svg>
    );
  }

