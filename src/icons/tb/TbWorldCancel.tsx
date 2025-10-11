

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldCancel = (props: IconProps) => {

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
          <Path d="M21 12a9 9 0 1 0 -8.985 9" />
          <Path d="M3.6 9h16.8" />
          <Path d="M3.6 15h9.9" />
          <Path d="M11.5 3a17 17 0 0 0 0 18" />
          <Path d="M12.5 3a16.991 16.991 0 0 1 2.53 10.275" />
          <Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M17 21l4 -4" />
        </G>
      </Svg>
    );
  }

