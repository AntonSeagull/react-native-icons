

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShirtOff = (props: IconProps) => {

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
          <Path  d="M8.243 4.252l.757 -.252c0 .43 .09 .837 .252 1.206m1.395 1.472a3 3 0 0 0 4.353 -2.678l6 2v5h-3v3m0 4v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l2.26 -.753" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

