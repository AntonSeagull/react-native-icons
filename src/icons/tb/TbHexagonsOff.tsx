

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHexagonsOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4 18v-5l4 -2l4 2v5l-4 2z" />
          <Path d="M8 11v-3m1.332 -2.666l2.668 -1.334l4 2v5" />
          <Path d="M12 13l.661 -.331" />
          <Path d="M15.345 11.328l.655 -.328l4 2v3m-1.334 2.667l-2.666 1.333l-4 -2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

