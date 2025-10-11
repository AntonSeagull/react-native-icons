

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTangent = (props: IconProps) => {

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
          <Path d="M15.59 5.41 5.41 15.59" />
          <Path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
        </G>
      </Svg>
    );
  }

