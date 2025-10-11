

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDownloadOff = (props: IconProps) => {

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
          <Path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19" />
          <Path d="M7 11l5 5l2 -2m2 -2l1 -1" />
          <Path d="M12 4v4m0 4v4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

