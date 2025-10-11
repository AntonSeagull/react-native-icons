

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBandageOff = (props: IconProps) => {

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
          <Path d="M10 12v.01" />
          <Path d="M12 14v.01" />
          <Path d="M10.513 6.487l1.987 -1.987a4.95 4.95 0 0 1 7 7l-2.018 2.018m-1.982 1.982l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

