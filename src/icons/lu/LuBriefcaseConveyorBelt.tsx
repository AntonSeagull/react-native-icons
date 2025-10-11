

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBriefcaseConveyorBelt = (props: IconProps) => {

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
          <Path d="M10 20v2" />
          <Path d="M14 20v2" />
          <Path d="M18 20v2" />
          <Path d="M21 20H3" />
          <Path d="M6 20v2" />
          <Path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
        </G>
      </Svg>
    );
  }

