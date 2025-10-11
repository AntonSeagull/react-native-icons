

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbExposure0 = (props: IconProps) => {

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
          <Path d="M12 19a4 4 0 0 0 4 -4v-6a4 4 0 1 0 -8 0v6a4 4 0 0 0 4 4z" />
        </G>
      </Svg>
    );
  }

