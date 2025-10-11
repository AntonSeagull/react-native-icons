

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImTab = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 1v12h12v-12h-12zM14 12h-10v-10h10v10zM2 14v-10.5l-1-1v12.5h12.5l-1-1h-10.5z" fill="#000000" />
          <Path d="M5.5 4l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5v-6.5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

