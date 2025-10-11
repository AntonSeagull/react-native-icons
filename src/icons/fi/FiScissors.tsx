

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiScissors = (props: IconProps) => {

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
          <Line  x1="20" y1="4" x2="8.12" y2="15.88" />
          <Line  x1="14.47" y1="14.48" x2="20" y2="20" />
          <Line  x1="8.12" y1="8.12" x2="12" y2="12" />
        </G>
      </Svg>
    );
  }

