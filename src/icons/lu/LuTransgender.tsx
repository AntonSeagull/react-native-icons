

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTransgender = (props: IconProps) => {

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
          <Path d="M12 16v6" />
          <Path d="M14 20h-4" />
          <Path d="M18 2h4v4" />
          <Path d="m2 2 7.17 7.17" />
          <Path d="M2 5.355V2h3.357" />
          <Path d="m22 2-7.17 7.17" />
          <Path d="M8 5 5 8" />
        </G>
      </Svg>
    );
  }

