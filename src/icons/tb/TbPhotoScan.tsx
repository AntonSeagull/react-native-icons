

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoScan = (props: IconProps) => {

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
          <Path d="M15 8h.01" />
          <Path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
          <Path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" />
          <Path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <Path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
        </G>
      </Svg>
    );
  }

