

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderHermaphrodite = (props: IconProps) => {

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
          <Path d="M12 14v7" />
          <Path d="M9 18h6" />
          <Path d="M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
          <Path d="M15 3a3 3 0 1 1 -6 0" />
        </G>
      </Svg>
    );
  }

