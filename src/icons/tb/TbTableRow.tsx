

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTableRow = (props: IconProps) => {

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
          <Path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
          <Path d="M9 3l-6 6" />
          <Path d="M14 3l-7 7" />
          <Path d="M19 3l-7 7" />
          <Path d="M21 6l-4 4" />
          <Path d="M3 10h18" />
          <Path d="M10 10v11" />
        </G>
      </Svg>
    );
  }

