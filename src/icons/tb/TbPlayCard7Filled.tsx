

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlayCard7Filled = (props: IconProps) => {

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
          <Path  d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-3.01 -10h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h2.612l-1.56 4.684a1 1 0 1 0 1.897 .632l2 -6a1 1 0 0 0 -.949 -1.316m-6.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
        </G>
      </Svg>
    );
  }

