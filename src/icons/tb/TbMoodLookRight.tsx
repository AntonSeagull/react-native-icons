

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodLookRight = (props: IconProps) => {

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
          <Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
          <Path d="M15 9h-.01" />
          <Path d="M20 15h-4" />
        </G>
      </Svg>
    );
  }

