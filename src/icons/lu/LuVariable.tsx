

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuVariable = (props: IconProps) => {

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
          <Line  x1="15" x2="9" y1="9" y2="15" />
          <Line  x1="9" x2="15" y1="9" y2="15" />
          <Path  d="M8 21s-4-3-4-9 4-9 4-9" />
          <Path  d="M16 3s4 3 4 9-4 9-4 9" />
        </G>
      </Svg>
    );
  }

