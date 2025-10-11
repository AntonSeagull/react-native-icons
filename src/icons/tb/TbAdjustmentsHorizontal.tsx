

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdjustmentsHorizontal = (props: IconProps) => {

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
          <Path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M4 6l8 0" />
          <Path d="M16 6l4 0" />
          <Path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M4 12l2 0" />
          <Path d="M10 12l10 0" />
          <Path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M4 18l11 0" />
          <Path d="M19 18l1 0" />
        </G>
      </Svg>
    );
  }

