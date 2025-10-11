

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBarrel = (props: IconProps) => {

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
          <Path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22c.958 2.26 1.437 4.52 1.437 6.78c0 2.26 -.479 4.52 -1.437 6.78a2 2 0 0 1 -1.841 1.22h-9.444a2 2 0 0 1 -1.841 -1.22c-.958 -2.26 -1.437 -4.52 -1.437 -6.78c0 -2.26 .479 -4.52 1.437 -6.78a2 2 0 0 1 1.841 -1.22z" />
          <Path d="M14 4c.667 2.667 1 5.333 1 8s-.333 5.333 -1 8" />
          <Path d="M10 4c-.667 2.667 -1 5.333 -1 8s.333 5.333 1 8" />
          <Path d="M4.5 16h15" />
          <Path d="M19.5 8h-15" />
        </G>
      </Svg>
    );
  }

