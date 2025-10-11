

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRoute2 = (props: IconProps) => {

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
          <Path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z" />
          <Path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
        </G>
      </Svg>
    );
  }

