

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandLinktree = (props: IconProps) => {

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
          <Path d="M4 10h16" />
          <Path d="M6.5 4.5l11 11" />
          <Path d="M6.5 15.5l11 -11" />
          <Path d="M12 10v-8" />
          <Path d="M12 15v7" />
        </G>
      </Svg>
    );
  }

