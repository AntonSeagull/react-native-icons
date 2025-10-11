

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTransferOut = (props: IconProps) => {

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
          <Path d="M4 19v2h16v-14l-8 -4l-8 4v2" />
          <Path d="M13 14h-9" />
          <Path d="M7 11l-3 3l3 3" />
        </G>
      </Svg>
    );
  }

