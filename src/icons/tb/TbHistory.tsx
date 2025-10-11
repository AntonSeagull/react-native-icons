

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHistory = (props: IconProps) => {

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
          <Path d="M12 8l0 4l2 2" />
          <Path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
        </G>
      </Svg>
    );
  }

