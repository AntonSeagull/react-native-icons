

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRefreshOff = (props: IconProps) => {

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
          <Path d="M20 11a8.1 8.1 0 0 0 -11.271 -6.305m-2.41 1.624a8.083 8.083 0 0 0 -1.819 2.681m-.5 -4v4h4" />
          <Path d="M4 13a8.1 8.1 0 0 0 13.671 4.691m2.329 -1.691v-1h-1" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

