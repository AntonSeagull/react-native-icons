

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCampfire = (props: IconProps) => {

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
          <Path d="M4 21l16 -4" />
          <Path d="M20 21l-16 -4" />
          <Path d="M12 15a4 4 0 0 0 4 -4c0 -3 -2 -3 -2 -8c-4 2 -6 5 -6 8a4 4 0 0 0 4 4z" />
        </G>
      </Svg>
    );
  }

