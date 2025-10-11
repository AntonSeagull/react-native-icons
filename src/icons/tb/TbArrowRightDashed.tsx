

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRightDashed = (props: IconProps) => {

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
          <Path d="M5 12h.5m3 0h1.5m3 0h6" />
          <Path d="M13 18l6 -6" />
          <Path d="M13 6l6 6" />
        </G>
      </Svg>
    );
  }

