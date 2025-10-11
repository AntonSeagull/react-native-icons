

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiPaperPlane = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M480 40L32 296l112.148 37.383L448 72 209.404 355.135 320 392 480 40zM208 376l-16 96 49.932-83.863L208 376z" fill="#000" />
        </G>
      </Svg>
    );
  }

