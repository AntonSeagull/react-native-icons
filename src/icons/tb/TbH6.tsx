

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbH6 = (props: IconProps) => {

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
          <Path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" />
          <Path d="M21 12a2 2 0 1 0 -4 0v4" />
          <Path d="M4 6v12" />
          <Path d="M12 6v12" />
          <Path d="M11 18h2" />
          <Path d="M3 18h2" />
          <Path d="M4 12h8" />
          <Path d="M3 6h2" />
          <Path d="M11 6h2" />
        </G>
      </Svg>
    );
  }

