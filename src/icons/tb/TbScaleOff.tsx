

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScaleOff = (props: IconProps) => {

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
          <Path d="M7 20h10" />
          <Path d="M9.452 5.425l2.548 -.425l6 1" />
          <Path d="M12 3v5m0 4v8" />
          <Path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
          <Path d="M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

