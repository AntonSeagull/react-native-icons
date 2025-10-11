

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCylinder = (props: IconProps) => {

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
          <Path d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
          <Path d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" />
        </G>
      </Svg>
    );
  }

