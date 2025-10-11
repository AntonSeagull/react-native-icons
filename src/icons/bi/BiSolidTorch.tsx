

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidTorch = (props: IconProps) => {

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
          <Path  d="M8 11.648V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8.352c1.067-.552 3-1.928 3-4.648V5H5v2c0 2.72 1.933 4.096 3 4.648zM11 11h2v3h-2v-3zM5 2h14v2H5z" />
        </G>
      </Svg>
    );
  }

