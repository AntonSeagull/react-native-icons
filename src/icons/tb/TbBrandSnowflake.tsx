

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandSnowflake = (props: IconProps) => {

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
          <Path d="M14 21v-5.5l4.5 2.5" />
          <Path d="M10 21v-5.5l-4.5 2.5" />
          <Path d="M3.5 14.5l4.5 -2.5l-4.5 -2.5" />
          <Path d="M20.5 9.5l-4.5 2.5l4.5 2.5" />
          <Path d="M10 3v5.5l-4.5 -2.5" />
          <Path d="M14 3v5.5l4.5 -2.5" />
          <Path d="M12 11l1 1l-1 1l-1 -1z" />
        </G>
      </Svg>
    );
  }

