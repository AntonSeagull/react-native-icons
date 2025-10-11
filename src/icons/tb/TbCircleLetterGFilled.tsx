

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleLetterGFilled = (props: IconProps) => {

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
          <Path  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5h-2a3 3 0 0 0 -3 3v4a3 3 0 0 0 3 3h2a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883v2h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2a1 1 0 0 0 0 -2" />
        </G>
      </Svg>
    );
  }

