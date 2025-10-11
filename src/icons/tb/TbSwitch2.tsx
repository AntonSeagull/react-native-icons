

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwitch2 = (props: IconProps) => {

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
          <Path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
          <Path d="M18 4l3 3l-3 3" />
          <Path d="M3 7h5l7 10h6" />
          <Path d="M18 20l3 -3l-3 -3" />
        </G>
      </Svg>
    );
  }

