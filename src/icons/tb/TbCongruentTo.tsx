

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCongruentTo = (props: IconProps) => {

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
          <Path d="M5 13h14" />
          <Path d="M5 17h14" />
          <Path d="M5 7.686c2.333 -2.624 4.667 -1.856 7 .064s4.667 2.688 7 .064" />
        </G>
      </Svg>
    );
  }

