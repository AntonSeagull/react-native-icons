

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMove3d = (props: IconProps) => {

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
          <Path  d="M5 3v16h16" />
          <Path  d="m5 19 6-6" />
          <Path  d="m2 6 3-3 3 3" />
          <Path  d="m18 16 3 3-3 3" />
        </G>
      </Svg>
    );
  }

