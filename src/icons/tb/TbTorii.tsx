

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTorii = (props: IconProps) => {

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
          <Path d="M4 4c5.333 1.333 10.667 1.333 16 0" />
          <Path d="M4 8h16" />
          <Path d="M12 5v3" />
          <Path d="M18 4.5v15.5" />
          <Path d="M6 4.5v15.5" />
        </G>
      </Svg>
    );
  }

