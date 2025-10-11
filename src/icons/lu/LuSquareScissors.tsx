

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquareScissors = (props: IconProps) => {

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
          <Path d="M9.414 9.414 12 12" />
          <Path d="M14.8 14.8 18 18" />
          <Path d="m18 6-8.586 8.586" />
        </G>
      </Svg>
    );
  }

