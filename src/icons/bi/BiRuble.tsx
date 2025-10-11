

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiRuble = (props: IconProps) => {

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
          <Path  d="M8 21h2v-3h6v-2h-6v-2h4.5c2.757 0 5-2.243 5-5s-2.243-5-5-5H9a1 1 0 0 0-1 1v7H5v2h3v2H5v2h3v3zm2-15h4.5c1.654 0 3 1.346 3 3s-1.346 3-3 3H10V6z" />
        </G>
      </Svg>
    );
  }

