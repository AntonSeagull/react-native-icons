

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuItalic = (props: IconProps) => {

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
          <Line  x1="19" x2="10" y1="4" y2="4" />
          <Line  x1="14" x2="5" y1="20" y2="20" />
          <Line  x1="15" x2="9" y1="4" y2="20" />
        </G>
      </Svg>
    );
  }

