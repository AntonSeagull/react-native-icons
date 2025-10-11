

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMaskOff = (props: IconProps) => {

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
          <Path d="M19.42 19.41a2 2 0 0 1 -1.42 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.055 .588 -1.417m3.412 -.583h10a2 2 0 0 1 2 2v10" />
          <Path d="M9.885 9.872a3 3 0 1 0 4.245 4.24m.582 -3.396a3.012 3.012 0 0 0 -1.438 -1.433" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

