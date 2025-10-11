

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWashDrycleanOff = (props: IconProps) => {

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
          <Path d="M20.048 16.033a9 9 0 0 0 -12.094 -12.075m-2.321 1.682a9 9 0 0 0 12.733 12.723" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

