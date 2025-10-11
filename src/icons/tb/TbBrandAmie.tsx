

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandAmie = (props: IconProps) => {

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
          <Path d="M3 8.5c0 1.33 .472 2.55 1.257 3.5a5.5 5.5 0 0 0 7.743 7.743a5.5 5.5 0 0 0 7.743 -7.743a5.5 5.5 0 0 0 -7.743 -7.743a5.5 5.5 0 0 0 -9 4.243" />
          <Path d="M10 9.5c0 -.828 .895 -1.5 2 -1.5s2 .672 2 1.5v5c0 .828 -.895 1.5 -2 1.5s-2 -.672 -2 -1.5z" />
        </G>
      </Svg>
    );
  }

