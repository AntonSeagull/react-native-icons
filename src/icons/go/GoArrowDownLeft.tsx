

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoArrowDownLeft = (props: IconProps) => {

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
          <Path d="M5.75 8.5a.75.75 0 0 1 .75.75v7.19L16.72 6.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L7.56 17.5h7.19a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z" />
        </G>
      </Svg>
    );
  }

