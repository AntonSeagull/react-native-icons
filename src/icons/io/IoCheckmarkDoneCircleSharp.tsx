

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCheckmarkDoneCircleSharp = (props: IconProps) => {

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
          <Path  d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48.19,121.42,24.1,21.06-73.61,84.1-24.1-23.06ZM191.93,342.63,121.37,272,144,249.37,214.57,320Zm65,.79L185.55,272l22.64-22.62,47.16,47.21L366.48,169.42l24.1,21.06Z" />
        </G>
      </Svg>
    );
  }

