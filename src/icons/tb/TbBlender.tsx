

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBlender = (props: IconProps) => {

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
          <Path d="M9 10h-3a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h10.802a1 1 0 0 1 .984 1.179l-1.786 9.821" />
          <Path d="M8 4l2 11" />
          <Path d="M11 15h4a3 3 0 0 1 3 3v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 3 -3z" />
          <Path d="M12 4v-1h2v1" />
          <Path d="M13 18v.01" />
        </G>
      </Svg>
    );
  }

