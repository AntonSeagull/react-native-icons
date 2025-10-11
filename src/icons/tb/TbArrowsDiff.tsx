

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsDiff = (props: IconProps) => {

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
          <Path d="M11 16h10" />
          <Path d="M11 16l4 4" />
          <Path d="M11 16l4 -4" />
          <Path d="M13 8h-10" />
          <Path d="M13 8l-4 4" />
          <Path d="M13 8l-4 -4" />
        </G>
      </Svg>
    );
  }

