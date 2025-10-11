

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSlack = (props: IconProps) => {

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
          <Path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
          <Path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
          <Path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
          <Path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
        </G>
      </Svg>
    );
  }

