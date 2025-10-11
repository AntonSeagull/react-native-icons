

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAsterisk = (props: IconProps) => {

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
          <Path d="M12 6v12" />
          <Path d="M17.196 9 6.804 15" />
          <Path d="m6.804 9 10.392 6" />
        </G>
      </Svg>
    );
  }

