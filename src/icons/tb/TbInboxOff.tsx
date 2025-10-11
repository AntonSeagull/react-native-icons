

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbInboxOff = (props: IconProps) => {

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
          <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422a2 2 0 0 1 -1.407 .578h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" />
          <Path d="M4 13h3l3 3h4l.987 -.987m2.013 -2.013h3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

