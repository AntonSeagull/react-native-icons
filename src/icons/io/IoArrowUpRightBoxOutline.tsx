

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowUpRightBoxOutline = (props: IconProps) => {

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
          <Path d="M388.364 242.764V421.455C388.364 432.738 383.881 443.56 375.902 451.539C367.924 459.518 357.102 464 345.818 464H90.5455C79.2617 464 68.4401 459.518 60.4613 451.539C52.4825 443.56 48 432.738 48 421.455V166.182C48 154.898 52.4825 144.076 60.4613 136.098C68.4401 128.119 79.2617 123.636 90.5455 123.636H269.236" />
          <Path d="M464 180.364L464 48L331.636 48" />
          <Path d="M216 296L464 48" />
        </G>
      </Svg>
    );
  }

