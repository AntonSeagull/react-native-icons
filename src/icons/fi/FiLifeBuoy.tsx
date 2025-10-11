

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiLifeBuoy = (props: IconProps) => {

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
          <Line  x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
          <Line  x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
          <Line  x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
          <Line  x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
          <Line  x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        </G>
      </Svg>
    );
  }

