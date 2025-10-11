

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiCalendar = (props: IconProps) => {

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
          <Line  x1="16" y1="2" x2="16" y2="6" />
          <Line  x1="8" y1="2" x2="8" y2="6" />
          <Line  x1="3" y1="10" x2="21" y2="10" />
        </G>
      </Svg>
    );
  }

