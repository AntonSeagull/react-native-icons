

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandDaysCounter = (props: IconProps) => {

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
          <Path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" />
          <Path d="M13 21h8v-7" />
          <Path d="M12 8v4l3 3" />
        </G>
      </Svg>
    );
  }

