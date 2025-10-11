

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFrame = (props: IconProps) => {

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
          <Line  x1="22" x2="2" y1="6" y2="6" />
          <Line  x1="22" x2="2" y1="18" y2="18" />
          <Line  x1="6" x2="6" y1="2" y2="22" />
          <Line  x1="18" x2="18" y1="2" y2="22" />
        </G>
      </Svg>
    );
  }

