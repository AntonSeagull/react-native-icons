

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRss = (props: IconProps) => {

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
          <Path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M4 4a16 16 0 0 1 16 16" />
          <Path d="M4 11a9 9 0 0 1 9 9" />
        </G>
      </Svg>
    );
  }

