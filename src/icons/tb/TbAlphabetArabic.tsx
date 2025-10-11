

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlphabetArabic = (props: IconProps) => {

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
          <Path d="M10 6v4" />
          <Path d="M13 14h8q -2.518 -3 -4 -3" />
          <Path d="M13 6v9.958c0 .963 0 1.444 -.293 1.743s-.764 .299 -1.707 .299h-1" />
          <Path d="M7 6v9.958c0 .963 0 1.444 -.293 1.743s-.764 .299 -1.707 .299h-1" />
        </G>
      </Svg>
    );
  }

