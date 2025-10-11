

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEqualDouble = (props: IconProps) => {

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
          <Path d="M3 10h7" />
          <Path d="M3 14h7" />
          <Path d="M14 10h7" />
          <Path d="M14 14h7" />
        </G>
      </Svg>
    );
  }

