

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuHeading2 = (props: IconProps) => {

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
          <Path  d="M4 12h8" />
          <Path  d="M4 18V6" />
          <Path  d="M12 18V6" />
          <Path  d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
        </G>
      </Svg>
    );
  }

