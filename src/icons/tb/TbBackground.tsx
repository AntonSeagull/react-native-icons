

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBackground = (props: IconProps) => {

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
          <Path d="M4 8l4 -4" />
          <Path d="M14 4l-10 10" />
          <Path d="M4 20l16 -16" />
          <Path d="M20 10l-10 10" />
          <Path d="M20 16l-4 4" />
        </G>
      </Svg>
    );
  }

