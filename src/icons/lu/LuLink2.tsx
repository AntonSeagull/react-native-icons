

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLink2 = (props: IconProps) => {

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
          <Line  x1="8" x2="16" y1="12" y2="12" />
          <Path  d="M9 17H7A5 5 0 0 1 7 7h2" />
          <Path  d="M15 7h2a5 5 0 1 1 0 10h-2" />
        </G>
      </Svg>
    );
  }

