

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowDownLeftBoxOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M123.636 269.236L123.636 90.5454C123.636 79.2617 128.119 68.4401 136.098 60.4613C144.076 52.4824 154.898 48 166.182 48L421.455 48C432.738 48 443.56 52.4824 451.539 60.4613C459.518 68.4401 464 79.2617 464 90.5454L464 345.818C464 357.102 459.518 367.924 451.539 375.902C443.56 383.881 432.738 388.364 421.455 388.364L242.764 388.364" />
          <Path d="M48 331.636L48 464L180.364 464" />
          <Path d="M296 216L48 464" />
        </G>
      </Svg>
    );
  }

