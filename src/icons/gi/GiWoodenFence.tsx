

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiWoodenFence = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M149.725 16.338L90.627 79.926v348.678l59.098 63.582 18.584-61.58h51.895l37.91 61.58 37.91-61.58h51.895l18.584 61.58 59.098-63.582V79.926l-59.098-63.588-19.188 63.588v1.97h-50.058v-1.97l-39.143-63.588-39.142 63.588v1.97h-50.06v-1.97l-19.188-63.588zm19.187 84.244h50.06v142.486h-50.06V100.582zm128.346 0h50.058v142.486h-50.058V100.582zM168.912 261.756h50.06v150.162h-50.06V261.756zm128.346 0h50.058v150.162h-50.058V261.756z" />
        </G>
      </Svg>
    );
  }

