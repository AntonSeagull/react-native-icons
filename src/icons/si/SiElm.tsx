

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiElm = (props: IconProps) => {

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
          <Path  d="M23.986 12.806V23.2l-5.197-5.197zM6.796 6.01H17.19l-5.197 5.197zm9.275-1.12H5.677L.8.015h10.394zm7.116 7.117L17.99 6.81l-5.197 5.197 5.197 5.197zm.813-.813L12.806 0H24zM0 23.2V.813l11.194 11.194zm23.187.8H.8l11.193-11.194Z" />
        </G>
      </Svg>
    );
  }

