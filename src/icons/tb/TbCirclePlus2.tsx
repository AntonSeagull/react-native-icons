

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCirclePlus2 = (props: IconProps) => {

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
          <Path d="M20.985 12.522a9 9 0 1 0 -8.475 8.464" />
          <Path d="M16 19h6" />
          <Path d="M19 16v6" />
        </G>
      </Svg>
    );
  }

