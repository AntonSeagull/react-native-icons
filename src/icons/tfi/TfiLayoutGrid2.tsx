

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutGrid2 = (props: IconProps) => {

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
          <Path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z" fill="#000000" />
          <Path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z" fill="#000000" />
          <Path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z" fill="#000000" />
          <Path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

