

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMarsStroke = (props: IconProps) => {

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
          <Path d="m14 6 4 4" />
          <Path d="M17 3h4v4" />
          <Path d="m21 3-7.75 7.75" />
        </G>
      </Svg>
    );
  }

