

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineForest = (props: IconProps) => {

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
          <Path  d="M24,18l-3.86-6H22L15,2l-3,4.29L9,2L2,12h1.86L0,18h7v4h4v-4h2v4h4v-4H24z M15,5.49L18.16,10h-1.68l3.86,6h-3.62l-2.57-4 H16l-2.78-3.97L15,5.49z M3.66,16l3.86-6H5.84L9,5.49L12.16,10h-1.68l3.86,6H3.66z" />
        </G>
      </Svg>
    );
  }

