

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodAnnoyed = (props: IconProps) => {

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
          <Path d="M15 14c-2 0 -3 1 -3.5 2.05" />
          <Path d="M9 10h-.01" />
          <Path d="M15 10h-.01" />
        </G>
      </Svg>
    );
  }

