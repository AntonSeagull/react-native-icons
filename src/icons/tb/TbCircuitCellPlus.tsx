

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitCellPlus = (props: IconProps) => {

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
          <Path d="M2 12h9" />
          <Path d="M15 12h7" />
          <Path d="M11 5v14" />
          <Path d="M15 9v6" />
          <Path d="M3 5h4" />
          <Path d="M5 3v4" />
        </G>
      </Svg>
    );
  }

