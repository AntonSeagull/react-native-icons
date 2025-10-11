

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWaveTriangleDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M76,56l52,72H24Zm156,72H128l52,72Z" opacity="0.2" />
          <Path  d="M238.48,132.68l-52,72a8,8,0,0,1-13,0L76,69.66l-45.51,63a8,8,0,1,1-13-9.36l52-72a8,8,0,0,1,13,0l97.51,135,45.51-63a8,8,0,1,1,13,9.36Z" />
        </G>
      </Svg>
    );
  }

