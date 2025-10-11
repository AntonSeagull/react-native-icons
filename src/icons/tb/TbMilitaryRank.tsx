

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMilitaryRank = (props: IconProps) => {

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
          <Path d="M18 7v12a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-12l6 -4z" />
          <Path d="M10 13l2 -1l2 1" />
          <Path d="M10 17l2 -1l2 1" />
          <Path d="M10 9l2 -1l2 1" />
        </G>
      </Svg>
    );
  }

