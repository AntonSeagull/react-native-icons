

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoSensor2 = (props: IconProps) => {

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
          <Path d="M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-2" />
          <Path d="M7 19h-2a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
          <Path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        </G>
      </Svg>
    );
  }

