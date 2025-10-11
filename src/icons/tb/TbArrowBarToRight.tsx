

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBarToRight = (props: IconProps) => {

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
          <Path d="M14 12l-10 0" />
          <Path d="M14 12l-4 4" />
          <Path d="M14 12l-4 -4" />
          <Path d="M20 4l0 16" />
        </G>
      </Svg>
    );
  }

