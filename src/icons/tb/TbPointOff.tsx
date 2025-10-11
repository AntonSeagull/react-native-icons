

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPointOff = (props: IconProps) => {

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
          <Path d="M9.15 9.194a4 4 0 0 0 5.697 5.617m1.153 -2.811a4 4 0 0 0 -4 -4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

