

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodWink2 = (props: IconProps) => {

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
          <Path d="M9 10h-.01" />
          <Path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
          <Path d="M15.5 8.5l-1.5 1.5l1.5 1.5" />
        </G>
      </Svg>
    );
  }

