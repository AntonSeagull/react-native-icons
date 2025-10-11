

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChessQueen = (props: IconProps) => {

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
          <Path  d="M16 16l2 -11l-4 4l-2 -5l-2 5l-4 -4l2 11" />
          <Path  d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" />
          <Path  d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M18 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </G>
      </Svg>
    );
  }

