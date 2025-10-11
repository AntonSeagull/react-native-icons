

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBrickWall = (props: IconProps) => {

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
          <Path d="M12 9v6" />
          <Path d="M16 15v6" />
          <Path d="M16 3v6" />
          <Path d="M3 15h18" />
          <Path d="M3 9h18" />
          <Path d="M8 15v6" />
          <Path d="M8 3v6" />
        </G>
      </Svg>
    );
  }

