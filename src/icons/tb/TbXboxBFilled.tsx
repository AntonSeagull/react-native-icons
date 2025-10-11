

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbXboxBFilled = (props: IconProps) => {

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
          <Path  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m1 5h-3a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h3a3 3 0 0 0 2.235 -5a3 3 0 0 0 -2.235 -5m0 6a1 1 0 0 1 1 1l-.007 .117a1 1 0 0 1 -.993 .883h-2v-2zm0 -4a1 1 0 0 1 0 2h-2v-2z" />
        </G>
      </Svg>
    );
  }

