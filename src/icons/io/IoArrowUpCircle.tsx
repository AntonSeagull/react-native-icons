

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowUpCircle = (props: IconProps) => {

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
          <Path  d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm91.36,212.65a16,16,0,0,1-22.63.09L272,208.42V342a16,16,0,0,1-32,0V208.42l-52.73,52.32A16,16,0,1,1,164.73,238l80-79.39a16,16,0,0,1,22.54,0l80,79.39A16,16,0,0,1,347.36,260.65Z" />
        </G>
      </Svg>
    );
  }

