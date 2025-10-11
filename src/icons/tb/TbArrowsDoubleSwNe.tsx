

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsDoubleSwNe = (props: IconProps) => {

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
          <Path d="M14 3l-11 11" />
          <Path d="M3 10v4h4" />
          <Path d="M17 10h4v4" />
          <Path d="M10 21l11 -11" />
        </G>
      </Svg>
    );
  }

