

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGamepad = (props: IconProps) => {

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
          <Line  x1="6" x2="10" y1="12" y2="12" />
          <Line  x1="8" x2="8" y1="10" y2="14" />
          <Line  x1="15" x2="15.01" y1="13" y2="13" />
          <Line  x1="18" x2="18.01" y1="11" y2="11" />
        </G>
      </Svg>
    );
  }

