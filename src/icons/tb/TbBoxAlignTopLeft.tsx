

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxAlignTopLeft = (props: IconProps) => {

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
          <Path d="M11 5v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1z" />
          <Path d="M15 4h-.01" />
          <Path d="M20 4h-.01" />
          <Path d="M20 9h-.01" />
          <Path d="M20 15h-.01" />
          <Path d="M4 15h-.01" />
          <Path d="M20 20h-.01" />
          <Path d="M15 20h-.01" />
          <Path d="M9 20h-.01" />
          <Path d="M4 20h-.01" />
        </G>
      </Svg>
    );
  }

