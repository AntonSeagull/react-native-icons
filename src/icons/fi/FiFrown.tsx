

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiFrown = (props: IconProps) => {

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
          <Line  x1="9" y1="9" x2="9.01" y2="9" />
          <Line  x1="15" y1="9" x2="15.01" y2="9" />
          <Path  d="M16 16s-1.5-2-4-2-4 2-4 2" />
        </G>
      </Svg>
    );
  }

