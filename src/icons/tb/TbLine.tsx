

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLine = (props: IconProps) => {

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
          <Path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M7.5 16.5l9 -9" />
        </G>
      </Svg>
    );
  }

