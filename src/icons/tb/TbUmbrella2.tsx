

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUmbrella2 = (props: IconProps) => {

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
          <Path d="M5.343 7.343a8 8 0 1 1 11.314 11.314z" />
          <Path d="M10.828 13.34l-4.242 4.243a2 2 0 1 0 2.828 2.828" />
        </G>
      </Svg>
    );
  }

