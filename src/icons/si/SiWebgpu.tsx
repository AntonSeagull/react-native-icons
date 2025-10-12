

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiWebgpu = (props: IconProps) => {

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
          <Path  d="m0 4.784 8.652 14.432 8.652-14.432zm22.032.145L20.07 8.202H24L22.032 4.93zm-4.46 0-4.192 6.993h8.384zm2.498 3.575 1.962 3.273L24 8.504zm-6.69 3.72 4.192 6.992 4.192-6.992z" />
        </G>
      </Svg>
    );
  }

