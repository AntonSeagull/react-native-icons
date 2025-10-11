

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCellSignalOff = (props: IconProps) => {

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
          <Path d="M20 20h-15.269a.731 .731 0 0 1 -.517 -1.249l7.265 -7.264m2 -2l5.272 -5.272a.731 .731 0 0 1 1.249 .517v11.269" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

