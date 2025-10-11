

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiHash = (props: IconProps) => {

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
          <Line  x1="4" y1="9" x2="20" y2="9" />
          <Line  x1="4" y1="15" x2="20" y2="15" />
          <Line  x1="10" y1="3" x2="8" y2="21" />
          <Line  x1="16" y1="3" x2="14" y2="21" />
        </G>
      </Svg>
    );
  }

