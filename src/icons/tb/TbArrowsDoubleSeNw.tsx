

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsDoubleSeNw = (props: IconProps) => {

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
          <Path d="M3 10l11 11" />
          <Path d="M14 17v4h-4" />
          <Path d="M14 3h-4v4" />
          <Path d="M21 14l-11 -11" />
        </G>
      </Svg>
    );
  }

