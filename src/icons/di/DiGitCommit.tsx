

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiGitCommit = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#444444" d="M22.161 14.689c-0.711-2.75-3.188-4.791-6.161-4.791s-5.449 2.041-6.161 4.791h-5.018v3.194h5.018c0.712 2.751 3.19 4.791 6.161 4.791s5.45-2.040 6.161-4.791h5.019v-3.194h-5.019zM16 19.48c-1.763 0-3.194-1.432-3.194-3.194s1.431-3.194 3.194-3.194c1.762 0 3.194 1.431 3.194 3.194s-1.432 3.194-3.194 3.194z" />
        </G>
      </Svg>
    );
  }

