

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutGrid2Alt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 0h7v7h-7v-7zM9 0v7h7v-7h-7zM0 16h7v-7h-7v7zM9 16h7v-7h-7v7z" fill="#000000" />
        </G>
      </Svg>
    );
  }

