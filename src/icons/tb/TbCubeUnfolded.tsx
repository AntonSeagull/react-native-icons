

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCubeUnfolded = (props: IconProps) => {

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
          <Path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z" />
          <Path d="M7 15v-5h5v5h5v-5" />
        </G>
      </Svg>
    );
  }

