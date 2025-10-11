

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiSiyuan = (props: IconProps) => {

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
          <Path d="m0 8.455 6.818-6.819L12 6.818l5.182-5.182L24 8.455v13.909l-6.818-6.819v-2.314l5.182 5.182v-9.28L17.182 3.95v11.594L12 20.727l-5.182-5.182v-2.314L12 18.413v-9.28L6.818 3.95v11.594L0 22.364Z" />
        </G>
      </Svg>
    );
  }

