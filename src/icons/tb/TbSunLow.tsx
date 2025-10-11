

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSunLow = (props: IconProps) => {

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
          <Path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path d="M4 12h.01" />
          <Path d="M12 4v.01" />
          <Path d="M20 12h.01" />
          <Path d="M12 20v.01" />
          <Path d="M6.31 6.31l-.01 -.01" />
          <Path d="M17.71 6.31l-.01 -.01" />
          <Path d="M17.7 17.7l.01 .01" />
          <Path d="M6.3 17.7l.01 .01" />
        </G>
      </Svg>
    );
  }

