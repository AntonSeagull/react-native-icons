

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathXPlusX = (props: IconProps) => {

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
          <Path d="M2 9l6 6" />
          <Path d="M2 15l6 -6" />
          <Path d="M16 9l6 6" />
          <Path d="M16 15l6 -6" />
          <Path d="M10 12h4" />
          <Path d="M12 10v4" />
        </G>
      </Svg>
    );
  }

