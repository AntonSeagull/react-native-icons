

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiMenu = (props: IconProps) => {

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
          <Line  x1="3" y1="12" x2="21" y2="12" />
          <Line  x1="3" y1="6" x2="21" y2="6" />
          <Line  x1="3" y1="18" x2="21" y2="18" />
        </G>
      </Svg>
    );
  }

